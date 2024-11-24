let darkmode = localStorage.getItem("darkmode") // Sauvegarde de light ou dark mode de preference     //
const themeSwitch = document.getElementById("theme-switch") //  selections de differents classes et id    //
let titleText = document.querySelector(".titles")
let sun = document.querySelectorAll(".disable");
let moon = document.querySelectorAll(".disable2")
let lightsText = document.querySelector(".text_container1")
let lightsText2 = document.querySelector(".text_container2")
let darksText = document.querySelector(".text_container")
let darksText2 = document.querySelector(".text_container3")
let using = document.querySelector(".where_use")
let using2 = document.querySelector(".where_use2")

const enableDarkmode = () => { //  Si dark mode est activer    //
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")   //  sauvegarde de dark mode    //
    lightsText.classList.add("lightText");
    lightsText2.classList.add("lightText");
    darksText.classList.remove("darkText"); // apparaitre ou disparaitre texts et images  si darkmode est activer   //
    darksText2.classList.remove("darkText");
    titleText.innerHTML="DARK MODE";
    using.classList.remove("lightText");
    using2.classList.add("darkText");


    //  pour chaque element qui a classe disable     //
    sun.forEach(suns => {
        suns.classList.add("disable"); //  rajouter ou enlever disable    //
    });

    moon.forEach(moons => {
        moons.classList.remove("disable2");
    });
  
}


const disableDarkmode = () => { //   si dark mode est desactivée   //
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null) // sauvegarde de light mode     //
    darksText.classList.add("darkText");
    darksText2.classList.add("darkText")
    lightsText.classList.remove("lightText");  //   meme chose pour etxts et images mais pour light mode   //
    lightsText2.classList.remove("lightText");
    titleText.innerHTML="LIGHT MODE";
    using.classList.add("lightText");
    using2.classList.remove("darkText");

    sun.forEach(suns => {
        suns.classList.remove("disable"); //  pareil mais pour light mode    //
    });

    moon.forEach(moons => {
        moons.classList.add("disable2");
    });
    
}

if(darkmode === "active") enableDarkmode() // si dark est acktiver, fonction enabledark mode sera executee     //

themeSwitch.addEventListener("click", () => { //  si on click sur button    //
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode() : disableDarkmode() // si dark mode est active ou pas     //
})

/*
let image = document.querySelector("#image");
let title = document.querySelector("#title");
let bodyy = document.querySelector("#bodyy");
let header = document.querySelector("header");



image.addEventListener("click", function () {
    
    bodyy.classList.toggle("bodyyy");
    title.classList.toggle("white");
    header.classList.toggle("white2");
    header.classList.toggle("idk");
    
    
}); */



