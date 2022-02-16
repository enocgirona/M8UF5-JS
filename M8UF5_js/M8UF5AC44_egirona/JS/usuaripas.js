function comprovar() {
    var passw=document.getElementById('passw').value;
    var reppassw=document.getElementById('reppassw').value;
    var usuari=document.getElementById('usuari').value;
    if(usuari=='ibai' && passw=='1234'){
            if(passw==reppassw){
                alert('Usuari i password correctes');
            }
            else {
                alert('Usuari o password incorrectes');
            }
        }
    else {
            alert('Usuari o password incorrectes');
      
    }
    
}