import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import EmergencyPage from './pages/EmergencyPage';
import Protocols from './pages/Protocols';


function App() {
  return (
    <div>
       <Router>
        <Sidebar />
          <Switch>
            <Route path='/Overview' exact component={Overview} />
            <Route path='/EmergencyPage' exact component={EmergencyPage} />
            <Route path='/Protocols' exact component={Protocols} />
            <Route path='/reports/reports2' exact component={ReportsTwo} />
            <Route path='/reports/reports3' exact component={ReportsThree} />
            <Route path='/team' exact component={Team} />
          </Switch>
      </Router>
    </div>

  );
}

export default App;
