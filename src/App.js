import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Team from './pages/Team';
import EmergencyPage from './pages/EmergencyPage';
import SuitPage from './pages/SuitPage';
import Protocols from './pages/Protocols';
import ReportPage from './pages/ReportPage';


function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/Overview' exact component={Overview} />
        <Route path='/EmergencyPage' exact component={EmergencyPage} />
        <Route path='/SuitPage' exact component={SuitPage} />
        <Route path='/Protocols' exact component={Protocols} />
        <Route path='/ReportPage' exact component={ReportPage} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;
