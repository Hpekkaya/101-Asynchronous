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
            reject(error)
        }
        xhr.open("GET",url);
        xhr.send();
    })
}

readStudents("students.json")
.then((data)=>console.log(data))
.catch((err)=>console.log("Error !",err))