
import React from 'react'
import GoogleReviewsWidget from 'google-reviews-widget'

function GoogleReviews() {
  return (
     <div className=" mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center"> {/* Constrain width and center heading */}
            <h2 className="mb-4 display-5 fw-bold ">Hear From Our Satisfied Clients</h2>
            <p className="lead mb-4">
              Real feedback from businesses who trust CNIT Solutions.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          {/* <div className="col-lg-10 col-xl-8">  */}
            {/* This is where the widget itself will render. It will have its own structure. */}
            <GoogleReviewsWidget instanceId='1u5AAWBnP7lhL0r4bOUX' /> 

            {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}
             {/* <script src="https://static.elfsight.com/platform/platform.js" async></script>
              <div className="elfsight-app-a142bc09-dc32-4a16-9b78-3a4d12cb73ce" data-elfsight-app-lazy></div> 

               */}
          {/* </div> */}
        </div>

      </div>

  )
}

export default GoogleReviews;