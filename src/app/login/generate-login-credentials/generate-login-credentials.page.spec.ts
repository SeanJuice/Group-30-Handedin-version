import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenerateLoginCredentialsPage } from './generate-login-credentials.page';

describe('GenerateLoginCredentialsPage', () => {
  let component: GenerateLoginCredentialsPage;
  let fixture: ComponentFixture<GenerateLoginCredentialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateLoginCredentialsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenerateLoginCredentialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
