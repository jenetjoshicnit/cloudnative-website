
import React from 'react'
import GoogleReviewsWidget from 'google-reviews-widget'

function GooglrReviews() {
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
          <div className="col-lg-10 col-xl-8"> {/* Adjust width for widget if needed */}
            {/* This is where the widget itself will render. It will have its own structure. */}
            <GoogleReviewsWidget instanceId='1u5AAWBnP7lhL0r4bOUX' />
            {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}
            {/* <script src="https://static.elfsight.com/platform/platform.js" async></script>
            <div class="elfsight-app-ec2dcb81-a517-4b70-982f-a1373d2f09f7" data-elfsight-app-lazy></div> */}
          </div>
        </div>

      </div>

  )
}

export default GooglrReviews