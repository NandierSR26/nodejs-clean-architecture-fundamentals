import { getUUID } from '../../src/plugins'

describe('plugins/get-id-adapter', () => {
  it("getUUID should be return a UUID", () => {
    const uuid = getUUID()

    expect(typeof uuid).toBe('string')
    expect(uuid.length).toBe(36)
  })
})