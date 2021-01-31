import toDoStore from "../store/ToDoStore";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export async function getAllList() {
  const response = await fetch("http://localhost:4000/list");
  const list = await response.json();
  return list;
}

export async function addList(name: string) {
  const response = await fetch("http://localhost:4000/list", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ name: name, tasks: [] }),
  });
}

export async function deleteList(id: string) {
  const response = await fetch(`http://localhost:4000/list/${id}`, {
    method: "DELETE",
    headers: myHeaders,
  });

  console.log(`deleted ${id}`);
}

export async function updateList(task: Task) {
  console.log(toDoStore.currentToDoList);
  const { _id, tasks, name } = toDoStore.currentToDoList;
  const response = await fetch(`http://localhost:4000/list/${_id}`, {
    method: "PATCH",
    headers: myHeaders,
    body: JSON.stringify({ name: name, _id: _id, tasks: [task, ...tasks] }),
  });
}
