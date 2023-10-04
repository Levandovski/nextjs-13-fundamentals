import Link from "next/link";
import './Navbar.css';

export default function NavBar() {
    return (
        <nav className="navbar">
            <Link href='/'>
                <h1>
                    Course Nextjs 13
                </h1>
            </Link>
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/store">
                        Store
                    </Link>
                </li>
                <li>
                    <Link href="/posts">
                        Posts
                    </Link>
                </li>
            </ul>
        </nav>
    )
}