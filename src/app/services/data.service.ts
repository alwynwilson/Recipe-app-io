import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  server_url="https://dummyjson.com/recipes"
  constructor(private http:HttpClient) { }

  getAllRecipesAPI(){
    //api call
    return this.http.get(`${this.server_url}`)
  }

  viewRecipesAPI(id:any){
    return this.http.get(`${this.server_url}/${id}`)
  }
}
