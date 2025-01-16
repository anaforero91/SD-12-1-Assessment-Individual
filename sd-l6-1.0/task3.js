// Task 3: addUser(first_name, last_name, email)
import fetch from 'node-fetch';

export function addUser(first_name, last_name, email) {

    // Se obtiene la info del servidor
    fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(users => {
  
            let lastId = 0;
            let idList = []; 

            //Se agregan los id a un arreglo convertidos a número
            for (const user of users) {
              idList.push(Number(user.id)); 
            }

            //Se identifica el último id y se genera el nuevo id
            lastId = Math.max(...idList);         
            const newId = lastId + 1;
            const newIdStr = String(newId);
            

            //Se agrega con el método HTTP, "POST"      
            fetch("http://localhost:3000/users", {
                method: "POST",
                body: JSON.stringify({
                    id: newIdStr, 
                    first_name: first_name,
                    last_name: last_name,
                    email: email
                }),
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(user => console.log("Nuevo usuario agregado:", user))
        })    
}




