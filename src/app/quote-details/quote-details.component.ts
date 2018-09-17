import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

    @Input () quote: Quote;
    @Input () quotes;
    @Output () toDelete= new EventEmitter<boolean>();
    @Output () toVote= new EventEmitter<boolean>();


    deleteQuote(removeQuote:boolean) {
        this.toDelete.emit(removeQuote);
    }

    vote(voteValue:boolean) {
        this.toVote.emit(voteValue);
    }



  constructor() { }

  ngOnInit() {
  }

}
