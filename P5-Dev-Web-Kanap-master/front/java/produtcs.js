var str = window.location.href;
var url = new URL(str);
var id = url.searchParams.get("id");
console.log(id);

let Product =""; 
const CouleurProd = document.querySelector("#colors");
const NombreProd = document.querySelector("#quantity");

getProd()

    //----------------------------------------------------------------------------------insertion celon ID produit des element respectif-------------------------------------------------------------------------------------------------


    function getPost(Product){
    
    
    let productImg = document.createElement("img");  // Insertion img
    document.querySelector(".item__img").appendChild(productImg);
    productImg.src = Product.imageUrl;
    productImg.alt = Product.altTxt;

 
    let produitNom = document.getElementById('title');// Insertion "h1"
    produitNom.innerHTML = Product.name;

    let produitPrix = document.getElementById('price');// Insertion prix
    produitPrix.innerHTML = Product.price;

    let produitDescription = document.getElementById('description'); // Insertion description
    produitDescription.innerHTML = Product.description;

   
    for (let couleur of Product.colors){ // Insertion des differentes option de couleur
      console.table(couleur);
      let produitCouleur = document.createElement("option");
      document.querySelector("#colors").appendChild(produitCouleur);
      produitCouleur.value = couleur;
      produitCouleur.innerHTML = couleur;
  }
  AjouterPanier(Product);
}

//----------------------------------------------------------------------------------------------------------------------------Gestion du panier
function AjouterPanier(Product) {
    const btn_envoyerPanier = document.querySelector("#addToCart");

   
    btn_envoyerPanier.addEventListener("click", (e)=>{//event d'ecoute pour 
        if (NombreProd.value > 0 && NombreProd.value <=100 ){

 //----------------------------------------Recuperations des choix de couleur / quantitée
              let choixCouleur = CouleurProd.value;
              let choixQuantite = NombreProd.value;

              //tableau pour les articles a envoyé
              let produitDetails = {
                  idProduit: id,
                  couleurProduit: choixCouleur,
                  quantiteProduit: Number(choixQuantite),
                  nomProduit: Product.name,
                  prixProduit: Product.price,
                  descriptionProduit: Product.description,
                  imgProduit: Product.imageUrl,
                  altImgProduit: Product.altTxt
              };

 //--------------------Creation Zone de Stockage local pour le Panier----------------------------------------------------------------------------------------
              let prodLocalStorage = JSON.parse(localStorage.getItem("produit"));

              //------------------------------------------------------------------------------------------------------------------------------------------------------------

                  //fenêtre pop-up
                  const VerifPopup  =() =>{
                      if(window.confirm(`Votre commande de ${choixQuantite} ${Product.name} ${choixCouleur} est prête  a être ajouté au panier. Cliquez sur OK pour envoyé au panier`)){
                          window.location.href ="cart.html";
                      }
                  }

    
                          if (prodLocalStorage) {
                          const resultat  = prodLocalStorage.find(
                              (e) => e.id === id && e.couleurProduit === choixCouleur);
                              if (resultat ) { // si deja 1
                                  let newQuantite =
                                  parseInt(produitDetails.quantiteProduit) + parseInt(resultat.quantiteProduit);
                                  resultat .quantiteProduit = newQuantite;
                                  localStorage.setItem("produit", JSON.stringify(prodLocalStorage));
                                  console.table(prodLocalStorage);
                                  VerifPopup ();
                                } else {
                                  prodLocalStorage.push(produitDetails);
                                    localStorage.setItem("produit", JSON.stringify(prodLocalStorage));
                                    console.table(prodLocalStorage);
                                    VerifPopup ();
                                       }
                                    } else {
                                      prodLocalStorage =[]; // si ya pas
                                        prodLocalStorage.push(produitDetails);
                                        localStorage.setItem("produit", JSON.stringify(prodLocalStorage));
                                        console.table(prodLocalStorage);
                                        VerifPopup ();
                                    }} 
                                    
                          });
                      }


// Récupération des Prod de l'API + Repartion dans le DOM -------------------------------------------------------------------------------------------------------------------------------------------
function getProd() {
  fetch("http://localhost:3000/api/products/" + id)
  .then((res) => {
      return res.json();
  })
  .then(async function (resultatAPI) {
    Product = await resultatAPI;
      console.table(Product);
      if (Product){
          getPost(Product);
      }
  })

}