import React, { useCallback, useMemo } from 'react';

function MyChild({ memoizedCallback, memoizedValue }) {
    return (
        <div>
            <button onClick={() => memoizedCallback}>memoized value: {memoizedValue}</button>
        </div>
    )
}

function MyUseCallback({ a, b }) {
    const memoizedCallback = useCallback(() => {
        console.log('useCallback only gets called when a or b have changed');
        return a * b;
    }, [ a, b ]);

    const memoizedValue = useMemo(() => {
        console.log('useMemo only recomputes when a or b have changed');
        return a + b;
    }, [ a, b ]);

    return (
        <div>
            <h3>MyUseCallback</h3>
            <MyChild memoizedCallback={memoizedCallback} memoizedValue={memoizedValue} />
        </div>
    )
}

export default MyUseCallback;