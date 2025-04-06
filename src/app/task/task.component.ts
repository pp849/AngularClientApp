import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from './model/task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasklist: Task[] = [
    { id: 1, task: 'Buy groceries', completed: false },
    { id: 2, task: 'Do laundry', completed: true },
    { id: 3, task: 'Complete assignment', completed: false },
    { id: 4, task: 'Go for a walk', completed: true },
  ];
  
  newTask = '';
  nextId = 5;
  searchQuery: string = ''; // Stores search input

  addTask() {
    if (this.newTask.trim()) {
      this.tasklist.push({ id: this.nextId++, task: this.newTask.trim(), completed: false });
      this.newTask = '';
    }
  }

  deleteTask(id: number) {
    this.tasklist = this.tasklist.filter(task => task.id !== id);
  }

  // Function to filter tasks based on search query
  getSearchedTasks(): Task[] {
    if (!this.searchQuery.trim()) {
      return this.tasklist; // Show all tasks if search is empty
    }
    return this.tasklist.filter(task =>
      task.task.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
