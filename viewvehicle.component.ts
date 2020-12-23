import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewvehicle',
  templateUrl: './viewvehicle.component.html',
  styleUrls: ['./viewvehicle.component.css']
})
export class ViewvehicleComponent implements OnInit {
data:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.apiCall().subscribe((result)=>{
      this.data=result;
    })
  }
apiCall(){
 var url='http://localhost:3000/viewvehicle';
  return this.http.get(url);
}
}
