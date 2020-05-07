// let btn1=document.getElementById("button1")
// let btn2=document.getElementById("button2");
// btn1.addEventListener("click", (e1) => {
//     console.log(e1.target);
// })
// btn2.addEventListener("click", (e2) =>{
//     console.log(e2.target);
// })
// const input=document.getElementById("input");
// input.addEventListener("keydown", (e) => {
//     console.log(e.key);
// })

let items=["Backpack","MiBand watch","Ring"];
console.log(items);
let list=document.getElementById("list");
list.innerHTML="";
let remove=document.getElementsByClassName("remove");
items.forEach(addContent);
const input=document.getElementById("input");
const btn=document.getElementById("btn");
btn.addEventListener("click", addNew)
function addNew(){
    items.push(input.value);
    console.log(items);
    addContent(items[items.length-1],items.length-1);
    input.value=null;
}
function removeContent(index){
    items.splice(index,1);
    console.log(items);
    list.innerHTML="";
    items.forEach(addContent);
}

function addContent(item,index){
    list.insertAdjacentHTML("beforeend",`<li>${item} <button class="remove">remove</button></li>`);
    remove[index].addEventListener("click", ()=>{
        removeContent(index);
    })
}
