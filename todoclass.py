class Task:
    def __init__(self,defination):
        self.defination=defination
        self.complete=False
    def marked_complete(self):
        self.complete=True

class Task_Manager:
    def __init__(self):
        self.tasks=[]

    def list_tasks(self):
        for task in self.tasks:
            status="complete" if task.complete  else "incomplete"
            print(f"{task.defination} is {status}")

    def add_task(self,task):
        self.tasks.append(task)

    def marked_complete(self,defination):
        for task in self.tasks:
            if task.defination==defination:
                task.marked_complete()

task = Task("Develop user login feature")

# Print the task object using the custom __str__ method
print(task.complete)
# task_manager = Task_Manager()
# task_manager.add_task(Task("Develop user login feature"))
# task_manager.add_task(Task("Design database schema"))
# task_manager.list_tasks()
# task_manager.marked_complete("Develop user login feature")
# task_manager.marked_complete("Design database schema")
# task_manager.list_tasks()

