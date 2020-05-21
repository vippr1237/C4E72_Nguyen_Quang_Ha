function signUp(){
    const signUpForm=document.getElementById("signUp");
    const signUpbtn=document.getElementById("signUpbtn");
    signUpbtn.addEventListener("click",(e)=>{
        e.preventDefault();
        if (signUpForm['password'].value==signUpForm['confirmPas'].value){
            console.log(signUpForm['confirmPas']);
        let data={
            "userName": signUpForm['userName'].value,
            "passWord": signUpForm['password'].value
        }
        
        postData("https://5ec2836a8ebdcc0016a59def.mockapi.io/confession",data);
        location.replace("F:/C4E72-MindX/C4E72 (code at class)/session12/signin.html")
    }
    else 
        alert("Mat khau khong khop moi nhap lai");    
    })

    
}
signIn();
render();
signUp();
async function signIn(){
    const data= await fetchData();
    const signInForm= document.getElementById("signIn");
    const signInbtn= document.getElementById("signInBtn");
    signInbtn.addEventListener("click",(e)=>{
        e.preventDefault();
        if (check(signInForm['userName'].value,signInForm['password'].value,data)==1)
            location.replace("F:/C4E72-MindX/C4E72 (code at class)/session12/index.html")
        else
            alert("Dang nhap khong thanh cong")
    })
}

function check(name,pas,data){
    let count=0;
    data.forEach((item)=>{
        if (name==item.userName && pas==item.passWord)
            count++;
    })
    if (count>=1)
        return 1;
    else
        return 0;
}

async function fetchData(){
    const fetchData = await fetch("https://5ec2836a8ebdcc0016a59def.mockapi.io/confession")
    const data= await fetchData.json();
    return data
}
function render(){

    
    const submit= document.getElementById("submit");
    const confession=document.getElementById("confession");

    submit.addEventListener("click",()=>{
        let data={
            "confession": confession.value
        };
        postData("https://5ec2836a8ebdcc0016a59def.mockapi.io/confession",data);
        confession.value=null;
    })

}

function postData(url,data){
    fetch(url,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}