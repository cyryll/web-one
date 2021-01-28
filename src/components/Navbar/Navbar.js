import {FaBars} from 'react-icons/fa'
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

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        MKash
                    </NavLogo>

                    <MobileIcon>
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

        </>
    )
}

export default Navbar
