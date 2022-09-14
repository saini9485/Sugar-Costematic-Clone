var product_dsc_page=document.queryCommandIndeterm(".main")
var image_from_localst = localStorage.getItem("localimage")
var name_from_localst = localStorage.getItem("local_name")
var discription_from_localst = localStorage.getItem("local_discription")
var price_from_localst = localStorage.getItem("local_price")

 pages=`<div class="box">  
<img src="${image_from_localst}" class="click image" alt="image"  id="${makeup.id}">
      <p class="Makeup_Name">  ${name_from_localst}</p>
      <h4 class="Makeup_Price">$${price_from_localst} <span>(20 % off)</span></h4>
         <p><i class="fa fa-star" aria-hidden="true"></i>5.6
          (125)</p> 
          <p>${price_from_localst}</p>
  <div class="add_cart">   
  <i class="fa fa-heart" aria-hidden="true"id="heartimg"></i> 
 <h4 class="add"><a onclick="lungs(event)" id="add" class="${makeup.id}"> Add to Cart</a> </h4>
 </div> 
 </div>`

 product_dsc_page.innerHTML +=pages;




