
//------------------------------------------------------ Initialisation du local storage
let prodLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.table(prodLocalStorage);
const positionEmptyCart = document.querySelector("#cart__items");
//------------------------------------------------------------------------------------------------------------ 



//------------------------------------------------------------------------------------------------------------  Si le panier est vide
function getpanier(){
if (prodLocalStorage === null || prodLocalStorage == 0) {
    const emptyCart = `<p>Aucun Articles dans le panier</p>`;
    positionEmptyCart.innerHTML = emptyCart;
} // ---------------------------------------------------------sinon rajout des element au panier
    else { 
        
for (let produit in prodLocalStorage){

    if(prodLocalStorage.idProduit && prodLocalStorage.couleurProduit){}


    //------------------------------------------------------  Insertion de l'élément "article"
    else { let productArticle = document.createElement("article");
    document.querySelector("#cart__items").appendChild(productArticle);
    productArticle.className = "cart__item";
    productArticle.setAttribute('data-id', prodLocalStorage[produit].idProduit);
        // ------------------------------------------------------ Insertion de l'élément "div"
     let productDivImg = document.createElement("div");
       productArticle.appendChild(productDivImg);
     productDivImg.className = "cart__item__img";
 
            //------------------------------------------------------  Insertion de l'image
          let productImg = document.createElement("img");
          productDivImg.appendChild(productImg);
         productImg.src = prodLocalStorage[produit].imgProduit;
         productImg.alt = prodLocalStorage[produit].altImgProduit;
                //------------------------------------------------------  Insertion de l'élément "div"
              let productItemContent = document.createElement("div");
               productArticle.appendChild(productItemContent);
               productItemContent.className = "cart__item__content";
                    //------------------------------------------------------  Insertion de l'élément "div"
                    let productItemContentTitlePrice = document.createElement("div");
                    productItemContent.appendChild(productItemContentTitlePrice);
                    productItemContentTitlePrice.className = "cart__item__content__titlePrice";
                    
                        //------------------------------------------------------  Insertion du titre h3
                        let productTitle = document.createElement("h2");
                        productItemContentTitlePrice.appendChild(productTitle);
                        productTitle.innerHTML = prodLocalStorage[produit].nomProduit;

                            //------------------------------------------------------  Insertion de la couleur
                            let productColor = document.createElement("p");
                            productTitle.appendChild(productColor);
                            productColor.innerHTML = prodLocalStorage[produit].couleurProduit;
                            productColor.style.fontSize = "20px";

                                //------------------------------------------------------  Insertion du prix
                                let productPrice = document.createElement("p");
                                productItemContentTitlePrice.appendChild(productPrice);
                                productPrice.innerHTML = prodLocalStorage[produit].prixProduit + " €";

                                    // ------------------------------------------------------ Insertion de l'élément "div"
                                    let productItemContentSettings = document.createElement("div");
                                    productItemContent.appendChild(productItemContentSettings);
                                    productItemContentSettings.className = "cart__item__content__settings";

                                        //------------------------------------------------------ Insertion de l'élément "div"
                                        let productItemContentSettingsQuantity = document.createElement("div");
                                        productItemContentSettings.appendChild(productItemContentSettingsQuantity);
                                        productItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";
                                        
                                            //------------------------------------------------------  Insertion de "quantité : "
                                            let productQte = document.createElement("p");
                                            productItemContentSettingsQuantity.appendChild(productQte);
                                            productQte.innerHTML = "quantité : ";

                                                //------------------------------------------------------ Insertion quantité
                                                 let productQuantity = document.createElement("input");
                                                 productItemContentSettingsQuantity.appendChild(productQuantity);
                                                 productQuantity.value = prodLocalStorage[produit].quantiteProduit;
                                                 productQuantity.className = "itemQuantity";
                                                 productQuantity.setAttribute("type", "number");
                                                 productQuantity.setAttribute("min", "1");
                                                 productQuantity.setAttribute("max", "100");
                                                 productQuantity.setAttribute("name", "itemQuantity");

                                                    //------------------------------------------------------  Insertion div
                                                    let productItemContentSettingsDelete = document.createElement("div");
                                                    productItemContentSettings.appendChild(productItemContentSettingsDelete);
                                                    productItemContentSettingsDelete.className = "cart__item__content__settings__delete";

                                                    //------------------------------------------------------  Insertion du btnsupprimer  via element p 
                                                    let productSupprimer = document.createElement("p");
                                                    productItemContentSettingsDelete.appendChild(productSupprimer);
                                                    productSupprimer.className = "deleteItem";
                                                    productSupprimer.innerHTML = "Supprimer";}


}}
}
getpanier();




//-----------------------------------Btn supression d'un produit---------------------------------//

function supprimerProduit() {
    let btn_supprimer = document.querySelectorAll(".deleteItem");

    for (let a = 0; a < btn_supprimer.length; a++){
        btn_supprimer[a].addEventListener("click" , (event) => {
            event.preventDefault();
           //-------Selection des élement à supprimer--------------//
            let idsupr = prodLocalStorage[a].idProduit;
            let colorsupr = prodLocalStorage[a].couleurProduit;
           //-----------------------------------------------------//
            prodLocalStorage = prodLocalStorage.filter( e => e.idProduit !== idsupr || e.couleurProduit !== colorsupr );
            localStorage.setItem("produit", JSON.stringify(prodLocalStorage));
            alert("Ce produit a bien été supprimé du panier");
            location.reload();
        })
    }
}
supprimerProduit();


//----------------------------------- Modification d'une quantité de produit + PRIX---------------------------------//
function changementQte() {
    let modificationQte = document.querySelectorAll(".itemQuantity");

    for (let k = 0; k < modificationQte.length; k++){
        modificationQte[k].addEventListener("change" , (e) => {
            e.preventDefault();

            //Selection de l'element à modifier en fonction de son id ET sa couleur
            let modifQte = prodLocalStorage[k].quantiteProduit;
            console.log(modifQte);
            let valeurQtémodifier = modificationQte[k].valueAsNumber;
            
            const resultFind = prodLocalStorage.find((el) => el.valeurQtémodifier !== modifQte);

            resultFind.quantiteProduit = valeurQtémodifier;
            prodLocalStorage[k].quantiteProduit = resultFind.quantiteProduit;

            localStorage.setItem("produit", JSON.stringify(prodLocalStorage));
        
            // refresh rapide
            location.reload();
        })
    }
}
changementQte();

 

function prixTotal (){
    //------------------------------recupération des Qté---------------------------------//

    var saisieQuantité = document.getElementsByClassName('itemQuantity');
    var longueurSaisie = saisieQuantité.length;
    totalQuantité = 0 ; 

    for (var i = 0; i < longueurSaisie; ++i ){
        totalQuantité += saisieQuantité[i].valueAsNumber;
    }
    let totalQuantiteProduit = document.getElementById('totalQuantity');
    totalQuantiteProduit.innerHTML = totalQuantité;
    console.log(totalQuantité)

    //--------------------------------- Récupération du prix total---------------------------------//
    PrixTotal = 0;

    for (var i = 0; i < longueurSaisie; ++i) {
        PrixTotal += (saisieQuantité[i].valueAsNumber * prodLocalStorage[i].prixProduit);
    }

    let produitPrixTotal = document.getElementById('totalPrice');
    produitPrixTotal.innerHTML = PrixTotal;
    console.log(PrixTotal);

}
prixTotal();

//----------------------------------- Mise en place Form Regex---------------------------------//
function regexForm() {
    //-----------------------------------  Ajout des Regex---------------------------------//
    let form = document.querySelector(".cart__order__form");

    //---------------------------------Création des expressions régulières---------------------------------//
    let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
    let txtRegExp = new RegExp("^[a-zA-Z ,.'-]+$");
    let addressRegExp = new RegExp("^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+");

    //--------------------------------- Ecoute de la modification des saisie ---------------------------------//
    form.firstName.addEventListener('change', function(e) {
        validFirstName(this);
    });
    form.lastName.addEventListener('change', function(e) {
        validLastName(this);
    });
    form.address.addEventListener('change', function(e) {
        validAddress(this);
    });
    form.city.addEventListener('change', function(e) {
        validCity(this);
    });
    form.email.addEventListener('change', function(e) {
        validEmail(this);
    });

    //---------------------------------validation des champs apres ecoute de la saisie---------------------------------//
   
    const validFirstName = function(inputFirstName) {
        let firstNameErrorMsg = inputFirstName.nextElementSibling;

        if (txtRegExp.test(inputFirstName.value)) {
            firstNameErrorMsg.innerHTML = '';
        } else {
            firstNameErrorMsg.innerHTML = 'Verifier vôtre saisies';
        }
    };
    const validLastName = function(inputLastName) {
        let lastNameErrorMsg = inputLastName.nextElementSibling;

        if (txtRegExp.test(inputLastName.value)) {
            lastNameErrorMsg.innerHTML = '';
        } else {
            lastNameErrorMsg.innerHTML = 'Verifier vôtre saisies';
        }
    };

    const validAddress = function(inputAddress) {
        let addressErrorMsg = inputAddress.nextElementSibling;

        if (addressRegExp.test(inputAddress.value)) {
            addressErrorMsg.innerHTML = '';
        } else {
            addressErrorMsg.innerHTML = 'Verifier vôtre saisies';
        }
    };
    const validCity = function(inputCity) {
        let cityErrorMsg = inputCity.nextElementSibling;

        if (txtRegExp.test(inputCity.value)) {
            cityErrorMsg.innerHTML = '';
        } else {
            cityErrorMsg.innerHTML = 'Verifier vôtre saisies';
        }
    };
    const validEmail = function(inputEmail) {
        let emailErrorMsg = inputEmail.nextElementSibling;

        if (emailRegExp.test(inputEmail.value)) {
            emailErrorMsg.innerHTML = '';
        } else {
            emailErrorMsg.innerHTML = 'Verifier vôtre saisies';
        }
    };
    }
    regexForm();

//-----------------------------------Envoi des informations client au localstorage---------------------------------//
function envoieForm(){
    const btn = document.getElementById("order"); // selection btn commander

    //-----------------------------------Ecouter  panier---------------------------------//
    btn.addEventListener("click", (e)=>{
        //-----------------------------------Récupération des coordonnées du formulaire client---------------------------------//
        let prenom = document.getElementById('firstName');
        let nom = document.getElementById('lastName');
        let adress = document.getElementById('address');
        let ville = document.getElementById('city');
        let mail = document.getElementById('email');
        //-----------------------------------Construction d'un tableau pour envoie--------------------------------//
        let idProduits = [];
        for (let i = 0; i<prodLocalStorage.length;i++) {
            idProduits.push(prodLocalStorage[i].idProduit);
        }
        console.log(idProduits);

        const order = {
            contact : {
                firstName: prenom.value,
                lastName: nom.value,
                address: adress.value,
                city: ville.value,
                email: mail.value,
            },
            products: idProduits,
        } 

        const options = {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Accept': 'application/json', 
                "Content-Type": "application/json" 
            },
        };

        fetch("http://localhost:3000/api/products/order", options)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            localStorage.setItem("orderId", data.orderId);
            document.location.href = "confirmation.html";
        })
        
        })
}
envoieForm();