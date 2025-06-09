import Link from 'next/link';
import { useState } from 'react';


const ContactInner = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        subject: '',
        message: '',
        phone: '',
    });
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setResponseMessage(data.message);
            } else {
                setResponseMessage('Failed to send message. Please try again.');
            }
        } catch (error) {
            setResponseMessage('Error: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="contact-section-three">
                <div className="auto-container">
                    <div className="row">
                    <div className="info-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInRight ps-0 pe-4">
                                <div className="sec-title light">
                                    <div className="sub-title">Get in Touch</div>
                                    <h2>Get a quote today</h2>
                                    <div className="text">Unlock tailored solutions for your business. Contact us today for a personalized quote!</div>
                                </div>
                                <div className="contact-info-box-two">
                                    <span className="icon fa fa-map-marker-alt" />
                                    <h6 className="title">Visit Us</h6>
                                    <div className="text">Office No 203, Crystal Building, Al Karama, Dubai, UAE</div>
                                </div>
                                <div className="contact-info-box-two">
                                    <span className="icon fa fa-envelope" />
                                    <h6 className="title">Email address</h6>
                                    <div className="text"><Link href="mailto:info@cnitsolution.com">info@cnitsolution.com</Link></div>
                                </div>
                                <div className="contact-info-box-two">
                                    <span className="icon fa fa-phone" />
                                    <h6 className="title">Call now</h6>
                                    <div className="text"><Link href="tel:+999000111222">+971 4 834 7705</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="form-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="contact-form-two style-two wow fadeInLeft">
                                    <form onSubmit={handleSubmit} id="contact-form">
                                        <div className="row">
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input
                                                    type="text"
                                                    name="full_name"
                                                    placeholder="Your Name"
                                                    required
                                                    value={formData.full_name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    required
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group col-lg-6 col-md-6 col-sm-12">
                                                <input 
                                                    type="text" 
                                                    name="phone" 
                                                    placeholder="Phone Number" 
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <textarea
                                                    name="message"
                                                    placeholder="Write Message"
                                                    required
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <button
                                                    type="submit"
                                                    className="theme-btn btn-style-one hvr-light"
                                                    disabled={loading}
                                                >
                                                    {loading ? 'Sending...' : 'Send a message'}
                                                </button>
                                            </div>
                                            
                                           

                                        </div>
                                    </form>
                                    {responseMessage && <div>{responseMessage}</div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactInner;
