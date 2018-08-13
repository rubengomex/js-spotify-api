import Album from './index'
describe('Album', function() {
  context('#find', function() {
    it('should have retrieve albums information', function() {
      const albums = new Album({
        token: 'token'
      })
        .find({ ids: '4mLGYDItfdpdfo5p06WgTK' })
        .then(console.log)
        .catch(console.error)
    })
  })
})
