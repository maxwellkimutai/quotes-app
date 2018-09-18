import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

    @Input () addQuote: Function;

  constructor() { }

  ngOnInit() {
  }

}
