import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { BikeApiService } from './bike-api.service';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BikeListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BikeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
