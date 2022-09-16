import { Component, Inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ColDef, ColGroupDef, GridReadyEvent, Optional } from 'ag-grid-community';
import { CellbuttonComponent } from '../cellbutton/cellbutton.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
})
export class UsersComponent implements OnInit {
  constructor(
    private datSrv: DataService,
    ) {}

  ngOnInit(): void {
    // console.log('user');
  }
}
