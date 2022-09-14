const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    loop: true,
  

    pagination: {
      el: '.swiper-pagination',
      clickable:true,

    },
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });

  // -------------------prakash-----------------//



//   let top_slide_images_arr = [
//     {url : "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/d9103d2b-af25-40c3-b41b-90538502b315.gif"},
//     {url : "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/adbd5f7f-557e-487f-aec8-27c79847ec03.jpg"},
//     {url : "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1571460a-0b29-4920-8c80-7e37f048def4.jpg"},
//     {url : "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/2726f64a-3b5b-4ca9-b066-2ed3d9245582.gif"},
//     {url : "https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/177972e0-4583-428b-b4db-da5546b71310.jpg"},
//     {url : "https://d32baadbbpueqt.cloudfront.net/Homepage/1fa29c9d-b7b6-4aa9-ac54-a2195c10fc63.jpg"},
//     {url : "https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg"}

// ]


let bestSellersLeftArr = [
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141", name : "LIP ZIP MATTE TOPPER", price: "499", text : "ADD TO CART",},
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/01_d6ffec78-c2b6-4466-8672-233fee0285a8.jpg?v=1640791955", name : "MATTE AS HELL CRAYON LIPSTICK", price: "799",text : "SELECT SHADE",},
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/01.jpg?v=1639496513", name : "KOHL OF HONOUR INTENSE KAJAL", price: "249",text : "SELECT SHADE",},
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-tipsy-lips-moisturizing-balm-01-mojito-15057279877203.jpg?v=1619122412", name : "TIPSY LIPS MOISTURIZING BALM", price: "199",text : "SELECT SHADE",},
    
   
]

let bestSellersRightArr = [    
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg?v=1657123108", name : "FACE PALETTE", price: "2249",text : "SELECT SHADE",},
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/382512089-mettle-priming-balm-01.jpg?v=1648654861", name : "METTLE PRIMING BALM",price: "1799",text : "SELECT SHADE",},
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_51afaa84-af89-42b5-bdb8-a51b01257bc0.jpg?v=1639582607", name : "CONTOUR DE FORCEFACE PALETTE", price: "799",text : "SELECT SHADE",},
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg?v=1639582652", name : "ACE OF FACE FOUNDATION STICK", price: "999",text : "SELECT SHADE",},
]

let hotDealsarr = [

     [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ac294d17-5c03-4d38-9b9e-be329de0f58a.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f21188a3-aa66-4b1a-b52e-69bd9ee1f92c.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3098348f-c2bd-434f-b688-3432ae37d9ef.jpg",},
     ],
    [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1bbe5c65-f084-4c7e-ae6a-46b90867b04a.jpg",},
        {img_url :"https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/c3f4367f-0512-4adf-b162-a34f624ff76b.jpg",},
    ],
    [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/788deca3-af41-496e-8649-06a2830603b9.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ac294d17-5c03-4d38-9b9e-be329de0f58a.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f21188a3-aa66-4b1a-b52e-69bd9ee1f92c.jpg",},
    ],
    [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3098348f-c2bd-434f-b688-3432ae37d9ef.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1bbe5c65-f084-4c7e-ae6a-46b90867b04a.jpg",},
        {img_url :"https://d32baadbbpueqt.cloudfront.net/37f0de63-c052-447c-9f98-dacceede39e1.jpg",},
    ],
    [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/c3f4367f-0512-4adf-b162-a34f624ff76b.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/788deca3-af41-496e-8649-06a2830603b9.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ac294d17-5c03-4d38-9b9e-be329de0f58a.jpg",},
    ],
    [
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f21188a3-aa66-4b1a-b52e-69bd9ee1f92c.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/3098348f-c2bd-434f-b688-3432ae37d9ef.jpg",},
        {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/1bbe5c65-f084-4c7e-ae6a-46b90867b04a.jpg",},
    ],
    
]

let justInLeftArr = [
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/414584697-rakhi-gift-kit-wbg-images-1.jpg?v=1658505710", name : "RAKHI GIFT KIT FOR BEAUTIFUL GIRLS", price: "1899", text : "ADD TO CART",},
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/Vineeta_s-Favourite-Makeup-kit---WBG-images.jpg?v=1657555460", name : "VINEETA'S FAVOURITE MAKEUP KIT", price: "2999",text : "SELECT SHADE",},
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg?v=1657123108", name : "KOHL OF HONOUR INTENSE KAJAL", price: "249",text : "SELECT SHADE",},
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/Monsoon-Makeup-Kit---WBG-Images_1_66ba2237-0dad-42dc-88ea-c2d45555dd6a.jpg?v=1657814549", name : "TIPSY LIPS MOISTURIZING BALM", price: "199",text : "SELECT SHADE",},
    
   
]

let justInRightArr = [    
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/399160329-9-to-5-makeup-kit-wbg-01.jpg?v=1654013564", name : "FACE PALETTE FOR ALL LADIES", price: "2249",text : "SELECT SHADE",},
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/2_d5e8f5f6-db6f-43d4-a1ac-1da7b22fdc1b.jpg?v=1652943021", name : "ARCH BARVARIA MICRO CRAEAND ",price: "1799",text : "SELECT SHADE",},
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_9909d205-c5f9-476d-9903-c4beffbfebb7.jpg?v=1637068160", name : "CONTOUR DE FORCEFACE PALETTE", price: "799",text : "SELECT SHADE",},
    {img_url:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_7863c610-04ae-4e21-a5bb-55577898284a.jpg?v=1637336891", name : "OWN THE LIGHT LIQUID HIGHLIGHTER", price: "999",text : "SELECT SHADE",},
]


let topPicksArr = [
    [
     {img_url :"https://d32baadbbpueqt.cloudfront.net/Homepage/b9cb9486-d891-445a-9f70-09b4b71fe0b0.jpg",},
     {img_url :"https://d32baadbbpueqt.cloudfront.net/Homepage/84f0d36c-381f-4c62-8702-b0059b13094a.jpg",},
     {img_url :"https://d32baadbbpueqt.cloudfront.net/Homepage/0903f25c-ae3f-4de6-980b-1e3a4bbe2b6e.jpg",},

    ],
    [
     {img_url :"https://d32baadbbpueqt.cloudfront.net/Homepage/c5dc6c75-a49e-4028-b3a3-3bbbc63e49d6.jpg",},
     {img_url :"https://d32baadbbpueqt.cloudfront.net/Homepage/ae700fcf-b911-452c-a916-f9994a15d20c.gif",},
     {img_url :"https://d32baadbbpueqt.cloudfront.net/Homepage/fd3114aa-06bb-4aff-bb21-7381559ee48f.jpg",},

    ],
     [
     {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/ce6539a6-6bff-4f41-8554-4af80d8ffd07.jpg",},
     {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/8a71a460-cd8f-4166-8ac5-b19407d23699.jpg",},
     {img_url :"https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/dd4d4e8a-b7e3-485e-8a8c-059f5ccab057.jpg",},

    ],
 ]

//  ###########  Sliding Window part   Completed  ###########



//  ###########  Best sellers part   Started  ###########


let pro_div = document.querySelector(".best_seller_products")
let bestSeller = (bestSellersLeftArr,container)=>{
    container.innerText = ""
    bestSellersLeftArr.forEach((el)=>{
        // console.log(el)
        
        let div = document.createElement("div")
        div.className = "first_pro_div"

        let bsimg = document.createElement("img")
        bsimg.src = el.img_url
        bsimg.style.height = "350px"
        bsimg.style.width = "100%"

        let bsname = document.createElement("div")
        bsname.className = "pro_name"
        bsname.innerText = el.name

        
        let pdiv = document.createElement("div")
        pdiv.className = "pdiv"         
        let bsprice = document.createElement("p")
        bsprice.innerText = `₹ ${el.price}`
        pdiv.append(bsprice)

        let bstag = document.createElement("div")
        bstag.className = "text_tag"
        bstag.innerText = el.text

        let img_name_price_div = document.createElement("div")
        img_name_price_div.className = "img_name_price_div"

        img_name_price_div.append(bsimg,bsname,pdiv,)
        div.append(img_name_price_div,bstag)
        // console.log(div)
        container.append(div)
    })
   
}
bestSeller(bestSellersLeftArr,pro_div)
let flag1= true;


document.querySelector(".left_arr_div").addEventListener("click",()=>{

    flag1=!flag1
    if(flag1){
        bestSeller(bestSellersLeftArr,pro_div)
    }else{
        bestSeller(bestSellersRightArr,pro_div)
    }
    
})
let flag2 = false
document.querySelector(".right_arr_div").addEventListener("click",()=>{
    flag2 = !flag2
    if(flag2){
        bestSeller(bestSellersRightArr,pro_div)
    }else{
        bestSeller(bestSellersLeftArr,pro_div)
    }
    
})

//  ###########  Best sellers part   Completed  ###########


//########### Hot deals part  started  ###########


let main_div = document.querySelector(".slider")
let imageSlide =(arr,container)=>{
    container.innerText = ""
   for(let i=0; i<arr.length; i++){
    //    console.log(arr)
    arr[i].map((el)=>{
        let sliding_div = document.createElement("div")
        sliding_div.className = "sliding_div"
         let img_div = document.createElement("img")
         img_div.className = "bannerimg"
         img_div.src = el.img_url
         sliding_div.append(img_div)
         container.append(sliding_div)
     })
   }

}
imageSlide(hotDealsarr,main_div)
let hdSlide = document.querySelector(".slider")
let temp = 0
document.querySelector(".hdLarr").addEventListener("click",()=>{
    
    let winWidth = 1263
    temp = temp - winWidth
    let final = winWidth*(hotDealsarr.length-1)
   if(temp>0){
    console.group("left",temp)
    hdSlide.style.transform = `translate3d(${-temp}px,0px,0px)`
    hdSlide.style.transition = ".4s"
   } else{
    hdSlide.style.transform = `translate3d(${-final}px,0px,0px)`
    hdSlide.style.transition = "0.2s"
    temp = final
   } 
    
})

document.querySelector(".hdRarr").addEventListener("click",()=>{
    let winWidth = 1263
    
    temp = temp + winWidth
    console.group("right",temp)
    if(temp<winWidth*7){
        hdSlide.style.transform = `translate3d(${-temp}px,0px,0px)`
        hdSlide.style.transition = ".4s"
    }else{
        hdSlide.style.transform = `translate3d(${-0}px,0px,0px)`
        hdSlide.style.transition = "0.2s"
        temp = 0
    }
})

/*########### HOT Deals part Completed ###########*/


// *###########  Just In part started  *###########

let justIn_div = document.querySelector(".justIn_products")
let just = (justInLeftArr,container)=>{
    container.innerText = ""
    justInLeftArr.forEach((el)=>{
        // console.log(el)
        
        let div = document.createElement("div")
        div.className = "four_pro_div"

        let bsimg = document.createElement("img")
        bsimg.src = el.img_url
        bsimg.style.height = "350px"
        bsimg.style.width = "100%"

        let bsname = document.createElement("div")
        bsname.className = "just_name"
        bsname.innerText = el.name

        
        let pdiv = document.createElement("div")
        pdiv.className = "Jdiv"         
        let bsprice = document.createElement("p")
        bsprice.innerText = `₹ ${el.price}`
        pdiv.append(bsprice)

        let bstag = document.createElement("div")
        bstag.className = "just_tag"
        bstag.innerText = el.text

        let img_name_price_div = document.createElement("div")
        img_name_price_div.className = "img_name_price_div"

        img_name_price_div.append(bsimg,bsname,pdiv,)
        div.append(img_name_price_div,bstag)
        // console.log(div)
        container.append(div)
    })
   
}
just(justInLeftArr,justIn_div)
let flag4= true;


document.querySelector(".Left_arr_div").addEventListener("click",()=>{

    flag4=!flag4
    if(flag4){
        just(justInLeftArr,justIn_div)
    }else{
        just(justInRightArr,justIn_div)
    }
    
})
let flag6 = false
document.querySelector(".Right_arr_div").addEventListener("click",()=>{
    flag6 = !flag6
    if(flag6){
        just(justInRightArr,justIn_div)
    }else{
        just(justInLeftArr,justIn_div)
    }
    
})

/* // *###########  Just In part Completed  *########### */



    // ##3###%%$$^%  Top pics of the week part Started   ##3###%%$$^%

    let topPicksdiv = document.querySelector(".tpSlider")
    imageSlide(topPicksArr,topPicksdiv)
    let tpTemp = 0
     document.querySelector(".tpLarr").addEventListener("click",()=>{
         
        tpTemp = tpTemp - winWidth
        let final = winWidth*(topPicksArr.length-1)
       if(tpTemp>=0){
        console.group("left",tpTemp)
        topPicksdiv.style.transform = `translate3d(${-tpTemp}px,0px,0px)`
        topPicksdiv.style.transition = ".4s"
       } else{
        topPicksdiv.style.transform = `translate3d(${-final}px,0px,0px)`
        topPicksdiv.style.transition = "0.2s"
        tpTemp = final
       }
         
     })
 
     document.querySelector(".tpRarr").addEventListener("click",()=>{
        
        tpTemp = tpTemp + winWidth
        console.group("right",tpTemp)
        if(tpTemp<winWidth*(topPicksArr.length)){
            topPicksdiv.style.transform = `translate3d(${-tpTemp}px,0px,0px)`
            topPicksdiv.style.transition = ".4s"
        }else{
            topPicksdiv.style.transform = `translate3d(${-0}px,0px,0px)`
            topPicksdiv.style.transition = "0.2s"
            tpTemp = 0
        }
     })


    //  --------------------------map box details --------//

    
    