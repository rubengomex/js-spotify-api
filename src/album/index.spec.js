import Album from './index'
describe('Album', function() {
  context('#find', function() {
    it('should have retrieve albums information', async function() {
      try {
        await new Album({
          token:
            'BQBTSdZxYG1MK8g_ZmWkHhFVCzIbrEBinezLaucjj2JcacuCM_nxhiib_A46QIp1DSmwqVhYW5bzzU3ZqeIACK2jegcK0T5EWMPIhsWV0bGjzF5JsZROhsMRsCiNXYVH0Ld0OIncYS7LFpkIMyMGfwkg5_vIEj0GWE87zeWTcA'
        }).find({ ids: '4mLGYDItfdpdfo5p06WgTK' })
      } catch (err) {}
    })

    it
  })
})
