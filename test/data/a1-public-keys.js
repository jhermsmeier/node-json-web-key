// A.1. Example Public Keys
// The following example JWK Set contains two public keys represented as JWKs:
// one using an Elliptic Curve algorithm and a second one using an RSA algorithm.
// The first specifies that the key is to be used for encryption.
// The second specifies that the key is to be used with the RS256 algorithm.
// Both provide a key ID for key matching purposes.
// In both cases, integers are represented using the base64url encoding of their big-endian representations.
// @see http://self-issued.info/docs/draft-ietf-jose-json-web-key.html#rfc.appendix.A.1
module.exports = {
  "keys": [{
    "kty": "EC",
    "crv": "P-256",
    "x": "MKBCTNIcKUSDii11ySs3526iDZ8AiTo7Tu6KPAqv7D4",
    "y": "4Etl6SRW2YiLUrN5vfvVHuhp7x8PxltmWWlbbM4IFyM",
    "use": "enc",
    "kid": "1"
  },{
    "kty": "RSA",
    "n": "0vx7agoebGcQSuuPiLJXZptN9nndrQmbXEps2aiAFbWhM78LhWx4cbbfAAtVT86zwu1RK7aPFFxuhDR1L6tSoc_BJECPebWKRXjBZCiFV4n3oknjhMstn64tZ_2W-5JsGY4Hc5n9yBXArwl93lqt7_RN5w6Cf0h4QyQ5v-65YGjQR0_FDW2QvzqY368QQMicAtaSqzs8KJZgnYb9c7d0zgdAZHzu6qMQvRL5hajrn1n91CbOpbISD08qNLyrdkt-bFTWhAI4vMQFh6WeZu0fM4lFd2NcRwr3XPksINHaQ-G_xBniIqbw0Ls1jF44-csFCur-kEgU8awapJzKnqDKgw",
    "e": "AQAB",
    "alg": "RS256",
    "kid": "2011-04-29"
  }]
}
