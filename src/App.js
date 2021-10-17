import './App.css';
import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import EmergencyPage from './pages/EmergencyPage';
import SuitPage from './pages/SuitPage';
import Protocols from './pages/Protocols';
import ReportPage from './pages/ReportPage';
import MapPage from './pages/MapPage';

function App() {
  return (
    <div className="homepage">
      <Router>
        <Sidebar/>
        <Switch>
          <Route path='/Overview' exact component={Overview} />
          <Route path='/EmergencyPage' exact component={EmergencyPage} />
          <Route path='/SuitPage' exact component={SuitPage} />
          <Route path='/Protocols' exact component={Protocols} />
          <Route path='/ReportPage' exact component={ReportPage} />
          <Route path='/map' exact component={MapPage} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;