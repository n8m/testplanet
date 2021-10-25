import React, { useEffect, useState, MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { IPlanet } from './Planet';

interface PlanetListProps {
    planets: IPlanet[]
}

const PlanetList = ({planets}:PlanetListProps) => {

    const history = useHistory();

    const onItemClicked = (i:number) => {
        history.push(`/planets/${i}`);
    };

    return <ul>
        {planets.map( (planet,i) => <li onDoubleClick={ (e) => onItemClicked(i) } key={i}>{planet.name}</li>)}
    </ul>
};

export default PlanetList;