let array = JSON.parse(localStorage.getItem('cartItems')) || [];
console.log(array)


var from_localstorage_image_src= localStorage.getItem("localimage")
var from_localstorage_name= localStorage.getItem("localname")


var cart_image= document.getElementById("cart_image")
var cart_name= document.getElementById("cart_name")

cart_image.src=`${from_localstorage_image_src}`
cart_name.textContent=from_localstorage_name