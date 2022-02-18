function trivial() {
  

    if (document.getElementById('edad').value >= 18) {
        window.location.href = "WEB/trivial.htm";
    }
    else {
        alert("Edad no vàlida")
    }
}

var contingut = document.querySelector('#contingut')
function agafar() {
fetch('https://randomuser.me/api/')
.then(res => res.json())
.then(data => {
console.log(data.results['0'])
contingut.innerHTML = `
<img src="${data.results['0'].picture.large}"
width="100px" class="img-fluid rounded-circle">
<p>Nombre: ${data.results['0'].name.last}</p>
`
})
}

function respuesta(){
    var respuesta1 = "5";
    var respuesta2 = "1";
    var respuesta3 = "Valencia";
    var respuesta4 = "6";
    var respuesta5 = "Amazon Games";

    if (document.getElementById('res1').value == respuesta1) {
        document.getElementById('respuesta1').innerHTML = respuesta1
    }
    else {
        document.getElementById('respuesta1').innerHTML = respuesta1
    }


    if (document.getElementById('res2').value == respuesta2) {
        document.getElementById('respuesta2').innerHTML = respuesta2
    }
    else {
        document.getElementById('respuesta2').innerHTML = respuesta2
    }


    if (document.getElementById('res3').value == respuesta3) {
        document.getElementById('respuesta3').innerHTML = respuesta3
    }
    else {
        document.getElementById('respuesta3').innerHTML = respuesta3
    }


    if (document.getElementById('res4').value == respuesta4) {
        document.getElementById('respuesta4').innerHTML = respuesta4
    }
    else {
        document.getElementById('respuesta4').innerHTML = respuesta4
    }


    if (document.getElementById('res5').value == respuesta5) {
        document.getElementById('respuesta5').innerHTML = respuesta5
    }
    else {        
        document.getElementById('respuesta5').innerHTML = respuesta5
    }
}