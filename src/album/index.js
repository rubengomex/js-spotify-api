import SpotifyRequest from '../request'

/**
 * @private
 */
export default class Album extends SpotifyRequest {
  constructor({ token }) {
    super({ token })
    this.url = '/albums'
  }

  find({ ids }) {
    return this.request({ method: 'get', url: this.url, query: { ids } }).then(({ albums }) => albums)
  }

  findOne({ id }) {
    return this.request({ method: 'get', url: `${this.url}/${id}` })
  }

  getTracks({ id, skip, limit }) {
    return this.request({ method: 'get', url: `${this.url}/${id}/tracks`, query: { skip, limit } }).then(({ items }) => items)
  }
}
