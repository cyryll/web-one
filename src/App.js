import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignInPage from './pages/SignIn';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/signin" component={SignInPage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
