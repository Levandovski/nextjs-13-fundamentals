import Link from "next/link"

export const metadata = {
    title: 'Store'
}

export default function StoreLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <nav>
                <h3>Section Store</h3>

                <ul>
                    <li>
                        <Link href='/store/categories'>
                            Categories
                        </Link>
                    </li>
                    <li>
                        <Link href='/store/categories/computer'>
                            Computers
                        </Link>
                    </li>
                </ul>
            </nav>
            {children}
        </>
    )
}
