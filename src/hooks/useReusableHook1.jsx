import React from 'react';
import useStatus from './reusableHook';

function UsingReusableHook({ age }) {
    const defaultAge = 20;
    const status = useStatus(age);
    const defaultStatus = useStatus(defaultAge);
    return (
        <div>
            <h3>Reusable Custom Hooks</h3>
            <p>Because you are {age}, you are {status}</p>
            <p>If you were {defaultAge} then you would be {defaultStatus}</p>
        </div>
    )
}

export default UsingReusableHook;