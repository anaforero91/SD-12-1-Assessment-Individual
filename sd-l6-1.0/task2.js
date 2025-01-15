// Task 2: listUsers()
import fetch from 'node-fetch';  

export function listUsers() {
  fetch("http://localhost:3000/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())  
    .then(users => console.log("Lista de usuarios:", users))  
   
}

listUsers();
