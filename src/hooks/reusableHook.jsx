import { useState, useEffect } from 'react';

function useStatus(age) {
    const [ status, setStatus ] = useState(null);

    useEffect(() => {
        const update = age > 18 ? 'allowed': 'not allowed';
        setStatus(update);
    }, [age])

    return status;
}

export default useStatus;