import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const Planets = () => {

    const fetchPlanets = async () => {
        const res = await fetch('http://swapi.dev/api/planets/');
        return res.json();
    }

    const { isLoading, isError, data } = useQuery('planets', fetchPlanets);
    
    if (isLoading) {
        return 'Loading...';
    }

    if (isError) {
        return 'Error, something went wrong';
    }

    if (!data) {
        return null;
    }


    return (
        <>
            <h2>Planet Information</h2>
            <div>
                { data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
            </div>

        </>
    );
}
 
export default Planets;