// configs

var apiUrl = 'http://localhost:3000'

// init

var floorPlanUrl = 'https://storage.3d.io/279ecbf2-02eb-49b0-a7b8-ddcdafdfb4fb/2017-08-09_15-26-55_m2UgmD/0_copy.jpg'
convertFloorPlanTo3d(floorPlanUrl).then(function onSuccess(res) {
  console.log('Sending request success. conversionId = ', res.conversionId)
}).catch(function onError(error) {
  console.log('Sending request failed:', error)
})

// methods

function convertFloorPlanTo3d (floorPlanUrl) {

  var jsonRpc2Message = {
    jsonrpc: '2.0',
    method: 'FloorPlan.convertToBasic3dModel',
    params: {
      floorPlan: floorPlanUrl,
      address: 'Sugar Town'
    },
    id: Math.round(Math.random()*1e20)
  }

  return fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify( jsonRpc2Message )
  }).then(function(response){
    if (!response.ok) {
      return response.json().then(function onBodyParsed(body){
        return Promise.reject(body)
      })
    } else {
      return response.json()
    }
  })

}
