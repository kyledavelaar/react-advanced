import React, { useCallback, useState } from 'react';


function NameForm ({ onNameSubmit }) {
    const [ name, setName ] = useState('default value');

    const onSetName = useCallback(e => {
        console.log('* e', e.target.value);
        setName(e.target.value);
    }, [setName])

    const submitName = useCallback(() => {
        onNameSubmit(name);
    }, [name, onNameSubmit])

    return (
        <div>
            <input type="text" onChange={onSetName} />
            <button onClick={submitName}>Submit Name</button>
            <p>Name typed is {name}</p>
        </div>
    )
}

export default NameForm;

