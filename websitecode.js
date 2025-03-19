var surprising = false

function Surprise(){
    const button = document.querySelector('button')
    const surpriseaudio = document.getElementById("surpriseaudio")
    if (surprising == false){
        document.getElementById("surprise").style.display = "block";
        surprising = true;
        button.innerText = "Unsurprise me!";
        surpriseaudio.load();
        surpriseaudio.play();
    }
    else{
        document.getElementById("surprise").style.display = "none";
        surprising = false;
        button.innerText = "Surprise me!";
        surpriseaudio.pause();
    }
}