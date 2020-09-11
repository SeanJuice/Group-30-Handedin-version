import { MapComponent } from './map/map.component';
import { Trip } from './../models/Trip.model';
import { Component, OnInit, ViewChild, ElementRef, NgZone  } from '@angular/core';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { BookTripService } from './book-trip.service';
import { MapsAPILoader } from '@agm/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';
@Component({
  selector: 'app-book-trip',
  templateUrl: './book-trip.page.html',
  styleUrls: ['./book-trip.page.scss'],
})
export class BookTripPage implements OnInit {
  ShowButton:boolean
  BookedButton:boolean
  isBig:boolean
  //Maps
  searchElementRef: any;
 latitude: number;
 longitude: number;
 zoom: number;
 address: string;
 private geoCoder;
  
  constructor(
    public alertcontroler: AlertController,
    public toastController: ToastController,
     public BookServ:BookTripService,
     private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,private ModalCtrl:ModalController) { 
this.isBig=false;
  }

  isShown: boolean = false ; // hidden by default




  ngOnInit() {
 //load Places Autocomplete
 this.mapsAPILoader.load().then(() => {
  this.setCurrentLocation();
  this.geoCoder = new google.maps.Geocoder;

  let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
  autocomplete.addListener("place_changed", () => {
    this.ngZone.run(() => {
      //get the place result
      let place: google.maps.places.PlaceResult = autocomplete.getPlace();

      //verify result
      if (place.geometry === undefined || place.geometry === null) {
        return;
      }

      //set latitude, longitude and zoom
      this.latitude = place.geometry.location.lat();
      this.longitude = place.geometry.location.lng();
      this.zoom = 12;
    });
  });
});


    this.ShowButton=true
    this.BookedButton=false
  }
 Show()
 {
  this.ShowButton=false
  this.BookedButton=true
 }

 Shows()
 {
  this.ShowButton=true
  this.BookedButton=false
 }
   //getthings for validation
   get f(){
    return this.BookServ.form.controls;
  }
  ///booked
  async BookTrip() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want to place a trip booking?",
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {
            let data= this.BookServ.form.value;
            const id = localStorage.getItem("UmuntuId")
            this.BookServ.BookTrip(id,data);
            this.BookServ.form.reset();
            console.log(data)
            //this.submit(data)
           

            ///
            this.SuccesfullyBooked()
            this.Show()
          }
        }
      ]
    });

    await alert.present();
  }
  submit(info:Trip)
  {
    const id = localStorage.getItem("UmuntuId")
    info.DriverID ="None"
    info.Status = "Available"
    console.log(info)
       this.BookServ.BookTrip(id,info)
        this.BookServ.form.reset()
  }

  async SuccesfullyBooked() {
    const toast = await this.toastController.create({
      message: 'Project trip successfully booked .',
      position:"middle",
      cssClass: "MyToasts",
      duration: 2000
    });
    toast.present();
  }
  async CancelTRipConfirmation() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want to cancel this project trip?",
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {
            const id = localStorage.getItem("UmuntuId")
            this.BookServ.CancelTrip(id)
            this.Shows()
          }
        }
      ]
    });

    await alert.present();
  }
  async LocationService() {
    this.isShown = ! this.isShown;
  }

   // Get Current Location Coordinates
   private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }


  markerDragEnd($event:AGMMouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }
}
