import { Component, OnInit } from '@angular/core';
import {AddCpeData, Cpe, CpeService} from "../../../services/devices/cpe/cpe.service";
import {MatDialog} from "@angular/material/dialog";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";
import {AddCpeComponent} from "./add/add-cpe/add-cpe.component";

@Component({
  selector: 'app-cpe',
  templateUrl: './cpe.component.html',
  styleUrls: ['./cpe.component.scss']
})
export class CpeComponent implements OnInit {

  displayedColumns: string[] = ['name',
    'frequency',
    'rx_power',
    'tx_power',
    'data_rate_1hr',
    'data_rate_24hr',
    'ip_address',
    'software_version',
    'latitude',
    'longitude'];
  isLoadingResults = true;
  cpes: Array<Cpe>;

  constructor(private cpeService: CpeService, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadCpes();
  }

  loadCpes() {
    this.cpeService.getAllCpes().pipe(
      catchError(() => {
        this.isLoadingResults = false;
        return of([]);
      })
    ).subscribe((data: any) => {
      console.log("Loaded data: " + data.length)
      this.cpes = data;
    });
  }

  addUser(): void {
    const addCpeData: AddCpeData = {
      name: '',
      latitude: 0,
      longitude: 0,
    };
    const dialogRef = this.dialog.open(AddCpeComponent, {
      width: '30em',
      data: addCpeData
    });

    dialogRef.afterClosed().subscribe(result => {
        this.cpeService.addCpe(result).subscribe(() => {
          this.loadCpes()
        });
    });
  }
}
