const p1 = Promise.resolve("First promise is succesfull")
const p2 = Promise.resolve("Second promise is succesfull")
const p3 = new Promise((resolve, reject) => {
    resolve("Third Promise succesfull")
})

Promise.all([p1,p2,p3])
.then((res)=>{
    for(let val of res) console.log(val)
})
.catch()
