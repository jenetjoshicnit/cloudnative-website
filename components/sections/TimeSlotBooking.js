import React from 'react'
// import { PopupButton } from "react-calendly"
import { InlineWidget } from "react-calendly";



function TimeSlotBooking() {
  return (
    
            <section className=" mt-0 mb-0"  style={{ backgroundColor: '#232429'}} >
                <div className="auto-container">
                    <div className="row ">
                        {/* info-column */}
                        <div className='col-lg-3'>
                        </div>

                        <div className=" col-lg-6 col-md-12 col-sm-12 mb-4 ">
                            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '0px none'}}>
                                 <InlineWidget url="https://calendly.com/cnitsolution-sales/15min" />
                            </div>
                        `   
                        </div> 

                        <div className='col-lg-3'>

                        </div>
                
                
                    </div>
                </div>
            </section>                    
                   
                  
        )
}

export default TimeSlotBooking