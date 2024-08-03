// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring')
//  const { getUserByID } = require('./js-foundation/03-callbacks')
// const { getUserByID } = require('./js-foundation/04-arrow')

const { getUUID, getAge } = require("./plugins");

const { buildMakePerson } = require('./js-foundation/05-factory')

const makePerson = buildMakePerson({ getUUID, getAge })

const obj = { name: 'john doe', birtdate: '2002-04-26' }
const john = makePerson(obj)

console.log({ john })

