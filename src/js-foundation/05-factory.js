const { getUUID, getAge } = require("../plugins");


const buildPerson = ({ name, birtdate }) => {
  return {
    id: getUUID(),
    name,
    birtdate,
    age: getAge(birtdate)
  }
}

const obj = { name: 'john doe', birtdate: '2002-04-26' }
const john = buildPerson(obj)

console.log(john);
