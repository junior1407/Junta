import React, { Component } from 'react'
import './dash.css'
import Header from './header'
import Menu from './menu'
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

class TelaDash extends Component {
  render() {


    const { classes } = this.props
    return (

      <div className="APP-DEFAULT">
        <div className="DASH-WRAP">
          <Header />
          <Menu /> 


        </div>
      </div>
    )
  }
}
TelaDash.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(TelaDash)