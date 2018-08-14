import { UserListComponentComponent } from "src/app/user/user-list-component.component";
import { UserFormComponent } from "src/app/user/user-form.component";
import { RouterModule } from "@angular/router";

const ROUTES = [
    { path:'user', component: UserListComponentComponent },
    { path:'newuser', component: UserFormComponent }
]

export const USER_ROUTES = RouterModule.forChild(ROUTES);