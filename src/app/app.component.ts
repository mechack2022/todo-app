import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  filter: "all" | "active" | "done" = "all";

  allItems =[ {description: "eat", done :true}, 
  {description:"sleep", done: false}, 
  {description:"play", done :true}, 
  {description:"laugh", done:true}]

  // get items 
  getItems(){
    if(this.filter === "all"){
      return this.allItems
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done :!item.done);
  }
  // add item to the list 
  addItem(todo:string){
   this.allItems.unshift({
     description:todo, done :false
   })
  }
  //remove item from list
  removeItem(item :any){
 this.allItems.splice(this.allItems.indexOf(item), 1)
  }
}
