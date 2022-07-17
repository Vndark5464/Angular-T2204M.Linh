import { Component } from '@angular/core';
import { IClassroom} from "./interface/classroom.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'T2204M-Angular';
  classArray: IClassroom[] = [
    {className:'T2204M',classStatus:true},
    {className:'T2203E',classStatus:false},
  ];
}
