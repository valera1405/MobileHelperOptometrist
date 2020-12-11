function doGet(e){
    var sheet = SpreadsheetApp.openById("1XpqAz2DB3r-hNbIIsJ7teMjyuTix6GVLZrMi4Glsz-Y");
    var n=sheet.getRange("A1").getValue()+2;
    var d = new Date(); 
    sheet.getRange("A"+n).setValue(d);
    sheet.getRange("B"+n).setValue(e.parameter.p1);
    sheet.getRange("C"+n).setValue(e.parameter.p2);
    sheet.getRange("D"+n).setValue(e.parameter.p3);
    sheet.getRange("A1").setValue(n-1);
  }