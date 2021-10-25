import React from "react";

interface Props<T extends {[key:string]:string} > {
    item: T
    fields: Array<keyof T>
    title: string
}

function ViewLayout<T extends {[key:string]:string}>({item, fields, title}: Props<T>) {

    return <div>
        <h1>{title}</h1>
        <ul>
            {fields.map( (field, i) => <li key={i}>{field} - {item[field]}</li>)}
        </ul>
    </div>
};

export default ViewLayout;