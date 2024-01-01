
// -----  fetch API  -----

// function getStudents(url){
//     fetch(url)
//     .then((result) => {
//         return result.json()
//     })
//     .then((data)=>console.log(data) )
//     .catch((err) =>console.log(err) )        
// }

// getStudents("students.json");

// Geeting Data from "jsonplaceholder"

function getData(url){
    fetch(url)
    .then((result) =>result.json()     )
    .then((data)=>console.log(data) )
    .catch((err) =>console.log(err) )        
}
// Getting Users
getData("https://jsonplaceholder.typicode.com/users");

// Getting Albums
// getData("https://jsonplaceholder.typicode.com/albums");

//  Second alternative
function getData1(url){
   return fetch(url)
}
// Getting Users
getData1("https://jsonplaceholder.typicode.com/users")
.then((result) =>result.json()  )
.then((data)=>console.log(data) )
.catch((err) =>console.log(err) )        
