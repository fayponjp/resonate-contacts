import { FaLessThan, FaEllipsisV } from 'react-icons/fa'

export function Header() {
    return (
        <header className="appHeader">
            Contacts
        </header>
    )
}

export function ContactHeader() {
    return (
        <header className="contactHeader">
            <div className="backButton">
                <FaLessThan/>
            </div>
            Contacts
            <div className="menuButton">
                <FaEllipsisV />
            </div>
        </header>
    )
}