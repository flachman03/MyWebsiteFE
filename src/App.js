import React from 'react';
import Homepage from './Components/Homepage/Homepage'
import Navigation from './Components/Navigation/Navigation'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <main className='app'>
      <Navigation />
      <Switch>
        <Route exact patch='/' render={() => (
        <Homepage />
      )}/>
      </Switch>
    </main>
  );
}

export default App;
