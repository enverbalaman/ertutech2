import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';




function BannerEight() {
    return (
        <div>
            {/* rts banner area start */}
            <div className="rts-banner-area-two eight" id='banner'>
                <div className="swiper mySwiperh3_banner">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
                        className="swiper mySwiperh3_banner"
                        speed={1000}
                        slidesPerView={1}
                        spaceBetween={0}
                        loop={true}
                        autoplay={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            1200: { slidesPerView: 1 },
                            900: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            580: { slidesPerView: 1 },
                            450: { slidesPerView: 1 },
                            0: { slidesPerView: 1 },
                        }}
                    >
                        <SwiperSlide>
                            <div className=" bg_banner-three bg_image rts-section-gap eight">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="banner-three-inner">
                                                <span className="subtitle-banner">
                                                Özel Yazılım Çözümleri
                                                
                                                </span>
                                                
                                                <p className="disc">
                                                İşletmenizin ihtiyaçlarına özel yazılımlar geliştirerek süreçlerinizi optimize ediyor, verimliliğinizi artırıyoruz. Size özel çözümlerle rakiplerinizin önünde olun.
                                                </p>
                                                {/* <div className="button-group">
                                                    <Link
                                                        to={'/pricing-plane'}
                                                        className="rts-btn btn-primary-2"
                                                    >
                                                        Get Started
                                                    </Link>
                                                    <Link
                                                        to={'/about-us'}
                                                        className="rts-btn btn-primary-2 transparent"
                                                    >
                                                        About Us
                                                    </Link>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" bg_banner-three eight-2 bg_image rts-section-gap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="banner-three-inner">
                                                <span className="subtitle-banner">
                                                    Mobil Uygulama Geliştirme
                                                </span>
                                                {/* type headline start*/}
                                                <h1 className="title cd-headline clip is-full-width">
                                                    {/* Software Model */}
                                                </h1>
                                                <p className="disc">
                                                    Kullanıcı dostu ve yüksek performanslı mobil uygulamalarla işinizi her an, her yerde erişilebilir hale getiriyoruz. iOS ve Android platformlarında profesyonel çözümler sunuyoruz.
                                                </p>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" bg_banner-three eight-3 bg_image rts-section-gap">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="banner-three-inner">
                                                <span className="subtitle-banner">
                                                Web Tasarım ve Geliştirme
                                                </span>
                                                {/* type headline start*/}
                                               
                                                <p className="disc">
                                                Modern ve etkileyici web tasarımlarıyla dijital varlığınızı güçlendirin. Hızlı, güvenilir ve SEO uyumlu web siteleriyle işletmenizi bir adım öne taşıyoruz.
                                                </p>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="swiper-navigation">
                    <span className="swiper-button-prev" />
                    <span className="swiper-button-next" />
                </div>
            </div>
            {/* rts banner area end */}
        </div>
    )
}

export default BannerEight