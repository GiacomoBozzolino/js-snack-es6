// creo l'array con i dati degli studenti
const student=[
    {
        id : 213,
        name: 'Marco della Rovere',
        grades: 78,
    },
    {
        id : 110,
        name: 'Paola Cortellessa',
        grades: 96,
    },
    {
        id : 250,
        name: 'Andrea Mantegna',
        grades: 48,
    },
    {
        id : 145,
        name: 'Gaia Borromini',
        grades: 74,
    },
    {
        id : 196,
        name: 'Luigi Grimaldello',
        grades: 68,
    },
    {
        id : 102,
        name: 'Piero della Francesca',
        grades: 50,
    },
    {
        id : 120,
        name: 'Francesca da Polenta',
        grades: 78,
    }
]

console.log(student)


// utilizzo map per creare un nuovo array con i nomi degli studenti con solo lettere maiuscole
let list = student.map((item)=>{
    nome = item.name
    console.log(nome)
    let nameUpper = nome.toUpperCase()
    return nameUpper
})

console.log(list)