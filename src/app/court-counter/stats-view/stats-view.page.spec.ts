import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatsViewPage } from './stats-view.page';

describe('StatsViewPage', () => {
  let component: StatsViewPage;
  let fixture: ComponentFixture<StatsViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatsViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
