import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = ({ data }) => {
    return (
        <div className="primary">
            <h1 className="Name" > <Link to="/lolapp">Leauge of Legends Champions </Link> </h1>
        </div>
    )
}

export default Header
