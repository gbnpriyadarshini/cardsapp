import { RouterModule } from "@angular/router";
import { CardComponent } from "src/app/card/card.component";
import { CardDetailComponent } from "src/app/card/card-detail.component";
import { CardFormComponent } from "src/app/card/card-form.component";


const ROUTES = [
    { path:'', component: CardComponent },
    { path:'card', component: CardComponent },
    { path:'card/:id', component: CardDetailComponent },
    { path:'newcard', component: CardFormComponent },
    { path:'newcard/:id', component: CardFormComponent }
]

export const CARD_ROUTES = RouterModule.forChild(ROUTES);