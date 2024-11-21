import React from 'react'
import { Link } from 'react-router-dom';

function ServiceSeven() {
    return (
        <div>
            {/* Working Process section start */}
            <div className="rts-working-process-section eight rts-section-gap" id='service'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="title-area">
                                <span>Hizmetlerimiz</span>
                                <h2 className="title">Geleceği Kodluyoruz!</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <p className="decs">
                            ErtuTech olarak, modern teknolojilerle donatılmış yazılım çözümleri sunuyoruz. İhtiyacınıza uygun mobil uygulama, web tasarımı ve özel yazılım geliştirme hizmetlerimizle iş süreçlerinizi kolaylaştırıyor, dijital dünyada fark yaratmanıza yardımcı oluyoruz. Güçlü altyapımız ve uzman ekibimizle hayallerinizi gerçeğe dönüştürüyoruz.  
                            </p>
                        </div>
                    </div>
                    <div className="rts-working-process-inner">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="wrapper">
                                    <Link className="icon">
                                        <img
                                            src="assets/images/logo/analysis.png"
                                            alt="Icon"
                                        />
                                    </Link>
                                    <div className="content">
                                        <h5 className="title">Analiz</h5>
                                        <p className="disc">
                                        Analiz, bir projenin gereksinimlerini anlamak, verileri incelemek ve doğru kararlar almak için yapılan detaylı değerlendirme sürecidir. Başarılı bir proje için temel oluşturur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="wrapper">
                                    <Link className="icon">
                                        <img
                                            src="assets/images/logo/layers.png"
                                            alt="Icon"
                                        />
                                    </Link>
                                    <div className="content">
                                        <h5 className="title">Kullanıcı Deneyimi Tasarımı (UX Design)</h5>
                                        <p className="disc">
                                        Kullanıcıların bir ürün veya hizmetle olan etkileşimlerini kolaylaştırmak ve daha keyifli hale getirmek için yapılan tasarım sürecidir. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                                <div className="wrapper">
                                    <Link className="icon">
                                        <img
                                            src="assets/images/logo/ux.png"
                                            alt="Icon"
                                        />
                                    </Link>
                                    <div className="content">
                                        <h5 className="title">Arayüz Tasarımı (UI Design)</h5>
                                        <p className="disc">
                                        Arayüz tasarımı, bir ürünün görünümünü ve kullanıcılarla olan görsel etkileşimlerini şekillendirme sürecidir. İyi bir UI, estetik ve kullanılabilirlik arasında denge sağlar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-2">
                                <div className="wrapper">
                                    <Link className="icon">
                                        <img
                                            src="assets/images/logo/backend.png"
                                            alt="Icon"
                                        />
                                    </Link>
                                    <div className="content">
                                        <h5 className="title">Backend Servis ve Mimari Geliştirme</h5>
                                        <p className="disc">
                                        Uygulamanın çalışması için gerekli olan sunucu tarafındaki işlemleri ve veri yönetimini içerir. Güçlü bir mimari, uygulamanın performansını ve ölçeklenebilirliğini artırır.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-2">
                                <div className="wrapper">
                                    <Link className="icon">
                                        <img
                                            src="assets/images/logo/app-dev.png"
                                            alt="Icon"
                                        />
                                    </Link>
                                    <div className="content">
                                        <h5 className="title">Web Uygulama Geliştirme</h5>
                                        <p className="disc">
                                        Web uygulama geliştirme, kullanıcıların internet üzerinden erişebileceği işlevsel ve interaktif uygulamaların oluşturulmasıdır. Bu süreç, hem frontend hem de backend geliştirmeyi içerir.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-2">
                                <div className="wrapper">
                                    <Link className="icon">
                                        <img
                                            src="assets/images/logo/mobil-app.png"
                                            alt="Icon"
                                        />
                                    </Link>
                                    <div className="content">
                                        <h5 className="title">Mobil Uygulama Geliştirme</h5>
                                        <p className="disc">
                                        Mobil uygulama geliştirme, akıllı telefonlar ve tabletler için optimize edilmiş, kullanıcı dostu uygulamaların tasarlanması ve kodlanması sürecidir. Günümüzde işletmeler için kritik bir öneme sahiptir.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* Working Process section end */}
        </div>
    )
}

export default ServiceSeven