import { Item } from './../item';
import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
   editable = false;
   @Input() item!: Item;
   @Input() newItem!: string;
   @Output() remove = new  EventEmitter<Item>()

   saveItem(description:any){
     if(!description)return;
     this.editable = false;
     this.item.description = description
   }

}
