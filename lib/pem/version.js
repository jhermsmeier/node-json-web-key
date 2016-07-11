var asn = require( 'asn1.js' )

var Version = asn.define( 'Version', function() {
  this.int({
    0: 'two-prime',
    1: 'multi'
  })
})

module.exports = Version
