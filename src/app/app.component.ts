import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './tarea/pages/home-page/home-page.component';
import { AddTareaComponent } from "./tarea/components/add-tarea/add-tarea.component";
import { PadreComponent } from './input/padre/padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomePageComponent, PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tareas-emitter';
}
