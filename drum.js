// Eventlistner listens command and then executes it,like due to click on button it displays message in function
// document.querySelector("button").addEventListener("click",handleClick);

// function handleClick(){
//     alert("I got clicked");
// }

// using anonymous function
// document.querySelector("button").addEventListener("click",function(){
//     alert("I got clicked");
// });

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    // adding event listner to all buttons
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // var audio = new Audio('sounds/crash.mp3');
        // audio.play();
        // this.style.color="white";
        var buttonHtml=this.innerHTML;  
        makeSound(buttonHtml);
    });    
}


 // when key is pressed
//  event gives all infromation of the key pressed
 document.addEventListener("keydown",function(event){
    makeSound(event.key)
 });

 function makeSound(key)
 {
    switch(key){
        case("w"):
            var crash = new Audio('sounds/crash.mp3');
            crash.play();  
            break;

        case("a"):
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();  
            break;

        case("s"):
            var snare = new Audio('sounds/snare.mp3');
            snare.play();  
            break;

        case("d"):
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();  
            break;

        case("j"):
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();  
            break;

        case("k"):
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();  
            break;

        case("l"):
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();  
            break;

        default:
            console.log(key)
 }
}