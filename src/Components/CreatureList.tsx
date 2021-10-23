import React, { useEffect, useState, MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { Icreature } from './Creature';

interface CreatureListProps {
    creatures: Icreature[]
}

const CreatureList = ({creatures}:CreatureListProps) => {

    const history = useHistory();

    const onItemClicked = (creature:Icreature) => {
        history.push(`/creatures/${creature.id}`);
    };

    return <ul>
        {creatures.map( creature => <li onDoubleClick={ (e) => onItemClicked(creature) } key={creature.id}>{creature.name}</li>)}
    </ul>
};

export default CreatureList;