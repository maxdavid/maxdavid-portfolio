import React from 'react';
import { Switch, Route } from 'react-router';
import { Navbar, Footer } from './components';
import { Home } from './views';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Footer />
      <Switch>
        <Route exact path={'/'} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
