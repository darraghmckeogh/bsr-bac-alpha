//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

/*

//V1


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

  

  // V1-5

  router.post('/single-or-multiple-files-answer', function (req, res) {

    var connectedBuildings = req.session.data['single-or-multiple-files']
    if (connectedBuildings == "multiple") {
      res.redirect('/v1-5/upload-scr')
    } else {
      res.redirect('/v1-5/upload-all')
    }
  
  })


router.post('/already-provided-res-answer', function (req, res) {

    var resDoc = req.session.data['already-provided-res']
    if (resDoc == "yes") {
      res.redirect('/v1-5/already-provided-res-explanation')
    } else {
      res.redirect('/v1-5/upload-mor')
    }
  
  })


router.post('/already-provided-mor-answer', function (req, res) {

    var morDoc = req.session.data['already-provided-mor']
    if (morDoc == "yes") {
      res.redirect('/v1-5/already-provided-mor-explanation')
    } else {
      res.redirect('/v1-5/invoice')
    }
  
  })


router.post('/already-provided-all-answer', function (req, res) {

    var allDocs = req.session.data['already-provided-all']
    if (allDocs == "yes") {
      res.redirect('/v1-5/already-provided-all-explanation')
    } else {
      res.redirect('/v1-5/invoice')
    }
  
  })


  router.post('/payment-method-answer', function (req, res) {

    var paymentMethod = req.session.data['payment-method']
    if (paymentMethod == "card") {
      res.redirect('/v1-5/card-payment')
    } else {
      res.redirect('/v1-5/confirmation')
    }
  
  })



  // V2

  router.post('/single-or-multiple-files-answer', function (req, res) {

    var connectedBuildings = req.session.data['single-or-multiple-files']
    if (connectedBuildings == "multiple") {
      res.redirect('/v2/upload-scr')
    } else {
      res.redirect('/v2/upload-all')
    }
  
  })


router.post('/already-provided-res-answer', function (req, res) {

    var resDoc = req.session.data['already-provided-res']
    if (resDoc == "yes") {
      res.redirect('/v2/already-provided-res-explanation')
    } else {
      res.redirect('/v2/upload-mor')
    }
  
  })


router.post('/already-provided-mor-answer', function (req, res) {

    var morDoc = req.session.data['already-provided-mor']
    if (morDoc == "yes") {
      res.redirect('/v2/already-provided-mor-explanation')
    } else {
      res.redirect('/v2/invoice')
    }
  
  })


router.post('/already-provided-all-answer', function (req, res) {

    var allDocs = req.session.data['already-provided-all']
    if (allDocs == "yes") {
      res.redirect('/v2/already-provided-all-explanation')
    } else {
      res.redirect('/v2/receive-notices')
    }
  
  })


  router.post('/payment-method-answer', function (req, res) {

    var paymentMethod = req.session.data['payment-method']
    if (paymentMethod == "card") {
      res.redirect('/v2/card-payment')
    } else {
      res.redirect('/v2/confirmation')
    }
  
  })


  router.post('/subject-to-licensing-answer', function (req, res) {

    var subjectToLicensing = req.session.data['subject-to-licensing']
    if (subjectToLicensing == "yes") {
      res.redirect('/v2/is-it-licensed')
    } else {
      res.redirect('/v2/enforcement-action')
    }
  
  })


  router.post('/enforcement-action-answer', function (req, res) {

    var enforcementAction = req.session.data['enforcement-action']
    if (enforcementAction == "No") {
      res.redirect('/v2/check-answers')
    } else {
      res.redirect('/v2/enforcement-action-details')
    }
  
  })

*/

   // V3

   router.post('/single-or-multiple-files-answer', function (req, res) {

    var connectedBuildings = req.session.data['single-or-multiple-files']
    if (connectedBuildings == "multiple") {
      res.redirect('/v3/upload-scr')
    } else {
      res.redirect('/v3/upload-all')
    }
  
  })


router.post('/already-provided-res-answer', function (req, res) {

    var resDoc = req.session.data['already-provided-res']
    if (resDoc == "yes") {
      res.redirect('/v3/already-provided-res-explanation')
    } else {
      res.redirect('/v3/upload-mor')
    }
  
  })


router.post('/already-provided-mor-answer', function (req, res) {

    var morDoc = req.session.data['already-provided-mor']
    if (morDoc == "yes") {
      res.redirect('/v3/already-provided-mor-explanation')
    } else {
      res.redirect('/v3/invoice')
    }
  
  })


router.post('/already-provided-all-answer', function (req, res) {

    var allDocs = req.session.data['already-provided-all']
    if (allDocs == "yes") {
      res.redirect('/v3/already-provided-all-explanation')
    } else {
      res.redirect('/v3/receive-notices')
    }
  
  })


  router.post('/payment-method-answer', function (req, res) {

    var paymentMethod = req.session.data['payment-method']
    if (paymentMethod == "card") {
      res.redirect('/v3/card-payment')
    } else {
      res.redirect('/v3/confirmation')
    }
  
  })


  router.post('/subject-to-licensing-answer', function (req, res) {

    var subjectToLicensing = req.session.data['subject-to-licensing']
    if (subjectToLicensing == "yes") {
      res.redirect('/v3/is-it-licensed')
    } else {
      res.redirect('/v3/enforcement-action')
    }
  
  })


  router.post('/enforcement-action-answer', function (req, res) {

    var enforcementAction = req.session.data['enforcement-action']
    if (enforcementAction == "No") {
      res.redirect('/v3/check-answers')
    } else {
      res.redirect('/v3/enforcement-action-details')
    }
  
  })