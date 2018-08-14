import { user } from "src/app/user/user";
import { address } from "src/app/user/address";
import { FormGroup } from "@angular/forms";

export class UserService{

    user1:user = new user('Balaa','Gudimetla','F', 'Balaa','Gudimetla', 
        new address('MLK', 'Beaumont', 'TX', '77705'));
    user2:user = new user('Anusha','Alluri', 'F', 'Anusha','Alluri',
        new address('Rose', 'Banglore', 'KA', '77905'));
    user3:user = new user('Akhila','Kunaparaju', 'F', 'Akhila','Kunaparaju',
        new address('Jasmine', 'Hyderbad', 'TA', '77709'));
    user4:user = new user('Amulya','Kunaparaju', 'F', 'Amulya','Kunaparaju',
        new address('Lilly', 'Hyderbad', 'TA', '77775'));
    user5:user = new user('Abhi','Medam', 'M', 'Abhi','Medam', 
        new address('MVP', 'Vizag', 'AP', '75063'));

    userArray:user[] = [this.user1, this.user2, this.user3, this.user4, this.user5];

    public getUser(){
        return this.userArray;
    }

    public addUser(user){
        this.userArray.push(user);
    }

}