import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'owd';

  // iname="pihu";
  uname="";
  // ucolor="red";

  but(val:any){
    this.uname=val
    console.log(val)
  }
  //  ubg="yellow";
//    but(){
//     alert('hello guys')
//    }
//   apply="a b c d";
 }
