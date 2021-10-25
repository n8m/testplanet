import React, { useEffect, useState, MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { ICreature } from './Creature';

interface CreatureListProps {
    creatures: ICreature[]
}

const CreatureList = ({creatures}:CreatureListProps) => {

    const history = useHistory();

    const onItemClicked = (i:number) => {
        history.push(`/creatures/${i}`);
    };

    return <ul>
        {creatures.map( (creature, i) => <li onDoubleClick={ (e) => onItemClicked(i) } key={i}>{creature.name}</li>)}
    </ul>
};

export default CreatureList;