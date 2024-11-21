
import React, { useEffect } from 'react';
import WOW from 'wow.js';


function AboutOne() {
    useEffect(() => {
        const wow = new WOW({
            boxClass: 'wow',      // default
            animateClass: '',     // set to empty because we use custom classes
            offset: 0,            // distance to the element when triggering the animation
            mobile: true,         // trigger animations on mobile devices
            live: true            // act on asynchronously loaded content
        });
        wow.init();
    }, []);
    return (
        <div>

            {/* rts about us section start */}
            <div id='about' className="rts-about-area rts-section-gap bg-about-sm-shape">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        {/* about left */}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-md-2 order-sm-2 order-2 mt_md--50 mt_sm--50">
                            <div className="rts-title-area">
                                <p className="pre-title">Hakkımızda Daha Fazla Bilgi</p>
                                <h2 className="title">En İyi Çözümler ve Hizmetler İçin Buradayız</h2>
                            </div>
                            <div className="about-inner">
                                <p className="disc">
                               Teknolojiyle hayatı kolaylaştırmayı misyon edinen bir yazılım firmasıyız. Yenilikçi çözümlerimiz ve uzman ekibimizle, mobil uygulama, web tasarımı ve özel yazılım projelerinde müşterilerimize değer katıyoruz. Güven, kalite ve müşteri odaklı yaklaşımımızla dijital dünyada fark yaratmayı hedefliyoruz.
                                </p>
                                {/* start about success area */}
                                <div className="row about-success-wrapper">
                                    {/* left wrapper start */}
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Güçlü Altyapı ve Deneyim</p>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Yenilikçi Yaklaşım</p>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Müşteri Odaklılık</p>
                                        </div>
                                    </div>
                                    {/* left wrapper end */}
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Düşük Maliyet,Yüksek Verimlilik</p>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Kalite ve Güven</p>
                                        </div>
                                        <div className="single">
                                            <i className="far fa-check" />
                                            <p className="details">Çeşitli Hizmetler</p>
                                        </div>
                                    </div>
                                </div>
                                {/* start about success area */}
                                {/* about founder & get in touch start */}
                                <div className="row about-founder-wrapper align-items-center mt--40">
                                    {/* left area start */}
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        {/* <div className="author-inner">
                                            <a className="thumbnail" href="#">
                                                <img
                                                    src="assets/images/about/sm-01.png"
                                                    alt="finbiz_founder"
                                                />
                                            </a>
                                            <div className="founder-details">
                                                <a href="team-details.html">
                                                    <h6 className="title">Ertuğrul TURAN</h6>
                                                </a>
                                                <span>CEO &amp; Founder</span>
                                            </div>
                                        </div> */}
                                    </div>
                                    {/* left area end */}
                                    {/* right founder area */}
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_sm--20">
                                        <div className="author-call-option">
                                            <img
                                                className="authore-call"
                                                src="assets/images/about/call.svg"
                                                alt="call_founder"
                                            />
                                            <div className="call-details">
                                                <span>Bizi arayın</span>
                                                <a href="tel:+18475555555">
                                                    <h6 className="title">0850 850 3788</h6>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* left founder area */}
                                </div>
                                {/* about founder & get in touch end */}
                            </div>
                        </div>
                        {/* about right */}
                        {/* about-right Start*/}
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-md-1 order-sm-1 order-1">
                            <div className="about-one-thumbnail">
                                <img
                                    src=" assets/images/about/main/about-01.png"
                                    alt="about-finbiz"
                                />
                                <img
                                    className="small-img"
                                    src="assets/images/about/main/about-02.png"
                                    alt="finbiz-small"
                                />
                                <div className="experience">
                                    <div className="left single">
                                        <h2 className="title">10+</h2>
                                        <p className="time">Yıl</p>
                                    </div>
                                    <div className="right single">
                                        <p className="disc">Sektör Tecrübemiz</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* about-right end */}
                    </div>
                </div>
            </div>
            {/* rts about us section end */}

        </div >
    )
}

export default AboutOne