import heroImageMobile from '/images/mobile/image-header.jpg';
import heroImageDesktop from '/images/desktop/image-header.jpg';
import downArrow from '/images/icon-arrow-down.svg';
import './Hero.scss'

export default function Hero() {

    return (
        <header className="hero">
            <picture className="hero__image" aria-hidden={true}>
                <source srcSet={heroImageDesktop} media={"(min-width: 48rem)"}/>
                <img src={heroImageMobile} alt=""/>
            </picture>
            
            <div className='hero__text'>
                <h1>We Are Creatives</h1>

                <img className='hero__arrow' src={downArrow} alt="" role='presentation'/>
            </div>
        </header>
    )
}