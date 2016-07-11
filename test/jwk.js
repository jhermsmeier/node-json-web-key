var fs = require( 'fs' )
var assert = require( 'assert' )
var JSONWebKey = require( '..' )

suite( 'JSON Web Key', function() {

  test( 'parse JWK encoded EC public key', function() {
    var jwk = require( './data/a1-public-keys' )
    var key = JSONWebKey.fromJSON( jwk.keys[0] )
    console.log( key )
  })

  test( 'parse JWK encoded RSA public key', function() {
    var jwk = require( './data/a1-public-keys' )
    var key = JSONWebKey.fromJSON( jwk.keys[1] )
    console.log( key )
  })

  test( 'parse JWK encoded EC private key', function() {
    var jwk = require( './data/a2-private-keys' )
    var key = JSONWebKey.fromJSON( jwk.keys[0] )
    console.log( key )
  })

  test( 'parse JWK encoded RSA private key', function() {
    var jwk = require( './data/a2-private-keys' )
    var key = JSONWebKey.fromJSON( jwk.keys[1] )
    console.log( key )
  })

})
