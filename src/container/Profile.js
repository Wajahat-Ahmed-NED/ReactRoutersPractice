import React from 'react'
import { useParams } from 'react-router'

export default function Profile() {
    const perams=useParams();
    console.log(perams)
    return (
        <>
        <h1>Ye profile ha</h1>
        <h1>{perams.id}</h1>
        </>
    )
}
