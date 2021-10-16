import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import EmergencyPage from './pages/EmergencyPage';


function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/Overview' exact component={Overview} />
        <Route path='/EmergencyPage' exact component={EmergencyPage} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
