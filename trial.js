// ----- Async - Await ----

async function hello() {   //returns promise thanks to async
    return "Hello World";
}

// console.log(hello()) 

// hello()
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))

// fetch Before async await
document.querySelector("#button").addEventListener("click",()=>{
    // console.log("Check Button")
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response)=> response.json())
    .then((post)=> {
        // console.log(post)
        // console.log(post.id)
        // console.log(post.title)
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
        .then((response)=>response.json())
        .then((comments)=> console.log(comments))
    })
})
