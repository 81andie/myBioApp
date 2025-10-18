import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cabecera } from "./components/cabecera/cabecera";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cabecera],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myBioApp');
}
