var surprising = false

function Surprise(){
    if (surprising == false){
        document.getElementById("surprise").style.display = "block";
        surprising = true
    }
    else{
        document.getElementById("surprise").style.display = "none";
        surprising = false
    }
}