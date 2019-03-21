import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Redirect } from 'react-router'

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      
      paddingBottom: theme.spacing.unit * 2,
      height: 'auto',
      width: 200,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 150,
    },
    button: {
        margin: theme.spacing.unit,
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        color: 'white',
        
    },
    mess:{
      color: 'black',
    }
});


let errormessage = <h4>Usuario y/o Contraseña incorrectos</h4>;
let pokelist = <Redirect to='/pokedex'/>

class Login extends Component{
  constructor(props){
    super(props);
    this.state ={
      user: '',
      pass: '',
      correcto: false,
      errores: false,
    }
  }
  
  CheckAccount = () =>{
    if((this.state.user === 'Ash Ketchum'|| this.state.user === 'ash@pokemon.com​') && (this.state.pass === 'pokedex')){
      this.setState({correcto: true})
    }else if((this.state.user === 'Misty'|| this.state.user === 'misty@pokemon.com​') && (this.state.pass === 'paleta')){
      this.setState({correcto: true})
    }else{
      this.setState({errores: true})
    }
  }
  

  handleChange = (Name,event) =>{
    this.setState({[Name]: event.target.value});
  };


    render(){
        const {classes} = this.props;
        return(
        <div>
            <div>
              {this.state.correcto ? pokelist : <div></div>}
            </div>
            <Paper className={classes.root} elevation={24}>
            <div>
                <TextField
                  id="Usuario"
                  label="Usuario"
                  className={classes.textField}
                  onChange={this.handleChange.bind(this,'user')}
                  margin="dense"
                  />
                <br/>

                <TextField
                  id="Password"
                  label="Contraseña"
                  className={classes.textField}
                  onChange={this.handleChange.bind(this,'pass')}
                  margin="dense"
                  type = "password"
                  />             
                <br/>
                <br/>
                <Button className={classes.button} color="primary" variant="contained" onClick={this.CheckAccount.bind(this)}>
                    Login
                </Button>
                <div className={classes.mess}>
                  {this.state.errores ? 
                    errormessage :
                    <p></p>
                  }
                </div>
              </div>
            </Paper>
        </div>
        );
    }
}

export default withStyles(styles)(Login);