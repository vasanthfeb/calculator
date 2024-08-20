document.getElementById("num1").value="";
document.getElementById("num2").value="";


// add

function add(){
  let num_one=parseFloat(document.getElementById("num1").value);
  let num_two=parseFloat(document.getElementById("num2").value);
  let ans=num_one + num_two;
  document.getElementById("out").innerHTML=ans;

}

// sub

function sub(){
  let num_one=parseInt(document.getElementById("num1").value);
  let num_two=parseInt(document.getElementById("num2").value);
  let ans=num_one-num_two;
  document.getElementById("out").innerHTML=ans;
}

// mul
function mul(){
  let num_one=parseFloat(document.getElementById("num1").value);
  let num_two=parseFloat(document.getElementById("num2").value);
  let ans=num_one *num_two;
  document.getElementById("out").innerHTML=ans;
}
//div
function div(){
  let num_one=parseFloat(document.getElementById("num1").value);
  let num_two=parseFloat(document.getElementById("num2").value);
  let ans=num_one / num_two;
  document.getElementById("out").innerHTML=ans;
}