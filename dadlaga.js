var mashin = ["prius10", "prius20", "prius30", "kluger", "carina", "corolla", "prado"]
mashin[2]="prius40" // ner solih
mashin[mashin.length]="570" 
mashin.unshift("camry") // urda tald n nemeh
mashin.shift("camry") // urd talas n hasah
mashin.push=("RX") // tugsguld n nemeh
//mashin.splice(1, 2) // elementes element ustgah
// var mashin = mashin.slice(1, 3) // element songoj awah 1-3 hurtel 1 orno 3 orohgui
document.getElementById("jishee").innerHTML=(mashin);
document.getElementById("jishee1").innerHTML=(mashin.length);
document.getElementById("jishee2").innerHTML=mashin.indexOf("prius20") // heddeh element we gdgig harna
// massive english dr zarlah var car = new Array("prius11", 'carina', 'prado')



