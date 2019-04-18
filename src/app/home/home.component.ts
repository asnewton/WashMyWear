import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  work_id = "";
  price_id = "";
  constructor(private commonService: CommonService){}
    
  ngOnInit(){
    this.work_id = this.commonService.work_id;
    this.price_id = this.commonService.price_id;
  }
}
