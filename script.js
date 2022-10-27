let btnBuscar = document.querySelector("button");
let divNombre  = document.querySelector("div");

const displayName = (data) => {
    console.log(data);
    divNombre.innerText = "Nombre:: " + data.bio;
}
//********************************************************************************************************************* */
// async function postData(url) {
//     console.log("Inicio1");

//     const response = await fetch(url);
//     console.log("Fin1");
//     return response.json();
// }

// const Buscar = () =>{
//     console.log("Inicio");

//     postData("https://api.github.com/users/ArnaldoDT")
//     .then((param) =>{
//         displayName(param)
//     })
//     .catch((error)=>{
//         console.log('Error');
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Finalizo");
//     });

//     console.log("Fin");
// }
//********************************************************************************************************************* */
// function postData(url) {
//     const resultado = new Promise((resolve,reject) => { 

//         console.log("Inicio1");

//         let http_request = new XMLHttpRequest();
//         http_request.responseType = "json";
//         http_request.onreadystatechange = () => {
//             if ((http_request.readyState == 4) && (http_request.status == 200)){
//                 resolve(http_request.response);
//             }else{
//                 reject('Error');
//             }
//         }

//         http_request.open("GET", url);
//         http_request.send()
//         console.log("Fin1");

//     });
//     console.log(resultado);
//     return resultado
    
// }

// const Buscar = () =>{ 
//     console.log("Inicio");

//     postData("https://apii.github.com/users/ArnaldoDT")
//     .this((salida) =>{
//         console.log(salida);
//     })
//     // .catch((err)=>{
//     //     console.log(err);
//     // })
//     // .finally(()=>{
//     //     console.log("Finalizo");
//     // })

//     console.log("Fin");
// }
//********************************************************************************************************************* */


const Buscar = () =>{ 
    console.log("Inicio");

    let data = new Promise(function(resolve){
        $.get("https://api.github.com/users/ArnaldoDT", resolve);
    })
    .then((data)=>{
        displayName(data);
    })
    .finally(console.log("Termino"))

    console.log("Fin");
    return data
}

btnBuscar.addEventListener("click",Buscar);