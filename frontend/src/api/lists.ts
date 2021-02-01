import toDoStore from "../store/ToDoStore";
import { apiList as api } from "./constans";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export async function getAllLists() {
  const response = await fetch(api);
  const allLists = await response.json();
  toDoStore.setToDoLists(allLists);
}

export async function addList(name: string) {
  await fetch(api, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ name: name, tasks: [] }),
  });
}

export async function deleteList(id: string) {
  await fetch(`${api}/${id}`, {
    method: "DELETE",
    headers: myHeaders,
  });
}

export async function updateList(task: Task) {
  const { _id, tasks, name } = toDoStore.currentToDoList;
  await fetch(`${api}/${_id}`, {
    method: "PATCH",
    headers: myHeaders,
    body: JSON.stringify({ name: name, _id: _id, tasks: [task, ...tasks] }),
  });
}

export async function updateTasks(tasks: Task[]) {
  const { _id, name } = toDoStore.currentToDoList;
  await fetch(`${api}/${_id}`, {
    method: "PATCH",
    headers: myHeaders,
    body: JSON.stringify({ name: name, _id: _id, tasks: tasks }),
  });
}

export async function getCurrentList(id: string) {
  const response = await fetch(`${api}/${id}`, {
    method: "GET",
    headers: myHeaders,
  });
  const list = await response.json();
  toDoStore.setCurrentToDoList(list);
}
