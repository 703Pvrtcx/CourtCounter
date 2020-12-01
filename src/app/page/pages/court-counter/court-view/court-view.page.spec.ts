import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourtViewPage } from './court-view.page';

describe('CourtViewPage', () => {
  let component: CourtViewPage;
  let fixture: ComponentFixture<CourtViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourtViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
