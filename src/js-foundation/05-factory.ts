// const { getUUID, getAge } = require("../plugins");

interface BuildakerPersonProps {
  getUUID: () => string;
  getAge: (birthdate: string) => number
}

interface PersonOptions {
  name: string;
  birthdate: string;
}

export const buildMakePerson = ({ getUUID, getAge }: BuildakerPersonProps) => {

  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate)
    }
  }
}



// const obj = { name: 'john doe', birthdate: '2002-04-26' }
// const john = buildPerson(obj)

// console.log(john);
