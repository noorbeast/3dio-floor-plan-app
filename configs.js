module.exports = {
  url: 'https://floorplan.3d.io', // server URL without trailing slash
  corsWhiteList: ['floorplan.3d.io', 'localhost'],
  port: process.env.PORT || 3000,
  secretKey: process.env.SECRET_KEY_3DIO,
  staticDir: 'public' // set to false if this server should not serve front end files
}