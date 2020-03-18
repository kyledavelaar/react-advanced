import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

import Signin from './Signin';
import Collapsable from './Collapsable';
import Blog from './Blog';
import Table from './Table';


function App() {
  return (
    <div className="App">
      {/* <CardActions>
        <Button
          // variant="contained"
          // color="primary"
          onClick={() => {console.log('hi')}}
        >
          Login
        </Button>
      </CardActions>
      <Collapsable></Collapsable>
      <Signin></Signin> */}
      <Blog></Blog>
      <Table></Table>
    </div>
  );
}

export default App;
