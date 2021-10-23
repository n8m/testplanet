import React, { useEffect, useState, MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { Iplanet } from './Planet';

interface PlanetListProps {
    planets: Iplanet[]
}

const PlanetList = ({planets}:PlanetListProps) => {

    const history = useHistory();

    const onItemClicked = (planet:Iplanet) => {
        history.push(`/planets/${planet.id}`);
    };

    return <ul>
        {planets.map( planet => <li onDoubleClick={ (e) => onItemClicked(planet) } key={planet.id}>{planet.name}</li>)}
    </ul>
};

export default PlanetList;