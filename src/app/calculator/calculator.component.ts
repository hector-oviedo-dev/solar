import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  @ViewChildren('tabGroup') tabGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['icon', 'name', 'watts', 'count'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  public packs = [];

  public totalWatts:number = 0;

  public selectedIndex:number = 0;

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.packs.push({label:"kit Monoambiente", img:"assets/kit1.jpg", index:0,min:0,count:2400});
    this.packs.push({label:"kit 2 Ambientes", img:"assets/kit2.jpg",index:1,min:2400,count:3200});
    this.packs.push({label:"Kit Familiar", img:"assets/kit3.jpg",index:2,min:3200,count:4500});

  }
  applyFilter(filterValue: string) {
   filterValue = filterValue.trim();
   filterValue = filterValue.toLowerCase();
   this.dataSource.filter = filterValue;
 }
 public calculate() {
   this.totalWatts = 0;
   for (let el of ELEMENT_DATA) {
     console.log("valor actual: ", el.count)
     let val:number = el.count * el.watts;
     this.totalWatts = this.totalWatts + val;
   }

   for (let pack of this.packs) if (this.totalWatts > pack.min && this.totalWatts < pack.count) this.selectedIndex = pack.index;

   if (this.totalWatts > this.packs[this.packs.length-1].count) this.selectedIndex = this.packs[this.packs.length-1].index;
 }

}
export interface Element {
  icon: string;
  item: string;
  name: string;
  watts: number;
  count: number;
}

const ELEMENT_DATA: Element[] = [
  { icon: "assets/light.png", item: "light", name:"Lamparita", watts: 100, count: 0, },
  { icon: "assets/light.png", item: "lightsoft", name:"Lamparita Bajo Consumo", watts: 65, count: 0, },
  { icon: "assets/heladera.png", item: "freezer", name:"Heladera/Freezer", watts: 350, count: 0, },
  { icon: "assets/electrobig.png", item: "wash", name:"Lavarropas/Secarropas", watts: 310, count: 0, },
  { icon: "assets/electrobig.png", item: "washbig", name:"Lavarropas/Secarropas Auto.", watts: 2400, count: 0, },
  { icon: "assets/electrobig.png", item: "tv", name:"Televisor", watts: 200, count: 0, },
  { icon: "assets/air.png", item: "ac", name:"Aire Acondicionado", watts: 2500, count: 0, },
  { icon: "assets/electrobig.png", item: "termo", name:"Termotanque", watts: 1500, count: 0, },
  { icon: "assets/electro.png", item: "micro", name:"Micro Ondas", watts: 800, count: 0, },
  { icon: "assets/pc.png", item: "pc", name:"Computadora Escritorio", watts: 1100, count: 0, },
  { icon: "assets/pc.png", item: "notebook", name:"Notebook", watts: 310, count: 0, },
  { icon: "assets/electro.png", item: "bomb", name:"Bomba de Agua", watts: 400, count: 0, },
];
