import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   

   constructor() { }

   
   ngOnInit() { }

   addItem(equipment) {
     if ((this.maximumAllowedMass - this.cargoMass) >= equipment.mass) {
    this.cargoHold.push(equipment);
    this.cargoMass += equipment.mass;
    }
     if (this.cargoHold.length === this.maxItems) {
      return true;
    }
     return false;
   }
   emptyHold() {
     this.cargoHold.length = 0;
     this.cargoMass = 0;
     this.maximumAllowedMass;
     this.maxItems;
   }
}
