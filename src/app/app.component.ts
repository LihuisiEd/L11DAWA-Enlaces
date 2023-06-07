import { Component } from '@angular/core';
import { Task } from './task-list/task-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];
  tareasFiltradas: Task[] = []
  filtroSeleccionado: string = 'default';

  cambiarFiltro(filtro: string) {
    if (filtro === 'completed') {
      this.tareasFiltradas = this.tasks.filter(task => task.completado);
    } else if (filtro === 'incomplete') {
      this.tareasFiltradas = this.tasks.filter(task => !task.completado);
    } else {
      this.tareasFiltradas = this.tasks;
    }
  }

  addTask(taskName: string) {
    const task: Task = {
      descripcion: taskName,
      completado: false
    };
    this.tasks.push(task);
    this.cambiarFiltro(this.filtroSeleccionado);
  }
  
}
