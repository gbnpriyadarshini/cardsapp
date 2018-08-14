import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { APP_ROUTES } from 'src/app/app.routing';
import { CardService } from 'src/app/services/card-service';
import { UserService } from 'src/app/services/user-service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent 
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [CardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
