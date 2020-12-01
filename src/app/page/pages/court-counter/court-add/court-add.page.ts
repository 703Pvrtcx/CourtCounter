import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { start } from 'repl';
import { CourterService } from 'src/app/services/courter.service';

@Component({
  selector: 'app-court-add',
  templateUrl: './court-add.page.html',
  styleUrls: ['./court-add.page.scss'],
})
export class CourtAddPage implements OnInit {

  teamName1: string;
  teamName2: string;  
  teams = [];
  constructor( private courtDao: CourterService, private router: Router) {
    //this.teams = this.courtDao.getClub();
    this.teamName1= 'Pirates-';
    this.teamName2 = 'Sundowns';
   }

  ngOnInit() {
    this.teams = this.courtDao.getClub();
  }

  setTeamName(){
    this.teams[0].name = this.teamName1;
    this.teams[1].name = this.teamName2;
    this.courtDao.addTeam(this.teams[0]);
    this.courtDao.addTeam(this.teams[1]);
    this.startMatch();
    this.teamName1= 'Pirates';
    this.teamName2 = 'Sundowns';
  }
  startMatch(){
    this.router.navigateByUrl('court-view');
  }

}
