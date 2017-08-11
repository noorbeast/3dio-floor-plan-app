const io3d = require('3dio')
const Promise = require('bluebird')
const configs = require('./configs.js')

io3d.floorPlan = io3d.floorPlan || {}
io3d.floorPlan.convertToBasic3dModel = function convertFloorPlanToBasic3dModel (args) {

  // API
  var floorPlan = args.floorPlan
  var callback = args.callback

  // FIXME: remove this before releasing into production
  io3d.configs({
    servicesUrl: 'https://testing.archilogic.com/api/v2'
  })

  // send request to server side endpoints
  return io3d.utils.services.call('ModelingJob.requestConversion', {
    floorplan: floorPlan,
    callback: callback
  }, {
    secretKey: configs.secretKey
  }).then(function onSuccess (result) {
    // conversion request accepted
    var conversionId = result.jobId
    return conversionId
  }).catch(function onError (error) {
    // conversion request error
    // TODO: provide info in debug mode
    return Promise.reject(error)
  })

}