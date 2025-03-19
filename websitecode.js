var surprising = false

function Surprise(){
    const button = document.querySelector('button')
    if (surprising == false){
        document.getElementById("surprise").style.display = "block";
        surprising = true;
        button.innerText = "Unsurprise me!";
    }
    else{
        document.getElementById("surprise").style.display = "none";
        surprising = false;
        button.innerText = "Surprise me!";
    }
}