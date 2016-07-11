var asn = require( 'asn1.js' )
var Version = require( './version' )
var RSA_OBJECT_ID = '1.2.840.113549.1.1.1'

var PrimeInfo = asn.define( 'PrimeInfo', function() {
  this.seq().obj(
    this.key( 'ri' ).int(),
    this.key( 'di' ).int(),
    this.key( 'ti' ).int()
  )
})

var RSAPublicKey = asn.define( 'RSAPublicKey', function() {
  this.seq().obj(
    this.key( 'n' ).int(),
    this.key( 'e' ).int()
  )
})

var RSAPrivateKey = asn.define( 'RSAPrivateKey', function() {
  this.seq().obj(
    this.key( 'version' ).use( Version ),
    this.key( 'n' ).int(),
    this.key( 'e' ).int(),
    this.key( 'd' ).int(),
    this.key( 'p' ).int(),
    this.key( 'q' ).int(),
    this.key( 'dp' ).int(),
    this.key( 'dq' ).int(),
    this.key( 'qi' ).int(),
    this.key( 'other' ).optional().use( PrimeInfo )
  )
})

module.exports = {
  ID: RSA_OBJECT_ID,
  PublicKey: RSAPublicKey,
  PrivateKey: RSAPrivateKey,
}
