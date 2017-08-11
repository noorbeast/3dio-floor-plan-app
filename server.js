const configs = require('./configs.js')
const io3d = require('3dio')
require('./3dio-extension.js') // FIXME: remove this once io3d.floorplan.convert is part of 3dio lib
const startApiServer = require('instant-api')


startApiServer({
  // tasks
  'convertFloorPlanTo3d': require('./api/convert-floor-plan-to-3d.js'),
  'conversionCallback': require('./api/callback-when-conversion-is-done.js')
}, {
  // server configs
  port: configs.port,
  staticDir: configs.staticDir,
  corsWhiteList: configs.corsWhiteList
})