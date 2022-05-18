const Contenedor = require('./contenedor_promises')

const container = new Contenedor('file.json')

container.save({
    author: 'Cixin Lu',
    name: 'The body problem',
    price: 110
})

container.save({
    author: 'Jk Rowling',
    name: 'Harry Poter',
    price: 120
})

container.save({
    author: 'The Storyteller',
    name: 'Dave Grohl',
    price: 150
})

console.log('Usar getByID')
console.log(container.getByID(3))

