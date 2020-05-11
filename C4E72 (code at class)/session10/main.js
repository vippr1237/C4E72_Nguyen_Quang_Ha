// async function fetchData(){
//     try{
//     const item = await diCho();
//     console.log(item); 
//     } catch(error)
//         {
//             console.log(error);
//     }
// }



// function diCho(){
//     return new Promise((resolve,reject)=>{
//         const random=Math.random();
//         console.log(random);
//         const item = 'mo rau';
//         if (random < 0.5)
//             resolve(item);
//         else
//             reject('do tac duong');
//     })
// }

// // diCho().then((data)=>{
// //     console.log(data);
// // }).catch(()=>{
// //     console.log("khong co data j hot");
// // })

//     const pokemonData = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR0TsXTd_Iiv2isR71SK4xqTu9S56jWo0trFyakkbLGom3UEfsphjMquKdw').then((data)=>{
//         data.json().then((realData)=>{
//             console.log(realData);
//         });
//     })
// // fetchData();

// async function set(){
// setTimeout(()=>{
//     console.log('da 5 giay troi qua');
// },5000);
// }
async function fetchData(n){
const pokemonData=await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`);
const realPokeData=await pokemonData.json();

return realPokeData;
}
for (let i=1;i<=100;i++){
fetchData(i).then((data)=>{
    if (data.weight<500){
    const name=data.name;
    const weight= data.weight;
    const abilities=data.abilities;
    const rootElement=document.getElementById('root');
    const html=`
    <p>Name: ${name}</p>
    <p>Weight: ${weight}</p>
    `;
    rootElement.insertAdjacentHTML("beforeend",html);
    abilities.forEach((info,index)=>{
        rootElement.insertAdjacentHTML("beforeend",`<li>abilites ${index+1}: ${info.ability.name}</li>`);
    })
    const types=data.types;
    types.forEach((inFo)=>{
        rootElement.insertAdjacentHTML("beforeend",`<li> type name: ${inFo.type.name}`);
    })
    const img=data.sprites.front_default;
    rootElement.insertAdjacentHTML("beforeend",`<img src='${img}'>`);
    }
});

}


