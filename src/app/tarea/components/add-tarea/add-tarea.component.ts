import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Tarea } from '../../interfaces/tarea.interface';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TareaService } from '../../service/tarea.service';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})
export class AddTareaComponent {

  fb = inject(FormBuilder);
  ts = inject(TareaService);
  submit = false

  formulario = this.fb.nonNullable.group(
    {
      id: ['', [Validators.required]],
      tarea: ['', [Validators.required, Validators.minLength(3)]]
    }
  )

  @Output()
  emitirTarea: EventEmitter<Tarea> = new EventEmitter();

  addTarea() {

    if (this.formulario.invalid) {
      this.onFocus()
      this.submit = true;
      return;
    };

    const tarea: Tarea = this.formulario.getRawValue();

    this.addTareaDB(tarea);

    this.emitirTarea.emit(tarea);

    this.formulario.reset({ id: '', tarea: '' });

    this.submit = false;

    this.onFocus();

  }

  addTareaDB(tarea: Tarea) {
    this.ts.postTareas(tarea).subscribe({
      next: () => {
        alert('Tarea ingresada...')
      },
      error: (e: Error) => {
        console.log('Error: ', e.message);
      }
    })
  }

  onFocus() {
    const input = document.getElementById('id');
    if (input) {
      (input as HTMLInputElement).focus();
    }
  }

}
