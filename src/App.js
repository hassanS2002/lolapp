import Axios from "axios"
import { useState, useEffect } from "react"
import "./App.css"
import Header from "./Header"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Moreinfo from "./Moreinfo"
import HomePage from "./HomePage";

function App() {

  const [champ, setChamp] = useState("");
  const [loading, setLoading] = useState(false);
  const [FilteredData, setFilteredData] = useState(champ)


  const getChamp = () => {
    setLoading(true);
    Axios.get("https://ddragon.leagueoflegends.com/cdn/9.18.1/data/en_US/champion.json").then((response) => {
      setChamp(response.data.data);
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
      ) : (
        <Router>
          <div className="App">
            <Header data={champ} />
            <Switch>
              <Route exact path="/lolapp" component={() => <HomePage data={champ} />} />
              <Route path="/Moreinfo/:id" component={() => <Moreinfo data={champ} />} />
            </Switch>
          </div>
        </Router>

      )
      }
    </>
  );
}



export default App;
