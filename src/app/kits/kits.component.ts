import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kits',
  templateUrl: './kits.component.html',
  styleUrls: ['./kits.component.scss']
})
export class KitsComponent implements OnInit {

  public packs = []
  constructor() { }

  ngOnInit() {
    this.packs.push({label:"kit Monoambiente", img:"assets/kit1.jpg", index:0,min:0,count:2400, description:"Kit pensado para Monoambiente",price:"1870u$s"});
    this.packs.push({label:"kit 2 Ambientes", img:"assets/kit2.jpg",index:1,min:2400,count:3200, description:"Kit pensado para 2 ambientes",price:"2980u$s"});
    this.packs.push({label:"Kit Familiar", img:"assets/kit3.jpg",index:2,min:3200,count:4500, description:"Kit famliar",price:"3680u$s"});
  }

}
