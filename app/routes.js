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



   // V3


  router.post('/single-or-multiple-files-answer', function (req, res) {

    var connectedBuildings = req.session.data['single-or-multiple-files']
    if (connectedBuildings == "multiple") {
      res.redirect('/v3/upload-scr')
    } else if (connectedBuildings == "two") {
      res.redirect('/v3/upload-mor-in-scr')
    } else if (connectedBuildings == "single") {
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
    var resRequired = req.session.data['single-or-multiple-files']
    if (morDoc == "yes") {
      res.redirect('/v3/already-provided-mor-explanation')
    } else if (resRequired == "single") {
      res.redirect('/v3/recieve-notices')
    } else {
      res.redirect('/v3/upload-res')
    }
    
  })


  router.post('/already-provided-mor-explanation-answer', function (req, res) {

    var resRequired = req.session.data['single-or-multiple-files']
    if (resRequired == "single") {
      res.redirect('/v3/recieve-notices')
    } else {
      res.redirect('/v3/upload-res')
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



  // V4

  router.post('/single-or-multiple-files-answer', function (req, res) {

    var connectedBuildings = req.session.data['single-or-multiple-files']
    if (connectedBuildings == "multiple") {
      res.redirect('/v4/upload-scr')
    } else if (connectedBuildings == "mor-in-scr") {
      res.redirect('/v4/upload-mor-in-scr')
    } else if (connectedBuildings == "res-in-scr") {
      res.redirect('/v4/upload-res-in-scr')
    } else if (connectedBuildings == "single") {
      res.redirect('/v4/upload-all')
    }
  
  })


router.post('/already-provided-res-answer', function (req, res) {

    var resDoc = req.session.data['already-provided-res']
    if (resDoc == "yes") {
      res.redirect('/v4/already-provided-res-explanation')
    } else {
      res.redirect('/v4/upload-mor')
    }
  
  })


router.post('/already-provided-mor-answer', function (req, res) {

    var morDoc = req.session.data['already-provided-mor']
    var resRequired = req.session.data['single-or-multiple-files']
    if (morDoc == "yes") {
      res.redirect('/v4/already-provided-mor-explanation')
    } else if (resRequired == "single") {
      res.redirect('/v4/recieve-notices')
    } else {
      res.redirect('/v4/upload-res')
    }
    
  })


  router.post('/already-provided-mor-explanation-answer', function (req, res) {

    var resRequired = req.session.data['single-or-multiple-files']
    if (resRequired == "single") {
      res.redirect('/v4/recieve-notices')
    } else {
      res.redirect('/v4/upload-res')
    }
  
  })


router.post('/already-provided-all-answer', function (req, res) {

    var allDocs = req.session.data['already-provided-all']
    if (allDocs == "yes") {
      res.redirect('/v4/already-provided-all-explanation')
    } else {
      res.redirect('/v4/receive-notices')
    }
  
  })


  router.post('/payment-method-answer', function (req, res) {

    var paymentMethod = req.session.data['payment-method']
    if (paymentMethod == "card") {
      res.redirect('/v4/card-payment')
    } else {
      res.redirect('/v4/confirmation')
    }
  
  })


  router.post('/subject-to-licensing-answer', function (req, res) {

    var subjectToLicensing = req.session.data['subject-to-licensing']
    if (subjectToLicensing == "yes") {
      res.redirect('/v4/is-it-licensed')
    } else {
      res.redirect('/v4/enforcement-action')
    }
  
  })


  router.post('/enforcement-action-answer', function (req, res) {

    var enforcementAction = req.session.data['enforcement-action']
    if (enforcementAction == "No") {
      res.redirect('/v4/check-answers')
    } else {
      res.redirect('/v4/enforcement-action-details')
    }
  
  })



  // V5

  router.post('/single-or-multiple-files-answer', function (req, res) {

    var connectedBuildings = req.session.data['single-or-multiple-files']
    if (connectedBuildings == "multiple") {
      res.redirect('/v5/upload-scr')
    } else if (connectedBuildings == "mor-in-scr") {
      res.redirect('/v5/upload-mor-in-scr')
    } else if (connectedBuildings == "res-in-scr") {
      res.redirect('/v5/upload-res-in-scr')
    } else if (connectedBuildings == "single") {
      res.redirect('/v5/upload-all')
    }
  
  })


router.post('/already-provided-res-answer', function (req, res) {

    var resDoc = req.session.data['already-provided-res']
    if (resDoc == "yes") {
      res.redirect('/v5/already-provided-res-explanation')
    } else {
      res.redirect('/v5/upload-mor')
    }
  
  })


router.post('/already-provided-mor-answer', function (req, res) {

    var morDoc = req.session.data['already-provided-mor']
    var resRequired = req.session.data['single-or-multiple-files']
    if (morDoc == "yes") {
      res.redirect('/v5/already-provided-mor-explanation')
    } else if (resRequired == "single") {
      res.redirect('/v5/recieve-notices')
    } else {
      res.redirect('/v5/upload-res')
    }
    
  })


  router.post('/already-provided-mor-explanation-answer', function (req, res) {

    var resRequired = req.session.data['single-or-multiple-files']
    if (resRequired == "single") {
      res.redirect('/v5/recieve-notices')
    } else {
      res.redirect('/v5/upload-res')
    }
  
  })


router.post('/already-provided-all-answer', function (req, res) {

    var allDocs = req.session.data['already-provided-all']
    if (allDocs == "yes") {
      res.redirect('/v5/already-provided-all-explanation')
    } else {
      res.redirect('/v5/receive-notices')
    }
  
  })


  router.post('/payment-method-answer', function (req, res) {

    var paymentMethod = req.session.data['payment-method']
    if (paymentMethod == "card") {
      res.redirect('/v5/card-payment')
    } else {
      res.redirect('/v5/confirmation')
    }
  
  })


  router.post('/subject-to-licensing-answer', function (req, res) {

    var subjectToLicensing = req.session.data['subject-to-licensing']
    if (subjectToLicensing == "yes") {
      res.redirect('/v5/is-it-licensed')
    } else {
      res.redirect('/v5/enforcement-action')
    }
  
  })


  router.post('/enforcement-action-answer', function (req, res) {

    var enforcementAction = req.session.data['enforcement-action']
    if (enforcementAction == "No") {
      res.redirect('/v5/check-answers')
    } else {
      res.redirect('/v5/enforcement-action-details')
    }
  
  })

  


  // V6

  router.post('/single-or-multiple-files-answer', function (req, res) {

    var connectedBuildings = req.session.data['single-or-multiple-files']
    if (connectedBuildings == "multiple") {
      res.redirect('/v6/upload-scr')
    } else if (connectedBuildings == "mor-in-scr") {
      res.redirect('/v6/upload-mor-in-scr')
    } else if (connectedBuildings == "res-in-scr") {
      res.redirect('/v6/upload-res-in-scr')
    } else if (connectedBuildings == "single") {
      res.redirect('/v6/upload-all')
    }
  
  })


router.post('/already-provided-res-answer', function (req, res) {

    var resDoc = req.session.data['already-provided-res']
    if (resDoc == "yes") {
      res.redirect('/v6/already-provided-res-explanation')
    } else {
      res.redirect('/v6/upload-mor')
    }
  
  })


router.post('/already-provided-mor-answer', function (req, res) {

    var morDoc = req.session.data['already-provided-mor']
    var resRequired = req.session.data['single-or-multiple-files']
    if (morDoc == "yes") {
      res.redirect('/v6/already-provided-mor-explanation')
    } else if (resRequired == "single") {
      res.redirect('/v6/recieve-notices')
    } else {
      res.redirect('/v6/upload-res')
    }
    
  })


  router.post('/already-provided-mor-explanation-answer', function (req, res) {

    var resRequired = req.session.data['single-or-multiple-files']
    if (resRequired == "single") {
      res.redirect('/v6/recieve-notices')
    } else {
      res.redirect('/v6/upload-res')
    }
  
  })


router.post('/already-provided-all-answer', function (req, res) {

    var allDocs = req.session.data['already-provided-all']
    if (allDocs == "yes") {
      res.redirect('/v6/already-provided-all-explanation')
    } else {
      res.redirect('/v6/receive-notices')
    }
  
  })


  router.post('/payment-method-answer', function (req, res) {

    var paymentMethod = req.session.data['payment-method']
    if (paymentMethod == "card") {
      res.redirect('/v6/card-payment')
    } else {
      res.redirect('/v6/same-invoice')
    }
  
  })


  router.post('/subject-to-licensing-answer', function (req, res) {

    var subjectToLicensing = req.session.data['subject-to-licensing']
    if (subjectToLicensing == "yes") {
      res.redirect('/v6/is-it-licensed')
    } else {
      res.redirect('/v6/enforcement-action')
    }
  
  })


  router.post('/enforcement-action-answer', function (req, res) {

    var enforcementAction = req.session.data['enforcement-action']
    if (enforcementAction == "No") {
      res.redirect('/v6/check-answers')
    } else {
      res.redirect('/v6/enforcement-action-details')
    }
  
  })





  // V7

  router.post('/access-an-application-answer', function (req, res) {

    var email = req.session.data['email']
    var appRef = req.session.data['application-reference']
    if (email == "" || email == "darragh.mckeogh@company.com" || appRef == "") {
      res.redirect('/v7/access-an-application-test')
    } else {
      res.redirect('/v7/security-code')
    }
  
  })


  router.post('/payment-method-answer', function (req, res) {

    var paymentMethod = req.session.data['payment-method']
    if (paymentMethod == "card") {
      res.redirect('/v7/card-payment')
    } else {
      res.redirect('/v7/same-invoice')
    }
  
  })

    */



    // V8

    router.post('/access-an-application-answer', function (req, res) {

      var email = req.session.data['email']
      var appRef = req.session.data['application-reference']
      if (email == "" || email == "darragh.mckeogh@company.com" || appRef == "") {
        res.redirect('/v8/access-an-application-test')
      } else {
        res.redirect('/v8/security-code')
      }
    
    })
  
  
    router.post('/payment-method-answer', function (req, res) {
  
      var paymentMethod = req.session.data['payment-method']
      if (paymentMethod == "card") {
        res.redirect('/v8/card-payment')
      } else {
        res.redirect('/v8/same-invoice')
      }
    
    })