export interface IEntity {
    id: number
    menuName: string
    route: string
    dataUrl: string
    fields: string[]
}

const Settings = [
    {
        id: "0",
        menuName: "Planets",
        route: "planets",
        dataUrl: "https://swapi.dev/api/planets",
        fields: []
    },
    {
        id: "1",
        menuName: "Creatures",
        route: "creatures",
        dataUrl: "https://swapi.dev/api/people",
        fields: []
    }
];

export default Settings;