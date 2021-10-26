import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Plan from './pages/Plan';
import Calendar from './pages/Calendar'
import IdeaList from './pages/IdeaList'
import MyContent from './pages/MyContent'
import DayPage from './pages/DayPage';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Calendar}/>
        <Route path='/idealist' component={IdeaList}/>
        <Route path='/mycontent' component={MyContent}/>
        <Route path='/dayPage' component={DayPage}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
