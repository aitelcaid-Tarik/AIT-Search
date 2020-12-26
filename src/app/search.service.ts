import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { GoogleResponse } from './components/GoogleResponse.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
url: string = environment.SERVER_URL;
api_key: string = environment.API_KEY;
cx_key: string = environment.CX_KEY;

  constructor(private httpClient: HttpClient) {

   }

  getSearchData(searchTerm: string){
    return this.httpClient.get<GoogleResponse>(`${this.url}`,{
      params:{
        key : this.api_key,
        cx : this.cx_key,
        q : searchTerm
      }
    })
  }
}
