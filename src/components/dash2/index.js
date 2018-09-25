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

class TelaDash extends Component {
  render() {
  
  
    const { classes } = this.props
    return (

      <div className="APP-DEFAULT">
        <div className="DASH-WRAP">
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
          <div className="verticalRow">
            <div className="item">  
                <Button variant="contained" color="primary" className={classes.button}>
                        Empresa
                </Button>
            </div>
            <div className="item">  
              <Button variant="contained" color="primary" className={classes.button}>
                      Pessoa Física
              </Button>
           </div>


          </div>

        {/*}
        <AppBar position="static">
          <Toolbar>   
            <Typography variant="title" color="inherit" className={classes.grow}>
              Dashboard
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
    {*/}
    

  {/*}
      <Button variant="contained" size="large" color="primary" className={classes.button}>
              Consulta por NIRE
              </Button>

  <Button variant="contained" size="large" color="primary" className={classes.button}>
          Consulta por NIRE
          </Button>
  <Button variant="contained" size="large" color="primary" className={classes.button}>
          Consulta por NIRE
          </Button>
    /**/}
        </div>
      </div>
    )
  }
}
TelaDash.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(TelaDash)