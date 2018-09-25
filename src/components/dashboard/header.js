import React, { Component } from 'react'
import './dash.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, withRouter} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
//import axios from 'axios'

const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      grow: {
        flexGrow: 1,
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },

})

class Header extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
}

  async handleLogout() {
    try {
     //   await axios.post('http://localhost:3001/auth/authenticate', { email, password })
     //       .then(res => {
     //           console.log("Response Received: ", res)

    //        })
    } catch (error) {
        console.log(error)
    }
    this.props.history.push('/')
    //history.push('/dashboard')
}

  render() {
  
  
    const { classes } = this.props
    return (
      <div className="row AppBar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.grow}>
            Dashboard
        </Typography>
          <Button color="inherit" onClick={this.handleLogout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}
export default withRouter(withStyles(styles)(Header))