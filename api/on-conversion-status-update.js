const io3d = require('3dio')
const configs = require('../configs.js')

module.exports = function onConversionStatusUpdate (rpc) {

  // params
  var conversionId = rpc.params.conversionId

  // TODO: use the information provided in callback to i.e. store it in your database or send an email to your customer etc.

  io3d.floorPlan.getConversionStatus({ conversionId: conversionId }).then(res => {
    
    if (res.status === 'COMPLETED') {
      // conversion done! horray!


    }  else if (res.status === 'REJECTED') {
      // conversion has been canceled propably due to one of the following reasons:
      // NO_FLOORPLAN, UNCLEAR_FLOORPLAN, MULTIPLE_LEVELS, INCLINED_CEILING
      // Read more about converion limitiations: https://3d.io/floor-plan-to-3d-conversion.html


    }  else if (res.status === 'IN_PROGRESS') {
      //

    }  else {
      // unknown status
      return Promise.reject('Error: Unknown conversion status: ' + res.status)

    }
  })

}