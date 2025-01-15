// Task 3: addUser(first_name, last_name, email)
import fetch from 'node-fetch'; 

export function addUser(first_name, last_name, email) {
    fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({
                     
            first_name: first_name,
            last_name: last_name,
            email: email
          }),
        
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())  
        .then(users => console.log("Lista de usuarios:", users))  
}

addUser("nina", "forero", "cf@email.com");