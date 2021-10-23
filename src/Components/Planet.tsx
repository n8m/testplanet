import { useParams } from 'react-router-dom';

export interface Iplanet {
    name: string
    id: number
    [x: string]: any
}

interface planetProps {
    planets: Iplanet[]
}

const Planet = ({ planets }:planetProps ) => {

    //TODO remove any
    const { id } = useParams<{ id: any }>();

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

    return <div>
        <h1>Planet</h1>

        <ul>
            {planets.length && fields.map( field => <li key={field}>{field} - {planets[id][field]}</li> )}
        </ul>
    </div>
};

export default Planet;