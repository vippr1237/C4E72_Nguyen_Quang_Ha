async function fetchData(){
    const quote=await fetch(`http://quotes.rest/qod.json`);
    const data=await quote.json();
    
    return data;
}
function render(){
    const data = fetchData().then((data)=>{
        const body=document.querySelector('body')
        const quoteContent=data.contents.quotes[0].quote
        const quoteAuthor=data.contents.quotes[0].author;
        const html=`
        <p style="font-weight:bold; font-size:20px"> ${quoteContent}<p>
        <p> ${quoteAuthor}<p>
        `
        body.insertAdjacentHTML('beforeend',html);
    })
   
}
render();

