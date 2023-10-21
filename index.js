let istPara = document.querySelector("[data-p]");
let user = document.querySelector("[data-user]");
let password = document.querySelector("[data-password]");
var loginMovement = document.querySelector(".btnmovement");
var login = document.querySelector("[data-btn]");

var loginMovementPositon = loginMovement.getBoundingClientRect();
  console.log(loginMovementPositon);
   
  var logindata = "Login";
   
    function callback(details){
       // console.log("chal toh rha h ");
       let leftMoveRange = gsap.utils.mapRange(loginMovementPositon.left , loginMovementPositon.width ,  loginMovementPositon.width , loginMovementPositon.left,details.clientX);
    
       let topMoveRange = gsap.utils.mapRange(loginMovementPositon.top , loginMovementPositon.height ,  loginMovementPositon.height , loginMovementPositon.top,details.clientY);

       gsap.to(login , {
          left:leftMoveRange+"px",
         top: topMoveRange + "px",
      
       })

    }
    
    loginMovement.addEventListener('mousemove' , callback,true);


var currentPara = "Please fill the input fields ";
function initilize(){
  user.value = "";
  password.value ="";
        istPara.innerHTML = currentPara;
        istPara.classList.add("red");
        login.innerHTML = logindata;
       loginMovement.addEventListener('mousemove' , callback,true);
    }


initilize();


var form = document.querySelector(".form");





form.addEventListener("keypress" ,  ()=>{
  if(user.value !== "" && password.value !=="" ){
    currentPara = "Good Luck !";
    istPara.classList.remove("red");
   istPara.innerHTML = currentPara;
   istPara.classList.add("green");
   
   login.style.top= "50%";
   login.style.left= "50%";
   login.style.transform = "translate(-50% , -50%)";
   
   loginMovement.removeEventListener('mousemove' , callback,true);
   
   login.addEventListener('click' , loginCallBack,true);
  }
  else{
  
   
  }
 
})


function loginCallBack(){
  if( logindata === "Login"){
    logindata = "Logout";
    login.innerHTML = logindata;
  
  }
  else{
   
    istPara.classList.remove("green");
    currentPara = "Please fill the input fields ";
    logindata = "Login";
    login.innerHTML = logindata;
    initilize();

  
    login.removeEventListener('click' , loginCallBack,true);
  }
}








