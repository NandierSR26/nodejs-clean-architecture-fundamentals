import { characters } from './../../src/js-foundation/02-destructuring';

describe('js-foundation/02-destructuring', () => {

  it('Characters should contain flash, superman', () => {
    expect(characters).toContain('Flash')
    expect(characters).toContain('Superman')
  })

  it('First character should be Flash and second Superman', () => {
    const [ flash, superman ] = characters;

    expect(flash).toBe('Flash')
    expect(superman).toBe('Superman')
  })

})