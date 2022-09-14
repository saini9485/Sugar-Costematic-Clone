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
var skincare = document.getElementById("skincare");
var container = document.getElementById("skincare_product_area");
var moisture = document.getElementById("moisture");
var sunscream = document.getElementById("sunscream");
var setting = document.getElementById("setting");
var cofee = document.getElementById("cofee");
var sheet = document.getElementById("sheet");
var citrus = document.getElementById("citrus");
var aquaholic = document.getElementById("aquaholic");
var box = document.querySelector(".box")
var discription_container_main = document.querySelector(".discription_container_main")
var discription_container = document.querySelector(".discription_container")
var show_product_area = document.querySelector(".show_product_area")






// var iddd = []

skincare.addEventListener("click", function (event) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 110; i < 150; i++) {
        let makeup = data[i];
        //console.log(makeup)
        let result = `
        <div class="box" id="box">  
        <img src="${makeup.image_link}" class="click image" alt="image"  id="${makeup.id}">
             <p class="Makeup_Name" id="naming">  ${makeup.name}</p>
             <h4 class="Makeup_Price">$${makeup.price} <span>(20 % off)</span></h4>
                <p><i class="fa fa-star" aria-hidden="true"></i>5.6
                 (125)</p> 
         <div class="add_cart">   
         <i class="fa fa-heart" aria-hidden="true"id="heartimg"></i> 
        <h4 class="add"><a onclick="lungs(event)" id="add" class="${makeup.id}"> Add to Cart</a> </h4>
        </div> 
        </div>`;

        // iddd.push(`${makeup.id}`)
        localStorage.setItem("local_name",`${makeup.name}`)
        localStorage.setItem("local_discription",`${makeup.description}`)
        localStorage.setItem("local_price",`${makeup.price}`)
        

        container.innerHTML += result;
      }
      // console.log(iddd);
    })
    .catch((err) => alert("Nothing found"));


});


// ------------------store and fetch----------------------//

var array_id=[]

container.addEventListener("click", function productShow(e){
  // console.log(e.target)
  if (e.target.classList[0] == "click" ||e.target.classList[0] == "Makeup_Name" || e.target.classList[0] == "box"  ) {
      // console.log(e.target.id)
      // alert(e.target.textContent)
      localStorage.setItem("localimage",e.target.src)
      // alert(e.target.value)
      // console.log(e.target.value);
        show_product_area.style.display = "none"
  discription_container_main.style.display = "block";

  var image_from_localst = localStorage.getItem("localimage")
  var name_from_localst = localStorage.getItem("local_name")
  var discription_from_localst = localStorage.getItem("local_discription")
  var price_from_localst = localStorage.getItem("local_price")
  

  var hard_image= document.getElementById("hard_image")
  var detail_name= document.getElementById("details_name")
  var price= document.getElementById("price")

    hard_image.src=`${image_from_localst}`;
    detail_name.textContent= name_from_localst;
    price.textContent=`$${price_from_localst}`



      let id = e.target.id
      array_id.push(id)
      localStorage.setItem("product_id", `${id}`)

      let api_product_id= localStorage.getItem("product_id")
      // alert(api_product_id)

  }

  console.log(array_id);
})












moisture.onclick = function () {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 150; i < 200; i++) {
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
};

sunscream.addEventListener("click", function () {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 11; i < 80; i++) {
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

setting.addEventListener("click", function (event) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 90; i < 100; i++) {
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

cofee.addEventListener("click", function (event) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 0; i < 50; i++) {
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

citrus.addEventListener("click", function (event) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 30; i < 70; i++) {
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

sheet.addEventListener("click", function (event) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 110; i < 150; i++) {
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

aquaholic.addEventListener("click", function (event) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?`
  ) //fetching api data
    .then((response) => response.json()) //text --> json
    .then((data) => {
      console.log(data)
      container.innerHTML = "";
      for (let i = 110; i < 150; i++) {
        let makeup = data[i];
        //console.log(makeup)

        let result = `
        <div class="box"  onclick="movieDetail(event) >  
        <img src="${makeup.image_link}"  onclick="movieDetail(event)" id="${makeup.id}" class="image" alt="image" >
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
    .catch((err) => alert("Nothing found"))
});






// ------------discription-------------------------//.


var discription_container = document.querySelector(".discription_container")
var discription_container_main = document.querySelector(".discription_container_main")

function movieDetail(e) {
  let id = e.target.id;
  alert(id)
}
  // discription_container.innerHTML =`<p class="Makeup_Name">  ${makeup.name}</p>
  // <h4 class="Makeup_Price">$${makeup.price} <span>(20 % off)</span></h4>`
// }


