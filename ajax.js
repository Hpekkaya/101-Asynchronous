// AJAX

// const xhr = new XMLHttpRequest();
// console.log(xhr);

function prepareURL(url, id) {
    if(id===null) {
        return url;
    }
    return `${url}?postId=${id}`
}

function getComments(url, id){
    let newURL = prepareURL(url,id);
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState===4 && xhr.status===200){
            console.log(JSON.parse(xhr.responseText)) // converts JSON
        }
    })
    xhr.open("GET", newURL);
    xhr.send();
}

// In order to get users
function getData(url){
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", ()=> {
        if (xhr.readyState===4 && xhr.status===200){
            console.log(JSON.parse(xhr.responseText))
        }
    })
    xhr.open("GET", url);
    xhr.send();
}


//  Brings users
getData("https://jsonplaceholder.typicode.com/users")

//  Brings all (id:null) comments
// getComments("https://jsonplaceholder.typicode.com/comments", null)

//  Brings comments according to id (number)
// getComments("https://jsonplaceholder.typicode.com/comments", 2)


