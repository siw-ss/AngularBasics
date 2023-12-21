import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  title:string = '*List of posts*';
  messagePost:string = 'message post';

  postParentMessage:string = 'parent post message';

  childMessage:string = 'from child component';

  //apply certain css if this boolean is true
  bool:boolean=true;

  //used for property binding
  imgUrl:string = 'https://png.pngtree.com/png-vector/20191126/ourmid/pngtree-image-of-cute-radish-vector-or-color-illustration-png-image_2040180.jpg';

  //receiving a variable from app component as the parent who calls
  //this post child component
  @Input() parentMsg!:string;

  constructor() { }

  ngOnInit(): void {
  }

  //we wanna send this output message after a click event
  outputChildMessage:string = 'message from child component via output';
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }

  //event binding function
  buttonClick(){
    console.log('Button Click event working');
  }

  //event filtering function
  onKeyup(){
    console.log("enter working");
  }

  //template variable function
  onKeyupTemp(username:any){
    console.log(username);
  }

  //two way data binding
  userName!:string;
  onKeyupTwoWay(){
    console.log(this.userName);
  }

  //two way data binding
  textValue:string = 'This is text from component ts';
  onKeyupTwoWayBinding(){
    console.log(this.textValue);
  }

}
