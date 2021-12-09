import {products} from '/P5-Dev-Web-Kanap-master/back/models/Product.js'; //importation tableau product


const liensUrl =  window.location.href
console.log(liensUrl);



//---- Boucle pour produit , chaque if correspond a un produit , importer depuis product

if (liensUrl === 'http://127.0.0.1:5501/P5-Dev-Web-Kanap-master/front/html/product.html?id=107fb5b75607497b96722bda5b504926'){
    
const prodimg = document.querySelector('.item__img').innerHTML = `<img src="/P5-Dev-Web-Kanap-master/back/images/${products[0].imageUrl}" alt="${products[0].altTxt}"> `
const prodNom = document.getElementById('title').innerHTML = `${products[0].name} `
const prodPrix = document.getElementById('price').innerHTML = `${products[0].price} `
const prodDescript = document.getElementById('description').innerHTML = `${products[0].description} `
const prodcouleur = document.getElementById('colors').innerHTML = `<option>${products[0].colors[0]}</option>  <option>${products[0].colors[1]}</option>  <option>${products[0].colors[2]}</option> `

} else if(liensUrl === 'http://127.0.0.1:5501/P5-Dev-Web-Kanap-master/front/html/product.html?id=415b7cacb65d43b2b5c1ff70f3393ad1'){
    
    const prodimg = document.querySelector('.item__img').innerHTML = `<img src="/P5-Dev-Web-Kanap-master/back/images/${products[1].imageUrl}" alt="${products[1].altTxt}"> `
    const prodNom = document.getElementById('title').innerHTML = `${products[1].name} `
    const prodPrix = document.getElementById('price').innerHTML = `${products[1].price} `
    const prodDescript = document.getElementById('description').innerHTML = `${products[1].description} `
    const prodcouleur = document.getElementById('colors').innerHTML = `<option>${products[1].colors[0]}</option>  <option>${products[1].colors[1]}</option> `
    
    } else if(liensUrl === 'http://127.0.0.1:5501/P5-Dev-Web-Kanap-master/front/html/product.html?id=055743915a544fde83cfdfc904935ee7'){
    
        const prodimg = document.querySelector('.item__img').innerHTML = `<img src="/P5-Dev-Web-Kanap-master/back/images/${products[2].imageUrl}" alt="${products[2].altTxt}"> `
        const prodNom = document.getElementById('title').innerHTML = `${products[2].name} `
        const prodPrix = document.getElementById('price').innerHTML = `${products[2].price} `
        const prodDescript = document.getElementById('description').innerHTML = `${products[2].description} `
        const prodcouleur = document.getElementById('colors').innerHTML = `<option>${products[2].colors[0]}</option>  <option>${products[2].colors[1]}</option>  <option>${products[2].colors[2]}</option> `
        
        } else if(liensUrl === 'http://127.0.0.1:5501/P5-Dev-Web-Kanap-master/front/html/product.html?id=a557292fe5814ea2b15c6ef4bd73ed83'){
    
            const prodimg = document.querySelector('.item__img').innerHTML = `<img src="/P5-Dev-Web-Kanap-master/back/images/${products[3].imageUrl}" alt="${products[3].altTxt}"> `
            const prodNom = document.getElementById('title').innerHTML = `${products[3].name} `
            const prodPrix = document.getElementById('price').innerHTML = `${products[3].price} `
            const prodDescript = document.getElementById('description').innerHTML = `${products[3].description} `
            const prodcouleur = document.getElementById('colors').innerHTML = `<option>${products[3].colors[0]}</option>  <option>${products[3].colors[1]}</option>  `
            
            } else if(liensUrl === 'http://127.0.0.1:5501/P5-Dev-Web-Kanap-master/front/html/product.html?id=8906dfda133f4c20a9d0e34f18adcf06'){
    
                const prodimg = document.querySelector('.item__img').innerHTML = `<img src="/P5-Dev-Web-Kanap-master/back/images/${products[4].imageUrl}" alt="${products[4].altTxt}"> `
                const prodNom = document.getElementById('title').innerHTML = `${products[4].name} `
                const prodPrix = document.getElementById('price').innerHTML = `${products[4].price} `
                const prodDescript = document.getElementById('description').innerHTML = `${products[4].description} `
                const prodcouleur = document.getElementById('colors').innerHTML = `<option>${products[4].colors[0]}</option>  <option>${products[4].colors[1]}</option>  <option>${products[4].colors[2]}</option> `
                
                } else if(liensUrl === 'http://127.0.0.1:5501/P5-Dev-Web-Kanap-master/front/html/product.html?id=77711f0e466b4ddf953f677d30b0efc9'){
    
                    const prodimg = document.querySelector('.item__img').innerHTML = `<img src="/P5-Dev-Web-Kanap-master/back/images/${products[5].imageUrl}" alt="${products[5].altTxt}"> `
                    const prodNom = document.getElementById('title').innerHTML = `${products[5].name} `
                    const prodPrix = document.getElementById('price').innerHTML = `${products[5].price} `
                    const prodDescript = document.getElementById('description').innerHTML = `${products[5].description} `
                    const prodcouleur = document.getElementById('colors').innerHTML = `<option>${products[5].colors[0]}</option>  <option>${products[5].colors[1]}</option> `
                    
                    } else if(liensUrl === 'http://127.0.0.1:5501/P5-Dev-Web-Kanap-master/front/html/product.html?id=034707184e8e4eefb46400b5a3774b5f'){
    
                        const prodimg = document.querySelector('.item__img').innerHTML = `<img src="/P5-Dev-Web-Kanap-master/back/images/${products[6].imageUrl}" alt="${products[6].altTxt}"> `
                        const prodNom = document.getElementById('title').innerHTML = `${products[6].name} `
                        const prodPrix = document.getElementById('price').innerHTML = `${products[6].price} `
                        const prodDescript = document.getElementById('description').innerHTML = `${products[6].description} `
                        const prodcouleur = document.getElementById('colors').innerHTML = `<option>${products[6].colors[0]}</option>  <option>${products[6].colors[1]}</option>  `
                        
                        } else if(liensUrl === 'http://127.0.0.1:5501/P5-Dev-Web-Kanap-master/front/html/product.html?id=a6ec5b49bd164d7fbe10f37b6363f9fb'){
    
                            const prodimg = document.querySelector('.item__img').innerHTML = `<img src="/P5-Dev-Web-Kanap-master/back/images/${products[7].imageUrl}" alt="${products[7].altTxt}"> `
                            const prodNom = document.getElementById('title').innerHTML = `${products[7].name} `
                            const prodPrix = document.getElementById('price').innerHTML = `${products[7].price} `
                            const prodDescript = document.getElementById('description').innerHTML = `${products[7].description} `
                            const prodcouleur = document.getElementById('colors').innerHTML = `<option>${products[7].colors[0]}</option>  <option>${products[7].colors[1]}</option>  <option>${products[7].colors[2]}</option> <option>${products[7].colors[3]}</option> `
                            
                            } ;


                        
                    
                
            
            
