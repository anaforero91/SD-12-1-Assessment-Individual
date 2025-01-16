// Task 4: delUser(number)
import fetch from 'node-fetch';

export function delUser(id) {
    fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => console.log("Usuario borrado:", data))
        
}
