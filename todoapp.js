function randomId() {
  const myString = "qwertzuioasdfghjklycxvbnm1234678";
  const myArray = myString.split("");
  let target = "";
  for (let i = 0; i < myString.length - Math.floor(myString.length / 2); i++) {
    target += myArray[Math.floor(Math.random() * myString.length)];
  }
  return target;
}

class Todo {
  constructor(task) {
    this.task = task;
    this.isDone = false;
    this.id = randomId();
    this.date = new Date().getTime();
  }

  taskDone() {
    this.isDone = true;
  }

  toString() {
    return `This is ${this.task} with ID ${this.id} and created at ${this.date}.`;
  }
}

class TaskTodos {
  constructor() {
    this.todos = [];
  }

  addTodo(todo) {
    if (!this.todos.includes(todo)) {
      this.todos.push(todo);
      console.log(`Added todo: ${todo.toString()}`);
    } else {
      console.log(`This task '${todo.task}' is already in the list.`);
    }
  }

  removeTodo(todo) {
    const indexfinder = this.todos.indexOf(todo);
    if (indexfinder !== -1) {
      this.todos.splice(indexfinder, 1);
      console.log(`Removed todo: ${todo.toString()}`);
    } else {
      console.log(`Todo '${todo.task}' not found in the list.`);
    }
  }

  editTodo(todo, newString) {
    if (this.todos.includes(todo)) {
      this.todos = this.todos.map((mytodo) => {
        if (mytodo.id === todo.id) {
          mytodo.task = newString;
          console.log(`Edited todo: ${mytodo.toString()}`);
        }
        return mytodo;
      });
    } else {
      console.log(`Todo '${todo.task}' not found in the list.`);
    }
  }

  editTodoIsDone(todo) {
    if (this.todos.includes(todo)) {
      todo.taskDone();
      console.log(`Marked todo as done: ${todo.toString()}`);
    } else {
      console.log(`Todo '${todo.task}' not found in the list.`);
    }
  }

  toString() {
    return `These are todos: ${this.todos
      .map((todo) => `${todo.task} `)
      .join(", ")}.`;
  }
}

// Test cases
const taskTodos = new TaskTodos();
const todo1 = new Todo("Buy groceries");
const todo2 = new Todo("Clean the house");
const todo3 = new Todo("Read a book");

// Add todos
console.log("\n--- Adding Todos ---");
taskTodos.addTodo(todo1);
taskTodos.addTodo(todo2);
taskTodos.addTodo(todo3);

// Print all todos
console.log("\n--- All Todos ---");
console.log(taskTodos.toString()); // Should list all three todos

// Attempt to add a duplicate todo
console.log("\n--- Attempt to Add Duplicate Todo ---");
taskTodos.addTodo(todo1); // Should print message that the todo is already in the list

// Remove a todo
console.log("\n--- Removing Todo ---");
taskTodos.removeTodo(todo2);
console.log(taskTodos.toString()); // Should list two todos: "Buy groceries" and "Read a book"

// Edit a todo
console.log("\n--- Editing Todo ---");
taskTodos.editTodo(todo1, "Buy food");
console.log(taskTodos.toString()); // Should list edited todo: "Buy food" and "Read a book"

// Mark a todo as done
console.log("\n--- Marking Todo as Done ---");
taskTodos.editTodoIsDone(todo3);
console.log(todo3.toString()); // Should show isDone: true for "Read a book"

// Attempt to remove a non-existing todo
console.log("\n--- Attempt to Remove Non-existing Todo ---");
taskTodos.removeTodo(todo2); // No error, but no change
console.log(taskTodos.toString()); // Should still list: "Buy food" and "Read a book"

// Print individual todo details
console.log("\n--- Individual Todo Details ---");
console.log(todo1.toString()); // Should show details of "Buy food"
console.log(todo3.toString()); // Should show details of "Read a book" with isDone: true
