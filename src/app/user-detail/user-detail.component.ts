import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  user_data:any;
constructor(private api:ApiService){
  this.api.user_info().subscribe((res:any)=>{
    console.log(res.data);
    this.user_data=res.data;
  })
}
}
