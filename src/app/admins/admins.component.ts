import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ColDef, ColGroupDef, GridReadyEvent } from 'ag-grid-community';
import { CellbuttonComponent } from '../cellbutton/cellbutton.component';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {
  public rowData:any = []
  public columnDefs:any = []
  public defaultColDef = {};
  public frameworkComponents = {};
  
 
   constructor(
     private datSrv:DataService
   ) { }
 
   ngOnInit(): void {
    //  console.log("user");
     this.loadGrid()
   }
 
   loadGrid(){
      this.frameworkComponents = {
       CellbuttonComponent: CellbuttonComponent,
     };
     this.columnDefs = [
       { headerName: 'Actions',cellRenderer:CellbuttonComponent},
       { headerName: 'Name', field: 'ename'},
       { headerName: 'Department',field: 'dname'},
       { headerName: 'DOB',field: 'dob'},
       { headerName: 'DOJ',field: 'doj'},
     ]
     this.defaultColDef = { 
       filter:'agTextColumnFilter',
       width:230,
       filterParams: {
         buttons:['apply','clear']
       }
     };
     this.datSrv.getAllData().subscribe((res)=>{
       if(res){
         this.rowData = res
       }
     })
    
     
   }
   onGridReady(evt:any){
    //  console.log(evt);    
   }

}
