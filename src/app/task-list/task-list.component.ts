import { Component, Input, EventEmitter, Output } from '@angular/core';

export class Task {
  descripcion: string;
  completado: boolean;

  constructor(descripcion: string) {
    this.descripcion = descripcion;
    this.completado = false;
  }
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Input() tareasFiltradas: Task[] = [];

  marcarComoCompletado(task: Task) {
    task.completado = !task.completado;
    this.actualizarTareasFiltradas();
  }

  private actualizarTareasFiltradas() {
    this.tareasFiltradas = this.tasks;
  }
}