import Link from "next/link"
export default function NavLinks() {
    return (
        <div>
            <ul>
                <li>
                    <Link href="#about">About</Link>
                </li>
                <li>
                    <Link href="#experience">Experience</Link>
                </li>
                <li>
                    <Link href="#work">Work</Link>
                </li>
                <li>
                    <Link href="#contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}