import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "src/app/services/authentication.service";
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {

  constructor(
    public authService: AuthenticationService,private menu: MenuController,private router:Router
  ) { }

  ngOnInit() {
    this.router.navigateByUrl('court-view');
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


}


