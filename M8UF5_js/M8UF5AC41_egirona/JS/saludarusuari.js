function enviarSalutacio() {
    var nom = document.getElementById('nom').value
    var cognom = document.getElementById('cognom').value
    document.getElementById('saludar').innerHTML='HOLA'+' ' + nom + " " + cognom +' '+'GRÀCIES PER OMPLIR EL FORMULARI' 
}