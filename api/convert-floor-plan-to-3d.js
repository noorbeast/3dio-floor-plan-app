const io3d = require('3dio')
const url = require('url')
const configs = require('../configs.js')

module.exports = function convertFloorPlanTo3d (rpc) {

  // params
  const floorPlan = rpc.params.floorPlan
  const address = rpc.params.address
  const email = rpc.params.email

  // TODO: Add some authetication
  // TODO: Validate params

  // run
  io3d.floorPlan.convertToBasic3dModel({
    floorPlan: floorPlan,
    address: address,
    callback: configs.url
  }).then(conversionId => {

    // success
    console.log('Floor plan conversion request has been accepted and has the following conversionId', conversionId)
    rpc.sendResult({ conversionId: conversionId })

  }).catch(error => {

    // TODO: wrap error message into something more user friendly or notify yourself via email
    rpc.sendError(error)

  })

}