var base64Url = module.exports

/**
 * Repeat a given string 'n' times
 * @internal used by `.unescape()`
 * @param  {String} str
 * @param  {Number} n
 * @return {String}
 */
function repeat( str, n ) {
  var value = ''
  while( n-- ) value += str
  return value
}

/**
 * Escape a base64 string to base64 URL
 * @param  {String} str
 * @return {String}
 */
base64Url.escape = function( str ) {
  return ( str + '' )
    .replace( /\+/g, '-' )
    .replace( /\//g, '_' )
    .replace( /=/g, '' )
}

/**
 * Unescape a base64 URL string to base64
 * @param  {String} str
 * @return {String}
 */
base64Url.unescape = function( str ) {
  return ( str + repeat( '=', 5 - str.length % 4 ) )
    .replace( /\-/g, '+' )
    .replace( /_/g, '/' )
}

/**
 * Encode a buffer or string with a given encoding into base64 URL
 * @param  {Buffer|String} value
 * @param  {String} encoding
 * @return {String}
 */
base64Url.encode = function( value, encoding ) {
  return base64Url.escape( new Buffer( value, encoding ).toString( 'base64' ) )
}

/**
 * Decode a base64 URL string to a buffer,
 * or string with given encoding
 * @param  {String} value
 * @param  {String} encoding
 * @return {Buffer|String}
 */
base64Url.decode = function( value, encoding ) {
  var buffer = new Buffer( base64Url.unescape( value ), 'base64' )
  return encoding != null ?
    buffer.toString( encoding ) :
    buffer
}
