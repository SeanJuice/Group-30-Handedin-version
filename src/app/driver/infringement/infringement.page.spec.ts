import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfringementPage } from './infringement.page';

describe('InfringementPage', () => {
  let component: InfringementPage;
  let fixture: ComponentFixture<InfringementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfringementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfringementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
