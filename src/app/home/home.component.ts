import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private api:ApiService){}
  slider:any;
  products:any
  ngOnInit(){
    this.api.slider_det().subscribe((res:any)=>{
      this.slider=res;
      console.log(res);
    });
    this.api.product_det().subscribe((res:any)=>{
      console.log(res);
      this.products=res.reverse();
    })
  }
}
