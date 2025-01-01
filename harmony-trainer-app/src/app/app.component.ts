import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'harmony-trainer-app';
  allChords = [
    "C", "Cm", "C#", "C#m", "D", "Dm", "D#", "D#m",
    "E", "Em", "F", "Fm", "F#", "F#m", "G", "Gm",
    "G#", "G#m", "A", "Am", "A#", "A#m", "B", "Bm",
  ];

  harmonyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.harmonyForm = this.fb.group({
      I: ['D#'],
      IIm: ['E#m'],
      IIIm: ['F##m'],
      IV: ['G#'],
      V: ['A#'],
      VIm: ['B#m'],
      VIIm: ['C##dim']
    });
  }

  ngOnInit(): void {
    // Any additional setup if needed
  }
}
