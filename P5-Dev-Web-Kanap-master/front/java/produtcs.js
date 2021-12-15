
const liensUrl =  window.location.href
var str = liensUrl ;
var url = new URL (str);
var id = url.searchParams.get("id");
console.log(id); 


//--------------------------------------------------------
let Product =[]; 
const CouleurProd = document.querySelector("#colors");
const NombreProd = document.querySelector("#quantity");

//-----------------------------------------------------------

// Récupération des Prod de l'API
function getProd() {
  fetch("http://localhost:3000/api/products/" + id)
  .then((res) => {
      return res.json();
  })

  // Répartition des données de l'API dans le DOM
  .then(async function (resultatAPI) {
    Product = await resultatAPI;
      console.table(Product);
      if (Product){
        getArticle(Product);
      }
  })

}

getProd();


function getArticle(Product)  //insertion celon ID produit des element respectif

{
    
  // Insertion de l'image

    document.querySelector(".item__img").innerHTML = `<img src="${Product.imageUrl}" alt="${Product.altTxt}"> `
    

    // Modification du titre "h1"

    document.getElementById('title').innerHTML = `${Product.name} `

    // Modification du prix

    document.getElementById('price').innerHTML = `${Product.price} `

    // Modification de la description

    document.getElementById('description').innerHTML = `${Product.description} `

    // Insertion des options de couleurs
    
    for (let couleur of Product.colors){
        console.table(couleur);
        let produitCouleur = document.createElement("option");
        document.querySelector("#colors").appendChild(produitCouleur);
        produitCouleur.value = couleur;
        produitCouleur.innerHTML = couleur;
    }
    
}




