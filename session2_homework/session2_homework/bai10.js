let mass=Number(prompt("Your weight in kg?"))
let height=Number(prompt("Your height in cm?"))
height/=100;
let BMI=mass/(height**2);
alert("Your BMI is "+ BMI);
if (BMI<16)
    alert("You are Severely underweight");
else if (BMI>16 , BMI<18.5)
    alert("You are Underweight");
else if (BMI>18.5 , BMI<25)
    alert("You are Normal");
else if (BMI>25 , BMI<30)
    alert("You are Overweight");
else if (BMI>30)
    alert("You are Obese");

