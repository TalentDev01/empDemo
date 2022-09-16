import { Component } from '@angular/core';
import { GlobService } from './glob.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public usrData:any;
  public loginValid = true;
  public username = '';
  public password = '';
  title = 'caxsol';

  constructor(private glBSrv:GlobService,public dialog: MatDialog){
    this.glBSrv.grDdata.subscribe(data=>{
      this.usrData = data;
      // console.log(this.usrData)
      this.openDialog()
    })
  }
 
  onSubmit(){}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: this.usrData,
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

}
