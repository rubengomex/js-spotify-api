# JS Spotify API

[![docs](http://inch-ci.org/github/rubengomex/js-spotify-api.svg?branch=master)](https://rubengomex.github.io/js-spotify-api/)
[![travis build](https://img.shields.io/travis/rubengomex/js-spotify-api.svg)](https://travis-ci.org/rubengomex/js-spotify-api)
[![codecov coverage](https://img.shields.io/codecov/c/github/rubengomex/js-spotify-api.svg)](https://codecov.io/gh/rubengomex/js-spotify-api)
[![Maintainability](https://api.codeclimate.com/v1/badges/a30f3e3286b4c0406f5f/maintainability)](https://codeclimate.com/github/rubengomex/js-spotify-api/maintainability)
[![downloads](https://img.shields.io/npm/dm/js-spotify-api.svg)](https://npm-stat.com/charts.html?package=js-spotify-api&from=2017-08-11)
[![node version](https://img.shields.io/node/v/js-spotify-api.svg)](https://nodejs.org)
[![MIT Licence](https://img.shields.io/github/license/rubengomex/js-spotify-api.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/js-spotify-api.png?downloads=true&downloadRank=true&stars=true)](https://npm.im/js-spotify-api)

A javascript wrapper for [Spotify's Web API](https://developer.spotify.com/web-api/).

## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 67+ ✔                                                                                    | 52+ ✔                                                                                       | 16+ ✔                                                                                    | 54+ ✔                                                                                 | 16+ ✔                                                                              | 11 ✔                                                                                                                         |

## Table of Contents

- [Features](#features)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Api](#api)

## Features

The library includes helper functions to do the following:

> **Note:** Most of them are still in progress to make (sections marked with TODO)

#### Music metadata

- Albums, artists, and tracks
- Audio features and analysis for tracks (**todo**)
- Albums for a specific artist **todo**
- Top tracks for a specific artist **todo**
- Artists similar to a specific artist **todo**

#### Profiles **todo**

- User's emails, product type, display name, birthdate, image

#### Search

- albums
- artists, tracks, and playlists (**todo**)

#### Playlist manipulation (**todo**)

- Get a user's playlists
- Create playlists
- Change playlist details
- Add tracks to a playlist
- Remove tracks from a playlist
- Replace tracks in a playlist
- Reorder tracks in a playlist

#### Your Music library (**todo**)

- Add, remove, and get tracks and albums that are in the signed in user's Your Music library
- Check if a track or album is in the signed in user's Your Music library

#### Personalization (**todo**)

- Get a user’s top artists and tracks based on calculated affinity

#### Browse (**todo**)

- Get New Releases
- Get Featured Playlists
- Get a List of Categories
- Get a Category
- Get a Category's Playlists
- Get recommendations based on seeds
- Get available genre seeds

#### Follow (**todo**)

- Follow and unfollow users
- Follow and unfollow artists
- Check if the logged in user follows a user or artist
- Follow a playlist
- Unfollow a playlist
- Get followed artists
- Check if users are following a Playlist

#### Player (**todo**)

- Get a user's available devices
- Get information about the user's current playback
- Get current user’s recently played tracks
- Transfer a user's playback
- Resume a user's playback
- Skip a user's playback to next track
- Skip a user's playback to previous track
- Set a user's shuffle mode
- Set a user's repeat mode
- Set volume
- Seek playback to a given position

All methods require authentication, which can be done using these flows:

- [Client credentials flow](http://tools.ietf.org/html/rfc6749#section-4.4) (Application-only authentication)
- [Authorization code grant](http://tools.ietf.org/html/rfc6749#section-4.1) (Signed by user)

## Dependencies

- To use this library you will need a node version `>= 6.0.0`.

- Download one of the follows `Node Version Managers` to manage the node versions easily:
  - [nvm](https://github.com/creationix/nvm/blob/master/README.md)
  - [n](https://github.com/tj/n)

## Installation

From npm

```bash
$ npm i -S js-spotify-api
```

From git

```bash
    $ git clone https://github.com/rubengomex/js-spotify-api.git
    $ cd js-spotify-api
    $ npm i
```

## Tests

You can run the tests by running the follow command:

```bash
    $ npm t
```

> **Note:** You only can run the tests if you clone the repository from github

## Usage

### ES6

```js
// to import a specific method
import Spotify from 'js-spotify-api'

const spotify = new Spotify({
  token: 'YOUR_TOKEN_HERE'
})

// using  method
spotify.getArtists({ band: 'Incubus' }).then(artists => console.log(artists))
```

### CommonJS

```js
const Spotify = require('js-spotify-api')

const spotify = new Spotify({
  token: 'YOUR_TOKEN_HERE'
})
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="js-spotify-api.umd.js"></script>

<!-- to import minified version -->
<script src="js-spotify-api.umd.min.js"></script>
```

After that the library will be available to the Global as `Spotify`. Follow an example:

```js
const spotify = new Spotify({
  token: 'YOUR_TOKEN_HERE'
})

let albums
spotify
  .getAlbums({ artist: 'Chosen artist' })
  .then(albumsFromArtists => (albums = albumsFromArtists))
  .catch(err => console.log(err))

console.log(albums)

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await spotify.getAlbums({ artists: 'Chosen artist' })
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}
```

> **NOTE:** `async/await` is part of ECMAScript 2017 and is not supported in Internet
> Explorer and older browsers, so use with caution.

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

- [Spotify](#spotify)
  - [Parameters](#parameters)
  - [getAlbums](#getalbums)
    - [Parameters](#parameters-1)
    - [Examples](#examples)
  - [getAlbum](#getalbum)
    - [Parameters](#parameters-2)
    - [Examples](#examples-1)
  - [getAlbumTracks](#getalbumtracks)
    - [Parameters](#parameters-3)
    - [Examples](#examples-2)

### Spotify

#### Parameters

- `opts` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Specifies the options for spotify class
  - `opts.token` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Specifies the spotify token to use

**Meta**

- **author**: Rúben Gomes &lt;gomesrube21@gmail.com>

#### getAlbums

Gets albums info based on albums ids specified

##### Parameters

- `opts` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Specifies the options object
  - `opts.ids` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** Specifies the spotify albums ids

##### Examples

```javascript
Albums
[{
   album_type: 'album',
   artists: [ [Object] ],
   available_markets: ['AD', 'EC', 'PT', ...],
   copyrights: [ [Object] ],
   external_ids: { upc: '886445352382' },
   external_urls: { spotify: 'https://open.spotify.com/album/{albumId}'}
   ...
}]
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>>** The albums information

#### getAlbum

Gets album info based on the id of the album

##### Parameters

- `opts` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Specifies the options object
  - `opts.id` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Specifies the spotify album id

##### Examples

```javascript
Album
{
   album_type: 'album',
   artists: [ [Object] ],
   available_markets: ['AD', 'EC', 'PT', ...],
   copyrights: [ [Object] ],
   external_ids: { upc: '886445352382' },
   external_urls: { spotify: 'https://open.spotify.com/album/{albumId}'}
   ...
}
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>** The album information

#### getAlbumTracks

Gets the tracks of the album info based on the id of the album

##### Parameters

- `opts` **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** Specifies the options object
  - `opts.id` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Specifies the spotify album id
  - `opts.skip` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Specifies the offset of the items to retrieve (optional, default `0`)
  - `opts.limit` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** Specifies the limit of items to retrieve (optional, default `20`)

##### Examples

```javascript
Tracks
[{
   artists: [ [Object] ],
   available_markets: ['AD', 'EC', 'PT', ...],
   copyrights: [ [Object] ],
   disc_number: 1,
   track_number: 1
   ...
}]
```

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>>** The album tracks information
