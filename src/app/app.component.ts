import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  scroll(element) {
    window.scrollTo(element.yPosition)
    //element.scrollIntoView();
}
}
