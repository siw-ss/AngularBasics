import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //NGFOR DIRECTIVE
  postArray: Array<string> = ['Post 1','Post 2','Post 3','Post 4','Post 5',]
  //NGFOR DIRECTIVE WITH OBJECT ARRAY
  objArray: Array<any> = [
    {id:1,postTitle:'post1'},
    {id:2,postTitle:'post2'},
    {id:3,postTitle:'post3'},
    {id:4,postTitle:'post4'},
  ]

  addNew(){
    this.objArray.push({id:5,postTitle:'post5'})
  }

  delete(index: any){
    this.objArray.splice(index,1);
  }

  //NG SWITCH
  stepForm!:string;
  onClick(step: string) {
  this.stepForm = step;
  }

  //NG STYLE
  isActive:boolean = false;

}
