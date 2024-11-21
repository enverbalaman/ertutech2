import React from 'react'
import { Link } from 'react-router-dom'

function WhyChooseTwo() {
    return (
        <div>
            {/* start service area */}
            <div className="rts-service-areah2-im-3 eight rts-section-gap" id='goal'>
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="image-area">
                                <img src="assets/images/service/h2/03.jpg" alt="Service_Image" />
                                <img
                                    className="two"
                                    src="assets/images/service/h2/02.jpg"
                                    alt="Service_Image"
                                />
                                <img
                                    className="three"
                                    src="assets/images/service/h2/01.jpg"
                                    alt="Service_Image"
                                />
                                <div className="ratio-area">
                                    <h3 className="ratio">100%</h3>
                                    <span>Memnuniyet</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-h2-content pl--30">
                                <div className="title-area  service-h2 service">
                                    <span>Neden Bizi Seçmelisiniz</span>
                                    <h2 className="title">Profesyonel yaklaşım ve çözüm odaklıyız </h2>
                                </div>
                                <div className="content-wrapper">
                                    <p className="disc">
                                        İhtiyacınız olan tüm yazılım hizmetlerinde profesyonel ekip arkadaşlarımız ve müşteri memnuniyeti odaklı çalışma prensimiz ile sizlerin yanındayız
                                    </p>
                                    <div className="feature-one-wrapper mt--40">
                                        <div className="single-feature-one eight">
                                            {/* Analiz */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                height="48"
                                                width="48"
                                                fill="#4CAF50"
                                            >
                                                <path d="M3 3h18v2H3V3zm0 4h10v2H3V7zm0 4h14v2H3v-2zm0 4h18v2H3v-2zm0 4h6v2H3v-2zm9.5-5l4 4 5-7-7 9H12v-6z" />
                                            </svg>
                                            <p>Kullanıcı Deneyimi Tasarımı</p>
                                        </div>

                                        <div className="single-feature-one eight">
                                            {/* Kullanıcı Deneyimi Tasarımı */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                height="48"
                                                width="48"
                                                fill="#FF9800"
                                            >
                                                <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.57.45-3.03 1.24-4.26l10.02 10.02C15.03 19.55 13.57 20 12 20zm6.76-3.74L8.74 8.74C9.97 7.95 11.43 7.5 13 7.5c4.41 0 8 3.59 8 8 0 1.57-.45 3.03-1.24 4.26z" />
                                            </svg>
                                            <p>Analiz</p>
                                        </div>

                                        <div className="single-feature-one eight">
                                            {/* Arayüz Tasarımı */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                height="48"
                                                width="48"
                                                fill="#3F51B5"
                                            >
                                                <path d="M4 4h16v2H4zm0 4h16v10H4zm0 12h16v2H4zm2-10h12v2H6zm0 4h8v2H6z" />
                                            </svg>
                                            <p>Arayüz Tasarımı</p>
                                        </div>

                                        <div className="single-feature-one eight">
                                            {/* Backend Servis ve Mimari Geliştirme */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                height="48"
                                                width="48"
                                                fill="#9C27B0"
                                            >
                                                <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 4-8 5-8-5V4l8 5 8-5v2zm0 14H4V8l8 5 8-5v12z" />
                                            </svg>
                                            <p>Backend Servis ve Mimari Geliştirme</p>
                                        </div>

                                        <div className="single-feature-one eight">
                                            {/* Web Uygulama Geliştirme */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                height="48"
                                                width="48"
                                                fill="#009688"
                                            >
                                                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 3.06 8.18 7.25 9.54l-1.47-1.47a1.25 1.25 0 0 1 0-1.77L10 17l1.5 1.5L12 18h0l1.47 1.47a1.25 1.25 0 0 1 0 1.77l-1.47 1.47C15.94 20.18 20 16.41 20 12c0-5.52-4.48-10-10-10zm-3 8c-.83 0-1.5-.67-1.5-1.5S8.17 7 9 7s1.5.67 1.5 1.5S9.83 10 9 10zm6 0c-.83 0-1.5-.67-1.5-1.5S14.17 7 15 7s1.5.67 1.5 1.5S15.83 10 15 10z" />
                                            </svg>
                                            <p>Web Uygulama Geliştirme</p>
                                        </div>

                                        <div className="single-feature-one eight">
                                            {/* Mobil Uygulama Geliştirme */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                height="48"
                                                width="48"
                                                fill="#FFC107"
                                            >
                                                <path d="M7 2C5.9 2 5 2.9 5 4v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H7zm10 16H7V4h10v14zM8.5 15h7v1h-7v-1zm0-3h7v1h-7v-1zm0-3h7v1h-7v-1z" />
                                            </svg>
                                            <p>Mobil Uygulama Geliştirme</p>
                                        </div>

                                       
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* start service area End */}
        </div>
    )
}

export default WhyChooseTwo