import {products} from '/P5-Dev-Web-Kanap-master/back/models/Product.js'; //importation tableau product

let produit = document.querySelector('#items');


document.querySelector('#items').innerHTML = // integration code HTML brute
` 

<a href="./product.html?id=42">
            <article>
              <img src="./P5-Dev-Web-Kanap-master/back/images/kanap01.jpeg>" alt="${products[0].altTxt}">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">${products[0].description}</p>
            </article>
          </a>
        
          <a href="./product.html?id=42">
            <article>
              <img src="/P5-Dev-Web-Kanap-master/back/images/kanap01.jpeg>" alt="${products[1].altTxt}">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">${products[1].description}</p>
            </article>
          </a>
          </a>
         
          <a href="./product.html?id=42">
            <article>
              <img src="/P5-Dev-Web-Kanap-master/back/images/kanap01.jpeg>" alt="${products[2].altTxt}">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">${products[2].description}</p>
            </article>
          </a>
          </a>
        
          <a href="./product.html?id=42">
            <article>
              <img src="/P5-Dev-Web-Kanap-master/back/images/kanap01.jpeg>" alt="${products[3].altTxt}">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">${products[3].description}</p>
            </article>
          </a>
          </a>
         
          <a href="./product.html?id=42">
            <article>
              <img src="/P5-Dev-Web-Kanap-master/back/images/kanap01.jpeg>" alt="${products[4].altTxt}">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">${products[4].description}</p>
            </article>
          </a>
          </a>
         
          <a href="./product.html?id=42">
            <article>
              <img src="/P5-Dev-Web-Kanap-master/back/images/kanap01.jpeg>" alt="${products[5].altTxt}">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">${products[5].description}</p>
            </article>
          </a>
          </a>
        
          <a href="./product.html?id=42">
            <article>
              <img src="/P5-Dev-Web-Kanap-master/back/images/kanap01.jpeg>" alt="${products[6].altTxt}">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">${products[6].description}</p>
            </article>
          </a>
          </a>
         
          <a href="./product.html?id=42">
            <article>
              <img src="/P5-Dev-Web-Kanap-master/back/images/kanap01.jpeg>" alt="${products[7].altTxt}">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">${products[7].description}</p>
            </article>
          </a>
          ` //fin de lintegration des canap