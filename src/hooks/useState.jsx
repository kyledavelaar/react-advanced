import React, { useState } from 'react';

function MyWithState(props) {
    const [ clickCount, setCount ] = useState(0);

    const onButtonClick = () => setCount(clickCount + 1);
    return (
        <button onClick={onButtonClick}>
            useState button clicked {clickCount} times
        </button>
    )
}

export default MyWithState;