const buton=document.querySelector("#btn");
const paraa=document.querySelector(".paraa")
const apikey="AVSjAaUVhX2JrU1U+pxwqw==D0pWvxTNuVWDRuJe";
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apikey,
    },
};
const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1"
 async function getjoke(){
    const response= await fetch(apiurl,options)
    const data= await response.json()
    console.log(data);
    paraa.innerText=data[0].joke
}
 
buton.addEventListener("click",getjoke);