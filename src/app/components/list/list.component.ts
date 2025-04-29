import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIconModule, MatTooltipModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  items : string[];
  newItem: string;

  constructor(){
    this.items = ['Pan','Leche','Huevos'];
    this.newItem = '';
  }

  addItem(){
    if(this.newItem.trim()){
      this.items.push(this.newItem)
      this.newItem = '';
    }
  }
  deleteItem(index:number){
    this.items.splice(index, 1)
  }
}
