// ------- Prpmise  -----------

let check = true
const promise1 = new Promise((resolve, reject)=>{
    if (check) {resolve("Promise is succesfull") }
    else { reject("Promise is unseccesfull")}
})

console.log(promise1)
