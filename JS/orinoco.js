fetch("http://localhost:3000/api/teddies/")
.then(response => response.json())
.then(response => displayProduct(response))
.catch(error => alert("Erreur : " + error));

const catalogElement = document.getElementById('catalog');
    // for (const product of products) {


function displayProduct(products) {
    for (let i = 0; i < products.length; i++) {
        console.log(i);
        const product = products[i];
        const productElement = document.createElement('div');
        productElement.classList.add('test');
        const titleElement = document.createElement('div');
        const productName = document.createTextNode(product.name);
        const image = new Image();
        image.src = product.imageUrl;
        const priceElement = document.createElement('div');
        const productPrice = document.createTextNode(product.price + ' $');
        const productId = product._id;
        console.log(product._id);

        image.classList.add('imageStyle');
        titleElement.appendChild(productName);
        priceElement.appendChild(productPrice);

        productElement.appendChild(image);
        productElement.appendChild(titleElement); 
        productElement.appendChild(productPrice);
        
        const productLink = document.createElement('a');
        productLink.href = "/product.html?id="+ productId;
        productLink.appendChild(productElement);
        catalogElement.appendChild(productLink);
        


    }
    console.log(products);

} 