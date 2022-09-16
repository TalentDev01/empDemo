import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginValid = true;
  public username = '';
  public password = '';
  
  constructor(
    private acrouter: ActivatedRoute,
    private router: Router,
    private logServ:AuthService,
    private snkBar:MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  
  onSubmit(){
    let obj={
      "email" : this.username,
      "password" : this.password
    }
    this.logServ.LogIn(obj).subscribe((res)=>{
      if(res){
       let msg = res ? res.message : null;
       msg = msg != null ? msg.toLowerCase() : null;
        if(msg && msg.includes('suc')){
          this.snkBar.open('Login successful.','',{
            duration: 2000,
            panelClass: ['btn-snackbar']
          })
          this.router.navigate(['dashboard']);
          let tk = window.btoa(res.token);
          localStorage.setItem('USR_TK',tk)
        }else{
          this.snkBar.open('Invalid credentials!','',{
            duration: 2000,
            panelClass: ['red-snackbar']
          })
          this.router.navigate(['login']);
        }
      }
  })
}



}
