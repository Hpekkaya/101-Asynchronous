// ------- Prpmise  -----------
// Convert asynchronized structur to synchronize
// Alternative of callback

// let check = true
// const promise1 = new Promise((resolve, reject)=>{
//     if (check) {resolve("Promise is succesfull") }
//     else { reject("Promise is unseccesfull")}
// })

// console.log(promise1)

let check=0;
function createPromise () {
    return new Promise((resolve, reject)=>{
        if (check) {
            resolve("Promise is running")
        } else{
            reject("Big Problem !")
        }
    })
}

createPromise()
.then((response)=>{console.log(response)})
.catch((error)=>{console.log(error)})
.finally(()=> console.log("Always running !"))


// ---- promise - XMLHttpRequest


function readStudents(url) {
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", ()=>{
                if(xhr.readyState===4 && xhr.status===200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            console.log("Problem in JSON !")
            reject(error)
        }
        xhr.open("GET",url);
        xhr.send();
    })
}

// readStudents("students.json")
// .then((data)=>console.log(data))
// .catch((err)=>console.log("Error !",err))

function getUsers(url){
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", ()=> {
        try {
            if (xhr.readyState===4 && xhr.status===200){
                console.log(JSON.parse(xhr.responseText))
            }
        } catch (error) {
            reject(error)
        }
    })
    xhr.open("GET", url);
    xhr.send();
}

getUsers("https://jsonplaceholder.typicode.com/users")
.then((data) => {
    data.forEach((user)=>{
        console.log(user.name)
    })
    console.log("We can run asynchrone codes later")
})
.catch((err)=>{console.log("Error !",err)})
.finaly(()=> {}) //Write mail codes)



// readStudents("students.json")
// .then((data)=>console.log(data))
// .catch((err)=>console.log("Error !",err))

// Promise.All 

const p1 = Promise.resolve("First promise is succesfull")
const p2 = Promise.resolve("Second promise is succesfull")
const p3 = new Promise((resolve, reject) => {
    resolve("Third Promise succesfull")
})
const p4 = Promise.reject("Fourth is unseccesfull")

Promise.all([p1,p2,p3,p4])
.then((res)=>{
    for(let val of res) console.log(val)
})
.catch((err)=>console.log(err))

