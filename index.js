
const EncDec = require('./module')

var object = {
  name: 'John Doe',
  email: 'john@example.com',
  mobile: '**********',
  education: 'BTECH'
}

var encrypt = EncDec.encObject(object)
console.log(encrypt)
console.log(EncDec.decObject(encrypt))