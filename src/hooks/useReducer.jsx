import React, { useReducer } from 'react';


// exactly like useState
// but useReducer is useful for more complex state updates
// and state with deeply nested objects
// also useful if next state depends on what was the previous state
// also allows you to pass dispatch down to child components
// dispatch (i.e. your reducer will never change so doesn't create unnecessary re-renders)
// so don't pass down const myProp = { dispatch, state } to children components because components only using the dispatch method will also re-render when the state changes even if they aren't using that state

function reducer(state, action) {
    const { count } = state;
    switch (action.type){
        case 'INCREASE':
            return { ...state, count: count + 1};
        case 'DECREASE':
            return { ...state, count: count - 1};
        default:
            throw new Error('must be either increase or decrease');
    }
}

const onButtonClick = (dispatch, type) => () => {
    dispatch({ type });
}

function MyUseReducer(props) {
    const initialState = { count: 0 };
    const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
        <div>
            <h4>MyUseReducer has click count {state.count}</h4>
            <button onClick={onButtonClick(dispatch, 'INCREASE')}>INCREASE</button>
            <button onClick={onButtonClick(dispatch, 'DECREASE')}>DECREASE</button>
        </div>
    )
}

export default MyUseReducer;