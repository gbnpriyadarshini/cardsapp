import { RouterModule } from "@angular/router";

const ROUTES = [
    { path:'card', loadChildren:'src/app/card/card.module#CardModule' },
    { path:'user', loadChildren:'src/app/user/user.module#UserModule' },
    { path:'', redirectTo:'card', pathMatch: 'full' }
]

export const APP_ROUTES = RouterModule.forRoot(ROUTES);