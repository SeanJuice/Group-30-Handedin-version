import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolManagementPage } from './tool-management.page';

describe('ToolManagementPage', () => {
  let component: ToolManagementPage;
  let fixture: ComponentFixture<ToolManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolManagementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
