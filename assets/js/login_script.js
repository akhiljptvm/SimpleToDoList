function Validate(){
    let user = document.getElementById("username");
    let pass = document.getElementById("password");
    return userCheck(user,pass,successLogin,errorLogin)
}

function userCheck(user,pass,successLogin,errorLogin){
    if(user.value == "admin" && pass.value == "12345"){
        return successLogin();
    }
    else{
        return errorLogin();
    }
}
function successLogin(){

    return true;
}
function errorLogin(){
    var errorLabel =  document.getElementById("error");
    errorLabel.innerHTML = "Enter valid credentials!!"
    errorLabel.style.color = "red"
    errorLabel.removeAttribute("hidden",true);

    return false;
}

function Typing(){
    var errorLabel =  document.getElementById("error");
     errorLabel.setAttribute("hidden",true);
}

// function listener(){
// let count = 0;
// document.getElementById("btnfn").addEventListener("click",function(){
//     console.log("button clicked :", ++count);
// });
// }
// listener();

// date
function dateRefr(){
    let date = new Date();
    let time = date.toLocaleTimeString();
  document.getElementById("dateText").innerText = "Indian Standard Time \n " +time;
  setTimeout(dateRefr,1000);
}