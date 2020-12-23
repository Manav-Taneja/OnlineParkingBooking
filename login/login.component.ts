import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, UrlHandlingStrategy } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string=""
  password:string=""
  
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  postData(){
    var email=(<HTMLInputElement>document.getElementById("email")).value
    var password=(<HTMLInputElement>document.getElementById("password")).value
    console.log(this.email);
    var url="http://localhost:3000/signin";
    this.http.post(url,{
      email:email,
      password:password
    }).toPromise().then((data:any)=>{
      console.log(data);
      if(data!=null){
        alert("Success")
        this.router.navigate(['viewvehicle']);
      }
    })
  }
}
