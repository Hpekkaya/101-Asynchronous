// JavaScript runs as Syncronous Programing Language

// JavaScript as Asyncronous 
// 1-Timings
// 2-Events
// 3-HTTP Requests
// WEB API's

// Callback - Promise - async & await 

// console.log("Hakan")

// setTimeout(() => console.log("1 sec wait and run"), 1000)
// setTimeout(() => console.log("0.5 sec wait and run"), 500)

// console.log("Kerem")

// callBack : 
// As passing parameters to another function 
// make asyncronous structure to syncronous

// getName = (callback) => {
//     setTimeout(()=> {
//         console.log("Hakan");
//         callback()
//     },1000)   
// }
// getSurname = () => {
//     setTimeout(()=>console.log("Pekkaya"),500)
// }

// getName(getSurname)

// // 2nd alternative

// getName1 = (callback) => {
//     setTimeout(()=> {
//         let name = "Hakan";
//         callback(name)
//     },1000)   
// }
// getSurname1 = (name) => {
//     setTimeout(()=> {
//         let surname = "Pekkaya";
//         console.log(name, surname);
//     },500)       
// }
// getName1(getSurname1)


// // 3rd alternative

// getName2 = (callback) => {
//     setTimeout(()=> {
//         let name = "Hakan";
//         callback(name)
//     },1000)   
// }
// getSurname2 = (name, surname) => {
//     setTimeout(()=> {
//         let surname = "Pekkaya";
//         callback(surname);
//     },500)       
// }
// getName2((name)=>{
//     getSurname2(name, (surname)=>{
//         console.log(name, surname)
//     })
// })

