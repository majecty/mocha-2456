describe('something', () => {
  before(() => { console.log('I should really not run') })
  it.skip('skipped test', () => {})
  after(() => { console.log('I should really not run either') })
})
