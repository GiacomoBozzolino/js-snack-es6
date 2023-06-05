const bicycle = [
    {
        'name': 'Bianchi',
        'weight': 7
    },
    {
        'name': 'Look',
        'weight': 9
    },
    {
        'name': 'Willier Triestina',
        'weight': 10
    },
    {
        'name': 'Colnago',
        'weight': 5
    },
    {
        'name': 'Cervelo S5',
        'weight': 8
    },

    {
        'name': 'Canyon',
        'weight':3
    }, 
]

console.log(bicycle)
let nome= ''
let peso= 0




bicycle.forEach((bike)=>{
    let {name, weight} = bike
    if (weight < 4) {
        nome= bike.name
        peso=bike.weight
        console.log( `Il modello di bici più leggero è ${nome} e pesa solo ${peso}kg`)
    }
})

