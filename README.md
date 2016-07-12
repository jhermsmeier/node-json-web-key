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

```js
// Formatting as JSON
webKey.toJSON() // -> Object
JSON.stringify( webKey ) // -> String
```

## API Reference

## Classes

<dl>
<dt><a href="#JSONWebKey">JSONWebKey</a></dt>
<dd></dd>
</dl>

<a name="JSONWebKey"></a>

## JSONWebKey
**Kind**: global class

* [JSONWebKey](#JSONWebKey)
    * [new JSONWebKey()](#new_JSONWebKey_new)
    * [.PEM](#JSONWebKey.PEM) : <code>Object</code>
    * [.getPEMBuffer(pem)](#JSONWebKey.getPEMBuffer) ⇒ <code>Buffer</code>
    * [.fromPEM(pem)](#JSONWebKey.fromPEM) ⇒ <code>[JSONWebKey](#JSONWebKey)</code>
    * [.fromJSON(json)](#JSONWebKey.fromJSON) ⇒ <code>[JSONWebKey](#JSONWebKey)</code>

<a name="new_JSONWebKey_new"></a>

### new JSONWebKey()
JSONWebKey

<a name="JSONWebKey.PEM"></a>

### JSONWebKey.PEM : <code>Object</code>
Key structures

**Kind**: static property of <code>[JSONWebKey](#JSONWebKey)</code>
<a name="JSONWebKey.getPEMBuffer"></a>

### JSONWebKey.getPEMBuffer(pem) ⇒ <code>Buffer</code>
Parse PEM content into a Buffer

**Kind**: static method of <code>[JSONWebKey](#JSONWebKey)</code>

| Param | Type |
| --- | --- |
| pem | <code>String</code> &#124; <code>Buffer</code> |

<a name="JSONWebKey.fromPEM"></a>

### JSONWebKey.fromPEM(pem) ⇒ <code>[JSONWebKey](#JSONWebKey)</code>
Create a JSON Web Key from PEM data

**Kind**: static method of <code>[JSONWebKey](#JSONWebKey)</code>

| Param | Type |
| --- | --- |
| pem | <code>String</code> &#124; <code>Buffer</code> |

<a name="JSONWebKey.fromJSON"></a>

### JSONWebKey.fromJSON(json) ⇒ <code>[JSONWebKey](#JSONWebKey)</code>
Create a JSON Web Key from JSON data

**Kind**: static method of <code>[JSONWebKey](#JSONWebKey)</code>

| Param | Type |
| --- | --- |
| json | <code>Object</code> &#124; <code>String</code> |
