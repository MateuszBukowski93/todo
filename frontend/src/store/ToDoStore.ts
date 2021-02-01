import { action, makeAutoObservable } from "mobx";
import { updateTasks } from "../api/lists";

export class ToDoStore {
  toDoLists: ToDoList[] = [];
  currentToDoList: ToDoList = {
    name: "",
    _id: "",
    tasks: [],
  };

  isCorrectPassword: boolean = true;
  isCorrectLogin: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  @action setToDoLists(toDoLists: ToDoList[]) {
    this.toDoLists = toDoLists;
  }

  @action setCurrentToDoList(currentToDoList: ToDoList) {
    this.currentToDoList = currentToDoList;
  }

  @action changeToDone = (item: Task) => {
    const newArr = [...toDoStore.currentToDoList.tasks];
    let elementsIndex = toDoStore.currentToDoList.tasks.findIndex(
      (element) => element._id === item._id
    );
    newArr[elementsIndex].isDone = true;
    updateTasks(newArr);
  };
}

const toDoStore = new ToDoStore();

export default toDoStore;
