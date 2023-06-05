// creo l'array per le squadre di calcio

const footballTeam = [
    {
        'nome' : 'Milan',
        'puntiFatti' : 0,
        'falliSubiti' : 0,
    },
    {
        'nome' : 'Inter',
        'puntiFatti' : 0,
        'falliSubiti' : 0,
    },
    {
        'nome' : 'Juventus',
        'puntiFatti' : 0,
        'falliSubiti' : 0,
    },
    {
        'nome' : 'Torino',
        'puntiFatti' : 0,
        'falliSubiti' : 0,
    },
    {
        'nome' : 'Lazio',
        'puntiFatti' : 0,
        'falliSubiti' : 0,
    },
    {
        'nome' : 'Roma',
        'puntiFatti' : 0,
        'falliSubiti' : 0,
    },
    {
        'nome' : 'Fiorentina',
        'puntiFatti' : 0,
        'falliSubiti' : 0,
    },
]

console.log(footballTeam)

// creo la funzione per generare un numero randomico
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min +1) ) + min;
} 

// creo un nuovo array a cui fornisco i numeri generati randomicamente
const newScore = footballTeam.map((element )=>{
    element.falliSubiti = randomNumber(5,50)
    element.puntiFatti = randomNumber(2,20)

    return element
    
})

console.log(newScore)


// creo un nuovo array