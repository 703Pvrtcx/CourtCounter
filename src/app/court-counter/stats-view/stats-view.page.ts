import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-stats-view',
  templateUrl: './stats-view.page.html',
  styleUrls: ['./stats-view.page.scss'],
})
export class StatsViewPage implements OnInit {

  
  teamA  = {} as Team;
  teamB = {} as Team;

  teamAr= [];
  teamBr = [];

  teamObject = {} as Team;

  constructor(private cartDao: CartService) {

    this.teamAr= this.cartDao.statsA;
    this.teamBr = this.cartDao.statsB;

    this.teamA = this.cartDao.teamA;
    this.teamB  = this.cartDao.teamB;

    console.log('Team ', this.teamAr );
    console.log('Team ', this.teamBr );

    this.teamAr = this.cartDao.getStatisticsA();
    this.teamBr = this.cartDao.getStatisticsB();

   }
  ngOnInit() {
    this.teamAr = this.cartDao.getStatisticsA();
    this.teamBr = this.cartDao.getStatisticsB();
  }
}
