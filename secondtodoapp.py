
class Todo:
    def __init__(self,task):
        self.task=task
        self.isDone=False

    def revertIsDone(self):
        self.isDone = not self.isDone    
    def __str__(self):
        return(f"This is {self.task} and his state {self.isDone}")


class Task_Manager:
    def __init__(self):

        self.todos=[]

    def add_todo(self,todo):
        self.todos.append(todo)


    def remove_todo(self,todo):
        self.todos.remove(todo)

    def edit_todo(self,todo):
        for i in self.todos:
            if i.task==todo.task:
                todo.revertIsDone()
            else:
                continue
    def edit_message(self,todo,message):
         for i in self.todos:
            if i.task==todo.task:
                todo.task=message
            else:
                continue

    def __str__(self):
        return "Tasks:\n" + "\n".join(str(todo) for todo in self.todos)


# Test cases
task_manager = Task_Manager()

# Add a new todo
todo1 = Todo("Hello World")
task_manager.add_todo(todo1)

# Print the current tasks
print(task_manager)  # Should print the task "Hello World"

# Add another todo
todo2 = Todo("Learn Python")
task_manager.add_todo(todo2)
print(task_manager)  # Should print the tasks "Hello World" and "Learn Python"

# Edit the first todo to mark it as done
task_manager.edit_todo(todo1)
print(task_manager)  # "Hello World" should be marked as completed

# Edit the message of the second todo
task_manager.edit_message(todo2, "Learn Django")
print(task_manager)  # "Learn Python" should be changed to "Learn Django"

# Remove the first todo
task_manager.remove_todo(todo1)
print(task_manager)  # Should print only "Learn Django"



