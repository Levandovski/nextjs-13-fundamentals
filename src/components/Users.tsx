import { useState } from "react"


export default function Users() {
    const [users, ] = useState(['Joao', 'Maria', 'Pedro']);
    return (
        <>
            <p>Users</p>
            {users.map((e, key) => {
                return (
                    <p key={key}>{e}</p>
                )
            })}
        </>

    )
}