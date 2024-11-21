import React from 'react'
import HeaderTwoOnepage from "../components/header/HeaderTwoOnepage";
import BannerTwo from "../components/banner/BannerTwo";
import ServiceTwo from "../components/service/ServiceTwo";
import CallToAction from "../components/calltoaction/CallToAction";
import AboutTwo from "../components/about/AboutTwo";
import WorkingProcess from "../components/workingprocess/WorkingProcess";
import WhyChooseUs from "../components/whychooseus/WhyChooseUs";
import BusinessCase from "../components/businesscase/BusinessCase";
import TestimonialTwo from "../components/testimonials/TestimonialTwo";
import PricingOne from "../components/pricing/PricingOne";
import BrandTwo from "../components/brand/BrandTwo";
import BlogTwo from "../components/blog/BlogTwo";



import FooterTwo from "../components/footer/FooterTwo";

function HomeOne() {
    return (
        <div className='home-blue'>

            <HeaderTwoOnepage />
            <BannerTwo />
            <ServiceTwo />
            <CallToAction />
            <AboutTwo />
            <WorkingProcess />
            <WhyChooseUs />
            <BusinessCase />
            <TestimonialTwo />
            <PricingOne />
            <BrandTwo />
            <BlogTwo />


            <FooterTwo />

        </div>
    )
}

export default HomeOne