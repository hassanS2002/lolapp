
import "./Tabs.css"
import { Button } from '@material-ui/core';

const Tabs = ({ data, setGetData }) => {

    function filterData(name) {
        let obj = {};

        if (name !== "") {
            for (const champName in data) {
                if (data[champName].tags.includes(name)) {
                    obj[champName] = data[champName];
                }
            }
        } else {
            obj = data;
        }
        setGetData(obj);
    }

    return (
        <div className="TabVert">
            <Button onClick={() => filterData("")} color="primary"><b>ALL</b></Button>

            <Button onClick={() => filterData("Assassin")} color="primary"><b>Assasins</b></Button>
            <Button onClick={() => filterData("Mage")} color="primary"><b>Mages</b></Button>
            <Button onClick={() => filterData("Fighter")} color="primary"><b>Fighters</b></Button>
            <Button onClick={() => filterData("Marksman")} color="primary"><b>Marksmans</b></Button>
            <Button onClick={() => filterData("Support")} color="primary"><b>Supports</b></Button>
            <Button onClick={() => filterData("Tank")} color="primary"><b>Tanks</b></Button>
        </div>
    )
}

export default Tabs
