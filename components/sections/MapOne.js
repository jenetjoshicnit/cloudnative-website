import Link from 'next/link';
import React, {useState, useEffect} from 'react';

const MapOne = () => {
    const [locationData, setLocationData] = useState(null);
    useEffect(() => {
        const fetchLocationData = async () => {
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/maps?populate=*`);
            const data = await response.json();
            setLocationData(data.data[0]);
          } catch (error) {
            console.error('Error fetching location data:', error);
          }
        };
    
        fetchLocationData();
      }, []);
    
      if (!locationData) {
        return <></>;
      }

      const mapUrl = locationData?.location?.[0]?.children?.[1]?.url;

    return (
        <>
            <section className="map-section">
                <iframe className="map" src={mapUrl}>
                </iframe>
                <div className="branches-outer">
                    <div className="auto-container">
                        <div className="row">
                            {/* Branch Block */}
                            {/* <div className="branch-block col-lg-4 col-md-12 col-sm-12">
                                <div className="inner-box">
                                    <h5 className="title">New York</h5>
                                    <ul className="info-list">
                                        <li><i className="fa fa-phone" /> <Link href="tel:666888000">666 888 000</Link><br /></li>
                                        <li><i className="fa fa-envelope" /> <Link href="mailto:needhelp@company.com">needhelp@company.com</Link><br /></li>
                                        <li><i className="fa fa-map-marker-alt" /> 35 Deerfield Valdosta Road, United Kingdom</li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MapOne;