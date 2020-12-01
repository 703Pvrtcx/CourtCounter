import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourtStatsPage } from './court-stats.page';

describe('CourtStatsPage', () => {
  let component: CourtStatsPage;
  let fixture: ComponentFixture<CourtStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtStatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourtStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
