import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    let tok = localStorage.getItem('USR_TK');
    if(tok==null){
      this.router.navigate(['login']);
    }
  }
  logout(){
    localStorage.removeItem('USR_TK');
    this.router.navigate(['login']);
  }

}
