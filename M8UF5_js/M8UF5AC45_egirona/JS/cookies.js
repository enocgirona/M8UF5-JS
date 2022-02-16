function comprovar() {
    var passw=document.getElementById('passw').value;
    var reppassw=document.getElementById('reppassw').value;
    var usuari=document.getElementById('usuari').value;

    if(passw==reppassw){
        if(passw!='' & usuari!='')
        alert('Usuari i password correctes')
        }
    else {
        alert('Usuari o password incorrectes');
        }
}
function guardar() {
    var nom=document.getElementById('nom').value;
    var cognom=document.getElementById('cognom').value;
    window.localStorage.setItem('nom',nom);
    window.localStorage.setItem('cognom',cognom);
    console.log('Dades guardades');
}
function recuperar() {
    var recuperarnom=localStorage.getItem('nom');
    var recuperarcognom=localStorage.getItem('cognom');
    document.getElementById('nom').value=recuperarnom;
    document.getElementById('cognom').value=recuperarcognom;
    console.log('Dades recuperades');
}
function esborrar() {
    localStorage.removeItem('nom')
    localStorage.removeItem('cognom')
    document.getElementById('nom').value='';
    document.getElementById('cognom').value='';
}
    