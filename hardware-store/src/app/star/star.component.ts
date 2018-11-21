import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  starWidth = 0;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
}
