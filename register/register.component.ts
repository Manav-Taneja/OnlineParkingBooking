import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
email:any
name:any
password:any
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }
  postData(){
    var name=(<HTMLInputElement>document.getElementById("name")).value
    var email=(<HTMLInputElement>document.getElementById("email")).value
    var password=(<HTMLInputElement>document.getElementById("password")).value
    console.log(this.email);
    var url="http://localhost:3000/register";
    this.http.post(url,{
      name:name,
      email:email,
      password:password
    }).toPromise().then((data:any)=>{
      console.log(data);
      if(data!=null){
        alert("Successfully registered")
        this.router.navigate(['login']);
      }
    })
  }
}
