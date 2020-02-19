//let a=true;
//console.log(3==3);
/*
yob=Number(prompt("Dien nam sinh vo ban oi!!"));
age=2020-yob;
console.log(age); 
if (age<18){
    console.log("em chua 18!!!")
}

else if (age>21){

    console.log("chao anh zai");
}

else{

console.log("Chao mung den vs trang web");

}
setshape("turtle")
for(let i=3;i>=3;i--)

 for(let j=0;j<i;j++){
    fd(100)
    rt(360/i)
 }
*/
let a=parseInt(prompt("Nhap so a:"));
let b=parseInt(prompt("Nhap so b:"));
let c=parseInt(prompt("Nhap so c:"));

if (a==0){
    if (b==0){
        if (c==0)
            console.log("Phuong trinh vo so nghiem!");
        else
            console.log("Phuong trinh vo nghiem!")
    }
    else
    console.log("Phuong trinh co nghiem duy nhat:",-c/b);
}
else{
    let delta=b**2 - 4*a*c;
    if (delta<0)
    console.log("Phuong trinh vo nghiem");
    else if (delta==0)
    console.log("Phuong trinh co nghiem kep x1=x2=", -b/2*a);
    else{
    let x1=(-b+(delta**0.5))/(2*a);
    let x2=(-b-(delta**0.5))/(2*a);
    console.log( x1 ,x2);
    console.log();
}
}