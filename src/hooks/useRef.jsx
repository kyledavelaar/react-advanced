import { useRef } from 'react';
// does not trigger a render
// good for state that does not impact what is shown on screen


const intervalRef = useRef(0);

const currentInterval = intervalRef.current
console.log('*** currentInterval', currentInterval);

intervalRef.current = 1000;
console.log('*** currentInterval changed', currentInterval);



