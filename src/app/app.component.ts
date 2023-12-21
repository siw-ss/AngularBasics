import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
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
