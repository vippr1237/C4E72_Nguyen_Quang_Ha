//1
// const plusElement= document.getElementById('plus');
// const subtract=document.getElementById('subtract');
// const countElement=document.getElementById('count');
// let count=0;
// countElement.innerText=count;
// plusElement.addEventListener('click', function(){
//     count++;
//     countElement.innerText=count;
// })
// subtract.addEventListener('click',function(){
//     count--;
//     countElement.innerText=count;
// })
//2
// const clockE=document.getElementById("clock");
// const startE=document.getElementById("start");
// const stopE=document.getElementById("stop"); 
// const input=document.getElementById("input")
// startE.addEventListener('click',function(){
//     let curtime=input.value;
//     clockE.innerText=curtime;
//     let t=setInterval(function(){
//         curtime--;
//         clockE.innerText=curtime;
//         if (curtime==0){
//             clearInterval(t);
//             }
//     },1000);
//     stopE.addEventListener("click",function(){
//        stopClock(t)
//     })
// })
// function stopClock(t){
//     clearInterval(t);
// }
//3
let timeSheetData=[
    {
        project: "Learn front-end",
        task: "Learn HTML",
        "timeSpent": 6
    },
    {
        project: "Learn front-end",
        task: "Learn CSS",
        "timeSpent": 8
    },
    {
        project: "Learn front-end",
        task: "Learn Js Variable and Data Type",
        "timeSpent": 6
    },
    {
        project: "Learn git",
        task: "Learn git basic",
        "timeSpent": 2
    }
]
const tbody=document.getElementById("ts_body");
const add=document.getElementById("add");
const newProject=document.getElementById("project");
const newTask=document.getElementById("task");
const newTimeSpent=document.getElementById("timeSpent");
tbody.innerHTML="";
timeSheetData.forEach(addContent);
add.addEventListener("click",addNew)

function addContent(item,index){
tbody.innerHTML+=`
    <tr>
    <td>${item['project']}</td>
    <td>${item['task']}</td>
    <td>${item["timeSpent"]}</td>
    <td><button onclick="removeLine(${index})">x</button></td>
    </tr>`
}
function addNew(){
    timeSheetData.push({project: newProject.value,
    task: newTask.value,
    "timeSpent": Number(newTimeSpent.value)})
    addContent(timeSheetData[timeSheetData.length-1])
}
function removeLine(index){
    timeSheetData.splice(index,1);
    tbody.innerHTML="";
    timeSheetData.forEach(addContent);
}


