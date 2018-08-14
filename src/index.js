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
   * @returns {Promise<object[]>} The albums information
   *
   * @example Albums
   * [{
   *    album_type: 'album',
   *    artists: [ [Object] ],
   *    available_markets: ['AD', 'EC', 'PT', ...],
   *    copyrights: [ [Object] ],
   *    external_ids: { upc: '886445352382' },
   *    external_urls: { spotify: 'https://open.spotify.com/album/{albumId}'}
   *    ...
   * }]
   */
  getAlbums({ ids }) {
    return this.album.find({ ids: ids.join() })
  }

  /**
   * Gets album info based on the id of the album
   *
   * @param {object} opts Specifies the options object
   * @param {string} opts.id Specifies the spotify album id
   * @returns {Promise<object>} The album information
   * @example Album
   * {
   *    album_type: 'album',
   *    artists: [ [Object] ],
   *    available_markets: ['AD', 'EC', 'PT', ...],
   *    copyrights: [ [Object] ],
   *    external_ids: { upc: '886445352382' },
   *    external_urls: { spotify: 'https://open.spotify.com/album/{albumId}'}
   *    ...
   * }
   */
  getAlbum({ id }) {
    return this.album.findOne({ id })
  }

  /**
   * Gets the tracks of the album info based on the id of the album
   *
   * @param {object} opts Specifies the options object
   * @param {string} opts.id Specifies the spotify album id
   * @param {number} [opts.skip=0] Specifies the offset of the items to retrieve
   * @param {number} [opts.limit=20] Specifies the limit of items to retrieve
   * @returns {Promise<object[]>} The album tracks information
   *
   * @example Tracks
   * [{
   *    artists: [ [Object] ],
   *    available_markets: ['AD', 'EC', 'PT', ...],
   *    copyrights: [ [Object] ],
   *    disc_number: 1,
   *    track_number: 1
   *    ...
   * }]
   */
  getAlbumTracks({ id, skip = 0, limit = 20 }) {
    return this.album.getTracks({ id, skip, limit })
  }
}
