import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from 'src/app/post/post.component';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss']
})
export class Part1Component implements AfterViewInit {
  title = 'my-first-project';
  parentMessage = 'this message is from the APP parent';
  messageRecievedFromChild!:string;
  fromChildOutput!:string;

  @ViewChild(PostComponent) childComp: any;

  constructor(){
    console.log(this.childComp);
  }

  ngAfterViewInit(): void {
    console.log(this.childComp);
    this.messageRecievedFromChild = this.childComp.childMessage;
  }

  receiveMessage($event: any){
    this.fromChildOutput = $event;
  }
}
