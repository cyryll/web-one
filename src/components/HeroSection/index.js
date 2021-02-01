import { useState } from 'react'
import Video from '../../videos/video_2.mp4'
import { Button } from '../ButtonElement'
import {
    HeroContainer,
    // HeroBg,
    VideoBg,
    ArrowFoward,
    ArrowRight,
    HeroContent,
    HeroH1,
    HeroP, HeroBtnWrapper
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            {/* <Hero> */}
            <VideoBg
                autoPlay
                loop muted
                src={Video}
                type="video/mp4" />
            {/* </HeroBg> */}
            <HeroContent>
                <HeroH1>Easy Online Cash Transfers</HeroH1>
                <HeroP>
                    Sign Up and get an Account
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                    >
                        Get Started {
                            hover ? <ArrowFoward /> : <ArrowRight />
                        }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
