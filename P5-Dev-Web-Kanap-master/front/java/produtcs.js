var str = window.location.href;
var url = new URL(str);
var id = url.searchParams.get("id");
//console.log(id);

let Product = "";

const CouleurProd = document.querySelector("#colors");
const NombreProd = document.querySelector("#quantity");

getProd();

//----------------------------------------------------insertion celon ID produit des element respectif----------------------------------------------------------------//
function getPost(Product) {
  let productImg = document.createElement("img"); // Insertion img
  document.querySelector(".item__img").appendChild(productImg);
  productImg.src = Product.imageUrl;
  productImg.alt = Product.altTxt;

  let produitNom = document.getElementById("title"); // Insertion "h1"
  produitNom.innerHTML = Product.name;

  let produitPrix = document.getElementById("price"); // Insertion prix
  produitPrix.innerHTML = Product.price;

  let produitDescription = document.getElementById("description"); // Insertion description
  produitDescription.innerHTML = Product.description;

  for (let couleur of Product.colors) {
    // Insertion des differentes option de couleur
    // console.table(couleur);
    let produitCouleur = document.createElement("option");
    document.querySelector("#colors").appendChild(produitCouleur);
    produitCouleur.value = couleur;
    produitCouleur.innerHTML = couleur;
  }
  //console.table(Product);
  AjouterPanier(Product);
}

//---------------------------------------------------Gestion du panier--------------------//
function AjouterPanier(Product) {
  const btn_envoyerPanier = document.querySelector("#addToCart");
  btn_envoyerPanier.addEventListener("click", (e) => {
    //event d'ecoute pour le btn add to cart
    if (NombreProd.value > 0 && NombreProd.value <= 100) {
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
        altImgProduit: Product.altTxt,
      };

      //--------------------Creation Zone de Stockage local pour le Panier----------------------------------------------------------------------------------------
      let prodLocalStorage = JSON.parse(localStorage.getItem("produit"));

      //------------------------------------------------------------------------------------------------------------------------------------------------------------

      //fenêtre pop-up
      const VerifPopup = () => {
        if (
          window.confirm(
            `Votre commande de ${choixQuantite} ${Product.name} ${choixCouleur} est prête  a être ajouté au panier. Cliquez sur OK pour envoyé au panier`
          )
        ) {
          window.location.href = "cart.html";
        }
      };

      if (prodLocalStorage) {
        //si le local storage a deja le meme produit present
        const result = prodLocalStorage.find(
          (el) =>
            el.idProduit == produitDetails.idProduit &&
            el.couleurProduit == produitDetails.couleurProduit
        ); // const pour trouver les element id et couleur du produit
        if (result) {
          let newQuantite =
            Number(produitDetails.quantiteProduit) +
            Number(result.quantiteProduit);
          result.quantity = newQuantite;
          localStorage.setItem("produit", JSON.stringify(prodLocalStorage));
          console.table(prodLocalStorage);
          VerifPopup();
        } else {
          // si deja un produit differents présent
          prodLocalStorage.push(produitDetails);
          localStorage.setItem("produit", JSON.stringify(prodLocalStorage));
          console.table(prodLocalStorage);
          VerifPopup();
        }
      } else {
        // si aucun prod dans le pannier
        prodLocalStorage = [];
        prodLocalStorage.push(produitDetails);
        localStorage.setItem("produit", JSON.stringify(prodLocalStorage));
        console.table(prodLocalStorage);
        VerifPopup();
      }
    }
  });
}

// Récupération des Prod de l'API  ------------------------------///
function getProd() {
  fetch("http://localhost:3000/api/products/" + id)
    .then((res) => {
      return res.json();
    })
    .then((product) => {
      if (product !== undefined) {
        getPost(product);
      }
    });
  // Product =  resultatAPI;
  //  console.table(Product);
  // if (Product){
  //   getPost(Product);
}
