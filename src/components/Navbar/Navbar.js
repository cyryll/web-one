import { FaBars } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import {
    Nav,
    NavLogo,
    NavbarContainer,
    MobileIcon,
    NavItem,
    NavLinks,
    NavMenu,
    NavBtn,
    NavBtnLink
} from "./NavbarElements"
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({ toggle }) => {
    const [scrollNav, setscrollNav] = useState(false)

    const ChangeNav = () => {
        if (window.scrollY >= 80) {
            setscrollNav(true)
        } else {
            setscrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', ChangeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <>
            {/* Sets the properties of icons */}
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            MKash
                    </NavLogo>

                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>

                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="discover"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-60}
                                >Discover</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="services"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                >Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="signup">Sign Up</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
