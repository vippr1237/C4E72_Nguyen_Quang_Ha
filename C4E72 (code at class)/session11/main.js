
const body= document.querySelector('body');
render();
function render(){
    const fetchData = fetch("https://5ebd20d6ec34e90016191f8a.mockapi.io/C4E72");
   
fetchData.then((data)=>{

    data.json().then((realData)=>{
        
        realData.forEach((item)=>{
            let html=`
            <div style="border: 1px solid black ;display:inline-block; width:150px">
            <p>${item.name}</p> 
            
            <img src='${item.avatar}'>
            
            <button class="delete">Delete</button>
            </div>`;
            body.insertAdjacentHTML('beforeend',html)

        })
        realData.forEach((item,index)=>{
            createDelete(item.id,index)
        })
       
})
})
}
function createDelete(n,index){
const deleteBtn=document.getElementsByClassName('delete');

    deleteBtn[index].addEventListener('click',async ()=>{
        let res= await fetch(`https://5ebd20d6ec34e90016191f8a.mockapi.io/C4E72/${n}`,{
        method : "delete"
        })
        body.innerHTML='';
        render();
})
}



// const deleteBtn=document.getElementById('btn');
// function del(n){
// deleteBtn.addEventListener('click',async ()=>{
//     let res=fetch(`https://5ebd20d6ec34e90016191f8a.mockapi.io/C4E72/${n}`,{
//     method : "delete"
//     })
// })
// }
function postData(url,data){
    fetch(url,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

const formUserInput= document.getElementById('form');

formUserInput.addEventListener("submit",(e)=>{
    e.preventDefault();
    let data={
        "name": formUserInput['User'].value
    };
    postData("https://5ebd20d6ec34e90016191f8a.mockapi.io/C4E72",data);
    console.log(data);
    
})