import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Plan from './pages/Plan';
import Calendar from './pages/Calendar'
import IdeaList from './pages/IdeaList'
import MyContent from './pages/MyContent'


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Plan}/>
        <Route path='/idealist' component={IdeaList}/>
        <Route path='/calendar' component={Calendar}/>
        <Route path='/mycontent' component={MyContent}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
