import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,}
   from 'react-router-dom';
import Contact from './pages/Contact'
import ContactDetail from './pages/ContactDetail'

// const arr = [1,2,3].map(function (item) {

// })
console.log(window.location.pathname)

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Contact}></Route>
          <Route path="/contacts/:id" component={ContactDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
}
