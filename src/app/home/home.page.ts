import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username;
  password;

  constructor(private router: Router) {}

  goNext(){
    //console.log('Username: ' + this.username + ' Password: ' + this.password);
    this.router.navigateByUrl('login');
 }

}
