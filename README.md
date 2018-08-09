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

## Features

## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 67+ ✔                                                                                    | 52+ ✔                                                                                       | 54+ ✔                                                                                    | 16+ ✔                                                                                 | 16+ ✔                                                                              | 11 ✔                                                                                                                         |

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

## How to use

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
