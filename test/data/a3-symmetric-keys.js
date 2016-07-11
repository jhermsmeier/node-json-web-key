// A.3. Example Symmetric Keys
// The following example JWK Set contains two symmetric keys represented as JWKs:
// one designated as being for use with the AES Key Wrap algorithm,
// and a second one that is an HMAC key.
// @see http://self-issued.info/docs/draft-ietf-jose-json-web-key.html#rfc.appendix.A.3
module.exports = {
  "keys": [{
    "kty": "oct",
    "alg": "A128KW",
    "k": "GawgguFyGrWKav7AX4VKUg"
  },{
    "kty": "oct",
    "k": "AyM1SysPpbyDfgZld3umj1qzKObwVMkoqQ-EstJQLr_T-1qS0gZH75aKtMN3Yj0iPS4hcgUuTwjAzZr1Z9CAow",
    "kid": "HMAC key used in JWS spec Appendix A.1 example"
  }]
}
