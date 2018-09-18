import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    quotes = [
        new Quote(1,'I think being in love with life is a key to eternal youth', 'Maxwell','Tom', new Date(),0,0,0,false),
        new Quote(2, 'You are only here for a short visit. Do not hurry, don not worry. And be sure to smell the flowers along the way', 'Maxwell','Tom',new Date(),0,0,0,false),
        new Quote(3, 'A man who dares to waste one hour of time has not discovered the value of life', 'Maxwell','Tom',new Date(),0,0,0,false),
        new Quote(4, 'If life were predictable it would cease to be life, and be without flavor', 'Maxwell','Tom',new Date(),0,0,0,false),
        new Quote(5, 'All life is an experiment. The more experiments you make the better', 'Maxwell','Tom',new Date(),0,0,0,false)

    ]


    get addQuoteFunc() {
        return this.addQuote.bind(this);
    }

    addQuote(author:string,quote:string,submittee:string) {
        let number = this.quotes.length + 1;
        let date = new Date();
        this.quotes.push(new Quote(number,quote,author,submittee,date,0,0,0,false));
    }

    quoteDelete(deleteSpecificQuote:boolean,index) {
        if(deleteSpecificQuote){
            let toDelete=confirm(`Are you sure you want to delete this quote?`);
            if (toDelete) {
                this.quotes.splice(index,1);
            }
        }
    }

    quoteVote(vote:boolean,index) {
        if(vote) {
            this.quotes[index].likes += 1;
            this.getHighest();
        } else {
            this.quotes[index].dislikes += 1;
        }
    }

    getHighest(){
        let highest = 0;
        let highestQuote: Quote;
        for(let quote of this.quotes){
            if(quote.likes > highest){
                highest = quote.likes;
                highestQuote = quote;
            }
            if(quote.id === highestQuote.id){
                quote.highest = true;
            }else{
                quote.highest = false;
            }
        }
    }

  constructor() {
      for(let quote of this.quotes) {
          var addTime =function () {
              let today; //get current date and time
              setInterval(()=>{(today = new Date()).getTime()},1000);
              setInterval(()=>{dateDifferenceSeconds()},1000);
              var dateDifferenceSeconds = function () {
                  var timeDifference:number = (today - quote.dateCreated.getTime())/1000;
                  quote.duration = timeDifference;
              }
          }
          addTime();
      }
  }

  ngOnInit() {
  }

}
