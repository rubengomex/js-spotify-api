import axios from 'axios'

/**
 * @private
 */
export default class SpotifyRequest {
  constructor({ token }) {
    this.opts = {
      baseURL: 'https://api.spotify.com/v1/',
      headers: { Authorization: `Bearer ${token}` }
    }
  }

  request({ method, url, query, body }) {
    const opts = { ...this.opts, method, url }

    if(query) opts.params = query
    if(body) opts.data = body

    return axios(opts).then(({ data }) => data)
  }
}
