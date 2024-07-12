import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  product:any = {}

  constructor(private route:ActivatedRoute, private api:DataService){}

  ngOnInit(): void {
    this.route.params.subscribe((result:any)=>{
      const {id} = result
      console.log(id);
      this.getProductDetails(id)
    })
  }


  getProductDetails(pid:any){
    this.api.viewRecipesAPI(pid).subscribe((result:any)=>{
      this.product = result
      console.log(this.product);
      
    })
  }
}
