import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar/Navbar';
import SideBar from '../components/SideBar';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} toggle = {toggle}/>
            <Navbar toggle = {toggle}/>
            <HeroSection/>
        </>
    )
}

export default Home
