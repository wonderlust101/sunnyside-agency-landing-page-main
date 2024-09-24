import './HeaderBar.scss'
import Button from "../../Button/Button.tsx";

type link = {
    location: string;
    href: string;
}

type headerMenuProps = {
    headerLinks: link[];
}

export default function HeaderBar({headerLinks}: headerMenuProps) {

    return (
        <nav className="header-bar__nav">
            <ul className="header-bar__links">
                {headerLinks.map((link) => (
                    <li>
                        <a  href={link.href} aria-label={"Go to " + link.location + " Page"}>
                            {link.location}
                        </a>
                    </li>
                ))}
            </ul>

            <Button className="button__primary button__primary--white" destination="#">Contact</Button>
        </nav>
    )
}