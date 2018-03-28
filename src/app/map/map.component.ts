import { Component, OnInit } from '@angular/core';
declare var google:any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  public lat: number = -34.6233401;
  public lng: number = -58.5125136;
  constructor() { }

  ngOnInit() {

  }

}
