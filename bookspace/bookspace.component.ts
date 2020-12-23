import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import {Routes , RouterModule} from '@angular/router'
@Component({
  selector: 'app-bookspace',
  templateUrl: './bookspace.component.html',
  styleUrls: ['./bookspace.component.css']
})
export class BookspaceComponent implements OnInit {
data:any
slotnumber:any;
slotdata:any;
  constructor(private http:HttpClient) { }
  
  ngOnInit(): void {
    this.apiCall().subscribe((result=>{
      this.data=result
    }))
    this.bookedData().subscribe((result2=>{
      this.slotdata=result2;
      this.changeStyle(result2);
    }))
  }
  apiCall(){
    var url='http://localhost:3000/viewvehicle';
     return this.http.get(url);
   }
   bookedData(){
     var url='http://localhost:3000/bookedslot';
     return this.http.get(url);
   }
  changeStyle(slotdata){
    console.log("inside change");
    for(var i=0;i<slotdata.length;i++){
      var id=slotdata[i].slotnumber;
      console.log(id);
    (<HTMLInputElement>document.getElementById(id)).style.color="red";
    (<HTMLInputElement>document.getElementById(id)).innerHTML="Booked";
    (<HTMLInputElement>document.getElementById(id)).disabled=true;
    }
  }
  openForm(obj) {
    (<HTMLInputElement>document.getElementById("myForm")).style.display = "block";
    var listbutton=document.getElementsByTagName("button") as HTMLCollectionOf<HTMLInputElement>;
    for(var i=0;i<listbutton.length;i++){
      listbutton[i].disabled=true;
    }

  }
   closeForm() {
    (<HTMLInputElement>document.getElementById("myForm")).style.display = "none";
    this.bookedData().subscribe((result2=>{
      this.slotdata=result2;
      this.changeStyle(result2);
    }))
  }
  submitForm(){
    console.log("inside submit");
    var vehicle_name=(<HTMLInputElement>document.getElementById("selectname")).value;
    var slotnumber=(<HTMLInputElement>document.getElementById("slotnumber")).value;
    var check_in=(<HTMLInputElement>document.getElementById("in")).value;
    var check_out=(<HTMLInputElement>document.getElementById("out")).value;
    var url="http://localhost:3000/bookslot";
    this.http.post(url,{
      vehicle_name:vehicle_name,
      slotnumber:slotnumber,
      email:"manav.taneja",
      check_in:check_in,
      check_out:check_out
    }).toPromise().then((booking:any)=>{
      console.log(booking);
      alert("Booked")
    })
    this.closeForm();
  }
  }
