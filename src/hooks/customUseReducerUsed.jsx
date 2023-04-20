import React from 'react';
import useReducerCustom from './customUseReducer';

function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [...state, action.text];
        default:
            throw new Error('bad type given');
    }
}

function CustomReducerUsed(props) {
    const [ state, dispatch ] = useReducerCustom(reducer, []);

    return (
        <div>
            <button onClick={() => dispatch({ action: 'ADD', text: 'something'})}>Add random todo</button>
            <ol>
                {state.map((todo, i) => {
                    return (
                        <li key={i}>{todo}</li>
                    )
                })}
            </ol>
        </div>
    )

}

export default CustomReducerUsed;