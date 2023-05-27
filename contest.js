let signUpForm=document.getElementById("signUpForm")
signUpForm.addEventListener("submit" , storingData)
let details=document.querySelectorAll("form>input")
console.log(typeof details, details)
let userdetails={}
let userdetailString
function storingData(event){

    event.preventDefault()

   for(let i=0;i<details.length;i++){
    if(details[i].value!==""){
    if(details[i].placeholder!=="Confirm Password"){
        userdetails[`${details[i].placeholder}`]=details[i].value
    }
    }
}
   

   
   
    userdetails["accesstoken"]= generatingRandomString(16)
    userdetailString=JSON.stringify(userdetails)
    
    localStorage.setItem("userDeatils", userdetailString)
}


function generatingRandomString(length){
    const listOfCharacters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const lengthofListofCharacters=listOfCharacters.length

    let randomString=""

    for(let i=0;i<=length;i++){
        const index=Math.floor(Math.random()*lengthofListofCharacters)
        randomString+=listOfCharacters.charAt(index)
    }

    return randomString
}