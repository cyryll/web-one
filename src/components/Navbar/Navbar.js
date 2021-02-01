import {FaBars} from 'react-icons/fa'
import {useEffect, useState} from 'react';
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

const Navbar = ({toggle}) => {
    const [scrollNav, setscrollNav] = useState(false)

    const ChangeNav = () => {
        if(window.scrollY >= 80) {
            setscrollNav(true)
        }else{
            setscrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', ChangeNav)
    }, [])
    return (
        <>
        {/* Sets the properties of icons */}
        <IconContext.Provider value = {{color: '#fff' }}>
            <Nav scrollNav=  {scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/">
                        MKash
                    </NavLogo>

                    <MobileIcon onClick= {toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
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
