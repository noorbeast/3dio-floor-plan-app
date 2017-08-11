const startApiServer = require('instant-api')
const fireBaseAdmin = require('firebase-admin')
const io3d = require('3dio')
const configs = require('./configs.js')

// FIXME: remove this once io3d.floorplan.convert is part of 3dio lib
require('./3dio-extension.js')

//// init firebase
//fireBaseAdmin.initializeApp({
//  credential: admin.credential.cert({
//    projectId: configs.firebase.projectId,
//    clientEmail: configs.firebase.clientEmail,
//    privateKey: configs.firebase.privateKey
//  }),
//  databaseURL: configs.firebase.databaseURL
//  // limit db access
//  //databaseAuthVariableOverride: {
//  //  uid: "my-service-worker"
//  //}
//})

// init 3dio
io3d.config({
  secretApiKey: configs.secretApiKey
})

// start server
startApiServer({
  // tasks
  'FloorPlan.convertToBasic3dModel': require('./api/convert-floor-plan-to-3d.js'),
  'FloorPlan.onConversionStatusUpdate': require('./api/on-conversion-status-update.js')
}, {
  // server configs
  port: configs.port,
  apiPath: 'api/v1',
  staticDir: configs.staticDir,
  corsWhiteList: configs.corsWhiteList
})