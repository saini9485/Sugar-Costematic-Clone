const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,


  pagination: {
    el: '.swiper-pagination',
    clickable: true,

  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});





// --------------------------------------------skin care api-------------------------//

var input = document.getElementById("input");
var facebrush = document.getElementById("skincare");
var eyebrush = document.getElementById("moisture");
var container = document.getElementById("skincare_product_area");









facebrush.addEventListener("click", function (event) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 350; i < 390; i++) {
        let makeup = data[i];
        //console.log(makeup)
        let result = `
        <div class=box>  
        <img src="${makeup.image_link}" class="image" alt="image" >
             <p class="Makeup_Name">  ${makeup.name}</p>
             <h4 class="Makeup_Price">$${makeup.price} <span>(20 % off)</span></h4>
                <p><i class="fa fa-star" aria-hidden="true"></i>5.6
                 (125)</p> 
         <div class="add_cart">   
         <i class="fa fa-heart" aria-hidden="true"id="heartimg"></i> 
        <h4 class="add"> Add to Cart</h4>
        </div> 
        </div>`;
        container.innerHTML += result;
      }
    });
  // .catch((err) => alert("Nothing found"));
});



eyebrush.onclick = function () {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 180; i < 200; i++) {
        let makeup = data[i];
        //console.log(makeup)
        let result = `
        <div class=box>  
        <img src="${makeup.image_link}" class="image" alt="image" >
             <p class="Makeup_Name">  ${makeup.name}</p>
             <h4 class="Makeup_Price">$${makeup.price} <span>(20 % off)</span></h4>
                <p><i class="fa fa-star" aria-hidden="true"></i>5.6
                 (125)</p> 
         <div class="add_cart">   
         <i class="fa fa-heart" aria-hidden="true"id="heartimg"></i> 
        <h4 class="add"> Add to Cart</h4>
        </div> 
        </div>`;
        container.innerHTML += result;
      }
    })
  .catch((err) => alert("Nothing found"));
};



