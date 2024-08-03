import { emailTemplate } from './../../src/js-foundation/01-template';


describe('js-foundation/01-tempplate', () => {

  it('E-mail template shppuld contain a greeting', () => {
    expect(emailTemplate).toContain('Hi, ')
  })

  it('E-mail template should contain {{ name }} and {{ orderID }}', () => {
    expect(emailTemplate).toContain('{{ name }}')
    expect(emailTemplate).toContain('{{ orderID }}')
  })

})