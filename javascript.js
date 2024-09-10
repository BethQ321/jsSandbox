let answer = prompt("Input a number", '');

if(answer < 0) {
    alert(-1);
} else if(answer > 0){
    alert(1);
} else {
    alert(0);
}

let result = (a + b < 4) ? 'Below' : 'Over';

let message = (login === 'Employee') ? 'Hello' :
    (login === 'Director') ? 'Greetings':
    (login === '') ? 'No login':
    '';
