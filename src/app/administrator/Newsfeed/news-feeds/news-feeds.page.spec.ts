import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsFeedsPage } from './news-feeds.page';

describe('NewsFeedsPage', () => {
  let component: NewsFeedsPage;
  let fixture: ComponentFixture<NewsFeedsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsFeedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
