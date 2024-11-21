
import React from 'react';
import HeaderOne from "../components/header/HeaderOne";
import { Link } from 'react-router-dom';
import FooterOne from "../components/footer/FooterOne";
import Breadcrumb from "./Breadcrumb";

function ContactUs() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Contact Us' }
    ];
    return (
        <div className=''>

            <HeaderOne />

            {/* <Breadcrumb title="Contact Us" breadcrumbs={breadcrumbs} /> */}

            {/* contact single area start */}
            <div className="rts-contact-area rts-section-gap" id='contact'>
                <div className="container">
                    <div className="row g-5">
                        {/* single contact area */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/01.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/01.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Bizi Arayın</span>
                                        <Link to={'tel:+18475555555'}>
                                            <h5>0850 850 37 88</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                        {/* single contact area */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/02.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/02.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Mail Gönderin</span>
                                        <Link to={'mailto:info@ertutech.net'}>
                                            <h5>info@ertutech.net</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                        {/* single contact area */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="assets/images/contact/03.png" alt="" />
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="assets/images/contact/shape/03.svg" alt="" />
                                    </div>
                                    <div className="info">
                                        <span>Adresimiz</span>
                                        <Link to={'#'}>
                                            <h5>Karşıyaka Mah. 492 Cad. No:11 Gölbaşı/Ankara</h5>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* single contact area end */}
                    </div>
                </div>
            </div>
            {/* conact single area end */}
            {/* bizup map area start */}
            {/* <div className="rts-contact-map-area">
                <div className="contaciner-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="contact-map-area-fluid">
                                <iframe
                                    className="contact-map"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d369.24218125159064!2d32.74946844570894!3d39.775114653928846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1732182448464!5m2!1str!2str"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                                <img
                                    className="location"
                                    src="assets/images/contact/shape/location.svg"
                                    alt="Business_map"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* bizup map area end */}
            {/* conact us form fluid start */}
            

            {/* <FooterOne /> */}

        </div>
    )
}

export default ContactUs