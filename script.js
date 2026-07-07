const enveloppe = document.getElementById("enveloppe");
const music = document.getElementById("music");
const retour = document.getElementById("retour");

let ouvert = false;


enveloppe.addEventListener("click",()=>{

    if(!ouvert){

        enveloppe.classList.add("open");

        ouvert=true;


        music.volume = 0.4;

        music.play();

    }

});

retour.addEventListener("click",()=>{

    enveloppe.classList.remove("open");

    ouvert=false;

});
