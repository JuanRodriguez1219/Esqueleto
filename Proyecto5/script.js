let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoquieto");
let botonSonido = new Audio ('./sound/BotonBailar.mp3');
let botonAudio = new Audio  ('./sound/Audio.mp3')

function bailar(){
    if(esqueleto=="off") {
        esqueleto = "on";
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click',()=>{
            botonSonido.play();
        })
        esqueletoStop.addEventListener('click',()=>{
            botonAudio.play();
        })
        console.log("On");
    }else {
        esqueleto = "off"
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener("click",()=>{
            botonAudio.pause();
        })
        
   }
}