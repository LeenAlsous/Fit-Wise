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
