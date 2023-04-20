import React, { useState, useEffect } from 'react';

function MyUseEffect(props) {
    const [ name, setName ] = useState('');

    // runs after every render, including the first render
    // similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        console.log('USE EFFECT RENDER-> stuff i want done before every render')
        // return a callback inside useEffect to clean up on unMount and before any re-render
        return () => {
            console.log('USE EFFECT CLEAN UP -> re-render and unMount')
        }
    })


    useEffect(() => {
        console.log('USE EFFECT -> can have multiple useEffects in the same component so props can be organized.  Note this is different than lifecycle methods')

        if (name === '') {
            console.log('USE EFFECT -> CANNOT PUT HOOKS INSIDE CONDITIONALS BUT CAN PUT CONDITIONALS INSIDE HOOKS')
            setName('Mary');
        }
        console.log('name', name);
        // pass props going to use inside useEffect otherwise could lead to infinite renders
    }, [name])

    return (
        <>
            <h1>Use Effect</h1>
            <p>this should say the name of a woman... {name}</p>
        </>
    )
}


export default MyUseEffect;