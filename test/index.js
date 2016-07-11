var fs = require( 'fs' )
var assert = require( 'assert' )
var JSONWebKey = require( '..' )

suite( 'JSON Web Key', function() {

  test( 'equivalence', function() {
    var jwk = require( './data/a2-private-keys' )
    var key = JSONWebKey.fromJSON( jwk.keys[1] )
    var json = JSON.parse( JSON.stringify( key ) )
    assert.deepEqual( jwk.keys[1], json )
  })

})
