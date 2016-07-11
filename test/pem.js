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
    var key = JSONWebKey.fromPEM( keys.rsa.public )
    assert.deepEqual( key, {
      kty: 'RSA',
      n: 'oL9U7lsMfBGZiFO_NmvTbPlPaMgMfg9iuxO2IkgKrJbKVtrGvfzNCOMIaO_wAx8AIf3-tegeaEWWV6FyO6haW1zPhKovVAYyXQKof8CKvueooTie46d0JAHirdAGWn2BWCQKQ-GlFqqMx2ou1BHv9MxfGKaT9CjT8cIROl1ptag3kdUH5ZsjhGmdg_TNXeu4wtiYVf0JG9nWfZncX4Dgv6IpSCoQiGf6FIE_q0jaUhpdBdQ6HEL_s6O3L45FFYvGfAuiciuKVZugR3hXCUJ26NmShMKfdu5qUKPQ02-IQAFGncnMNOVPeDhkLMMIaNerGCsjVz1l_TjXOSTW-h1paw',
      e: 'AQAB',
    })
  })

  test( 'parse a PEM encoded private key', function() {
    var key = JSONWebKey.fromPEM( keys.rsa.private )
    assert.deepEqual( key, {
      kty: 'RSA',
      n: 'oL9U7lsMfBGZiFO_NmvTbPlPaMgMfg9iuxO2IkgKrJbKVtrGvfzNCOMIaO_wAx8AIf3-tegeaEWWV6FyO6haW1zPhKovVAYyXQKof8CKvueooTie46d0JAHirdAGWn2BWCQKQ-GlFqqMx2ou1BHv9MxfGKaT9CjT8cIROl1ptag3kdUH5ZsjhGmdg_TNXeu4wtiYVf0JG9nWfZncX4Dgv6IpSCoQiGf6FIE_q0jaUhpdBdQ6HEL_s6O3L45FFYvGfAuiciuKVZugR3hXCUJ26NmShMKfdu5qUKPQ02-IQAFGncnMNOVPeDhkLMMIaNerGCsjVz1l_TjXOSTW-h1paw',
      e: 'AQAB',
      d: 'EzAjpDwsFldHe3V7urROTZDJANn4W8fcYjZtJFRzKbzqNEnzNVSK6QeoxlX10XmO23_lOrOVhZ7g3l8AMsza1FMU1mI2OhJvSpj5oh5KsZUXlP8cQFKJ046CD3todr7KhMnwi7_QpA8BtQAgzOHDQfZvV5Ly0E9bVV10DwJ9jthwJJkPZYb4PLNsKM_8b_x2eZjdbOGAMp_auKK3wJhid-G8sV0Z2QeUELf7RNHBISMkvWTr-AyrJmFtKAANlftsgD-_PPowY4qFu9scskfJehW142mEoOq2NbDQ7v3Z5Q1T0G1UAqBB2_tGwPR4opC41TYkAp_Pcs-W9WBsjpjTGQ',
      p: '1RTbi-IiivMkxwR2RfyQQoAUkVRt8vkDH028D1KkPo_p7WiTUHuAw2zj9L-D6MulMJMLNa06RIKUtPM9n8S6ia6RYEA1ihPzWFtPDfluTcQZEdHwzlKIx8a-gx6JVyJBjy1kXeX-4vH-iww-95QB-rgYkBimCb_X2_yQWrYaxUc',
      q: 'wR_3W4g4bo-DUAb_6VL-pDxwWe_j7_Fse2q4-UhqQtHkp3_YWt0L9Z9Vbl4bNKVOuhfS0piSn6tL9L1GBiUZBKiwCnmlMYPUBiKFWktnQ1wVB52Z4-laC-WWaxD92uQ-2o9ZNeS8ECtY0FESKrcC7um-Tbaxu8YIeHCZQ-oKHL0',
      dp: 'pqVsWwddipxEXB3iPjQbwtaWv15vqwIS7g2GkdlJOOCmzBToeZ5NgwmLcqPBj3SNWeL2dmFnW6Ngl_BQdr6OQRW0_rjY5odZ3vVya3RzTwCZtrUhhstHzC5kWvmr4eiZq1eN0l4JLQaj062dJVWtAp-uHiwY1zEhqhvp7ffUEgs',
      dq: 'p_0VXmJUrB9b2s3r51qRM-160VCxVjML6SMBOZ37CJqpKeY0HX2v_H0XhASJ57Zvj8JPWW7sA8WuMXo-ofO9Gmddkg8UWcjRMnDuzIdQkLBVfqVhinWeJUEVIZbLKo9l-Rm-QPnxeKMsAzCx-8Pr4kQijFkBq1NsZM-VEhVPrIU',
      qi: 'yyMAH5h3ag8-RocuOa7Iu7yUFGgr2OJssYbZDchjug5jptne6LNOfQ8uPFhOv6YoHg0bm6yNQ50zr35lipnEpD8l__H_DoH3mEGlJ9DgUO_lTwI6kNoswdMtNy8fg5NiSV876OAob2c_REj2Ok42Cz2XY3iNMk6jddqV8eDfBvY',
    })
  })

})
