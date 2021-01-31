interface Task {
  name: string;
  _id: string;
  isDone: boolean;
}

interface ToDoList {
  name: string;
  _id: string;
  tasks: Task[];
}
