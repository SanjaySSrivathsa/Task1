var end= document.querySelectorAll(".drum").length;
for(var i =0;i<end;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , handle);
    function handle(){
        var buttonpress=this.innerHTML;
        makesound(buttonpress);
        buttonanime(buttonpress);
   }
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanime(event.key);
});

function makesound(key){
    switch (key){
        case "w":
            var audio=new Audio("crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("tom-3.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("kick-bass.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("snare.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("tom-1.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("tom-2.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("tom-4.mp3");
            audio.play();
            break;

    }
}

function buttonanime(anime){
    var activebutton= document.querySelector("."+anime);
    activebutton.classList.add("pressed");
    setTimeout(function() {
        activebutton.classList.remove("pressed");
    },100);
}

