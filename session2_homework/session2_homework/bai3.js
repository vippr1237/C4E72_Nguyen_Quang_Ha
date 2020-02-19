console.log("Cau a:")
for (let i=0;i<7;i++){
    console.log(i);
}
console.log("Cau b:")
let n=Number(prompt("Nhap so n:"));
for (let i=0;i<n;i++){
    console.log(i);
}
console.log("Cau c:")
for (let i=3;i<n;i++){
    console.log(i);
}
console.log("Cau d:")
let c=Number(prompt("Nhap so c:"))
for (let i=c;i<n;i++){
    console.log(i);
}
console.log("Cau e:")
for (let i=c;i<n;i+=3){
    console.log(i);
}
console.log("Cau f:")
let s=Number(prompt("Nhap so s:"))
for (let i=c;i<n;i=i+s){
    console.log(i);
}