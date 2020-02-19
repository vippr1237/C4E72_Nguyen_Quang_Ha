// //let monAn1='pho'
// //let monAn2='com'
// //let monAn3='mi'
// //let monAn4='bun'
// //let monAn5='chao'

// // let monAn=['pho', 'com', 'mi', 'bun', 'chao', 'thit cho'] //init
// // console.log(monAn)
// //let a= prompt()
// //let b= prompt()
// // monAn.splice(0, 1)//DELETE
// // monAn[1]='bun dau mam tom'; //UPDATE
// // monAn.push('thit lon'); //CREATE
// // for (let i=0;i<monAn.length;i++){ //READ
// //     console.log(i, monAn[i]);
// // }
// let clothesType=[ //INIT
//     'quan dai', 
//     'ao coc', 
//     'ao T', 
//     'hoodie', 
//     'ao dai tay'
// ]
// let option=prompt("What do you want to do? (C,R,U,D)")
// if (option=='C'){
// let newClothes=prompt("Enter clothes type:");
// clothesType.push(newClothes); //CREATE
// }
// else if (option=='R'){
// console.log("This is your stuff:")
// }
// else if (option=='U'){
// let updatePos=prompt("Enter type of clothes you want to change"); 
// let updateClothes=prompt("Enter new clothes:");
// for (let i=0; i<clothesType.length;i++){
//     if (updatePos.toLowerCase()==clothesType[i].toLowerCase())
//         clothesType[i]=updatePos;
// }
// }
// else if (option=='D'){
// let delPos=prompt("Enter delete position");
// if (Number.isNaN(delPos))
//     console.log("Lam on nhap so");
// else{
// if (delPos>=0 && delPos<newClothes.length){
//     clothesType.splice(delPos,1);//DELETE
// }

// else {
//     console.log("You have entered wrong, try again");
// }
// }
// }
// for (let i=0;i<clothesType.length;i++){ //READ
//     console.log(clothesType[i]);
// }
