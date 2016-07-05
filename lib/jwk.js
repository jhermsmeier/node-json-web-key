/**
 * JSONWebKey
 * @constructor
 * @return {JSONWebKey}
 */
function JSONWebKey() {

  if( !(this instanceof JSONWebKey) )
    return new JSONWebKey()

}

/**
 * Create a JSON Web Key from PEM data
 * @param  {String|Buffer} pem
 * @return {JSONWebKey}
 */
JSONWebKey.fromPEM = function( pem ) {
  throw new Error( 'Not implemented' )
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

  toPEM: function() {
    return this.toString()
  },

  toString: function() {
    throw new Error( 'Not implemented' )
  },

}

// Exports
module.exports = JSONWebKey
