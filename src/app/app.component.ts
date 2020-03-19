import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBasico';
  public myName: string= 'Jimmy Daniel';


onSayHello(message){

  console.log(message);
}

}

