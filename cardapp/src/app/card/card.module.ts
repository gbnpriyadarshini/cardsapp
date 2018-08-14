import { NgModule } from '@angular/core';
import { CardComponent } from 'src/app/card/card.component';
import { CardFormComponent } from 'src/app/card/card-form.component';
import { CardDetailComponent } from 'src/app/card/card-detail.component';
import { VoteComponent } from 'src/app/vote/vote.component';
import { CARD_ROUTES } from 'src/app/card/card.routing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NameValidatorDirective } from './name-validator.directive';

@NgModule({
  declarations: [
    CardDetailComponent,
    CardFormComponent,
    CardComponent,
    VoteComponent,
    NameValidatorDirective
  ],
  imports: [
    CARD_ROUTES,
    FormsModule,
    CommonModule
  ]

})
export class CardModule { }
