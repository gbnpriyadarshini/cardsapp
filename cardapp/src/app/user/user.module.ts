import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponentComponent } from './user-list-component.component';
import { UserFormComponent } from './user-form.component';
import { USER_ROUTES } from 'src/app/user/user-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    USER_ROUTES,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserListComponentComponent, 
    UserFormComponent
  ]
})
export class UserModule { }
