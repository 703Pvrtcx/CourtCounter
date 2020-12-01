import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourtAddPage } from './court-add.page';

describe('CourtAddPage', () => {
  let component: CourtAddPage;
  let fixture: ComponentFixture<CourtAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourtAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
