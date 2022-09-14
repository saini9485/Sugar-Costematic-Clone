/*1.  JS Start For INPUT And OTP FOR next And Previous */
var verify_btn= document.getElementById("verify");
var number_1= document.getElementById("input1");
var number_2= document.getElementById("input2");
var number_3= document.getElementById("input3");
var number_4= document.getElementById("input4");
var number_5= document.getElementById("input5");
var number_6= document.getElementById("input6");
var number_7= document.getElementById("input7");
var number_8= document.getElementById("input8");
var number_9= document.getElementById("input9");
var number_10= document.getElementById("input10");
var otp_1= document.getElementById("text1");
var otp_2= document.getElementById("text2");
var otp_3= document.getElementById("text3");
var otp_4= document.getElementById("text4");
var requestOtp= document.getElementById("requestptp");
var username= document.getElementById("username");
var error_msg= document.getElementById("error_msg");



function move(e,p,c,n){
   var length = document.getElementById(c).value.length
var maxlength = document.getElementById(c).getAttribute("maxlength")
if(length==maxlength){
    if(n!==''){
        document.getElementById(n).focus();
    }
}
if(e.key=="Backspace"){
    if(p!==''){
        document.getElementById(p).focus();
    }
}
}


function getotp(){
    let randomOtp = Math.random();
  randomOtp = Math.floor(randomOtp * 10000);
  alert("One Time Password:-"+ `${randomOtp}`);
  window.localStorage.setItem("otp",randomOtp)
}



// var storage_phone = window.localStorage.getItem("user_phone")
// var storage_otp = window.localStorage.getItem("otp")
// var storage_fname = window.localStorage.getItem("user_fname")
// var storage_lname = window.localStorage.getItem("user_lname")

  verify_btn.addEventListener("click",function(){
    var mobile_number= `${number_1.value}${number_2.value}${number_3.value}${number_4.value}${number_5.value}${number_6.value}${number_7.value}${number_8.value}${number_9.value}${number_10.value}`
    var otp_number= `${otp_1.value}${otp_2.value}${otp_3.value}${otp_4.value}`
    // alert(otp_number)

    var storage_phone = window.localStorage.getItem("user_phone")
    var storage_otp = window.localStorage.getItem("otp")
    var storage_fname = window.localStorage.getItem("user_fname")
    var storage_lname = window.localStorage.getItem("user_lname")
    // alert(storage_phone)
    // alert(storage_otp)
    
    if(mobile_number == storage_phone && otp_number == storage_otp){
        let fullname=`${storage_fname} ${storage_lname}`
        username.innerText=fullname;

        error_msg.textContent=""
    }
    else{
            error_msg.textContent="Incorrect Phone number / OTP "
        
    }


  });
 
 
  




// }








   



  