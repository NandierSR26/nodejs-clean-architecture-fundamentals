// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring')
//  const { getUserByID } = require('./js-foundation/03-callbacks')
// const { getUserByID } = require('./js-foundation/04-arrow')
// const { buildMakePerson } = require('./js-foundation/05-factory')
const { getPokemonById } = require('./js-foundation/06-promises')


// ! Referencia a la funcion factory y uso 
// const { getUUID, getAge } = require("./plugins");

// const makePerson = buildMakePerson({ getUUID, getAge })

// const obj = { name: 'john doe', birtdate: '2002-04-26' }
// const john = makePerson(obj)

// console.log({ john })

 getPokemonById(1)
  .then((pokemon) => console.log({ pokemon }))
  .catch((err) => console.log('Por favor intente nuevamente'))
  .finally(() => console.log('Finalmente'));

// token de acceso
// publicas

