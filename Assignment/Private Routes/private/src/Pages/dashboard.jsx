import React from 'react'
import {DashCom} from '../Components/DashCom'
import {Link} from 'react-router-dom'
export const Dashboard = () => {
    return (
        <div>
            <h1>This is my dashboard</h1>
            <Link to={"/dashboard/settings"} >Setting</Link>
        </div>
    )
}
