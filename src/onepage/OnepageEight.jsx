import React from 'react'
import HeaderEightOnepage from "../components/header/HeaderEightOnepage";
import BannerEight from "../components/banner/BannerEight";
import WhyChooseTwo from "../components/whychooseus/WhyChooseTwo";
import ServiceSeven from "../components/service/ServiceSeven";
import ContactUs from '../inner/ContactUs';
import FooterSeven from '../components/footer/FooterSeven';
import AboutCompany from '../components/about/AboutCompany';
import AboutSeven from '../components/about/AboutSeven';
import AboutSix from '../components/about/AboutSix';
import AboutFive from '../components/about/AboutFive';
import AboutFour from '../components/about/AboutFour';
import AboutTwo from '../components/about/AboutTwo';
import AboutThree from '../components/about/AboutThree';
import AboutOne from '../components/about/AboutOne';
function HomeOne() {
    return (
        <div className='home-blue medium-blue'>

            <HeaderEightOnepage />
            <BannerEight />
            <WhyChooseTwo />
            <AboutOne/>
            <ServiceSeven />
            <ContactUs/>
            <FooterSeven />

        </div>
    )
}

export default HomeOne