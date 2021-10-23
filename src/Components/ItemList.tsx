import React, { useEffect, useState, MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { Icreature } from './Item';

interface CreatureListProps {
    creatures: Icreature[]
}

const ItemList = ({creatures}:CreatureListProps) => {

    console.log('listPage');

    const history = useHistory();

    const onItemClicked = (creature:Icreature) => {
        history.push(`/creatures/${creature.id}`);
    };

    return <ul>
        {creatures.map( creature => <li onDoubleClick={ (e) => onItemClicked(creature) } key={creature.id}>{creature.name}</li>)}
    </ul>
};

export default ItemList;