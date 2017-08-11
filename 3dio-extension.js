const io3d = require('3dio')
const Promise = require('bluebird')
const configs = require('./configs.js')

io3d.configs({
  servicesUrl: 'https://testing.archilogic.com/api/v2'
})

io3d.floorPlan = io3d.floorPlan || {}

io3d.floorPlan.convertToBasic3dModel = function convertFloorPlanToBasic3dModel (args) {

  // API
  var floorPlan = args.floorPlan
  var address = args.address
  var callback = args.callback

  // send request to server side endpoint
  return io3d.utils.services.call('FloorPlan.convertToBasic3dModel', {
    floorplan: floorPlan,
    address: address,
    callback: callback
  }).then(function onSuccess (result) {
    // conversion request accepted
    return result.conversionId
  }).catch(function onError (error) {
    // conversion request error
    // TODO: provide info in debug mode
    return Promise.reject(error)
  })

}

io3d.floorPlan.getConversionStatus = function getConversionStatus (args) {

  // API
  var conversionId = args.conversionId

  // send request to server side endpoint
  return io3d.utils.services.call('FloorPlan.getConversionStatus', {
    conversionId: conversionId
  }).catch(function onError (error) {
    // conversion request error
    // TODO: provide info in debug mode
    return Promise.reject(error)
  })

}