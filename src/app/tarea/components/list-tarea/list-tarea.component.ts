import { Component, inject, OnInit } from '@angular/core';
import { AddTareaComponent } from '../add-tarea/add-tarea.component';
import { Tarea } from '../../interfaces/tarea.interface';
import { TareaService } from '../../service/tarea.service';

@Component({
  selector: 'app-list-tarea',
  standalone: true,
  imports: [AddTareaComponent],
  templateUrl: './list-tarea.component.html',
  styleUrl: './list-tarea.component.css'
})
export class ListTareaComponent implements OnInit {

  tareaService: TareaService = inject(TareaService);

  ngOnInit(): void {
    this.listarTareas()
  }

  listaTareas: Tarea[] = [];

  recibirTareaHijo(tarea: any) {
    this.listaTareas.push({ ...tarea })
  }

  listarTareas() {
    this.tareaService.getTareas().subscribe(
      {
        next: (tareas: Tarea[]) => {
          this.listaTareas = tareas;
        },
        error: (e: Error) => {
          console.log(e.message)
        }
      }
    );

  }

}
