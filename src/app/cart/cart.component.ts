import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartProducts:any;
  total=0;
  constructor(private api:ApiService){

  }
  ngOnInit(){
    this.api.cart_list().subscribe((res:any)=>{
      console.log(res);
      this.cartProducts=res;
      this.total=0;
      for(var i=0;i<this.cartProducts.length;i++){
       this.total+= (this.cartProducts[i].qty * this.cartProducts[i].price)
      }
    })
  }
  incQty(product_econ_cart_id:any){
      this.api.inc_cart_qty(product_econ_cart_id).subscribe((res:any)=>{
        console.log(res);
        this.ngOnInit();
      })
  }
  decQty(product_econ_cart_id:any){
    this.api.dec_cart_qty(product_econ_cart_id).subscribe((res:any)=>{
      console.log(res);
      this.ngOnInit();
    })
}
removeQty(product_econ_cart_id:any){
  this.api.remove_cart_qty(product_econ_cart_id).subscribe((res:any)=>{
    console.log(res);
    this.ngOnInit();
  })
}
}
