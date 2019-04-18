import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isAuthenticated: boolean = false;
  work_id = "";
  price_id = "";
  constructor(private commonService: CommonService) {}
  
  ngOnInit() {
    this.work_id = this.commonService.work_id;
    this.price_id = this.commonService.price_id;
  }
}
