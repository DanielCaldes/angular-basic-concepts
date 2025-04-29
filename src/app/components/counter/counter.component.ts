import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [MatIcon, MatTooltipModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  value : number;
  initValue : number;

  constructor(){
    this.initValue = 10;
    this.value = this.initValue;
  }

  remove(){
    this.value = Math.max(0, this.value - 1);
  }

  add(){
    this.value = this.value+1;
  }

  refresh(){
    this.value = this.initValue;
  }
}
