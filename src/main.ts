import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Bienvenue chez {{ name }}!</h1>
    <a target="_blank" href="github.com/mpcgt/aristocat">
      Voir mon projet sur GitHub
    </a>
  `,
})
export class App {
  name = 'Aristocat';
}

bootstrapApplication(App);
