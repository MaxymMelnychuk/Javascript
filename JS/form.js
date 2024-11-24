let form = document.querySelector("form"); //  Selectionner form   //

form.addEventListener("submit", function(event) { // fonction quand on click sur button    //
    event.preventDefault(); // verifier avant d'envoyer    //

    let pseudo = document.querySelector("#pseudo"); //  selectionner les id et classes necessaires   //
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let password2 = document.querySelector("#password2");
    let successContainer = document.querySelector(".message-success")
    let errContainer = document.querySelector(".message-error");
    
    errContainer.innerHTML = ''; //  Container pour erreur avec text   //

    event.preventDefault(); // verifier avant denvoyer    //
    
    if (pseudo.value.length < 6) { // pseudo doit avoir plus de 6 caracteres    //
        console.log("Pseudo invalide");
        pseudo.classList.add("error"); // si pas de 6, container avec erreur sactive    //
        successContainer.classList.remove("visible")
        let err = document.createElement("li"); //  cree element li avec erreur   //
        err.innerText = "Le champ pseudo doit contenir au moins 6 caractères";
        errContainer.appendChild(err);
    } else {
        console.log("Pseudo valide"); //   si plus de 6  //
        pseudo.classList.add("success"); //  rejouter succes avec bg vert   //
        pseudo.classList.remove("error"); // enlever bg error    //
    }

    if (email.value == "") { //  si le champ email est vide    //
        console.log("Mail invalide");
        email.classList.add("error"); // alors mettre erreur    //
        successContainer.classList.toggle("visible")
        let err = document.createElement("li"); //text erreur     //
        err.innerText = "Le champ email ne peut pas etre vide";
        errContainer.appendChild(err);
    } else {
        console.log("Mail valide"); //  sinon mail est valide   //
        email.classList.add("success"); //  rajouter succes bg   //
        email.classList.remove("error");
        successContainer.classList.remove("visible")
    }

    
    let passCheck = new RegExp( // conditions pour mot de passe: Avoir une lettre maj et min au moins une chiffre et caractere special    //
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );
            //Mot de passe doit avoir plus de 10 caracteres et davoir ce qui est ecrit en haut     //
    if (password.value.length < 10 || passCheck.test(password.value || password.value == "") == false) {
        errContainer.classList.add("visible"); // Si cest pas le cas alors afficer erreur    //
        password.classList.add("error");
        successContainer.classList.remove("visible")
        
        let err = document.createElement("li");
        err.innerText = "Le mot de passe doit faire 10 caractères minimum, contenir minuscule, majuscule, chiffre, caractère spécial";
        errContainer.appendChild(err);

        console.log("Mot de passe invalide");
    } else {
        console.log("Mot de passe valide"); // Sinon montrer bg vert que mot de passe correspond    //
        password.classList.add("success");
        password.classList.remove("error")
    }

    //  Verifier si le mot de passes correspondent   //
    if (password2.value !== password.value || password.value == "") {
        console.log("Les mots de passe ne correspondent pas");
        successContainer.classList.remove("visible")
        password2.classList.add("error"); //   erreur  //
        let err = document.createElement("li");
        err.innerText = "Les mots de passe ne correspondent pas";
        errContainer.appendChild(err);
    } else {
        console.log("Les mots de passe correspondent");
        password2.classList.add("success");
        password2.classList.remove("error") //  reussite   //
    }


    if( // Si toutes champ ont class success cest a dire qiil correspondent bien ce que on veut  //
        pseudo.classList.contains("success") &&
        email.classList.contains("success") &&
        password.classList.contains("success") &&
        password2.classList.contains("success")
    ) {
        errContainer.classList.remove("visible") // supprimer container erreur    //
        successContainer.classList.add("visible") // afficher formulaire envoyer    //
    }

});
