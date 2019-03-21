import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ACTIONS from './modules/action';
import {connect} from 'react-redux';
import { MenuItem, InputLabel, Select } from '@material-ui/core';
import { stat } from 'fs';


const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      
      paddingBottom: theme.spacing.unit * 1,
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
      width: 200,
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
    division:{
      position: 'absolute',
      bottom: '0%',
      right: '0%'
    }
});

const mapStateToProps = state => ({
  items: state.items
});


const mapDispatchToProps = dispatch => ({
  createItem: (N, I, T1, T2, H, W, G, C) => dispatch(ACTIONS.createItem(N, I, T1, T2, H, W, G, C)),
  deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

class AddPokemon extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'',
      image:'',
      Type1:'',
      Type2:'',
      Height: 0,
      Weight:0,
      Gender:'',
      Catch: '',
    }
  }

  createPokemon = () => {
    console.log(this.state.pokemon)
    this.props.createItem(this.state.name, this.state.image,this.state.Type1, this.state.Type2, this.state.Height, this.state.Weight, this.state.Gender, this.state.Catch)
  }

  handleChange = (Name,event) =>{
    this.setState({ [Name]: event.target.value });
    console.log(this.state.pokemon)
  }

  handle = event =>{
    this.newPokemon();
  }

  render(){
    const {classes} = this.props;
    return(
      <div className={classes.division}> 
        <Paper className={classes.root}>
          <form>
            <TextField
            label="Pokemon Name"
            className={classes.textField}
            onChange={this.handleChange.bind(this,'name')}
            margin="normal"
            />
            <br/>
            <TextField
            label="Imagen"
            className={classes.textField}
            value={this.state.image}
            onChange={this.handleChange.bind(this,'image')}
            margin="normal"
            />
            <br/>
            <InputLabel>Type: </InputLabel>
            <Select 
                value={this.state.Type1}
                onChange={this.handleChange.bind(this,'Type1')}
                inputProps={{Name: 'Type1', id: 'type-simple'}}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={'Normal'}>Normal</MenuItem>/>
                <MenuItem value={'Fighting'}>Fighting</MenuItem>
                <MenuItem value={'Flying'}>Flying</MenuItem>
                <MenuItem value={'Poison'}>Poison</MenuItem>
                <MenuItem value={'Ground'}>Ground</MenuItem>
                <MenuItem value={'Rock'}>Rock</MenuItem>
                <MenuItem value={'Bug'}>Bug</MenuItem>
                <MenuItem value={'Ghost'}>Ghost</MenuItem>
                <MenuItem value={'Steel'}>Steel</MenuItem>
                <MenuItem value={'Fire'}>Fire</MenuItem>
                <MenuItem value={'Water'}>Water</MenuItem>
                <MenuItem value={'Grass'}>Grass</MenuItem>
                <MenuItem value={'Electric'}>Electric</MenuItem>
                <MenuItem value={'Psychic'}>Psychic</MenuItem>
                <MenuItem value={'Ice'}>Ice</MenuItem>
                <MenuItem value={'Dragon'}>Dragon</MenuItem>
                <MenuItem value={'Fairy'}>Fairy</MenuItem>
                <MenuItem value={'Dark'}>Dark</MenuItem>
            </Select>
            <br/>
            <InputLabel>Type: </InputLabel>
            <Select 
                value={this.state.Type2}
                onChange={this.handleChange.bind(this,'Type2')}
                inputProps={{Name: 'Type2', id: 'type-simple'}}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={'Normal'}>Normal</MenuItem>/>
                <MenuItem value={'Fighting'}>Fighting</MenuItem>
                <MenuItem value={'Flying'}>Flying</MenuItem>
                <MenuItem value={'Poison'}>Poison</MenuItem>
                <MenuItem value={'Ground'}>Ground</MenuItem>
                <MenuItem value={'Rock'}>Rock</MenuItem>
                <MenuItem value={'Bug'}>Bug</MenuItem>
                <MenuItem value={'Ghost'}>Ghost</MenuItem>
                <MenuItem value={'Steel'}>Steel</MenuItem>
                <MenuItem value={'Fire'}>Fire</MenuItem>
                <MenuItem value={'Water'}>Water</MenuItem>
                <MenuItem value={'Grass'}>Grass</MenuItem>
                <MenuItem value={'Electric'}>Electric</MenuItem>
                <MenuItem value={'Psychic'}>Psychic</MenuItem>
                <MenuItem value={'Ice'}>Ice</MenuItem>
                <MenuItem value={'Dragon'}>Dragon</MenuItem>
                <MenuItem value={'Fairy'}>Fairy</MenuItem>
                <MenuItem value={'Dark'}>Dark</MenuItem>
            </Select>

            <br/>
            <TextField
            label="Height"
            className={classes.textField}
            value={this.state.Height}
            onChange={this.handleChange.bind(this,'Height')}
            margin="normal"
            />
            <br/>
            <TextField
            label="Weight"
            className={classes.textField}
            value={this.state.Weight}
            onChange={this.handleChange.bind(this,'Weight')}
            margin="normal"
            />
            <br/>
            <TextField
            label="Gender"
            className={classes.textField}
            value={this.state.Gender}
            onChange={this.handleChange.bind(this,'Gender')}
            margin="normal"
            />
            <br/>
            <TextField
            label="Catch Rate"
            className={classes.textField}
            value={this.state.Catch}
            onChange={this.handleChange.bind(this,'Catch')}
            margin="normal"
            />
            <br/>

            <Button variant="contained" color="primary" 
                className={classes.button}
                onClick = {this.createPokemon.bind(this)}>
                Agregar
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AddPokemon));