var fs = require( 'fs' )
var assert = require( 'assert' )
var JSONWebKey = require( '..' )

suite( 'JSON Web Key', function() {

  var keys = null

  suiteSetup( 'load keys', function() {
    keys = {
      rsa: {
        public: fs.readFileSync( __dirname + '/keys/rsa-public.pem', 'utf8' ),
        private: fs.readFileSync( __dirname + '/keys/rsa-private.pem', 'utf8' ),
      }
    }
  })

  test( 'parse a PEM encoded public key', function() {
    JSONWebKey.fromPEM( keys.rsa.public )
  })

  test.skip( 'parse a PEM encoded private key', function() {
    JSONWebKey.fromPEM( keys.rsa.private )
  })

})
