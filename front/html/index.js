let meubleData = [];

const fetchMeuble = async () => {
  await fetch("http://localhost:3000/api/products")
    
   .then((res) => res.json())
   .then((promise) => {
     meubleData = promise;
     console.log(meubleData);

  });

};

const meubleDisplay = async () => {
  
  await fetchMeuble();
  console.log(meubleData.length);
  for(var i = 0; i < meubleData.length; i++){
    // Insertion de l'élément "a"
            let productLink = document.createElement("a");
            document.querySelector(".items").appendChild(productLink);
            productLink.href = `product.html?id=${meubleData[i]._id}`;
            // Insertion de l'élément "article"
            let productArticle = document.createElement("article");
            productLink.appendChild(productArticle);
            // Insertion de l'image
            let productImg = document.createElement("img");
            productArticle.appendChild(productImg);
            productImg.src = meubleData[i].imageUrl;
            productImg.alt = meubleData[i].altTxt;

            // Insertion du titre "h3"
            let productName = document.createElement("h3");
            productArticle.appendChild(productName);
            productName.classList.add("productName");
            productName.innerHTML = meubleData[i].name;

            // Insertion de la description "p"
            let productDescription = document.createElement("p");
            productArticle.appendChild(productDescription);
            productDescription.classList.add("productName");
            productDescription.innerHTML = meubleData[i].description;

    
   
    
}
  
  
 
 
  
}


 
  
meubleDisplay();









     


