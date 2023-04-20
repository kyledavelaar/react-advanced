// import React, { Profiler } from 'react';
import React from 'react';
import './App.css';
// import PortalModalContainer from './portals/PortalModalContainer';
// import { HOC } from './hoc/HOC';
// import MyWithState from './hooks/useState';
// import MyUseEffect from './hooks/useEffect';
// import UsingReusableHook from './hooks/useReusableHook1';
// import MyUseReducer from './hooks/useReducer';
// import MyUseCallback from './hooks/useCallback';
// import ModalWithCustomHook from './hooks/customHookModalUsed';
// import CustomReducerUsed from './hooks/customUseReducerUsed';
import Container from './hooks2/Container';


function App() {

  return (
    <div className="App">
      <React.StrictMode>

        <Container />
        {/* <CustomReducerUsed />
        <ModalWithCustomHook />
        <MyUseCallback a={1} b={10} />
        <MyUseReducer />
        <UsingReusableHook age={12}/>
        <MyWithState />
        <MyUseEffect />
        <HOC />
        <Profiler id="portal" onRender={onRender}>
        <div id="app-root">
        <PortalModalContainer />
        </div>
        <div id="modal-root">Root</div>
      </Profiler> */}
    </React.StrictMode>
    </div>
  );
}

// function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) {
//   console.log(id)
//   console.log(phase)
//   console.log(actualDuration)
//   console.log(baseDuration)
//   console.log(startTime)
//   console.log(commitTime)
//   console.log(interactions)
// }

export default App;
