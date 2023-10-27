//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


router.post('/single-or-multiple-files-answer', function (req, res) {

    var connectedBuildings = req.session.data['single-or-multiple-files']
    if (connectedBuildings == "multiple") {
      res.redirect('/v1/upload-scr')
    } else {
      res.redirect('/v1/upload-all')
    }
  
  })


router.post('/already-provided-res-answer', function (req, res) {

    var resDoc = req.session.data['already-provided-res']
    if (resDoc == "yes") {
      res.redirect('/v1/already-provided-res-explanation')
    } else {
      res.redirect('/v1/upload-mor')
    }
  
  })


router.post('/already-provided-mor-answer', function (req, res) {

    var morDoc = req.session.data['already-provided-mor']
    if (morDoc == "yes") {
      res.redirect('/v1/already-provided-mor-explanation')
    } else {
      res.redirect('/v1/invoice')
    }
  
  })


router.post('/already-provided-all-answer', function (req, res) {

    var allDocs = req.session.data['already-provided-all']
    if (allDocs == "yes") {
      res.redirect('/v1/already-provided-all-explanation')
    } else {
      res.redirect('/v1/invoice')
    }
  
  })


  router.post('/payment-method-answer', function (req, res) {

    var paymentMethod = req.session.data['payment-method']
    if (paymentMethod == "card") {
      res.redirect('/v1/card-payment')
    } else {
      res.redirect('/v1/confirmation')
    }
  
  })