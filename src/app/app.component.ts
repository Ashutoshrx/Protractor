import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'protactor-demo';
  heading='Execution Automation Welcomes You!!'
  num1:number=1;
  incrementValue=()=>{
    this.num1+=1;
  }

}
