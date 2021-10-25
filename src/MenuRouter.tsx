import {Route, Switch, BrowserRouter as Router, Link} from 'react-router-dom';
import CreatureList from "./Components/CreatureList";
import Creature from "./Components/Creature";
import PlanetList from "./Components/PlanetList";
import Planet from "./Components/Planet";
import React, {useEffect, useState} from "react";
import { ICreature } from "./Components/Creature";
import { IPlanet } from "./Components/Planet";



const MenuRouter = () => {
    
    const [creatures, setCreatures] = useState<ICreature[]>([]);
    const [planets, setPlanets] = useState<IPlanet[]>([]);

    useEffect(() => {

        const getCreatures = async() => {

            const response = await fetch('https://swapi.dev/api/people');
            const people = await response.json();
            setCreatures(people.results);
        };
        getCreatures();

        const getPlanets = async() => {

            const response = await fetch('https://swapi.dev/api/planets');
            const result = await response.json();
            setPlanets(result.results);
        };

        getPlanets();

    },[]);

    return <Router>

        <Link to='/creatures'>Creatures</Link>
        <Link to='/planets'>Planets</Link>

        <Switch>
            <Route path='/creatures/:id' render={() => <Creature creatures={creatures}   /> }></Route>
            <Route path='/creatures' render={() => <CreatureList creatures={creatures} /> }></Route>
            <Route path='/planets/:id' render={() => <Planet planets={planets}  /> }></Route>
            <Route path='/planets' render={() => <PlanetList planets={planets}  /> }></Route>
        </Switch>
    </Router>
};

export default MenuRouter;