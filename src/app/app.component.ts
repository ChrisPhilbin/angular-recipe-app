import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';

  loadedFeature = "recipe";

  onNavigate(destination) {
    this.loadedFeature = destination;
  }
}
