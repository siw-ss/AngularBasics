import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postTitle!:string;
  postDetails!:string;
  postImg!:string;
  postUrl!:string;
  backg!:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
