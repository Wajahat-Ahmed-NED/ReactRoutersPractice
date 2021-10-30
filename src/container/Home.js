import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

export default function Home() {
    const history=useHistory();

    const routeChange=()=>{
        history.push('/contact')
    }

    const sendData=()=>{
        let obj={
            name:"wajahat",
            age:19,
            institute:"Saims"
        }
        history.push('/services',obj)
    }
    return (
       <>
       <h1>Home</h1>
       <ul>
           <li>
       <Link to="/">Home</Link>

           </li>
           <li>
       <Link to="/about">About</Link>

           </li>
           <li>
       <Link to="/contact">Contact</Link>

           </li>
           <li>
       <Link to="/services">Services</Link>

           </li>
           <li>
       <Link to="/profile/123">Profile</Link>

           </li>
       </ul>
       <button onClick={routeChange}>Go to contact Page</button>
       <button onClick={()=>{
           history.push("/services")
       }}>Services Page</button>
       <button onClick={sendData}>Send Data</button>
       </>
    )
}
