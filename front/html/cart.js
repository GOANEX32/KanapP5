




let meubleData = [];

const fetchMeuble = async () => {
    await fetch("http://localhost:3000/api/products")
      
     .then((res) => res.json())
     .then((promise) => {
       meubleData = promise;
       console.log(meubleData);
  
    });
  
  };











  async  function meubleRECUP   ()  {
  
    await fetchMeuble();
    let productLocalStorage = JSON.parse(localStorage.getItem("userProducts"));
    var total = 0;
    var totalQuantity = 0;
        
    

    
   for(var i = 0; i < meubleData.length; i++){
    
      
      
     
      for(var j = 0; j < productLocalStorage.length; j++){
        
       

      

        if (meubleData[i]._id == productLocalStorage[j].userProductId){
          
          
         
            
            // Création de la balise "article" et insertion dans la section
            let productArticle = document.createElement("article");
            document.querySelector("#cart__items").appendChild(productArticle);
            productArticle.className = "cart__item";
            productArticle.setAttribute("data-id", productLocalStorage[j].userProductId);
            productArticle.setAttribute("data-color", productLocalStorage[j].userProductColor);

            // Creation de l'élément "div" enfant de procductArticle plus crée haut pour l'image produit
            let productDivImg = document.createElement("div");
            productArticle.appendChild(productDivImg);
            productDivImg.className = "cart__item__img";

            // Insertion de l'image
            let productImg = document.createElement("img");
            productDivImg.appendChild(productImg);
            productImg.src = productLocalStorage[j].userProductImg;

            // Creation de  "div" pour la description produit
            let productItemContent = document.createElement("div");
            productArticle.appendChild(productItemContent);
            productItemContent.className = "cart__item__content";

            // Creation de l'élément "div" pour le prix
           let productItemContentTitlePrice = document.createElement("div");
           productItemContent.appendChild(productItemContentTitlePrice);
           productItemContentTitlePrice.className = "cart__item__content__titlePrice";

           // Insertion du titre h2
           let productTitle = document.createElement("h2");
           productItemContentTitlePrice.appendChild(productTitle);
           productTitle.innerHTML = productLocalStorage[j].userProductName;


           // Insertion de la couleur
           let productColor = document.createElement("p");
           productTitle.appendChild(productColor);
           productColor.innerHTML = productLocalStorage[j].userProductColor;
           productColor.style.fontSize = "20px";

          // Insertion du prix
          let productPrice = document.createElement("p");
          productItemContentTitlePrice.appendChild(productPrice);
          productPrice.innerHTML = parseInt(meubleData[i].price)+ " €";
          productItemContentTitlePrice.appendChild(productPrice);

         //TOTAUX
          total = total  +parseInt(meubleData[i].price*productLocalStorage[j].userProductQty);
          //totalQuantity = totalQuantity + Number(productLocalStorage[j].userProductQty);
          totalQuantity = totalQuantity+  parseInt(productLocalStorage[j].userProductQty);
          console.log();
          /*totalFront = document.getElementById("totalPrice");
          totalFrontQty = document.getElementById("totalQuantity");
          totalFront.innerHTML = total;
          totalFrontQty.textContent = totalQuantity;*/
          document.getElementById("totalQuantity").innerHTML = totalQuantity;
          document.getElementById("totalPrice").innerHTML = total;
          
          
          
         // fullTotal(prix, quantity,total);
          
          console.log();

          // Creation de l'élément "div" settings
          let productItemContentSettings = document.createElement("div");
          productItemContent.appendChild(productItemContentSettings);
          productItemContentSettings.className = "cart__item__content__settings";

          // Creation de  "div" dans settings pour quantité
          let productItemContentSettingsQuantity = document.createElement("div");
          productItemContentSettings.appendChild(productItemContentSettingsQuantity);
          productItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";

          // // Insertion de "Qté : " 
          let productQty = document.createElement("p");
          productItemContentSettingsQuantity.appendChild(productQty);
          productQty.innerHTML = "Qté : ";

          // Creation de input quantité
          let productQuantity = document.createElement("input");
          productItemContentSettingsQuantity.appendChild(productQuantity);
          productQuantity.value = productLocalStorage[j].userProductQty;
          productQuantity.className = "itemQuantity";
          productQuantity.setAttribute("type", "number");
          productQuantity.setAttribute("min", "1");
          productQuantity.setAttribute("max", "100");
          productQuantity.setAttribute("name", "itemQuantity");

          // Creation de la "div" pour supprimer
          let productItemContentSettingsDelete = document.createElement("div");
          productItemContentSettings.appendChild(productItemContentSettingsDelete);
          productItemContentSettingsDelete.className = "cart__item__content__settings__delete";



           // Insertion de "p" supprimer
          let productSupprimer = document.createElement("p");
          productItemContentSettingsDelete.appendChild(productSupprimer);
          productSupprimer.className = "deleteItem";
          productSupprimer.innerHTML = "Supprimer";

          

         datasetSelec = document.getElementById("cart__item"); 
         removeCart = document.getElementsByClassName("deleteItem");
         
         
         console.log(productArticle.dataset);

         
         
        
         //totalFront = document.getElementById("totalPrice");
         //totalFront.innerHTML = total;
        


         
         
         
         
         
         remove ();
         changeQtt();
        
         
         

         
         

        
         
              
        
            
            
            
           
           
         
    } 
  }    }  













            
};//}  

meubleRECUP();


function fullTotal (total){
    
    
    var total = 0;
    var  totalQuantity = 0;
   let productLocalStorage = JSON.parse(localStorage.getItem("userProducts"));
  for(var h = 0; h < productLocalStorage.length; h++){

    

   total = total + parseInt(productLocalStorage[h].userProductPrix*productLocalStorage[h].userProductQty);
   totalQuantity = totalQuantity + parseInt(productLocalStorage[h].userProductQty);
   console.log(productLocalStorage[h].userProductQty);
  
  
}
totalFront = document.getElementById("totalPrice");
totalFrontQty = document.getElementById("totalQuantity");
totalFrontQty.innerHTML = totalQuantity;
totalFront.innerHTML = total;
};

function remove (){
  
  for(let y = 0; y < removeCart.length; y++){
    //parcourire les bouton cliquer 

    removeCart[y].addEventListener("click", function(event){

      
      var buttonClicked = event.target;
      //dataset id et couleur des boutton cliquer;
      let idClick = buttonClicked.parentElement.parentElement.parentElement.parentElement.dataset.id;
      let colorClick = buttonClicked.parentElement.parentElement.parentElement.parentElement.dataset.color;
       
      console.log(idClick);
      console.log(colorClick);
      
      //récupérer le stokage afin de le comparer dataset des element cliquer afin de les supprimer 
      let productLocalStorage = JSON.parse(localStorage.getItem("userProducts"));
      productLocalStorage = productLocalStorage.filter(p => p.userProductId != idClick);
      //filtre tous ce qui est diff"rent de idClick afin de les garder
      console.log();
      localStorage.setItem("userProducts", JSON.stringify (productLocalStorage));
      //stringify et renvoi l'array modifier
      

       buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
       //suuprime l article dans le DOM
       
       
       fullTotal();
       //appel de la fonction fullTotalpour actualiser le total
       
      
   }
   

  )}
};













// Changement des totaux

function changeQtt() {
    
    
  
  //ciblage des inputs de quantité
  const inputQuantity = document.getElementsByClassName("itemQuantity");
  console.log(inputQuantity);
  
  
  
  
   
  for(var c = 0; c < inputQuantity.length; c++){
    
    console.log(inputQuantity[c].value);
    
    
    inputQuantity[c].addEventListener("click", function (event){
        
        
      //recuperation de la nouvelle qtt et de id et la color du produit
    newQtt = event.target.value;
    inputClick = event.target;
    idQtt = inputClick.parentElement.parentElement.parentElement.parentElement.dataset.id;
    colorQtt = inputClick.parentElement.parentElement.parentElement.parentElement.dataset.color;
    console.log(idQtt);
    
    console.log(newQtt);
    //comparer les produit dans le local storage pour modif la quantité du bon produits
    let productLocalStorage = JSON.parse(localStorage.getItem("userProducts"));
    for(var x = 0; x < productLocalStorage.length; x++){
      if(productLocalStorage[x].userProductId == idQtt && productLocalStorage[x].userProductColor == colorQtt  ){
        console.log(productLocalStorage[x].userProductId);
        //changer la qtt par la nouvelle
        productLocalStorage[x].userProductQty = newQtt;
        console.log(productLocalStorage[x].userProductQty);
        localStorage.setItem("userProducts", JSON.stringify (productLocalStorage));
        


        fullTotal();
        
       
        
      };
     
     

      };
     
      
           
  });} 

 
};






//Instauration formulaire avec regex
// Formulaire

//Instauration formulaire avec regex
function getForm() {
  // Ajout des Regex
  let form = document.getElementsByClassName(".cart__order__form");
  
  
  
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");
  var email = document.getElementById("email");
  var address = document.getElementById("address");
  var city = document.getElementById("city");

  const order = document.getElementById('order');

  
  
  

  // Ajout des regex
// Verification validité prénom, nom, ville
function valideDivers(value) { 
    return /^[A-Z-a-z\s]{3,40}$/.test(value)
}

// Verification validité adresse
function valideAdresse(value) { 
    return /[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+/.test(value)
}

// Verification validité mail
function valideEmail(value) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
}
// Vérification de la validité du prenom

firstName.addEventListener("change", function (event) {
 
    if (valideDivers(firstName.value)) {
    } else {
        // alert( "Erreur de prenom!")
        
        document.getElementById("firstNameErrorMsg").innerHTML = "Erreur de nom!";
        event.preventDefault()
    }
})
// Vérification de la validité du nom

lastName.addEventListener("change", function (event) {
  
    if (valideDivers(lastName.value)) {

    } else {
        // alert( "Erreur de nom!")
        document.getElementById("lastNameErrorMsg").innerHTML = "Erreur de nom!";
        
        event.preventDefault()    
    }
});
   
 // Vérification de la validité de l'adresse

 address.addEventListener("change", function (event) {
  
     if (valideAdresse(address.value)){
     } else {
         // alert( "Erreur d'adresse!")
          document.getElementById("addressErrorMsg").innerHTML = "Erreur d'adresse!";
         event.preventDefault()

     }
 });
 // Vérification de la validité de la ville

city.addEventListener("change", function (event) {
  
     if (valideDivers(city.value)) {
     } else {
         // alert( "Erreur de ville!")
          document.getElementById("cityErrorMsg").innerHTML = "Erreur de ville!";

         event.preventDefault()
     }
 });
 // Vérification de la validité du mail
 
 email.addEventListener("change", function (event) {
  
     if (valideEmail(email.value)){
     } else {
         // alert( "Erreur d'email!")
          document.getElementById("emailErrorMsg").innerHTML = "Erreur d'email!";
         event.preventDefault()
     }
 });


// Envoi du formulaire
  
  
      
  // Ecoute de la validation du formulaire
    order.addEventListener('click', (event) => {
    event.preventDefault();
    
    
    console.log(valideDivers(firstName.value));
    if(     valideDivers(firstName.value) && 
    valideDivers(lastName.value) && 
    valideAdresse(address.value) && 
    valideDivers(city.value) && 
    valideEmail(email.value)){ 
      console.log(firstName.value);
  
    // je récupère les données du formulaire dans un objet
    const contact = {
      firstName : document.getElementById('firstName').value,
      lastName : document.getElementById('lastName').value,
      address : document.getElementById('address').value,
      city : document.getElementById('city').value,
      email : document.getElementById('email').value
    }

    //Construction d'un array d'id depuis le local storage
    let productLocalStorage = JSON.parse(localStorage.getItem("userProducts"));


    let products = [];
    for (let i = 0; i<productLocalStorage.length;i++) {
        products.push(productLocalStorage[i].userProductId);
    }
    console.log(products);
  
    // je mets les valeurs du formulaire et les produits sélectionnés
    // dans un objet...
    const sendFormData = {
      contact,
      products,
    }
  
    // j'envoie le formulaire + localStorage (sendFormData) 
    // ... que j'envoie au serveur
  
    const options = {
      method: 'POST',
      body: JSON.stringify(sendFormData),
      headers: { 
        'Content-Type': 'application/json',
      }
    };
  
    fetch("http://localhost:3000/api/products/order", options)
        .then(response => response.json())
        .then(data => {
        localStorage.setItem('orderId', data.orderId);
        document.location.href = 'confirmation.html?id='+ data.orderId;
      });
  
    }});
 
}
  
getForm();






/*
function postForm(validFirstName, validLastName, validAddress, validCity, validEmail) {
  
    
  const order = document.getElementById('order');
      
   
    order.addEventListener('click', (event) => {
    event.preventDefault();
    if(     validFirstName(firstName.value) && 
    validLastName(lastName.value) && 
    validAddress(address.value) && 
    validCity(city.value) && 
    validEmail(email.value)){ 
  
    // je récupère les données du formulaire dans un objet
    const contact = {
      firstName : document.getElementById('firstName').value,
      lastName : document.getElementById('lastName').value,
      address : document.getElementById('address').value,
      city : document.getElementById('city').value,
      email : document.getElementById('email').value
    }

    //Construction d'un array d'id depuis le local storage
    let productLocalStorage = JSON.parse(localStorage.getItem("userProducts"));


    let products = [];
    for (let i = 0; i<productLocalStorage.length;i++) {
        products.push(productLocalStorage[i].userProductId);
    }
    console.log(products);
  
    // je mets les valeurs du formulaire et les produits sélectionnés
    // dans un objet...
    const sendFormData = {
      contact,
      products,
    }
  
    // j'envoie le formulaire + localStorage (sendFormData) 
    // ... que j'envoie au serveur
  
    const options = {
      method: 'POST',
      body: JSON.stringify(sendFormData),
      headers: { 
        'Content-Type': 'application/json',
      }
    };
  
    fetch("http://localhost:3000/api/products/order", options)
        .then(response => response.json())
        .then(data => {
        localStorage.setItem('orderId', data.orderId);
        document.location.href = 'confirmation.html?id='+ data.orderId;
      });
  
  }});
   // fin eventListener postForm
  } // fin envoi du formulaire postForm
  
*/

  


























