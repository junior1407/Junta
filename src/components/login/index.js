import React, { Component } from 'react'
import Login from './Login'
import { BrowserRouter as Router, withRouter} from 'react-router-dom'
class TelaLogin extends Component {
  render() {
    return (
      <div style={{ display: "flex", }}>
     
         <Login></Login>         
      </div>
    )
  }
}

export default withRouter(TelaLogin)