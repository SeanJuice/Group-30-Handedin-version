import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolRequestinfoPage } from './tool-requestinfo.page';

describe('ToolRequestinfoPage', () => {
  let component: ToolRequestinfoPage;
  let fixture: ComponentFixture<ToolRequestinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolRequestinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolRequestinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
