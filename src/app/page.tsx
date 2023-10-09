'use client';

import Users from "@/components/Users";

export default function HomePage() {
    return (
        <>
            <h1>Hello World</h1>
            <Users />
            <button onClick={() => alert('hello!')}>Click</button>
        </>
    )
}