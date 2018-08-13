import SpotifyRequest from '../request'

/**
 * @private
 */
export default class Album extends SpotifyRequest {
  constructor({ token }) {
    super({ token })
  }

  find({ ids }) {
    return this.request({ method: 'get', url: '/albums', query: { ids } })
  }
}
