import React from 'react';
import { Button } from '@material-ui/core';
import "./Card.css"
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Moreinfo from "./Moreinfo"


const CardComponent = ({ getData }) => {
    // console.log(data)

    return (
        <>
            {!getData ? (<p>loading</p>) : (Object.keys(getData).map(key => {
                return <div className="Each">
                    <h3 className="ChampN" >{key}</h3>
                    <img src={"http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/" + getData[key].image.full} />
                    <Link to={`/MoreInfo/${getData[key].id}`}>
                        <Button className="infobutt" variant="contained" color="primary"><b>More Info</b></Button>
                    </Link>
                </div>
            }))}

        </>
    );
}

export default CardComponent
