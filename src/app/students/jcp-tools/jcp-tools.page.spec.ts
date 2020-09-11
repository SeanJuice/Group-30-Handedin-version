import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JcpToolsPage } from './jcp-tools.page';

describe('JcpToolsPage', () => {
  let component: JcpToolsPage;
  let fixture: ComponentFixture<JcpToolsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JcpToolsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JcpToolsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
