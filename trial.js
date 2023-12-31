// callBack : Bir fonksiyou bir fonksiyona parametre geçerek
// asenkron yapıyı senkrona çevirir
// As assing parameters to another function

getName = (callback) => {
    setTimeout(()=> {
        console.log("Hakan");
        callback()
    },1000)   
}
getSurname = () => {
    setTimeout(()=>console.log("Pekkaya"),500)
}

getName(getSurname)

// 2nd alternative

getName1 = (callback) => {
    setTimeout(()=> {
        let name = "Hakan";
        callback(name)
    },1000)   
}
getSurname1 = (name) => {
    setTimeout(()=> {
        let surname = "Pekkaya";
        console.log(name, surname);
    },500)       
}
getName1(getSurname1)


// 3rd alternative

getName2 = (callback) => {
    setTimeout(()=> {
        let name = "Hakan";
        callback(name)
    },1000)   
}
getSurname2 = (name, surname) => {
    setTimeout(()=> {
        let surname = "Pekkaya";
        callback(surname);
    },500)       
}
getName2((name)=>{
    getSurname2(name, (surname)=>{
        console.log(name, surname)
    })
})

