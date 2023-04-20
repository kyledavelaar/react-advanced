import React, { useState, useEffect } from 'react';

function renderResults(data) {
    return Object.entries(data).map(([k, v]) => {
        return (
            <div key={v}>
                <p>Key is: {k}</p>
                <p>Value is: {v}</p>
            </div>
        )
    })
}

function ApiCall(props) {
    console.log('** props', props);
    const [ results, fetchResults ] = useState({});

    useEffect(() => {
        console.log('*** ApiCall useEffect initial') //
        if (props.name === 'Mary') {
            fetchResults({ age: 22, name: 'Mary' })
        } else {
            fetchResults({});
        }
        return () => {
            console.log('ApiCall UseEffect re-render or unmount') // not called on initial render but when re-render, this get's called before the log above
        }
    }, [props.name])

    return (
        <>
            <h1>Calling Api if name is Mary</h1>
            <p>{props.name}</p>
            <p>Results</p>
            {renderResults(results)}
        </>
    )
}

export default ApiCall;