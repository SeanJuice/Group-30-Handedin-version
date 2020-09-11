import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccessRolesPage } from './access-roles.page';

describe('AccessRolesPage', () => {
  let component: AccessRolesPage;
  let fixture: ComponentFixture<AccessRolesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessRolesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccessRolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
