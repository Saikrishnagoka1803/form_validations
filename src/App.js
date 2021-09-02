import 'bootstrap/dist/css/bootstrap.min.css';
import scifi from './Data/fantasy.json'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './Components/BookList'
import RegistrationForm from './Components/RegistrationForm';
import {BrowserRouter as Router , Route } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router >
      {/* <BookList books={scifi} /> */}
    <Route path='/' exact component={RegistrationForm}></Route>
    <Route path= '/loggedintobookstore' exact render={()=> <BookList books={scifi}/>} />
      </Router>
      </header>
    </div>
  );
}

export default App;
