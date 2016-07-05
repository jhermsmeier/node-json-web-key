# JSON Web Key
[![npm](https://img.shields.io/npm/v/json-web-key.svg?style=flat-square)](https://npmjs.com/package/json-web-key)
[![npm license](https://img.shields.io/npm/l/json-web-key.svg?style=flat-square)](https://npmjs.com/package/json-web-key)
[![npm downloads](https://img.shields.io/npm/dm/json-web-key.svg?style=flat-square)](https://npmjs.com/package/json-web-key)
[![build status](https://img.shields.io/travis/jhermsmeier/node-json-web-key.svg?style=flat-square)](https://travis-ci.org/jhermsmeier/node-json-web-key)

## Install via [npm](https://npmjs.com)

```sh
$ npm install --save json-web-key
```

## Usage

```js
var JSONWebKey = require( 'json-web-key' )
```

```js
// Constructing a JWK from PEM data
var webKey = JSONWebKey.fromPEM( '-----BEGIN PUBLIC KEY-----\nMIIBIjANB...' )
```

```js
// Constructing a JWK from JSON data
var webKey = JSONWebKey.fromJSON({
  "kty": "RSA",
  "n": "oL9U7lsMfBGZiFO...",
  "e": "AQAB"
})
```

## API Reference
