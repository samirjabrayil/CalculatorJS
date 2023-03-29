function Toplama() {
    var digit1 = Number(document.getElementById('first-digit').value);
    var digit2 = Number(document.getElementById('second-digit').value);
    var netice = document.getElementById('cavab');
    netice.innerHTML = digit1 + digit2;
}


function Cixma() {
    var digit1 = Number(document.getElementById('first-digit').value);
    var digit2 = Number(document.getElementById('second-digit').value);
    var netice = document.getElementById('cavab');
    netice.innerHTML = digit1 - digit2;
}


function Vurma() {
    var digit1 = Number(document.getElementById('first-digit').value);
    var digit2 = Number(document.getElementById('second-digit').value);
    var netice = document.getElementById('cavab');
    netice.innerHTML = digit1 * digit2;
}


function Bolme() {
    var digit1 = Number(document.getElementById('first-digit').value);
    var digit2 = Number(document.getElementById('second-digit').value);
    var netice = document.getElementById('cavab');
    netice.innerHTML = digit1 / digit2;
}

var date = new Date();
var hours = date.getHours();

if (hours >= 6 && 12 >= hours) {
    alert('Good morning');
    document.body.style.backgroundColor = 'rgb(10, 0, 99)'
}
else if (hours >= 13 && hours <= 18) {
    alert('Good afternoon')
    document.body.style.backgroundColor = 'rgb(255, 183, 0)'

}
else if (hours >= 19 && hours <= 22) {
    alert('Good evening')
    document.body.style.backgroundColor = 'rgb(1, 19, 66)'
}
else if (hours >= 19 && hours <= 22) {
    alert('Good evening')
    document.body.style.backgroundColor = 'rgb(1, 19, 66)'
}
else{
    alert('Good night')
    document.body.style.backgroundColor = 'rgb(2, 9, 41)'
}

