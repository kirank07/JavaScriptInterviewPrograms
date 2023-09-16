const spacePeople = () => {
    return new Promise((resolve,reject) => {
        const api = "http://api.open-notify.org/astros.json";
        const request = new XMLHttpRequest();
        request.open("GET",api);
        request.onload = () =>{
            if(request.status === 200){
                resolve(JSON.parse(request.response));
            }else{
                reject(Erro(request.statusText));
            }
        };
        request.onerror = (err) => reject(err);
        request.send();
    });
};

spacePeople().then((spaceData) => 
    (spaceData) = console.log(spaceData),
    (err)=> console.log(new Error("Can't load people data"))
);
