import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBike } from './model/bike';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BikeApiService {
  private _dataUrl = 'src/data/bikes.json';

  constructor(private _http: HttpClient) { }

  getAllBikes(): Observable<IBike[]> {
    return this._http.get<IBike[]>(this._dataUrl);
  }
}
