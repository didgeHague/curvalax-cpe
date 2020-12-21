import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";


export interface AddCpeData {
  name: string
  latitude: number
  longitude: number
}

export interface Cpe {
  name: string
  frequency: number
  rx_power: number
  tx_power: number
  data_rate_1hr: number
  data_rate_24hr: number
  ip_address: string
  software_version: string
  latitude: number
  longitude: number
}

@Injectable({
  providedIn: 'root'
})
export class CpeService {

  cpes: Array<Cpe>

  constructor() {
    console.log("Created Service")
    this.cpes = [{
      name: "example",
      frequency: 100,
      rx_power: 75,
      tx_power:88,
      data_rate_1hr: 1000,
      data_rate_24hr: 24000,
      ip_address: "192.168.0.1",
      software_version: "v1.0.0",
      latitude: 54.2,
      longitude: 54.23
    }];
  }

  getAllCpes(): Observable<Cpe[]> {
    return of(this.cpes)
  }

  addCpe(addCpe: AddCpeData): Observable<boolean> {
    this.cpes = this.cpes.concat({
      name: addCpe.name,
      frequency: 123,
      rx_power: 65,
      tx_power: 76,
      data_rate_1hr: 500,
      data_rate_24hr: 12000,
      ip_address: "192.165.1.1",
      software_version: "v1.0.0",
      latitude: addCpe.latitude,
      longitude: addCpe.longitude
    })
    return of(true)
  }
}
