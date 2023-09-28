import { Component } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private api:ApiService,private router:Router){}
  register_user =new FormGroup({
      user_name:new FormControl(''),
      user_mobile:new FormControl(''),
      user_email:new FormControl(''),
      user_password:new FormControl(''),
  })
  saveData(){
    console.log(this.register_user.value);
    this.api.postRegisterdetail(this.register_user.value).subscribe((res:any)=>{
      console.log(res);
      this.loginProcess(this.register_user.value.user_mobile,this.register_user.value.user_password)
      //this.router.navigate(["/"]);
    });
  }
  loginProcess(user_mobile:any,user_password:any){
      var obj={"user_mobile":user_mobile,"user_password":user_password};
      this.api.login(obj).subscribe((res:any)=>{
        console.log(res);
        if(res.status == 'success')
        {
          localStorage.setItem("token",res.token);
          this.router.navigate(["/"]);
        }
      });
  } 
}
