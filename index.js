
const EncDec = require('./encdec')

var object = {
  name: 'John Doe',
  email: 'john@example.com',
  mobile: '**********',
  education: 'BTECH'
}

var encrypt = EncDec.encObject(object)
console.log('Object: ', object)
console.log('Encrypt: ', encrypt)
console.log('Decrypt: ', EncDec.decObject(encrypt))