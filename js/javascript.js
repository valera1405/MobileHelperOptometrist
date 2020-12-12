window.addEventListener ('load', loader, false);
function loader (e) {
  e.preventDefault();
  document.getElementById('vvod-stroki').addEventListener ('submit', validateBukvy, false);
}
function validateBukvy(e) {
  var VvodStroki = [];
  VvodStroki[01] = "Первая строка: "
  VvodStroki[01][m] = "М";
  VvodStroki[01][n] = "Н";
  VvodStroki[01][k] = "К";
}