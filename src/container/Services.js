import React from 'react'
import { useHistory } from 'react-router'

export default function Services() {
    const history=useHistory()
    const peramData=history.location.state ? history.location.state : {};
    return (
       <>
       <h1> Peram Name : {peramData.name ?peramData.name: "Data Not Found" } </h1>
       <h3>Peram Age : {peramData.age ?peramData.age: "Data Not Found" }</h3>
       <h3>Peram Institute : {peramData.institute ?peramData.institute: "Data Not Found" }</h3>
        
       </>
    )
}
