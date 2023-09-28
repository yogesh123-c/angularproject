import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    catlist:any;
    token:any;
    constructor(private api:ApiService){
      this.token=localStorage.getItem('token'); 
    }
      ngOnInit(){
        this.api.getCatlist().subscribe((res:any)=>{
          console.log(res);
          this.catlist=res;
        })
      }
      logout(){
        localStorage.clear();
        this.token=localStorage.getItem('token');
      }
}
