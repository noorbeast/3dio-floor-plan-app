module.exports = {

  // URL of the server where this app is deployed (relevant for callbacks)
  url: 'https://0e6c7272.ngrok.io',

  //url: 'https://floorplan.3d.io',
  port: process.env.PORT || 3000,

  // website domains which weill be allowed to use this API
  corsWhiteList: ['floorplan.3d.io', 'localhost'],

  // get your 3d.io secret API key from: https://3d.io/dev-dashboard/
  secretApiKey: process.env.SECRET_API_KEY,

  // directory containing static front end content
  // set to false if this server should not serve front end files
  staticDir: 'public',

  // firebase configs
  // feel free to replace this with configs specific to your persistance layer of choise
  firebase: {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    databaseURL: process.env.FIREBASE_DATABASE_URL
  }

}