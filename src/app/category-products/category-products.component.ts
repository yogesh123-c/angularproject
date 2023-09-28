import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {
  cat_id:any;
  cat_name:any;
  products:any;
  constructor(private activateRoute:ActivatedRoute,private api:ApiService){
    this.activateRoute.params.subscribe((res:any)=>{
      console.log(res);
      this.cat_id=res.id;
      this.cat_name=res.name;
      this.ngOnInit();
    });
  }
  ngOnInit()
  {
    this.api.product_by_cat(this.cat_id).subscribe((res:any)=>{
      console.log(res);
      this.products=res;
    })
  }
}
