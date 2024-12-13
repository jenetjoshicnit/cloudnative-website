import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const [footerData, setFooterData] = useState(null);

    useEffect(() => {
        const fetchFooterData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/footer?populate=*`);
                const data = await response.json();
                setFooterData(data?.data?.FooterData);
            } catch (error) {
                console.error('Error fetching footer data:', error);
            }
        };

        fetchFooterData();
    }, []);

    if (!footerData) {
        return <></>;
    }

    const { sections, footerBottom } = footerData;

    return (
        <footer className="main-footer">
            <div className="bg-image" style={{ backgroundImage: 'url(./images/background/background2.jpg)' }} />
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">
                        {sections.map((section) => {
                            if (section.sectionName === 'About') {
                                return (
                                    <div className="footer-column col-xl-3 col-lg-12 col-md-6 col-sm-12" key={section.id}>
                                        <div className="footer-widget about-widget">
                                            <div className="logo">
                                                <Link href="/">
                                                    <Image src={section.content.logo.url} alt={section.content.logo.alt} width={317} height={76} />
                                                </Link>
                                            </div>
                                            <div className="text">{section.content.description}</div>
                                            <ul className="social-icon-two">
                                                {section.content.socialLinks.map((social) => (
                                                    <li key={social.id}>
                                                        <Link href={social.url}>
                                                            <i className={social.iconClass} />
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            } else if (section.sectionName === 'Explore') {
                                return (
                                    <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12" key={section.id}>
                                        <div className="footer-widget">
                                            <h3 className="widget-title">{section.sectionName}</h3>
                                            <ul className="user-links">
                                                {section.menu.map((menuItem) => (
                                                    <li key={menuItem.id}>
                                                        <Link href={menuItem.url}>{menuItem.menuItem}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            } else if (section.sectionName === 'Services') {
                                return (
                                    <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12" key={section.id}>
                                        <div className="footer-widget">
                                            <h3 className="widget-title">{section.sectionName}</h3>
                                            <ul className="user-links">
                                                {section.menu.map((menuItem) => (
                                                    <li key={menuItem.id}>
                                                        <Link href={menuItem.url}>{menuItem.menuItem}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            }
                            else if (section.sectionName === 'Contact') {
                                return (
                                    <div className="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12" key={section.id}>
                                        <div className="footer-widget contact-widget">
                                            <h3 className="widget-title">{section.sectionName}</h3>
                                            <div className="widget-content">
                                                <div className="text">
                                                    {/* {section.details.address} */}
                                                    {section.details.address.split(", ").map((line, index, arr) => {
                                                        if (index === arr.length - 2) {
                                                            return <div key={index}>{line + ", " + arr[index + 1]}</div>;
                                                        }
                                                        if (index < arr.length - 1) {
                                                            return <div key={index}>{line}</div>;
                                                        }
                                                    })}
                                                </div>
                                                <ul className="contact-info">
                                                    {section.details.contactMethods.map((method) => (
                                                        <li key={method.id}>
                                                            <i className={method.type === 'Email' ? 'fa fa-envelope' : 'fa fa-phone'} />
                                                            <Link href={method.url}>{method.value}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                );
                            } 
                        })}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="copyright-text">{footerBottom.content}</div>
                        <div
                                dangerouslySetInnerHTML={{
                                __html: footerBottom.footerScripts,
                            }}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
