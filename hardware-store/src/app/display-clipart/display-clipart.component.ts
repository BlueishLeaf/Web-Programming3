import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClipartService } from '../services/clipart.service';
import { IOpenClipart } from '../model/clipart';

@Component({
  selector: 'app-display-clipart',
  templateUrl: './display-clipart.component.html',
  styleUrls: ['./display-clipart.component.css']
})
export class DisplayClipartComponent implements OnInit {
  @Input() imageStr: string;
  @Output() addImageStringEE: EventEmitter<any> = new EventEmitter();
  clipArtData: IOpenClipart;

  constructor(private _clipArt: ClipartService) { }

  // Get the data from the observable
  ngOnInit() {
    this._clipArt.getImageList(this.imageStr).subscribe(data => {
      this.clipArtData = data;
    });
  }

  // Function to emit the url of the image as an event
  selectImage(imageStr): boolean {
    this.addImageStringEE.emit(imageStr);
    return false;
  }

}
