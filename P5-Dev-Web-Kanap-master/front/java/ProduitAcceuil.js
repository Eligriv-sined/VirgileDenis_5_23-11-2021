let Product =[]; 


const fetchProd =  async () => {  //recupération du TABLEAU products au dans la varible Product=[] 
 await fetch('http://localhost:3000/api/products')
.then((res) => res.json())
.then ((data) => (Product = data))

  console.log(Product); //verification du resultat , console
}

const produtDisplay =  async() => { // Mise en place de l'affichage de product au seins de Items dans index.html
  await fetchProd();
  document.getElementById('items').innerHTML = Product.map((products) =>  
  
  `<a href="./product.html?id=${products._id}">
  <article>
    <img src="${products.imageUrl}" alt="${products.imageUrl}">
    <h3 class="productName">${products.name}</h3>
    <p class="productDescription">${products.description}</p>
  </article>
</a>`)
.join("")
} 

produtDisplay();


