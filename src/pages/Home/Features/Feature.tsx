import eggImageMobile from '/images/mobile/image-transform.jpg';
import eggImageDesktop from '/images/desktop/image-transform.jpg';
import cupImageMobile from '/images/mobile/image-stand-out.jpg';
import cupImageDesktop from '/images/desktop/image-stand-out.jpg';
import cherryImageMobile from '/images/mobile/image-graphic-design.jpg';
import cherryImageDesktop from '/images/desktop/image-graphic-design.jpg';
import orangeImageMobile from '/images/mobile/image-photography.jpg';
import orangeImageDesktop from '/images/desktop/image-photography.jpg';

import './Feature.scss'
import Button from "../../../components/Button/Button.tsx";

export default function Feature() {
    return (
        <section className="feature">
            <article className="feature__section--wide">
                <picture className="feature__image" aria-hidden={true}>
                    <source srcSet={eggImageDesktop} media={"(min-width: 48rem)"}/>
                    <img src={eggImageMobile} alt=""/>
                </picture>

                <div className="feature__section-text">
                    <h2>Transform your brand</h2>
                    <p className='feature__section-text--body'>We are a full-service creative agency specializing in helping brands grow fast. Engage your
                        clients through compelling visuals that do most of the marketing for you.</p>
                    <Button className='button__secondary button__secondary--yellow' destination='#'>Learn More</Button>
                </div>
            </article>

            <article className="feature__section--wide">
                <picture className="feature__image" aria-hidden={true}>
                    <source srcSet={cupImageDesktop} media={"(min-width: 48rem)"}/>
                    <img src={cupImageMobile} alt=""/>
                </picture>

                <div className="feature__section-text">
                    <h2>Stand out to the right audience</h2>
                    <p className='feature__section-text--body'>Using a collaborative formula of designers, researchers, photographers, videographers, and
                        copywriters, we’ll build and extend your brand in digital places. </p>
                    <Button className='button__secondary button__secondary--red' destination='#'>Learn More</Button>
                </div>
            </article>

            <div className="feature__two-column">
                <article className="feature__section">
                    <picture className="feature__image" aria-hidden={true}>
                        <source srcSet={cherryImageDesktop} media={"(min-width: 48rem)"}/>
                        <img src={cherryImageMobile} alt=""/>
                    </picture>

                    <div className="feature__section-text-overlay feature__section-text-overlay--green">
                        <h2 className='feature__section-text-overlay--header'>Graphic Design</h2>
                        <p className='feature__section-text-overlay--body'>Great design makes you memorable. We deliver artwork that underscores your brand message and
                            captures potential clients’ attention.</p>
                    </div>
                </article>

                <article className="feature__section">
                    <picture className="feature__image" aria-hidden={true}>
                        <source srcSet={orangeImageDesktop} media={"(min-width: 48rem)"}/>
                        <img src={orangeImageMobile} alt=""/>
                    </picture>
                    
                    <div className="feature__section-text-overlay feature__section-text-overlay--blue">
                        <h2 className='feature__section-text-overlay--header'>Photography</h2>
                        <p className='feature__section-text-overlay--body'>Increase your credibility by getting the most stunning, high-quality photos that improve your
                            business image.</p>
                    </div>
                </article>
            </div>
        </section>
    )
}