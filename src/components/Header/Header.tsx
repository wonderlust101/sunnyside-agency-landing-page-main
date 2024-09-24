import {useState} from "react";

import logo from '/images/logo.svg';
import './Header.scss'
import useWindowDimensions from "../../hooks/useWindowDimensions.tsx";
import HeaderBar from "./HeaderBar/HeaderBar.tsx";
import HeaderMenu from "./HeaderMenu/HeaderMenu.tsx";

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
    const [isOpen, setIsOpen] = useState(false);
    const {width} = useWindowDimensions();

    function handleToggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <header className="header grid-bleed">
            <div className="header__content">
                <img className="header__logo" src={logo} alt=""/>

                {width > 1024 ? <HeaderBar headerLinks={headerLinks}/> :
                    <HeaderMenu headerLinks={headerLinks} isOpen={isOpen} onClick={handleToggleMenu}/>}

            </div>
        </header>
    )
}