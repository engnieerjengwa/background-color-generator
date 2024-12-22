var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


























// var input = document.getElementById("input");
// var button = document.getElementById("btn");
// var ul = document.querySelector("ul");

// button.addEventListener("click", ()=>{
//     if(input.value.length > 0){
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value ="";
//     }
// });

// input.addEventListener("keypress", (event)=>{
//     if(input.value.length > 0 && event.keyCode === 13){
//         var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value ="";
//     }
// });




































// var database = [
//     {
//         username: "phillip",
//         password: "supersecret"
//     }
// ];

// var newsFeed = [
//     {
//         user: "Bob",
//         timeline: "I am tired from all that learning"
//     },
//     {
//         user: " Sally",
//         timeline: "JavaScript is soo cool"
//     }
// ];

// var userPrompt = prompt("What's your username?");
// var passPrompt = prompt("What's your password?");

// function signIn(user, pass){
//     if(user === database[0].username && pass=== database[0].password){
//         console.log(newsFeed);
//     }
//     else{
//         alert("Wrong username or password!");
//     }
// }

// signIn(userPrompt, passPrompt);