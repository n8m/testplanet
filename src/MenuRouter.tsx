import {Route, Switch, BrowserRouter as Router, Link} from 'react-router-dom';
import ItemList from "./Components/ItemList";
import Item from "./Components/Item";
import React, {useEffect, useState} from "react";
import setIds from "./Utils/SetIds";
import Settings from "./Settings/Settings";
import { IEntity } from "./Settings/Settings";

export interface Icreature {
    name: string
    id: number
}

const MenuRouter = () => {
    
    const [creatures, setCreatures] = useState<Icreature[]>([]);

    const [data, setData] = useState([[],[]]);

    useEffect(() => {

        const getData = async() => {
            const results = await fetchUrls();
            setData(results.map(item => item.results));
            console.log(data);
        };

        const fetchUrls = async() => {
            const requestUrls = Settings.map(entity => entity.dataUrl);
            try {
                const data = await Promise.all(
                    requestUrls.map(
                        url =>
                            fetch(url).then(
                                (response) => {return response.json()}
                            )));
                return data;
            } catch (error) {
                console.log(error)
                throw (error)
            }
        };

        getData();

        // const getCreatures = async() => {
        //
        //     const requestUrls = Settings.map(entity => entity.dataUrl);
        //
        //
        //     async function fetchMoviesAndCategories() {
        //         const [moviesResponse, categoriesResponse] = await Promise.all([
        //             fetch('/movies'),
        //             fetch('/categories')
        //         ]);
        //         const movies = await moviesResponse.json();
        //         const categories = await categoriesResponse.json();
        //         return [movies, categories];
        //     }
        //     fetchMoviesAndCategories().then(([movies, categories]) => {
        //         movies;     // fetched movies
        //         categories; // fetched categories
        //     }).catch(error => {
        //         // /movies or /categories request failed
        //     });
        //
        //
        //
        //
        //     // const responses = await requestUrls.map( (url) => fetch(url));
        //
        //     // console.log(responses);
        //
        //
        //     // const dt = await responses.map( (response:any) => response.json());
        //
        //
        //     const response = await fetch('https://swapi.dev/api/people');
        //     const people = await response.json();
        //     const peopleWithIds = setIds(people.results);
        //
        //     setCreatures(people.results);
        // };

        // getCreatures();

    },[]);

    return <Router>

        {Settings.map(entity => <Link id={entity.id} to={`/${entity.route}`}>{entity.menuName}</Link> )}

        <Switch>

            {Settings.map( (entity, i) => <div id={entity.id}>
                <Route path={`/${entity.route}/:id`} render={() => <Item creatures={data[i]}   /> }></Route>
                <Route path={`/${entity.route}`} render={() => <ItemList creatures={data[i]} /> }></Route>
            </div>
            )}

        </Switch>
    </Router>
};

export default MenuRouter;