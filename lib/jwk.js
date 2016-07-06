var base64Url = require( 'base64-url' )

/**
 * JSONWebKey
 * @constructor
 * @return {JSONWebKey}
 */
function JSONWebKey() {

  if( !(this instanceof JSONWebKey) )
    return new JSONWebKey()

  this.kty = null

}

/**
 * Key structures
 * @type {Object}
 */
JSONWebKey.PEM = require( './pem' )

function base64BN( bn ) {
  var hex = bn.toString( 16 )
  hex = hex.length % 2 === 1 ? '0' + hex : hex
  return base64Url.encode( new Buffer( hex, 'hex' ) )
}

/**
 * Create a JSON Web Key from PEM data
 * @param  {String|Buffer} pem
 * @return {JSONWebKey}
 */
JSONWebKey.fromPEM = function( pem ) {

  var key = pem + ''
  var pattern = /^-----BEGIN ([A-Z]+\s)?(PRIVATE|PUBLIC) KEY-----/i
  var match = pattern.exec( key )

  if( !match ) {
    throw new Error( 'Not in PEM format' )
  }

  var algorithm = match[1] && match[1].toLowerCase().trim()
  var type = match[2].toLowerCase().trim()

  key = key
    .replace( /(\r?\n)*/g, '' )
    .replace( /^-----BEGIN([A-Z\s]+)+KEY-----/i, '' )
    .replace( /-----END([A-Z\s]+)+KEY-----$/i, '' )
    .replace( /\s*/g, '' )

  var keyData = new Buffer( key, 'base64' )
  var pemData = null

  if( algorithm ) {

    switch( algorithm ) {
      case 'rsa':
        pemData = type === 'private' ?
          JSONWebKey.PEM.RSA.PrivateKey.decode( keyData, 'der' ) :
          JSONWebKey.PEM.RSA.PublicKey.decode( keyData, 'der' )
        break
      default:
        throw new Error( 'Unknown key algorithm: "' + algorithm + '"' )
    }

  } else {

    var info = type === 'private' ?
      JSONWebKey.PEM.PrivateKeyInfo.decode( keyData, 'der' ) :
      JSONWebKey.PEM.PublicKeyInfo.decode( keyData, 'der' )

    // TODO: Detect & parse non-RSA keys
    pemData = type === 'private' ?
      JSONWebKey.PEM.RSA.PrivateKey.decode( info.privateKey.data, 'der' ) :
      JSONWebKey.PEM.RSA.PublicKey.decode( info.publicKey.data, 'der' )

  }

  var webKey = new JSONWebKey()
  webKey.kty = 'RSA'

  if( type === 'public' ) {
    webKey.n = base64BN( pemData.n )
    webKey.e = base64BN( pemData.e )
  } else {
    webKey.n = base64BN( pemData.n )
    webKey.e = base64BN( pemData.e )
    webKey.d = base64BN( pemData.d )
    webKey.p = base64BN( pemData.p )
    webKey.q = base64BN( pemData.q )
    webKey.dp = base64BN( pemData.dp )
    webKey.dq = base64BN( pemData.dq )
    webKey.qi = base64BN( pemData.qi )
  }

  return webKey

}

/**
 * Create a JSON Web Key from JSON data
 * @param  {Object|String} json
 * @return {JSONWebKey}
 */
JSONWebKey.fromJSON = function( json ) {
  throw new Error( 'Not implemented' )
}

/**
 * JSONWebKey prototype
 * @type {Object}
 */
JSONWebKey.prototype = {

  constructor: JSONWebKey,

  get public() {
    throw new Error( 'Not implemented' )
  },

  get private() {
    throw new Error( 'Not implemented' )
  },

  toPEM: function() {
    return this.toString()
  },

  toString: function() {
    throw new Error( 'Not implemented' )
  },

}

// Exports
module.exports = JSONWebKey
