/*Make calories result visible*/
document.getElementById("caloriesCalc").addEventListener("click", function (x) {
  x.preventDefault();
  document.getElementById("calories").style.display = "block";
});

/*Make protein result visible*/
document.getElementById("proteinCalc").addEventListener("click", function (x) {
  x.preventDefault();
  document.getElementById("protein").style.display = "block";
});

document.getElementById("defaultTab").click();
function showCalc(evt, calcId) {
  var i, calc, option;
  calc = document.getElementsByClassName("calc");
  for (i = 0; i < calc.length; i++) {
    calc[i].style.display = "none";
  }
  option = document.getElementsByClassName("option");
  for (i = 0; i < option.length; i++) {
    option[i].className = option[i].className.replace(" active", "");
  }
  document.getElementById(calcId).style.display = "block";
  evt.currentTarget.className += " active";
}
