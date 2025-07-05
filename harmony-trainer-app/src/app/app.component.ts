import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChordsService } from './chords-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'harmony-trainer-app';
  allChords: string[] = [];

  harmonyForm: FormGroup;

  constructor(private fb: FormBuilder, private chordsService: ChordsService) {
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
    this.getChords();
  }

  getChords(): void {
    this.chordsService.getChords().subscribe(
      (data: string[]) => {
        this.allChords = data;
      },
      (error) => {
        console.error('Error fetching chords:', error);
      }
    );
  }
}
