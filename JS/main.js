let tab = document.querySelectorAll(".tab"); // Selectionner tabs et contenus    //
let div = document.querySelectorAll(".content");


tab.forEach(function (element){
    // Pour chaque elemnt du tab, quand on click    //
    element.addEventListener("click", function() {
        
        tab.forEach(function (item) { // si on a pas clickeé sur ces tabs , on va les enlever    //
            item.classList.remove("tab-active");
        });

        div.forEach(function (item2) { // et pour content du text, enlever aussi    //
            item2.classList.remove("active");
        });

        this.classList.add("tab-active"); // que sur celle quelle on a clickquee apparaitre    //
        
       if (this.classList.contains("tab-menu1")) { // si on click sur tab1, alors text et image de ce contenu faire apparaitre    //
            document.querySelector(".menu1").classList.add("active");
            document.querySelector(".img1").classList.add("active");
       }
            //  Meme chose pour les  autres tabs   //
       else if (this.classList.contains("tab-menu2")) {
            document.querySelector(".menu2").classList.add("active");
            document.querySelector(".img2").classList.add("active");
       }

       else if (this.classList.contains("tab-menu3")) {
            document.querySelector(".menu3").classList.add("active");
            document.querySelector(".img3").classList.add("active");
       }
       
    
    });
    
    //   apparaitre dans console, pour voir ce qui ce passe  //
    console.log(this);

});


