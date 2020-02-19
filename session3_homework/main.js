//Cau1
// let a=5;
// let b=6;
// console.log(a, b);
// let c=prompt("Enter first number")
// let d=prompt("Enter second number")

// //solution1
// //let temp=a;
// //a=b;
// //b=temp;
// //temp=c
// //c=d;
// //d=temp;

// //solution2
// //[a, b ]=[b, a]
// //[c, d]=[d, c]

// //solution3
// //b = [a, a = b][0];
// //d=[c,c=d][0];

// console.log(a, b);
// console.log(c, d);
//Cau2
// const s="A naked woman robbed a bank nobody saw her face";
// let a= s.split(' ');
// console.log(a); //expect to retrun ["A", "naked", "woman", etc]
// const nba="Lebron, Curry, Durant, Harden, Kobe(Rip:(( ), Kawhi, Westbrook, Giannis";
// let b=nba.split(', ', 5); 
// console.log(b); //expect to return top 5 nba player ["Lebron", "Curry", etc]
// Cau3
// const a=[4, 5, 7, -8];
// console.log(...a);
// const b=["love", "hate", "peace"];
// console.log(...b);
//Cau4
// let clothesType = [ //INIT
//     'quan dai',
//     'ao coc',
//     'ao T',
//     'hoodie',
//     'ao dai tay'
// ]
// let option = prompt("Hi there, welcome to shop admin panel, what do you want?(C,R,U,D)").toUpperCase();
// if (option == 'C') {
//     let newClothes = prompt("Enter clothes type:");
//     clothesType.push(newClothes); //CREATE
//     alert("Done");
//     console.log(...clothesType);  
// }
// else if (option == 'R') {
//     console.log("This is your stuff:")
//     console.log(...clothesType);  
// }
// else if (option == 'U') {
//     let updatePos = Number(prompt("Enter the position you want to update"));
//     if (Number.isNaN(updatePos))
//         console.log("Lam on nhap so")
//     else{
//         if (updatePos >=0 && updatePos < clothesType.length){
//             let updateClothes = prompt("Enter new clothes:");
//             clothesType[updatePos]=updateClothes;
//             alert("Done");
//             console.log(...clothesType);   
//         }
//         else {
//             alert("Ban nhap so qua lon'!")
//         }
// } 
// }
// else if (option == 'D') {
//     let delPos = Number(prompt("Enter delete position"));
//     if (Number.isNaN(delPos))
//         alert("Lam on nhap so");
//     else {
//         if (delPos >= 0 && delPos < clothesType.length) {
//             clothesType.splice(delPos, 1);//DELETE
//             alert("Done")
//             console.log(...clothesType);  
//         }
//         else {
//             console.log("You have entered wrong, try again");
//         }
//     }
// }
// else{
//     alert("This command is not supported");
// }
//Bai5
// let a=prompt("Enter a squence of Number, separated by commas(,)").split(',');
// let sum=0;
// console.log(a);
// for (let i=0;i<a.length;i++)
//     sum+=Number(a[i]);
// alert(`The sum of them is ${sum}`);
//Bai6
// let a=prompt("Enter a squence of Number, separated by commas ',' ").split(',');
// let min=Number(a[0]);
// a.forEach((dgit) =>{
//     if (min>Number(dgit))
//         min=dgit;
// })
// alert(`The smallest number is ${min} `);
//Bai7
// const arr=[3, 4, 6, -9, 10, -88, 2]
// let a=Number(prompt("Enter a Number"));
// let cal=0;
// let pos=[];
// for (let i=0;i<arr.length;i++){
//     if (arr[i]==a){
//         cal++;
//         pos.push(i);
//     }
// }
// if (cal!=0)
//     alert(`${a} is FOUND in my array at index ${pos}`);
// else
//     alert(`${a} is not FOUND in my array`);
//Bai8
//8.1
// let ss=[5, 7, 300, 90, 24, 50, 75];
// const defsize=8;
// console.log("Hello my name is Quang Ha and here is my sheep size:")
// console.log(...ss);
// //8.2
// let max=Math.max.apply(null,ss);
// console.log(`Now my biggest sheep has size ${max}, let shave it`);
// //8.3
// ss[ss.indexOf(max)]=defsize;
// console.log("After shearing, here is my flock:");
// console.log(...ss);
// //8.4 +8.5
// for (let i = 0; i < 4; i++) {
//     for (let i = 0; i<ss.length; i++)
//         ss[i]+=50;
//     console.log(`MONTH ${i + 1}`)
//     console.log("One month has passed, my sheep has grown, here are their sizes");
//     console.log(...ss);
//     let max = Math.max.apply(null, ss);
//     console.log(`Now my biggest sheep has size ${max}, let shave it`);
//     ss[ss.indexOf(max)] = defsize;
//     console.log("After shearing, here is my flock:");
//     console.log(...ss);
// }
// //8.6
// let total=0;
// ss.forEach((dgit) =>{
//     total+=dgit;
// });
// console.log(`My flock has size in total: ${total}`)
// console.log(`I would get ${total} * 2$ = ${total*2}`);
//Bai9
// clear()
// setshape("rocket")
// const colors = ['red', 'gray', 'blue', 'purple', 'cyan']
// let l=100;
// for (let i=0;i<4;i++){
//    color(colors[i])
//    l-=20
// for (let i=0;i<4;i++){
//   fd(l);
//   rt(90)
// }
// }
//Bai10
//let name=prompt("Enter a squence of names:").split(', ');
//solution1
// let copy=[];
// name.forEach(element => {
//     copy.push(`<${element}>`);
// });
// alert(`${name} => ${copy}`)
//solution2
// const map1= name.map(str =>`<${str}>`);
// alert(`${name} => ${map1}`)
//Bai11
//let a=prompt("Enter a squence of numbers:").split(', ');
//solution1
// let oddnum=[];
// a.forEach(element => {
//     if (element%2!=0)
//         oddnum.push(element);
// })
// alert(`${a} => ${oddnum}`);
//solution2
// let oddnum = a.filter(a => a%2!=0);
// alert(`${a} => ${oddnum}`);

