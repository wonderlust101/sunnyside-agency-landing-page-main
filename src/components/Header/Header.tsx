import logo from '/images/logo.svg';
import './Header.scss'
import Button from "../Button/Button.tsx";

type link = {
    location: string;
    href: string;
}

const headerLinks: link[] = [
    {
        'location': 'About',
        'href': "#"
    },
    {
        'location': 'Services',
        'href': "#"
    },
    {
        'location': 'Projects',
        'href': "#"
    }
]

export default function Header() {

    return (
        <header className="header grid-bleed">
            <div className="header__content">
                <img className='header__logo' src={logo} alt=""/>

                <nav className="header__nav">
                    <ul className="header__links">
                        {headerLinks.map((link) => (
                            <li>
                                <a href={link.href} aria-label={"Go to " + link.location + " Page"}>
                                    {link.location}
                                </a>
                            </li>
                        ))}
                    </ul>
                    
                    <Button className='button__primary button__primary--white' destination='#'>Contact</Button>
                </nav>
            </div>
        </header>
    )
}