// Task 2: listUsers()

fetch("http://localhost:3000/users", {
    method: "GET",
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }

  })
  

listUsers();
