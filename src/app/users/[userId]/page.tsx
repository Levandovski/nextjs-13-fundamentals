'use client';

import { useParams } from "next/navigation";

export default function UserPage(){
    const params = useParams();
    console.log(params)
    return (
        <>
            <h1>User Page</h1>
            <button onClick={() => console.log('Works')}>
                Click
            </button>
        </>
    )
}