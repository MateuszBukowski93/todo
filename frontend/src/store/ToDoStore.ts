import { action, makeAutoObservable } from "mobx";

export class ToDoStore {
  toDoLists: ToDoList[] = [];
  currentToDoList: ToDoList = {
    name: "",
    _id: "",
    tasks: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  @action setToDoLists(toDoLists: ToDoList[]) {
    this.toDoLists = toDoLists;
  }

  @action setCurrentToDoList(currentToDoList: ToDoList) {
    this.currentToDoList = currentToDoList;
  }
}

const toDoStore = new ToDoStore();

export default toDoStore;
