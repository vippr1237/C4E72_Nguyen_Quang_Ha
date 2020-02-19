console.log("Cau a:");
for (let i=0;i<3;i++)
    console.log("L")
    for (let i=0;i<3;i++)
    console.log("H")
console.log("Cau b:");
let n=Number(prompt("Enter the total number of L's and H's"));
for (let i=0;i<n;i++){
    if (i<(n/2))
    console.log("L");
    else
    console.log("H");
}
console.log("Cau c:")
for (let i=0;i<8;i++){
    if (i%2==0)
    console.log("0");
    else
    console.log("1")
}
console.log("Cau d:");
for (let i=0;i<n;i++){
    if (i%2==0)
    console.log("0");
    else
    console.log("1");
}