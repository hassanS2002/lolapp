import React from 'react';
import { useState } from 'react';
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
