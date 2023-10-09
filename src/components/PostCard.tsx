
'use client';

import Link from "next/link";

interface IPost {
    userId?: number,
    id: number,
    title: string,
    body: string
}

export default function PostCard({ userId, id, title, body }: IPost) {
    //RCC   
    return (
        <div key={id} className="bg-gray-950 p-10">
            <Link href={`/posts/${id}`}>
                <h3 className="text-xl font-bold mb-4">{id}. {title}</h3>
            </Link>
            <p className="text-slate-300">{body}</p>
            <button onClick={() => console.log(title)}>Click</button>
        </div>
    )
}