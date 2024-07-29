class Todo {
  constructor(task) {
    this.task = task;
    this.isDone = false;
  }

  isDone_todo() {
    this.isDone = !this.isDone;
  }
  toString() {
    return `This is ${this.task} and its state ${this.isDone}`;
  }
}

class TaskManager {
  constructor() {
    this.todos = [];
  }

  add_todo(todo) {
    this.todos.push(todo);
    return `This todoadded as ${todo.task}`;
  }

  remove_todo(todo) {
    let indexOftodo = this.todos.indexOf(todo);
    if (indexOftodo !== -1) {
      let myTask = todo.task;
      this.todos.splice(todo, 1);
      return `This todo removed as ${myTask}`;
    }
  }
  toggleTodo(todo, a) {
    let indexOftodo = this.todos.indexOf(todo);
    if (indexOftodo !== -1 && typeof a === "boolean") {
      todo.isDone_todo();
      return `This todo isDone  updated as ${todo.isDone}`;
    }
  }
  editTodo(todo, message) {
    let indexOftodo = this.todos.indexOf(todo);
    if (indexOftodo !== -1 && typeof message === "string") {
      todo.task = message;

      return `This todo task  updated as ${todo.task}`;
    }
  }

  toString() {
    return `All the list: ${this.todos
      .map((todo) => todo.toString())
      .join(", ")}`;
  }
}

// Test Cases

const taskManager = new TaskManager();
const todo1 = new Todo("Learn JavaScript");
const todo2 = new Todo("Learn React");

// Add todos
console.log(taskManager.add_todo(todo1)); // This todo added as Learn JavaScript
console.log(taskManager.add_todo(todo2)); // This todo added as Learn React

// Print all todos
console.log(taskManager.toString()); // All the list: This is Learn JavaScript and its state false, This is Learn React and its state false

// Toggle todo isDone state
console.log(taskManager.toggleTodo(todo1, true)); // This todo isDone updated as true

// Edit todo message
console.log(taskManager.editTodo(todo2, "Learn Redux")); // This todo task updated as Learn Redux

// Print all todos after edits
console.log(taskManager.toString()); // All the list: This is Learn JavaScript and its state true, This is Learn Redux and its state false

// Remove todo
console.log(taskManager.remove_todo(todo1)); // This todo removed as Learn JavaScript

// Print all todos after removal
console.log(taskManager.toString()); // All the li
