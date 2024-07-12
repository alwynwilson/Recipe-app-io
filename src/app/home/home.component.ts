import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  p:number = 1

  searchKey:string = ""
  sortType:any = ""
  allRecipes:any = {}
  
  constructor(private api:DataService){}

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.api.getAllRecipesAPI().subscribe((result:any)=>{
      this.allRecipes = result.recipes
      console.log('allRecipes:',this.allRecipes);     
    })
  }

  setSortType(sortType: string) {
    this.sortType = sortType 
  }
}
