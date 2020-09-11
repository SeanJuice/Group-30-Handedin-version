import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CPApplicationPage } from './cp-application.page';

describe('CPApplicationPage', () => {
  let component: CPApplicationPage;
  let fixture: ComponentFixture<CPApplicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPApplicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CPApplicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
