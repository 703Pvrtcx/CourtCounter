import { Component, OnInit } from '@angular/core';
import { CourtService } from 'src/app/services/court.service';
import { CourterService } from 'src/app/services/courter.service';
@Component({
  selector: 'app-court-stats',
  templateUrl: './court-stats.page.html',
  styleUrls: ['./court-stats.page.scss'],
})
export class CourtStatsPage implements OnInit {


  teamA  = {} as Team;
  teamB = {} as Team;

  teamAr= [];
  teamBr = [];

  teamObject = {} as Team;

  teams= [];
  stats = [];
  constructor(private cartDao: CourtService,private courtDao:CourterService ) {
   }
  ngOnInit() {
 
    this.teams = this.courtDao.teamArray;
    //this.teams = this.courtDao.getTeam();
    console.log("Team init",this.teams);
  }
}

