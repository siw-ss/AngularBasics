import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss']
})
export class SecondFormComponent implements OnInit {

  name!:string;
  email!:string;
  adress!:string;

  users:Array<any> = []

  constructor() { }

  ngOnInit(): void {
  }
  delete(index: number) {
  this.users.splice(index,1);
}
Add() {
    this.users.push({
      name:this.name,
      email:this.email,
      adress:this.adress
    })
  }
}
