import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Plan from './pages/Plan';
import Calendar from './pages/Calendar'
import IdeaList from './pages/IdeaList'
import MyContent from './pages/MyContent'
import ContentDay from './pages/ContentDay'


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/idealist' component={IdeaList}/>
        <Route path='/' exact component={Calendar}/>
        <Route path='/mycontent' component={MyContent}/>
        <Route path='/dev' component={ContentDay}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
