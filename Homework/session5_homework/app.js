//1 Reverse Object
// function reverseObject(oj){
//     let noj={}
//     for (let x in oj){
//         noj[oj[x]]=x
//     }
//     return noj
// }
// oj = {
//     'Nguyen Minh Huy': 'name',
//     'MindX C4E': 'class'
// }
// let reoj=reverseObject(oj)
// console.log(reoj);
//2 Key and Values
// function keysAndValues(obj){
//     let kav=[];
//     for (let x in obj)
//         kav.push(x);
//     for (let x in obj)
//         kav.push(obj[x]);
//     return kav
// }
// obj={
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(keysAndValues(obj));
//3 Frequency Distribution
// function getFrequencies(array){
//     let freq={};
//     for (i=0;i<array.length;i++){
//         let count=0
//         for (let x in freq){
//             if (array[i]==x){
//                 count++;
//             }
//         }
//         if (count==0){
//         let temp=[]
//         temp=array.filter(function(x){
//             return x==array[i];
//         })
//         freq[array[i]]=temp.length;
//     }
//     }
//     return freq;
// }
// array=["a","b","a","a","a"];
// console.log(getFrequencies(array));
//4 Map the letter in a string
// function mapLetters(string){
//     let kmap={}
//     for (let i=0;i<string.length;i++){
//         let count=0;
//         for (let x in kmap){
//             if (string.charAt(i)==x)
//             count++;
//         }
//         if (count==0){
//             pos=[];
//             for (let j=i;j<string.length;j++){
//                 if (string.charAt(i)==string.charAt(j))
//                 pos.push(j);
//             }
//         kmap[string.charAt(i)]=pos;
//         }
//     }
//     return kmap;
// }
// console.log(mapLetters("dodo"));
// 5 KhA bAnH wOrDs
// function khaBanh(string){
//     let kBstyle='';
//     console.log(string)
//     for (let i=0;i<string.length;i++){
//         if (i==0){
//             kBstyle+=string[i].toUpperCase();
//         }
//         else if (kBstyle[i-1]===kBstyle[i-1].toLowerCase() && kBstyle[i-1]!==' '){
//             kBstyle+=string[i].toUpperCase();
//         }
//         else if (kBstyle[i-1]===kBstyle[i-1].toUpperCase() && kBstyle[i-1]!==' '){
//             kBstyle+=string[i].toLowerCase();
//         }
//         else if (kBstyle[i-1]===' '){
//             if (kBstyle[i-2]===kBstyle[i-2].toLowerCase()){
//                 kBstyle+=string[i].toUpperCase();
//             }
//             else if (kBstyle[i-2]===kBstyle[i-2].toUpperCase()){
//                 kBstyle+=string[i].toLowerCase();
//             }
//         }
//     }
//     return kBstyle;
// }
// console.log(khaBanh("Kha Banh xin chao moi nguoi"));
//6 Censored String
// function censoredString(string){
//     arr=['u','e','o','a','i']
//     let str='';
//     for (let i=0;i<string.length;i++){
//         if (arr.indexOf(string[i])!=-1){
//             str+='*'
//         }
//         else{
//             str+=string[i];
//         }
//     }
//     return str;
// }
// console.log(censoredString("Hello World"))


