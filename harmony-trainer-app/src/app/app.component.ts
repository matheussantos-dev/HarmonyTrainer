import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'harmony-trainer-app';
  allChords = [
    "C", "Cm", "C#", "C#m", "D", "Dm", "D#", "D#m",
    "E", "Em", "F", "Fm", "F#", "F#m", "G", "Gm",
    "G#", "G#m", "A", "Am", "A#", "A#m", "B", "Bm",
  ];
}
