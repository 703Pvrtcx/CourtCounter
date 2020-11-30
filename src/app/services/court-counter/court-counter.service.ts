import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourtCounterService {

  cartList = [];
  teamA = [];
  teamB = [];
  constructor() { }

  addToCart(item){
    this.cartList.push({name: item.name, colour: item.colour, age: item.age});
  }
  addTeamNames(t1,t2){
    this.teamA.push({teamNameA: t1.teamName,teamNameB: t1.teamName,});
    this.teamB.push({teamName: t2.teamName});
  }
  removeFromCart(item){
 
    var index = this.cartList.indexOf(item);
    if(index !== -1){
      this.cartList.splice(index,1);
    }
    return this.cartList;
  }
  getCartList() {
    return this.teamA;
  }
 setCart(cartlist){
  this.teamA = cartlist;
 }
}
