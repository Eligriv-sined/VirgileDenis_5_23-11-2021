
//------------------------------------------------------ Initialisation du local storage
let prodLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.table(prodLocalStorage);
const positionEmptyCart = document.querySelector("#cart__items");
//------------------------------------------------------------------------------------------------------------ 




//------------------------------------------------------------------------------------------------------------  Si le panier est vide
function getCart(){
if (prodLocalStorage === null || prodLocalStorage == 0) {
    const emptyCart = `<p>Aucun Articles dans le panier</p>`;
    positionEmptyCart.innerHTML = emptyCart;
} else { // sinon rajout des element au panier
for (let produit in prodLocalStorage){
    //------------------------------------------------------  Insertion de l'élément "article"
    let productArticle = document.createElement("article");
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
                                        
                                            //------------------------------------------------------  Insertion de "Qté : "
                                            let productQte = document.createElement("p");
                                            productItemContentSettingsQuantity.appendChild(productQte);
                                            productQte.innerHTML = "Qté : ";

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
                                                    productSupprimer.innerHTML = "Supprimer";


}}
}
getCart();




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



//------------------------ A faire cette aprem : --> Modification des quantité de produit 
//------------------------- ---> Verification des input du form dans le panier + envoie a la page confirmation. si le temps se soir debut page confirmation. 

function prixTotal (){
    //recupération des Qté

    var saisieQuantité = document.getElementsByClassName('itemQuantity');
    var longueurSaisie = saisieQuantité.length,
    totalQuantité = 0 ; 

    for (var i = 0; i < longueurSaisie; ++i ){
        totalQuantité += saisieQuantité[i].valueAsNumer
    }

    let totalProduitQuantité = document.getElementById('totalQuantity');
    totalProduitQuantité.innerHTML = saisieQuantité;
    console.log(saisieQuantité);
}

prixTotal()