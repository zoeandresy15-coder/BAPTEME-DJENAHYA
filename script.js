const enveloppe = document.getElementById("enveloppe");
const music = document.getElementById("music");

let ouvert = false;


enveloppe.addEventListener("click",()=>{

    if(!ouvert){

        enveloppe.classList.add("open");

        ouvert=true;


        music.volume = 0.4;

        music.play();

    }

});
