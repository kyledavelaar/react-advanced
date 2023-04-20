import { useState } from 'react';

function useReducerCustom(reducer, initialState) {
    const [ state, setState ] = useState(initialState);

    function dispatch(update) {
        const newState = reducer(state, update);
        setState(newState);
    }

    return [ state, dispatch ];
}

export default useReducerCustom;