import React, { Profiler } from 'react';
import './App.css';
import PortalModalContainer from './portals/PortalModalContainer';
import HocExample from './hoc/HocExample';



function App() {

  return (
    <div className="App">
      <HocExample />
      <Profiler id="portal" onRender={onRender}>
        <div id="app-root">
          <PortalModalContainer />
        </div>
        <div id="modal-root">Root</div>
      </Profiler>
    </div>
  );
}

function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) {
  console.log(id)
  console.log(phase)
  console.log(actualDuration)
  console.log(baseDuration)
  console.log(startTime)
  console.log(commitTime)
  console.log(interactions)
}

export default App;
