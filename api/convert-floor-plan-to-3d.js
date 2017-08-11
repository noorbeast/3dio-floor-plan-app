const configs = require('../configs.js')
const io3d = require('3dio')

module.exports = function convertFloorPlanTo3d (rpc) {

  // params
  const floorPlan = rpc.params.floorPlan
  const email = rpc.params.email

  // TODO: Add some authetication
  // TODO: Validate params

  // run
  io3d.floorPlan.convertToBasic3dModel({
    secretKey: configs.secretKey, // FIXME: does this belong here? it's not a method parameter after all
    floorPlan: floorPlan,
    callback: configs.url + 'conversionCallback'
  }).then(conversionId => {

    console.log('Floor plan conversion request has been accepted and has the following conversionId', conversionId)
    rpc.sendResult({ conversionId: conversionId })

  }).catch(error => {

    // TODO: wrap error message into something more user friendly or notify yourself via email
    rpc.sendError(error)

  })

}