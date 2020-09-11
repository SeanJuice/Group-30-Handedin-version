import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExistingCPPage } from './existing-cp.page';

describe('ExistingCPPage', () => {
  let component: ExistingCPPage;
  let fixture: ComponentFixture<ExistingCPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingCPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExistingCPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
