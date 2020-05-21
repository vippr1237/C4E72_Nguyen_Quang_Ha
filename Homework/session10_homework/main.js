// async function fetchData(){
//     const quote=await fetch(`http://quotes.rest/qod.json`);
//     const data=await quote.json();
    
//     return data;
// }
// function render(){
//     const data = fetchData().then((data)=>{
//         const body=document.querySelector('body')
//         const quoteContent=data.contents.quotes[0].quote
//         const quoteAuthor=data.contents.quotes[0].author;
//         const html=`
//         <p style="font-weight:bold; font-size:20px"> ${quoteContent}<p>
//         <p> ${quoteAuthor}<p>
//         `
//         body.insertAdjacentHTML('beforeend',html);
//     })
   
// }
// render();
// function hipHop(){
//     return new Promise((resolve, reject) => {
//     setTimeout(() => resolve('hip hop never die'), 3000);
//   });
// }
  
//   // .catch(f) is the same as promise.then(null, f)
// //   promise.then(alert); // shows "Error: Whoops!" after 1 second

// async function alo(){
//     const hiphop = await hipHop();
//     console.log(hiphop);
// }
// alo();

async function fetchData(){
  const mySquad= await fetch('https://sheetdb.io/api/v1/w2hldhrzppxua');
  const realSquad= await mySquad.json();

  console.log(realSquad);
}
fetchData();