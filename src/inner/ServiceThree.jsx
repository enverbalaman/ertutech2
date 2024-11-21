import React from 'react'
import HeaderOne from "../components/header/HeaderOne";
import Breadcrumb from "./Breadcrumb";
import { Link } from 'react-router-dom';



import FooterOne from "../components/footer/FooterOne";

function OurService() {
    const breadcrumbs = [
        { label: 'Home', link: '/' },
        { label: 'Our Services' }
    ];
    return (
        <div className=''>

            <HeaderOne />
            <Breadcrumb title="Our Services" breadcrumbs={breadcrumbs} />


            {/* latest service area */}
            <div className="rts-service-area rts-section-gap bg-service-h2 ptb--120 mt--0">
                <div className="container">
                    <div className="row">
                        <div className="title-area service-h2">
                            <span>Our Latest Services</span>
                            <h2 className="title">Service We Provide</h2>
                        </div>
                    </div>
                    <div className="row g-5 mt--10">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            {/* single service start */}
                            <div className="rts-single-service-h2 inner">
                                <Link to={'/service-details'} className="thumbnail">
                                    <img src="assets/images/service/10.jpg" alt="Service_image" />
                                </Link>
                                <div className="body">
                                    <Link to={'/service-details'}>
                                        <h5 className="title">Business Solution</h5>
                                    </Link>
                                    <p className="disc">
                                        Fusce dignissim erat dis proin ornare class sem nibh
                                    </p>
                                    <Link to={'/service-details'} className="btn-red-more">
                                        Learn More
                                        <i className="fas fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            {/* single service End */}
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            {/* single service start */}
                            <div className="rts-single-service-h2 inner">
                                <Link to={'/service-details'} className="thumbnail">
                                    <img src="assets/images/service/11.jpg" alt="Service_image" />
                                </Link>
                                <div className="body">
                                    <Link to={'/service-details'}>
                                        <h5 className="title">Creative Ideas</h5>
                                    </Link>
                                    <p className="disc">
                                        Fusce dignissim erat dis proin ornare class sem nibh
                                    </p>
                                    <Link to={'/service-details'} className="btn-red-more">
                                        Learn More
                                        <i className="fas fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            {/* single service End */}
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            {/* single service start */}
                            <div className="rts-single-service-h2 inner">
                                <Link to={'/service-details'} className="thumbnail">
                                    <img src="assets/images/service/12.jpg" alt="Service_image" />
                                </Link>
                                <div className="body">
                                    <Link to={'/service-details'}>
                                        <h5 className="title">Market Research</h5>
                                    </Link>
                                    <p className="disc">
                                        Fusce dignissim erat dis proin ornare class sem nibh
                                    </p>
                                    <Link to={'/service-details'} className="btn-red-more">
                                        Learn More
                                        <i className="fas fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            {/* single service End */}
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            {/* single service start */}
                            <div className="rts-single-service-h2 inner">
                                <Link to={'/service-details'} className="thumbnail">
                                    <img src="assets/images/service/13.jpg" alt="Service_image" />
                                </Link>
                                <div className="body">
                                    <Link to={'/service-details'}>
                                        <h5 className="title">Best Solution</h5>
                                    </Link>
                                    <p className="disc">
                                        Fusce dignissim erat dis proin ornare class sem nibh
                                    </p>
                                    <Link to={'/service-details'} className="btn-red-more">
                                        Learn More
                                        <i className="fas fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                            {/* single service End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* latest service area End */}


            <FooterOne />

        </div>
    )
}

export default OurService