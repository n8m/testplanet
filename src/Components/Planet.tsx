import { useParams } from 'react-router-dom';
import ViewLayout from "./ViewLayout";
import React from "react";

const fields = [
    "name",
    "rotation_period",
    "orbital_period",
    "diameter",
    "climate",
    "gravity",
    "terrain",
    "surface_water",
    "population"
];

type PlanetField = typeof fields[number];

export interface IPlanet extends Record<PlanetField, string>{}

interface planetProps {
    planets: IPlanet[]
}

const Planet = ({ planets }:planetProps ) => {
    const {id} = useParams<{ id: string }>();
    return <ViewLayout item={planets[+id]} fields={fields} title="Planets"/>
};

export default Planet;