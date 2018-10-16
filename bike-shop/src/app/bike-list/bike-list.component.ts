import { Component, OnInit } from '@angular/core';
import { IBike } from '../model/bike';
import { BikeApiService } from '../bike-api.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  pageTitle = 'Joe\'s Bike Shop';
  imageWidth = 50;
  imageMargin = 2;
  showImage = true;
  selectedCategories: string[] = [];
  selCat = [
    { tag: 'mens', selected: false },
    { tag: 'womens', selected: false },
    { tag: 'kids', selected: false }
  ];
  bikes: IBike[] = [];
  filteredBikes: IBike[] = [];

  constructor(private _bikeService: BikeApiService) { }

  ngOnInit(): void {
    this._bikeService.getAllBikes().subscribe(bikes => {
        this.bikes = bikes;
        this.filteredBikes = this.bikes;
      }
    );
  }

  performFilter(): void {
    
    this.selCat.forEach(category => {
      if (!category.selected && this.selectedCategories.includes(category.tag)) {
        this.selectedCategories.splice(this.selectedCategories.indexOf(category.tag));
      } else if (category.selected && this.selectedCategories.includes(category.tag)) {
      } else if (category.selected) {
        this.selectedCategories.push(category.tag);
    }});
    if (this.selectedCategories.length>0){
      this.filteredBikes = [];
    }
    else{
      this.filteredBikes = this.bikes;
    }
    this.bikes.forEach(bike => {
      if (this.selectedCategories.includes(bike.category)) {
        this.filteredBikes.push(bike);
      }
    });
  }

  toggleImage (): void {
    this.showImage = !this.showImage;
  }

  toggleCategory(id: number): void {
    this.selCat[id].selected = !this.selCat[id].selected;
    console.log(this.selCat[id].selected);
    this.performFilter();
  }



}
