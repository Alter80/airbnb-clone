import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import SearchPage from './Pages/SearchPage/SearchPage';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path='/search'>
            <SearchPage></SearchPage>
          </Route>

          <Route exact path='/'>
            <Home></Home>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
