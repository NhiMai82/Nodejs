# npm-enc-dec
NPM package for object encryption and decryption

# Usage
To get the this package. Run the following command:
<pre>npm install encdec --save</pre>

after installing package you need to add this to your node main file (e.g. index.js or server.js) by adding following command:

<pre>var objEncDec = require('object-encrypt-decrypt')</pre>

# Encrypt
to encrypt object: 
<pre>

const encdec = require('./encdec')
  var object = {
    name: 'John Doe',
    email: 'john@example.com',
    mobile: '**********',
    education: 'BTECH'
  }
  var encrypt = encdec.encObject(object);
</pre>

# Decrypt

To Decrypt the encrypted object:
<pre>
  var decrypt = encdec.decObject(encrypt);
</pre>
