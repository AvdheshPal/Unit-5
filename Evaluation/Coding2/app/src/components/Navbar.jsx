import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div style={{display: 'flex',justifyContent: 'space-evenly', fontSize: '30px'}}>
            <Link to='/home'>Home</Link>
            <Link to='/dashboard' >Dashboard</Link>
            <Link to='/login' >login</Link>
        </div>
    )
}
