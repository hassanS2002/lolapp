import React from 'react';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Moreinfo from "./Moreinfo"
import Tabs from "./Tabs"
import CardComponent from "./CardComponent"
import "./App.css"


const HomePage = ({ data }) => {

    const [getData, setGetData] = useState(data);

    return (
        <>
            <Tabs data={data} setGetData={setGetData} />
            <div className="imageContainer">
                <CardComponent getData={getData} />
            </div>

        </>
    );
}

export default HomePage
