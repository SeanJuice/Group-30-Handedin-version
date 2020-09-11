import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommunityPartnersPage } from './community-partners.page';

describe('CommunityPartnersPage', () => {
  let component: CommunityPartnersPage;
  let fixture: ComponentFixture<CommunityPartnersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityPartnersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommunityPartnersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
