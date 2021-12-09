import {products} from '/P5-Dev-Web-Kanap-master/back/models/Product.js'; //importation tableau product




const liensProd = document.querySelector('#items').innerHTML = // integration code HTML brute

` 
<a  href="./product.html?id=${products[0]._id}">
            <article>
              <img src="/P5-Dev-Web-Kanap-master/back/images/${products[0].imageUrl}" alt="${products[0].altTxt}">
              <h3 class="productName">${products[0].name}</h3>
              <p class="productDescription">${products[0].description}</p>
            </article>
          </a>
        
          <a " href="./product.html?id=${products[1]._id}">
            <article>
              <img src="/P5-Dev-Web-Kanap-master/back/images/${products[1].imageUrl}" alt="${products[1].altTxt}">
              <h3 class="productName">${products[1].name}</h3>
              <p class="productDescription">${products[1].description}</p>
            </article>
          </a>
          </a>
         
          <a  href="./product.html?id=${products[2]._id}">
            <article>
              <img src="/P5-Dev-Web-Kanap-master/back/images/${products[2].imageUrl}" alt="${products[2].altTxt}">
              <h3 class="productName">${products[2].name}</h3>
              <p class="productDescription">${products[2].description}</p>
            </article>
          </a>
          </a>
        
          <a  href="./product.html?id=${products[3]._id}">
            <article>
              <img src="/P5-Dev-Web-Kanap-master/back/images/${products[3].imageUrl}" alt="${products[3].altTxt}">
              <h3 class="productName">${products[3].name}</h3>
              <p class="productDescription">${products[3].description}</p>
            </article>
          </a>
          </a>
         
          <a href="./product.html?id=${products[4]._id}">
            <article>
              <img src="/P5-Dev-Web-Kanap-master/back/images/${products[4].imageUrl}" alt="${products[4].altTxt}">
              <h3 class="productName">${products[4].name}</h3>
              <p class="productDescription">${products[4].description}</p>
            </article>
          </a>
          </a>
         
          <a href="./product.html?id=${products[5]._id}">
            <article>
              <img src="/P5-Dev-Web-Kanap-master/back/images/${products[5].imageUrl} " alt="${products[5].altTxt}">
              <h3 class="productName">${products[5].name}</h3>
              <p class="productDescription">${products[5].description}</p>
            </article>
          </a>
          </a>
        
          <a  href="./product.html?id=${products[6]._id}">
            <article>
              <img src="/P5-Dev-Web-Kanap-master/back/images/${products[6].imageUrl}" alt="${products[6].altTxt}">
              <h3 class="productName">${products[6].name}</h3>
              <p class="productDescription">${products[6].description}</p>
            </article>
          </a>
          </a>
         
          <a  href="./product.html?id=${products[7]._id}">
            <article>
              <img src="/P5-Dev-Web-Kanap-master/back/images/${products[7].imageUrl}" alt="${products[7].altTxt}">
              <h3 class="productName">${products[7].name}</h3>
              <p class="productDescription">${products[7].description}</p>
            </article>
          </a>
          ` //fin de lintegration des canap

    
        


