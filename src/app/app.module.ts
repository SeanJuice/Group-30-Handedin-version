


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';

import { AdminNavigationModule } from './Shared/AdminNavigation.module';
import { NgbDate, NgbModule,NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FilesizePipe } from './Pipes/filesize.pipe';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AgmCoreModule } from '@agm/core';
import { QRCodeModule } from 'angular2-qrcode';
@NgModule({
  declarations: [AppComponent, FilesizePipe],

  imports: [ 
      
    BrowserModule,
    IonicModule.forRoot(),HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AdminNavigationModule,
    NgbModule,
    MatExpansionModule,
    MatDatepickerModule,    
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule
    ,AngularFireModule,
    BrowserAnimationsModule,
    QRCodeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAxa9zlMdMxYsxYMU3ZcM7h5gDpK_CeWHI',
      libraries: ['places']
    })
    
  ],
  exports:[MatExpansionModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy  
    },AngularFirestore,AngularFireAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
