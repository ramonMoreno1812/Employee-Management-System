
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmpolyeeComponent from './components/ListEmpolyeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path = "/" exact component={ListEmpolyeeComponent}></Route>
              <Route path = "/employees" component={ListEmpolyeeComponent}></Route>
              <Route path = "/add-employee/:id" component={CreateEmployeeComponent}></Route>
              {/* <Route path = "/update-employee/:id" component={UpdateEmployeeComponent}></Route> */}
            </Switch>
          </div>
          <FooterComponent />
        
      </Router>
    </div>
  );
}

export default App;
