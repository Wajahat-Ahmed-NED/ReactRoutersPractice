import React from 'react'
import { useParams } from 'react-router'

export default function Profile() {
    // useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
    const perams=useParams();
    console.log(perams)
    return (
        <>
        <h1>Ye profile ha</h1>
        <h1>{perams.id}</h1>
        </>
    )
}
