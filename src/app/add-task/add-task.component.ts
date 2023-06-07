import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../task-list/task-list.component';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() taskAdded = new EventEmitter<string>();
  taskName = '';

  addTask() {
    if (this.taskName.trim()) {
      this.taskAdded.emit(this.taskName.trim());
      this.taskName = '';
    }
  }
}
