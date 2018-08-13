import Album from './album'

/**
 * @author Rúben Gomes <gomesrube21@gmail.com>
 * @classDesc Spotify Api class
 *
 * @param {object} opts Specifies the options for spotify class
 * @param {string} opts.token Specifies the spotify token to use
 */
export default class Spotify {
  constructor({ token }) {
    this.album = new Album({ token })
  }

  /**
   * Gets albums info based on albums ids specified
   *
   * @param {object} opts Specifies the options object
   * @param {string[]} opts.ids Specifies the spotify albums ids
   * returns {Promise<object[]>} The albums information
   */
  getAlbums({ ids }) {
    return this.album.find({ ids: ids.join() })
  }
}
