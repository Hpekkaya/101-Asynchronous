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
    debugger;
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

debugger;
getName1(getSurname1)


