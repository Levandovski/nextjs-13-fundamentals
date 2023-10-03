
'use client';

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
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={() => console.log(title)}>Click</button>
        </div>
    )
}