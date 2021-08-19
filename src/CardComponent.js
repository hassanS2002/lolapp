import React from 'react';
import { Button } from '@material-ui/core';
import "./Card.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const CardComponent = ({ getData }) => {
    return (
        <>
            {!getData ? (<p>loading</p>) : (Object.keys(getData).map(key => {
                return <div className="Each">
                    <h3 className="ChampN" >{key}</h3>
                    <img className="imageb" src={"https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/" + getData[key].image.full} />
                    <Link to={`/MoreInfo/${getData[key].id}`}>
                        <Button className="infobutt" variant="contained" color="primary"><b>More Info</b></Button>
                    </Link>
                </div>
            }))}

        </>
    );
}

export default CardComponent
