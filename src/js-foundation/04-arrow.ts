const users = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Jane Doe'
  },
]

export const getUserByID = (id: number, callback: (err?: string, data?: any) => void) => {
  const user = users.find((user) => user.id === id)

  if(!user) {
    return callback(`User not found with id ${ id }`)
  }

  return callback(undefined, user)

}