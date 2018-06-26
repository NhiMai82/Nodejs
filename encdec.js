const objEncDec = require('object-encrypt-decrypt')

module.exports = {

 encObject : (object) => {
     return objEncDec.encrypt(object)
     
 },

 decObject : (input) => {
     return objEncDec.decrypt(input)
 }
}  
