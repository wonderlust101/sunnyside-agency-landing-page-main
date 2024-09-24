import './HeaderMenu.scss';
import burgerIcon from '/src/assets/images/icon-hamburger.svg';
import Button from "../../Button/Button.tsx";

type link = {
    location: string;
    href: string;
};

type headerListProps = {
    headerLinks: link[];
    onClick: React.MouseEventHandler<HTMLImageElement>;
    isOpen: boolean;
};

export default function HeaderList({headerLinks, onClick, isOpen}: headerListProps) {

    return (
        <div>
            <img src={burgerIcon} alt="" role='presentation' onClick={onClick}/>

            {isOpen && (<nav className="header-menu">
                <ul className="header-menu__links">
                    {headerLinks.map((link) => (
                        <li key={link.location}>
                            <a href={link.href} aria-label={"Go to " + link.location + " Page"}>
                                {link.location}
                            </a>
                        </li>
                    ))}

                    <li><Button className="button__primary button__primary--yellow"
                                destination="#">Contact</Button></li>
                </ul>
            </nav>)}
        </div>
    );
}
