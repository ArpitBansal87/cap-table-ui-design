const showPage2 = (event) => {
  document.getElementById("page-1").style.display = "none";
  document.getElementById("page-2").style.display = "inline";
};
const showPage1 = () => {
  document.getElementById("page-2").style.display = "none";
  document.getElementById("page-1").style.display = "block";
};
