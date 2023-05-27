let profileDetailsContainer=document.getElementById("profileDetailsContainer")
let logoutBtn=document.getElementById("logoutBtn")
logoutBtn.addEventListener("click", ()=>{
    localStorage.clear()
    let link=document.createElement("a")
    link.href="https://harshjain56.github.io/Frontend-3-Contest-3/"
    link.click()
})


function renderingData(){
    let retrievedData=localStorage.getItem("userDetails")
    let userDeatils=JSON.parse(retrievedData)

    for(let i in userDeatils){
     if(i!=="accesstoken"){
        displayingData(i,userDeatils[i])
     }
    }

    console.log(userDeatils)
}
   

renderingData()

function displayingData(label,value){
    let h3=document.createElement("h3")
    h3.innerText=`${label} : ${value}`
    profileDetailsContainer.appendChild(h3)

}
