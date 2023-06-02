const tavolo_vip =['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']

console.log(tavolo_vip)


const list = tavolo_vip.map((item, index )=>{

    let object ={
        tavolo: 'Tavolo dei Vip',
        nome:item,
        posto_occupato: (index+1),
    }

    return object

})


console.log(list)


