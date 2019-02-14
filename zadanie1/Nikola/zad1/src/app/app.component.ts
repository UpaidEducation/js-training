import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  submit(form): void {
    const containerWithColor = document.getElementById('firstContainer');
    const color = form.value.userColor;
    containerWithColor.style.backgroundColor = color;
  }
}
