import { card } from 'src/app/card/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export class CardService{

    card1:card = new card(1,'Balaa','Gudimetla','','111-222-3333','222-333-4444','333-333-3333',
        'Balaa@gmail.com',20, new Date(2016,7,20), new Date(2017,9,20),'Balaa','Balaa');
    card2:card = new card(2,'Anusha','Alluri','','222-333-4444','111-222-3333','333-333-3333',
        'Anusha@gmail.com',30,new Date(2016,8,20), new Date(2017,3,20),'Balaa','Balaa');
    card3:card = new card(3,'Akhila','Kunaparaju','','111-222-3333','222-333-4444','333-333-3333',
        'Akhila@gmail.com',50,new Date(2017,1,20), new Date(2017,7,20),'Balaa','Balaa');
    card4:card = new card(4,'Amulya','Kunaparaju','','222-333-4444','111-222-3333','333-333-3333',
        'Amulya@gmail.com',70,new Date(2017,7,20), new Date(2018,3,20),'Balaa','Balaa');
    card5:card = new card(5,'Abhi','Medam','','111-222-3333','222-333-4444','333-333-3333',
        'Abhi@gmail.com',25,new Date(2018,5,20), new Date(2018,6,20),'Balaa','Balaa');

    private cardsArray:card[] = [this.card1, this.card2, this.card3, this.card4, this.card5]; 

    public getMaxid(){
        let maxId = 0;
        for(let c of this.cardsArray){
            if(c.id>maxId){
                maxId = c.id;
            }
        }
        return maxId;
    }

    public getCard(){
        return this.cardsArray;
    }

    public save(newcard:card){
        for(let c of this.cardsArray){
            if(c.id == newcard.id){
                c.updateDate = new Date();
            }
        }
        if(newcard.id == 0){
            newcard.creationDate = new Date();
            newcard.updateDate = new Date();
            newcard.createdBy = 'Balaa';
            newcard.updatedBy = 'Balaa';
            newcard.id = this.getMaxid() + 1;
            this.cardsArray.push(newcard);
        }        
    }

    public getCardWithId(idValue){
        if(!isNaN(idValue)){
            for(let c of this.cardsArray){
                if(c.id === idValue){
                    return c;
                }
            } 
        }else{
            return new card(0,"","","","","","","",0);
        }
        
    }

}