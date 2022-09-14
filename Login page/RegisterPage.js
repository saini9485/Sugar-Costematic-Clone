 //let container = document.getElementsByClassName("container")
// let btn1 = document.getElementByIdName("savebtn")

var First_name=document.getElementById("fname")
var middle_name=document.getElementById("mname")
var last_name=document.getElementById("lname")
var email=document.getElementById("email")
var phone_number=document.getElementById("phone")



 function Save_and_countinue (){

    window.localStorage.setItem("user_fname",`${First_name.value}`)
    window.localStorage.setItem("user_mname",`${middle_name.value}`)
    window.localStorage.setItem("user_lname",`${last_name.value}`)
    window.localStorage.setItem("user_email",`${email.value}`)
    window.localStorage.setItem("user_phone",`${phone_number.value}`)

     alert("  congratulation Account Created successful .. you will redirect to the login page")

 }




/*Close Function */
function closed (){
    MainRegisterPage.style.display="none"
    MainRegisterPage.style.transform="translateX(710px)";   
    MainRegisterPage.style.transition="2s";  
}



function seterror(id, error){
    element = document.getElementById(id)
    element.getElementsByClassName("formerror")[0].innerHTML=error
}

function validateform(){
    var returnval =true;
    var name = document.form["myForm"]["First-Name"].value
    if(name.length<8){
        seterror("name","length is too sort")
    }
    return returnval;
}


