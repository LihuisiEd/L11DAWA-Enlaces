import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  @Output() filterChanged = new EventEmitter<string>();
  selectedFilter = 'default';

  cambiarFiltro() {
    this.filterChanged.emit(this.selectedFilter);
  }
}
