import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function SideMenu({ isSidebarOpen, toggleSidebar }) {

    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menuhome) => {
        setOpenMenu(openMenu === menuhome ? null : menuhome);
    };


    // useEffect(() => {
    //     const sidebar = document.getElementById('side-bar');
    //     const anywhereHome = document.getElementById('anywhere-home');

    //     if (isSidebarOpen) {
    //         sidebar.classList.add('show');
    //         anywhereHome.classList.add('bgshow');
    //     } else {
    //         sidebar.classList.remove('show');
    //         anywhereHome.classList.remove('bgshow');
    //     }
    // }, [isSidebarOpen]);


    return (
        <div>
            <div id="side-bar" className={`side-bar ${isSidebarOpen ? 'show' : ''}`}>
                <button className="close-icon-menu" aria-label="Close Menu" onClick={toggleSidebar}>
                    <i className="far fa-times"></i>
                </button>
                {/* inner menu area desktop start */}
                <div className="rts-sidebar-menu-desktop">
                    
                    <Link className="logo-2" href="index.html">
                        <img
                            className="logo"
                            src="/assets/images/logo/ertutechlogo.png"
                            alt="ertutech_logo"
                        />
                    </Link>
                    
                    <div className="body d-none d-xl-block">
                        <p className="disc">
                        İhtiyacınıza uygun mobil uygulama, web tasarımı ve özel yazılım geliştirme hizmetlerimizle iş süreçlerinizi kolaylaştırıyor, dijital dünyada fark yaratmanıza yardımcı oluyoruz. 
                        </p>
                        <div className="get-in-touch">
                            {/* title */}
                            <div className="h6 title">İletişime geçin</div>
                            {/* title End */}
                            <div className="wrapper">
                                {/* single */}
                                <div className="single">
                                    <i className="fas fa-phone-alt" />
                                    <Link href="#">0850 850 3788</Link>
                                </div>
                                {/* single ENd */}
                                {/* single */}
                                <div className="single">
                                    <i className="fas fa-envelope" />
                                    <Link href="#">info@ertutech.com</Link>
                                </div>
                                {/* single ENd */}
                                {/* single */}

                                {/* single ENd */}
                                {/* single */}
                                <div className="single">
                                    <i className="fas fa-map-marker-alt" />
                                    <Link href="#">Karşıyaka Mah. 492 Cad. No:11 Gölbaşı/Ankara</Link>
                                </div>
                                {/* single ENd */}
                            </div>
                            
                        </div>
                    </div>
                    <div className="body-mobile d-block d-xl-none">
                        <nav className="nav-main mainmenu-nav">
                            <ul className="mainmenu metismenu" id="mobile-menu-active">
                                <li className="has-droupdown menu-item">
                                    <Link className="menu-link" href="#" onClick={() => toggleMenu(1)}>
                                        Home
                                    </Link>
                                    <ul className={`submenu ${openMenu === 1 ? 'mm-collapse mm-show' : 'mm-collapse'}`} >
                                        <li>
                                            <ul>
                                                <Link href="#0" className="tag">
                                                    Homepages
                                                </Link>
                                                <li className="mobile-menu-link">
                                                    <Link to={'/'}>Main Home</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link to={'/home-two'}>Consulting Home</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link to={'/home-three'}>Corporate Home</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link to={'/home-four'}>Insurance Home</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link to={'/home-five'}>Marketing Home</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link to={'/home-six'}>Finance Home</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link to={'/home-seven'}>Human Resources</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link to={'/home-eight'}>IT Solutions</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link to={'/home-nine'}>Modern Agency</Link>
                                                </li>
                                                <li className="mobile-menu-link">
                                                    <Link to={'/home-ten'}>Startup Agency</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <Link className="menu-link" href="about-us.html">
                                        About Us
                                    </Link>
                                </li>
                                <li className="has-droupdown menu-item">
                                    <Link className="menu-link" href="#" onClick={() => toggleMenu(2)}>
                                        Services
                                    </Link>
                                    <ul className={`submenu ${openMenu === 2 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                        <li>
                                            <Link to={'/our-service'}>Service 1</Link>
                                        </li>
                                        <li>
                                            <Link to={'/service-2'}>Service 2</Link>
                                        </li>
                                        <li>
                                            <Link to={'/service-3'}>Service 3</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href="service-details.html">Service Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-droupdown menu-item">
                                    <Link className="menu-link" href="#" onClick={() => toggleMenu(3)}>
                                        Pages
                                    </Link>
                                    <ul className={`submenu ${openMenu === 3 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                        <li className="mobile-menu-link">
                                            <Link href="project.html">Project</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href="project-details.html">Project Details</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href="team.html">Team</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href="team-details.html">Team Details</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href="appoinment.html">appoinment</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href="price-plan.html">Price Plan</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href="404.html">404 Page</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-droupdown menu-item">
                                    <Link className="menu-link" href="#" onClick={() => toggleMenu(4)}>
                                        Blog
                                    </Link>
                                    <ul className={`submenu ${openMenu === 4 ? 'mm-collapse mm-show' : 'mm-collapse'}`}>
                                        <li className="mobile-menu-link">
                                            <Link href="blog-list.html">Blog List</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href="blog-grid.html">Blog Grid</Link>
                                        </li>
                                        <li className="mobile-menu-link">
                                            <Link href="blog-details.html">Blog Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item">
                                    <Link className="menu-link" href="contactus.html">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="social-wrapper-two menu mobile-menu">
                            <Link href="#">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            <Link href="#">
                                <i className="fab fa-twitter" />
                            </Link>
                            <Link href="#">
                                <i className="fab fa-instagram" />
                            </Link>
                            <Link href="#">
                                <i className="fab fa-whatsapp" />
                            </Link>
                            {/* <Link href="#"><i class="fab fa-linkedin"></i></Link> */}
                        </div>
                        <Link
                            href="#"
                            className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btnmenu"
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
                {/* inner menu area desktop End */}
            </div>


        </div>
    )
}

export default SideMenu