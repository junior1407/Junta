import React, { Component } from 'react'
import './dash.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  render() {
  
  
    const { classes } = this.props
    return (
      <div className="row AppBar">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.grow}>
            Dashboard
        </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Header)