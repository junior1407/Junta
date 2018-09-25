import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css';
import Login from './components/login'
import Dash from './components/dashboard'
import './App.css'
class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/dashboard' component={Dash} />
     {/*}   <Route path='/recuperar-senha' component={RecuperarSenha} />
        <Route path='/cadastro' component={Cadastro} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/novo-tutor' component={NovoTutor} />
    */}
        </div>
    </Router>
    );
  }
}

export default App;
