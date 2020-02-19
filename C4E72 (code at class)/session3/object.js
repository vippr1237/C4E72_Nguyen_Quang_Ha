// let person =['Cuong', 96, 'Ha Noi', 'dev', 'false', 1];

let person={
    name: 'Cuong',
    yob: 96,
    home: 'Ha Noi',
    backpack: [5000, 'lan nach'],
    job: {
        name: 'dev',
        language: ['js', 'python']
    }
}// INIT
//let key=prompt()
// console.log(person.name); //READ
// console.log(person['key']) //READ

for (let k in person){
    console.log(person[k])
}
job=person.job //READ
backpack=person.backpack ; //READ
person.height=175;//CREATE
person['height']=175;//CREATE

person.home='My Tho'//UPDATE
delete person.job //DELETE
for(let k in person){
    console.log(k, person[k])
}
console.log(console)