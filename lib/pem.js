var asn = require( 'asn1.js' )

var AlgorithmIdentifier = asn.define( 'AlgorithmIdentifier', function() {
  this.seq().obj(
    this.key( 'algorithm' ).objid(),
    this.key( 'parameters' ).optional().any()
  )
})

var Version = asn.define( 'Version', function() {
  this.int( {
    0: 'two-prime',
    1: 'multi'
  })
})

var PrimeInfo = asn.define( 'PrimeInfo', function() {
  this.seq().obj(
    this.key( 'ri' ).int(),
    this.key( 'di' ).int(),
    this.key( 'ti' ).int()
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
  PublicKeyInfo: PublicKeyInfo,
  PrivateKeyInfo: PrivateKeyInfo,
  RSA: {
    OID: '1.2.840.113549.1.1.1',
    PublicKey: RSAPublicKey,
    PrivateKey: RSAPrivateKey,
  }
}
