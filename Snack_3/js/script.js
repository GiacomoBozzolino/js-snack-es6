// creo l'array con gli oggetti
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
// let bike= ''
let finalBike = ''

// individuo la bicicletta più leggera all'interno dell'array
for (let i = 0; i < bicycle.length; i++){
    let lightBike = bicycle[0]
    let control = bicycle[i]
    if (control.weight < lightBike.weight ){
        lightBike = control
      
        finalBike= lightBike 
    }
}
console.log (finalBike)

// estraggo le informazioni dall'array e le stampo in console
bicycle.forEach((bike)=>{
    let {name, weight} = bike
    if (weight === finalBike.weight) {
        nome= bike.name
        peso=bike.weight
        console.log( `Il modello di bici più leggero è ${nome} e pesa solo ${peso}kg`)
    }
})

