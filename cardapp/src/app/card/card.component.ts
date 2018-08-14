import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private cardService:CardService, private router:Router){
  }
  
  cards = this.cardService.getCard();

  toDetailComponent(x:number){
    this.router.navigate(['card/card',x]);
  }

  editToForm(x:number){
    this.router.navigate(['card/newcard',x]);
  }
}
  
