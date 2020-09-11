import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PossibleProjectsPage } from './possible-projects.page';

describe('PossibleProjectsPage', () => {
  let component: PossibleProjectsPage;
  let fixture: ComponentFixture<PossibleProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossibleProjectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PossibleProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
