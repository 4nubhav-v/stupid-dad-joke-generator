// const req=new XMLHttpRequest();
// req.onload=function(){
//     console.log("Its loaded");
//     const jokes = JSON.parse(this.responseText).joke;
//     getjokes(jokes);
// };
// req.onerror=function(){
//     const list=document.querySelector("#newli");
//     const li=document.createElement("li");
//     li.innerText="Connection not found :(";
//     list.appendChild(li);
//     console.log(this);
// };
// req.open("GET","https://icanhazdadjoke.com/");
// req.setRequestHeader("Accept","application/json");
// req.send();
// function getjokes(jk){
//     const list=document.querySelector("#newli");
//     const li=document.createElement("li");
//     li.innerText=jk;
//     list.appendChild(li);
// }
const clickbtn = document.querySelector("#click");
const list = document.querySelector("#newli");
clickbtn.addEventListener("click", function add(){
        getDadJokes();
})
const getDadJokes = async () => {
    try{
    const res = await axios.get("https://icanhazdadjoke.com/",{headers :{Accept: "application/json"}});
    console.log(res.data.joke);
    jokes = res.data.joke;
    const li = document.createElement("li");
    li.innerText= jokes;
    list.appendChild(li);
    }
    catch(e){
        console.log("Error",e.code);
    }
};
// clickbtn.addEventListener("click", function add(){
//     const li = document.createElement("li");
//     li.innerText= jokes;
//     list.appendChild(li);
// })