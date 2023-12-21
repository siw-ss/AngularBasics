import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-usage',
  templateUrl: './pipes-usage.component.html',
  styleUrls: ['./pipes-usage.component.scss']
})
export class PipesComponent implements OnInit {

  title:string = "something";
  count:number = 524863;
  dcValue:number = 52.4863;
  price:number = 99.99;
  today:Date = new Date();
  postObj: object = {
    id:1,
    postTitle:'jsonObject with pipe'
  }
  postArray: Array<string> = [
    'post1',
    'post2',
    'post3',
    'post4',
    'post5',
  ]

  userDetails = {
    name: "user1",
    city: "newyork",
    countryCode: "US"
  }

  dummyText: string = "In excepteur mollit exercitation laborum. Incididunt laborum magna reprehenderit dolor aliqua. Laboris mollit laborum labore anim fugiat dolor deserunt deserunt. Fugiat irure labore Lorem nulla Lorem culpa quis aliqua laboris nulla. Excepteur exercitation commodo sit sint labore veniam. Ea est dolore nisi reprehenderit culpa laboris irure quis laborum nisi ipsum."

  constructor() { }

  ngOnInit(): void {
  }

}
