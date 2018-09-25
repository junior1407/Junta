import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


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

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            showPassword: false
        }
       // this.handleAuth = this.handleAuth.bind(this)
        //this.handleChange = this.handleChange.bind(this)
    }
    render() {
        const { classes } = this.props
        return (
<div className={classes.root}>
      <AppBar position="static">
        <Toolbar>   
          <Typography variant="title" color="inherit" className={classes.grow}>
            Dashboard
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>


<div style={{display: 'flex', justifyContent: 'center'}}>
<Grid container className={classes.root} spacing={16} justify="center">
    <Grid item xs={12} justify="center">
    <Button variant="contained" size="large" color="primary" className={classes.button}>
            Consulta por NIRE
            </Button>
    </Grid>

 <Grid item xs={12}>
 <Button variant="contained" size="large" color="primary" className={classes.button}>
        Consulta por NIRE
        </Button>
 </Grid>
 <Grid item xs={12}>
 <Button variant="contained" size="large" color="primary" className={classes.button}>
        Consulta por NIRE
        </Button>
 </Grid>
   

    </Grid>


</div>


   
    </div>
        )
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Dashboard)