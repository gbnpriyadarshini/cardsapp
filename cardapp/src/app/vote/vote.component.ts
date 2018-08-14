import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CardComponent } from 'src/app/card/card.component';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})

export class VoteComponent {

  @Input()
  public voteCount;

  public voteInit:number;

  voteFlagUp:boolean = false;
  voteFlagDown:boolean = false;

  @Output()
  voteChanged: EventEmitter<number> = new EventEmitter<number>(); 

  @Output()
  handleClickUp(event){
    if(!this.voteFlagUp && !this.voteFlagDown){
      this.voteCount++;
      this.voteFlagUp = true;
      this.voteFlagDown = false;
      this.voteChanged.emit(this.voteCount);
    } 
    if(!this.voteFlagUp && this.voteFlagDown){
      this.voteCount++;
      this.voteFlagUp = false;
      this.voteFlagDown = false;
      this.voteChanged.emit(this.voteCount);
    }
  }
  
  @Output()
  handleClickDown(event){
    if(!this.voteFlagUp && !this.voteFlagDown){
      this.voteCount--;
      this.voteFlagUp = false;
      this.voteFlagDown = true;
      this.voteChanged.emit(this.voteCount);
    }   
    if(this.voteFlagUp && !this.voteFlagDown){
      this.voteCount--;
      this.voteFlagUp = false;
      this.voteFlagDown = false;
      this.voteChanged.emit(this.voteCount);
    }
  }

}