let faker = require('faker')
let database = {products: []}

for(let i=1; i <=100; i++){
    database.products.push({
        id: faker.random.words(),
        cost: Math.random()*100,
        quantity: Math.random()*1000
    })
}

console.log(JSON.stringify(database));