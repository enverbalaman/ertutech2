import React from 'react'
import { Link } from 'react-scroll';
function Nav() {
    return (
        <div>
            <nav className="nav-main mainmenu-nav d-none d-xl-block">
                <ul className="mainmenu">
                    <li  >
                        <Link className="nav-item" to="banner"
                            spy={true}
                            smooth={true}
                            offset={-160}
                            duration={1000} >
                            Anasayfa
                        </Link>
                    </li>
                    <li >
                        <Link className="nav-item" activeClass="active"
                            to="service"
                            spy={true}
                            smooth={true}
                            offset={-160}
                            duration={1000}>
                            Hizmetler
                        </Link>
                    </li>

                    <li >
                        <Link className="nav-item" activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-160}
                            duration={1000}>
                            Hakkımızda
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-item" activeClass="active"
                            to='contact'
                            spy={true}
                            smooth={true}
                            offset={-160}
                            duration={1000}>
                            İletişim
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav