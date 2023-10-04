
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
    console.log(userId)
    return (
        <div key={id}>
            <Link href={`/posts/${id}`}>
                <h3>{id}. {title}</h3>
            </Link>
            <p>{body}</p>
            <button onClick={() => console.log(title)}>Click</button>
        </div>
    )
}