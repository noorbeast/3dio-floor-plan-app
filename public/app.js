// configs

var apiUrl = 'http://localhost:3000'

// init

var floorPlanEl = document.querySelector('#floor-plan-url')
var addressEl = document.querySelector('#address')
var emailEl = document.querySelector('#email')
var buttonEl = document.querySelector('#convert-button')


buttonEl.addEventListener('click', function(){

  convertFloorPlanTo3d(floorPlanEl.value, addressEl.value, emailEl.value).then(function onSuccess(res) {
    console.log('Sending request success. conversionId = ', res.result.conversionId)
  }).catch(function onError(error) {
    console.log('Sending request failed:', error)
  })
})

// methods

function convertFloorPlanTo3d (floorPlanUrl, address, email) {

  // JSON
  var jsonRpc2Message = {
    jsonrpc: '2.0',
    method: 'FloorPlan.convertToBasic3dModel',
    params: {
      floorPlan: floorPlanUrl,
      address: address,
      email: email
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
