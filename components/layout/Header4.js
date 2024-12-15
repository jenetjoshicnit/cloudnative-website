import Link from 'next/link';
import React from 'react';
import MobileMenu from './MobileMenu';
import Image from 'next/image'

import NavLinks from './NavLinks';
import LogoWhite from './../../public/images/logo.png';
import cnitWhite from './../../public/images/site-logo-re.png';
import cnitDark from './../../public/images/site-logo-white.png';

const Header4 = ({ handleOpen, searchToggle, handleToggle, scroll }) => {
    const handleRemove = () => {
        document.body.classList.remove("mobile-menu-visible");
    };

    return (
        <>
            <header className={`main-header header-style-four ${scroll ? "fixed-header" : ""}`}>
                <div className="header-lower">
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo"><Link href="/"><Image src={cnitWhite} alt="Logo" /></Link></div>
                        </div>
                        <div className="nav-outer">
                            <nav className="nav main-menu">
                                <NavLinks extraClassName="header4" />
                            </nav>
                        </div>
                        <div className="outer-box">
                            <Link href="tel:+92(8800)9806" className="info-btn">
                                <i className="icon fa fa-phone" />
                                <small>Call Anytime</small><br />  + 971 48347705
                            </Link>
                            <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                        </div>
                    </div>
                </div>

                <div className="mobile-menu" onClick={handleRemove}>
                    <div className="menu-backdrop" />
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo"><Link href="/"><Image src={LogoWhite} alt="Logo"/></Link></div>
                            <div className="close-btn" onClick={handleRemove}><i className="icon fa fa-times" /></div>
                        </div>
                        <MobileMenu handleRemove={handleRemove}/>
                        <ul className="contact-list-one">
                            <li>
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <Link href="tel:+92880098670">+ 971 48347705</Link>
                                </div>
                            </li>
                            <li>
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <Link href="mailto:info@cnitsolution.com">info@cnitsolution.com</Link>
                                </div>
                            </li>
                            <li>
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Office Timing</span>
                                        Mon - Fri : 9 AM - 6 PM <br/> Sat : 9AM - 1PM
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li><Link href="https://twitter.com/cloudnativeits"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="https://www.facebook.com/cloud.native.it.solutions"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="https://www.linkedin.com/company/cloud-native-it-solutions"><i className="fab fa-linkedin-in" /></Link></li>
                            <li><Link href="https://www.instagram.com/cloudnativeits/"><i className="fab fa-instagram" /></Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="search-popup">
                    <span className="search-back-drop" />
                    <button className="close-search"><span className="fa fa-times" /></button>
                    <div className="search-inner">
                        <form method="post" action="#">
                            <div className="form-group">
                                <input type="search" name="search-field" placeholder="Search..." required />
                                <button type="submit"><i className="fa fa-search" /></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="logo">
                                <Link href="/" title><Image src={cnitDark} alt="Logo" /></Link>
                            </div>
                            <div className="nav-outer">
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <NavLinks />
                                    </div>
                                </nav>
                                <div className="mobile-nav-toggler" onClick={handleOpen}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
            </header>
        </>
    );
};

export default Header4;