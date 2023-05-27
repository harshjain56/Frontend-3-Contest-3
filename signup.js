let signupContainer=document.getElementById("signupContainer")
let signUpForm=document.getElementById("signUpForm")
let submitBtn=document.getElementById("submitBtn")
let details=document.querySelectorAll("form>input")

let profilebtn=document.getElementById("profilebtn")
profilebtn.addEventListener("click",movingtoProfilepage)





signUpForm.addEventListener("submit" , storingData)







function storingData(event){

    event.preventDefault()

let userdetails={}
let userdetailString
let flag1=true
let flag2=true

   for(let i=0;i<details.length;i++){
    if(details[i].value!==""){
        if(details[i].placeholder==="Password"&&details[i+1].placeholder==="Confirm Password"){
            if(details[i].value!==details[i+1].value){
               flag2=false
               break;
            }
        }
    if(details[i].placeholder!=="Confirm Password"){
        userdetails[`${details[i].placeholder}`]=details[i].value
    }
    }
    else{
        flag1=false
        break
    }
}
   

   
   if(flag1){
    if(flag2){

        userdetails["accesstoken"]= generatingRandomString(16)
        userdetailString=JSON.stringify(userdetails)
        
        localStorage.setItem("userDetails", userdetailString)
         
    
        setTimeout(()=>{displayingSignUpSuccess(details)},1000)

        setTimeout(()=>{
            renderingProfilePage()
        },3000)

    }

    else{
        setTimeout(()=>{displayingPasswordMistmatch(event)},1000)
    }
   
}

else{
    setTimeout(displayingfailureMessage,1000)
}

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


function displayingSignUpSuccess(details){
   if(signupContainer.children[2]){
    signupContainer.removeChild(signupContainer.children[2])
   }
   details.forEach((detail)=>{
    detail.value=""
   }) 
  let successMessage=document.createElement("p")
  successMessage.className="success"
  successMessage.innerText="Your Signup Is Successful"
 signupContainer.appendChild(successMessage)
}

function displayingPasswordMistmatch(event){
    if(signupContainer.children[2]){
        signupContainer.removeChild(signupContainer.children[2])
       }
    let passswordMistmatchMessage=document.createElement("p")
    passswordMistmatchMessage.className="passswordMistmatch"
    event.target["password"].value=""
    event.target["confrimPassword"].value=""
    passswordMistmatchMessage.innerText="Password and Confirmed Password Doesnt Match, Please Enter again"
   signupContainer.appendChild(passswordMistmatchMessage)
}

function displayingfailureMessage(){
    if(signupContainer.children[2]){
        signupContainer.removeChild(signupContainer.children[2])
       }
    let failureMessage=document.createElement("p")
  failureMessage.className="failure"
  failureMessage.innerText="Please Enter data in all fields"
 signupContainer.appendChild(failureMessage)

}


function renderingProfilePage(){

    

    let link=document.createElement("a")
    link.href="https://harshjain56.github.io/Frontend-3-Contest-3/profile.html"
    link.click()

}

function renderingData(){
 let retrievedData=localStorage.getItem("userDeatils")
 let userDetails=JSON.parse(retrievedData)
  console.log(userDetails)
   
}


function movingtoProfilepage(){
    let retrievedData=localStorage.getItem("userDetails")
    if(retrievedData!==null){

        let link=document.createElement("a")
        link.href="https://harshjain56.github.io/Frontend-3-Contest-3/profile.html"
        link.click()

    }

    else{
        alert("Pls SignUp")
    }
}
