import { Injectable } from '@angular/core';
import { IOpenClipart } from '../model/clipart';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClipartService {
  url = 'https://openclipart.org/search/json/?query=';
  data: IOpenClipart;

  constructor(private _http: HttpClient) { }

  getImageList(imageStr: string) {
    return this._http.get<IOpenClipart>(this.url + imageStr);
  }
}
