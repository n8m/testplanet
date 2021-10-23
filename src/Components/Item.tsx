import { useParams } from 'react-router-dom';

export interface Icreature {
    name: string
    id: number
    [x: string]: any

}

interface creatureProps {
    creatures: Icreature[]
}

const Item = ({ creatures }:creatureProps ) => {

    //TODO remove any
    const { id } = useParams<{ id: any }>();

    const fields = [
        "name",
        "height",
        "mass",
        "hair_color",
        "skin_color",
        "eye_color",
        "birth_year",
        "gender",
        "homeworld"
    ];

    return <div>
        <h1>Creature</h1>

        <ul>
            {creatures.length && fields.map( field => <li key={field}>{field} - {creatures[id][field]}</li> )}
        </ul>

    </div>
};

export default Item;