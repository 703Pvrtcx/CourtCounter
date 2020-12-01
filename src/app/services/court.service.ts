import { Injectable } from '@angular/core';
import { TEAM_MOCK } from 'src/app/mocks/teamMock';
 
@Injectable({
  providedIn: 'root'
})
export class CourtService {
 
  teamData = TEAM_MOCK;
 
  statsA = [];
  statsB = [];

  teamA  = {} as Team;
  teamB = {} as Team; 
  
  teamAStats = {} as Team[];
  teamBStats = {} as Team[];
  constructor() { 
  }
 
  addNewTeamName1(name: string){
    this.teamA.name = name;
  }
  addNewTeamName2(name: string){
    this.teamB.name = name;
  }
  add(team1:Team, team2: Team){
    this.teamA = team1;
    this.teamB = team2;
  }
  addNewTeam(team){
    this.teamA.name = team.name;
    this.teamA.scoreCount = team.scoreCount;
    this.teamA.yellowCard = team.yellowCard;
    this.teamA.redCard = team.redCard;
    this.teamA.offSide = team.offSide;
  }
  getNewTeam(){
    return this.teamA;
  }
  getStat1(){
    return this.teamAStats;
  }
  getStat2(){
    return this.teamBStats;
  }
  addStatisticsA(team){
    this.statsA.push({
        name: team.name,
        scoreCount: team.scoreCount,
        yellowCard: team.yellowCard,
        redCard: team.redCard,
        offSide: team.offSide
      });
  }
  addStatisticsB(team){
    this.statsB.push({
        name: team.name,
        scoreCount: team.scoreCount,
        yellowCard: team.yellowCard,
        redCard: team.redCard,
        offSide: team.offSide
      });
  }
  getStatisticsA(){
    return this.statsA;
  }
  getStatisticsB(){
    return this.statsB;
  }
  getTeamA() {
   return this.teamA;
  }
  getTeamB(){
    return this.teamB
  }
}