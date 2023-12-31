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

//  Brings all (id:null) values
// getComments("https://jsonplaceholder.typicode.com/comments", null)

//  Brings according to id (number)
getComments("https://jsonplaceholder.typicode.com/comments", 2)


