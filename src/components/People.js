import React from 'react';
import { useQuery } from 'react-query';
import Person from './Person';

const People = () => {

    const fetchPeople = async () => {
        const res = await fetch('http://swapi.dev/api/people/');
        return res.json();
    }

    const { isLoading, isError, data } = useQuery('People', fetchPeople);
    
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
            <h2>People Information</h2>

            <div>
                { data.results.map(person => <Person key={person.name} person={person} />)}
            </div>

        </>
    );
}
 
export default People;