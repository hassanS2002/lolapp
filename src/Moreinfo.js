import Axios from "axios"
import React from 'react'
import "./Moreinfo.css"
import { useState, useEffect } from "react"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Moreinfo = ({ data }) => {
    console.log(data)

    const [loading, setLoading] = useState(false);
    const [character, setcharacter] = useState("");

    const url = window.location.href.slice(window.location.href.lastIndexOf('/') + 1, window.location.href.length);
    const urlSpellPath = "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/spell/";

    const getChamp = () => {
        setLoading(true);
        Axios.get("https://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion/" + url + ".json").then((response) => {
            setcharacter(response.data.data[url]);
            setLoading(false);
        });
    };

    useEffect(() => {
        getChamp();
    }, []);

    return (
        <>
            {loading ? (
                <div>...Data Loading.....</div>
            ) :
                <div className="NiChamp">
                    <h2 className="Title">{character.id} : {character.title}</h2>
                    <hr className="lineg" style={{ color: 'black', width: "100%" }} />
                    <img className="mainimg" width="500" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + character.id + "_0.jpg"} />

                    {!character.spells ? <p>loading...</p> :

                        <div className="container">
                            <Card disabled className="card">
                                <h2>Q</h2>
                                <CardActionArea>
                                    <img className="image" width="80" src={urlSpellPath + character.spells[0].id + ".png"}></img>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {character.spells[0].name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {character.spells[0].description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                            <Card className="card">
                                <h2>W</h2>
                                <CardActionArea>
                                    <img className="image" width="80" src={urlSpellPath + character.spells[1].id + ".png"}></img>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {character.spells[1].name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {character.spells[1].description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>


                            <Card className="card">
                                <h2>E</h2>
                                <CardActionArea>
                                    <img className="image" width="80" src={urlSpellPath + character.spells[2].id + ".png"}></img>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {character.spells[2].name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {character.spells[2].description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>


                            <Card className="card">
                                <h2>R</h2>
                                <CardActionArea>
                                    <img className="image" width="80" src={urlSpellPath + character.spells[3].id + ".png"}></img>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {character.spells[3].name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {character.spells[3].description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </div>

                    }

                </div>
            }
        </>
    );
}

export default Moreinfo
