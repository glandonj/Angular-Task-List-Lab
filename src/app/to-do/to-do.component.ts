import { Component } from '@angular/core';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
tasks:ToDo[]=[
  {
    task: "Finish Taxes",
    completed: false
  },
  {
    task: "Complete Lab",
    completed: false
  },
  {
    task: "Hug Katie",
    completed: false
  },
  {
    task: "Encourage Children",
    completed: true
  },
  {
    task: "Read Scripture",
    completed: false
  },
  {
    task: "Repair Steps",
    completed: false
  },
  {
    task: "Reference Letter - Mike",
    completed: true
  },
];

newTask:ToDo ={
  task:"",
  completed: false
};

// toggleTask(index:number){
//  this.tasks[index].completed = !this.tasks[index].completed;
// }
completeTask(index:number){
  this.tasks[index].completed = true;
 }
 
 addTask(){
  let result:ToDo ={
    task: this.newTask.task,
    completed: this.newTask.completed
  };
  this.tasks.push(result);
 }

}
