var base64Url = require( './base64url' )

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

/**
 * Convert a BigNum into a Buffer
 * @internal
 * @param  {BigNum} bn
 * @return {Buffer}
 */
function bnToBuffer( bn ) {
  var hex = bn.toString( 16 )
  hex = hex.length % 2 === 1 ? '0' + hex : hex
  return new Buffer( hex, 'hex' )
}

/**
 * Convert a BigNum into its base64 URL encoded form
 * @internal
 * @param  {BigNum} bn
 * @return {String}
 */
function base64BN( bn ) {
  return base64Url.encode( bnToBuffer( bn ) )
}

/**
 * Parse PEM content into a Buffer
 * @param  {String|Buffer} pem
 * @return {Buffer}
 */
JSONWebKey.getPEMBuffer = function( pem ) {

  var key = pem.toString()
    .replace( /(\r?\n)*/g, '' )
    .replace( /^-----BEGIN([A-Z\s]+)+KEY-----/i, '' )
    .replace( /-----END([A-Z\s]+)+KEY-----$/i, '' )
    .replace( /\s*/g, '' )

  return new Buffer( key, 'base64' )

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

  var keyData = JSONWebKey.getPEMBuffer( key )
  var pemData = null

  if( algorithm ) {

    switch( algorithm ) {
      case 'rsa':
        pemData = type === 'private' ?
          JSONWebKey.PEM.RSA.PrivateKey.decode( keyData, 'der' ) :
          JSONWebKey.PEM.RSA.PublicKey.decode( keyData, 'der' )
        break
      default:
        throw new Error( 'Unsupported key algorithm: "' + algorithm + '"' )
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

  var jwk = new JSONWebKey()
  var data = typeof json === 'string' ?
    JSON.parse( json ) : json

  Object.keys( data ).forEach( function( k ) {
    jwk[k] = k.length <= 2 ?
      base64Url.decode( data[k] ) :
      data[k]
  })

  return jwk

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

  toJSON: function() {

    var self = this
    var data = {}

    Object.keys( this ).forEach( function( k ) {
      data[k] = Buffer.isBuffer( self[k] ) ?
        base64Url.encode( self[k] ) : self[k]
    })

    return data

  },

}

// Exports
module.exports = JSONWebKey
