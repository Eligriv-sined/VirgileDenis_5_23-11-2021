let products =[]; 


const fetchProd =  async () => {  //recupération du TABLEAU products au dans la varible Product=[] 
 await fetch('http://localhost:3000/api/products')
.then((res) => res.json())
.then ((products) => {
  console.log(products); //verification du resultat , console
  dispayProduct(products);
})
}

const dispayProduct = (products) => {
document.getElementById('items').innerHTML = products.map((product) => 
`<a href="./product.html?id=${product._id}">
<article>
  <img src="${product.imageUrl}" alt="${product.imageUrl}">
  <h3 class="productName">${product.name}</h3>
  <p class="productDescription">${product.description}</p>
</article>
</a>`)
.join("")
}

 fetchProd();

