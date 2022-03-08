//document.addEventListener('DOMContentLoaded', getMetarData())
function greet() {
    document.querySelector('.metar-codes').innerHTML += "hello ";
}

setInterval(function(){extractFile();}, 1000);


async function extractFile() {
    const response = await fetch('https://young-waters-99383.herokuapp.com/https://amssdelhi.gov.in/Palam4.php', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/php',
        },
    })
    .then(response => response.text())
    .then(data => {
        document.querySelector('.metar-codes').innerHTML = data;
    })
}
