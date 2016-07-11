var asn = require( 'asn1.js' )
var Version = require( './version' )

var AlgorithmIdentifier = asn.define( 'AlgorithmIdentifier', function() {
  this.seq().obj(
    this.key( 'id' ).objid(),
    this.key( 'parameters' ).optional().any()
  )
})

var PublicKeyInfo = asn.define( 'PublicKeyInfo', function() {
  this.seq().obj(
    this.key( 'algorithm' ).use( AlgorithmIdentifier ),
    this.key( 'publicKey' ).bitstr()
  )
})

var PrivateKeyInfo = asn.define( 'PrivateKeyInfo', function() {
  this.seq().obj(
    this.key( 'version' ).use( Version ),
    this.key( 'algorithm' ).use( AlgorithmIdentifier ),
    this.key( 'privateKey' ).bitstr()
  )
})

module.exports = {
  PublicKeyInfo: PublicKeyInfo,
  PrivateKeyInfo: PrivateKeyInfo,
  RSA: require( './rsa' ),
}
