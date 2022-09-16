import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { GlobService } from '../glob.service';

@Component({
  selector: 'app-cellbutton',
  templateUrl: './cellbutton.component.html',
  styleUrls: ['./cellbutton.component.scss']
})
export class CellbuttonComponent implements ICellRendererAngularComp {
  public data : any;
  private vwFlg : Boolean = false;
  private edFlg : Boolean = false;
  private dlFlg : Boolean = false;

  constructor(private glSrv:GlobService){

  }

  agInit(params: ICellRendererParams): void {
    this.data = params.data
  }

  click(evt:any,flg?:any){
    // console.log(flg)
    // console.log(this.data)
    let obj = {
      'data':this.data,
      'flag':flg
    }
    this.glSrv.addData(obj)

  }

  refresh(params: ICellRendererParams) {
    return false;
  }
}
