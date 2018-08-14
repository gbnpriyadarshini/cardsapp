import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { card } from 'src/app/card/card';
import { CardService } from 'src/app/services/card-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {

  constructor(private router:Router, private cardService:CardService, private activatedRoute:ActivatedRoute ) { }

  private cardobj:card = this.cardService.getCardWithId(+this.activatedRoute.snapshot.params['id']);
  
  addAndNavigate(cardForm:NgForm){
    this.cardService.save(this.cardobj);
    this.router.navigate(['card']);
  }

}
