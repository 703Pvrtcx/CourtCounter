import { Injectable } from '@angular/core';
import { TEAM_MOCK } from '../mocks/teamMock';

export interface team{
  name:string;
  goal: number;
  offside: number;
  yellow: number;
  red: number;
}


@Injectable({
  providedIn: 'root'
})
export class CourterService {

  teamData = TEAM_MOCK;
  teamArray = [];
  
  constructor() { }
  //Get Team data from Mock data
      getClub(){
        return this.teamData;
      }
      addTeam(team){
        this.teamArray.push(team);
      }
      setTeam(team){
        this.teamArray = team;
      }
      getTeam(){
        return this.teamArray;
      }
      resetTeam(){
        this.teamArray = [];
      }
      manualReset(i:number){
        this.teamData[i].name = 'Zunga Unite';
        this.teamData[i].scoreCount = 0;
        this.teamData[i].yellowCard = 0;
        this.teamData[i].redCard = 0;
        this.teamData[i].offSide = 0;
        return this.teamData[i];
      }
     
}
