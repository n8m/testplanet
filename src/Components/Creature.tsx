import {useParams} from 'react-router-dom';
import ViewLayout from "./ViewLayout";
import React from "react";

const fields = [
    "name",
    "height",
    "mass",
    "hair_color",
    "skin_color",
    "eye_color",
    "birth_year",
    "gender",
    "homeworld",
];

type CreatureField = typeof fields[number];

export interface ICreature extends Record<CreatureField, string>{}

interface creatureProps {
    creatures: ICreature[]
}

const Creature = ({creatures}: creatureProps) => {
    const {id} = useParams<{ id: string }>();
    return <ViewLayout item={creatures[+id]} fields={fields} title="Creature"/>
};

export default Creature;