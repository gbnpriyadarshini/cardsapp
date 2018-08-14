import { Component } from '@angular/core';
import { CardService } from 'src/app/services/card-service';
import { card } from 'src/app/card/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent{

  constructor(private cardService:CardService, private activatedRoute:ActivatedRoute){
  }
  
  c:card = this.cardService.getCardWithId(+this.activatedRoute.snapshot.params['id']);

}
