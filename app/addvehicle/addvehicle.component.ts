import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {
  name:string=""
  v_number:string=""
  color:string=""
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  postData(){
    var name=(<HTMLInputElement>document.getElementById("name")).value
    var v_number=(<HTMLInputElement>document.getElementById("number")).value
    var color=(<HTMLInputElement>document.getElementById("color")).value
    console.log(name);
    var url="http://localhost:3000/addvehicle";
    this.http.post(url,{
      vehicle_name:name,
      number:v_number,
      color:color
    }).toPromise().then((data:any)=>{
      console.log(data);
      alert("added successfully")
      this.router.navigate(['viewvehicle'])
    })
  }
}
