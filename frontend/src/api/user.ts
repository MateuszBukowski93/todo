import { apiUser as api } from "./constans";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export async function loginUser(login: string, password: string) {
  const data = await fetch(api, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ login: login, password: password }),
  });
  const response = await data.json();
  return response;
}
