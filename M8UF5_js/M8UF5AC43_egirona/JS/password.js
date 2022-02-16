function comprovar() {
    var passw=document.getElementById('passw').value;
    var reppassw=document.getElementById('reppassw').value;
    if(passw==reppassw){
        alert('Les contrasenyes són correctes')
        
    }
    else {
        alert('No coincideixen les contrasenyes')
      
    }
    
}