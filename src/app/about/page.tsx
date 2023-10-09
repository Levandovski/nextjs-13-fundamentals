'use client';

import { useRouter } from 'next/navigation';

// export const metadata = {
//     title: 'About'
// }

export default function AboutPage() {
    const router = useRouter();

    return (
        <section>
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit,
                amet consectetur adipisicing elit.
                Eum, possimus? Voluptatum,
                iure ea labore molestias repellat quaerat
                veniam numquam nostrum voluptate omnis,
                ipsa est saepe exercitationem cum eius culpa nisi.
            </p>
            <button
                className="bg-sky-400 rounded-md p-2"
                onClick={() => {
                    //Query to server
                    router.push('/')
                }}
            >Click</button>
        </section>
    )
}