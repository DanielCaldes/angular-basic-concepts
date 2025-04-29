import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})


export class UserFormComponent {  
  myForm : FormGroup;
  users : User[];

  constructor(){
    this.users = [];
    this.myForm = new FormGroup({
      name:new FormControl('',Validators.required),
      surname:new FormControl('',Validators.required),
      phone:new FormControl('',Validators.required),
      birthdate:new FormControl('',Validators.required)
    })
    const newUser1 = { name:"Maria", surname:"López", phone:"899523728", birthdate:"2000-01-01"};
    const newUser2 = { name:"Pepe", surname:"Pérez", phone:"786543918", birthdate:"1990-10-18"};
    this.users.push(newUser1);
    this.users.push(newUser2);
  }

  onSubmit(){
    if(this.myForm.valid){
      const { name, surname, phone, birthdate } = this.myForm.value;
      const newUser = { name, surname, phone, birthdate };
      this.users.push(newUser);
      this.myForm.reset();
    }else{
      console.log("No válido");
    }
  }
}
