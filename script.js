
function generate(){

  let complexity = document.getElementById("slider").value;

  let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"

  let password = "";

  for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
  }

  document.getElementById("display").value = password;

}
function copypassword(){

  document.getElementById("display").select();

  document.execCommand("copy");

  alert("Password saved!")
}