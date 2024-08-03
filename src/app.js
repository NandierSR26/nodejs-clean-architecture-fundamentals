// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring')
 const { getUserByID } = require('./js-foundation/03-callbacks')

// console.log(emailTemplate);

const id = 1

getUserByID( id, function(err, user) {
  if(err) throw new Error(err)

    console.log({ user })
} )
