
var Stroka01_sh = document.getElementById("stroka-01-sh");
var PrStroka01_sh = ['Ш'];

var el_down = document.getElementById("GFG_DOW");

function gfg_Run()
{
  var a = Stroka01_sh.value;
  var b = PrStroka01_sh.value;
  var ans = a.localeCompare(b);
  var res = "";

  if (ans == -1) {
    res = '"' + a + '"Comes before"' + b +'"';
  }
  else if (ans == 0) {
    res = 'Both string are same';
  }
  else {
    res = '"' + a + '" comes after "' + b + '"';
  }
  el_down.innerHTML = res;
  }


var stroka01 = [];
stroka01[0] = 'Ш';
stroka01[1] = 'Б';

