import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AddCpeData} from "../../../../../services/devices/cpe/cpe.service";

@Component({
  selector: 'app-add-cpe',
  templateUrl: './add-cpe.component.html',
  styleUrls: ['./add-cpe.component.scss']
})
export class AddCpeComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddCpeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddCpeData) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
