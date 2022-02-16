function calcula(cal) {
    document.getElementById('texto').value+=(cal);
}
function borrar() {
    document.getElementById('texto').value='';
}
function evalua() {
    var resultado=document.getElementById('texto').value;
    document.getElementById('texto').value=eval(resultado);
}
