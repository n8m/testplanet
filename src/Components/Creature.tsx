import {useParams} from 'react-router-dom';
import ViewLayout from "./ViewLayout";
import React from "react";

const fields = [
    "name" as const,
    "height" as const,
    "mass" as const,
    "hair_color" as const,
    "skin_color" as const,
    "eye_color" as const,
    "birth_year" as const,
    "gender" as const,
    "homeworld" as const,
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