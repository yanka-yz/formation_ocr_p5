

const productID = window.location.search;
const urlParams = new URLSearchParams(productID);
const idProduct = urlParams.get ("id");
console.log(idProduct);



fetch("http://localhost:3000/api/teddies/"+idProduct)
.then(response => response.json())
.then(response => console.log(response))
.catch(error => alert("Erreur : " + error));





