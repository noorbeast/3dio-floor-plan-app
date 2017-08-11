const configs = require('../configs.js')
const io3d = require('3dio')

module.exports = function callbackWhenConversionDone (rpc) {

  // params
  console.log('Floor Plan conversion done:', rpc.params)

  // TODO: use the information provided in callback to i.e. store it in your database or send an email to your customer etc.

  // send back empy response to close rpc call
  rpc.sendResult('')

}