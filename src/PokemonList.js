import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import { Avatar, ListItem, List, ListItemAvatar, ListItemText, TextField } from '@material-ui/core';
import ACTIONS from './modules/action';
import { connect } from "react-redux";
import AddPokemon from './AddPokemon';

const styles = theme => ({
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
});

const mapStateToProps = state => ({
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    createItem: item => dispatch(ACTIONS.createItem(item)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

let addform = <AddPokemon/>

class PokemonList extends Component{
    constructor(){
        super();
        this.state={
            pokemon: "",
            addPokemon: false
        }
    }


    generateList = () =>{
        return this.props.items.map(row =>(
                    <ListItem key={row.id}>
                        <ListItemAvatar>
                            <Avatar src={row.image} className={this.bigAvatar}/>
                        </ListItemAvatar>
                        <ListItemText primary={row.name} secondary={"Catch Rate: " + row.Catch}/>  
                        <ListItemText secondary={'Tipo: ' + row.Type1 + ' ' + row.Type2}/>
                    </ListItem>
                ))
    }
    
    handleAdd = () => {
        if(this.state.addPokemon === true){
            this.setState({addPokemon: false});
        }
        else{
            this.setState({addPokemon: true});
        }
    }

    handleChange = (Name, event) => {
        this.setState({[Name]: event.target.value});
    }


    render() {

        let busqueda = this.props.items.filter(
            (pokemon)=>{
                return pokemon.name.toLowerCase().indexOf(this.state.pokemon.toLowerCase()) !== -1;
            }
        )

        const {classes} = this.props;
        return(
          <div>
              
             <div className={classes.root}>
             <Paper>
             <div>
                  <TextField label="Buscar" value={this.state.pokemon} onChange={this.handleChange.bind(this,'pokemon')}/>
              </div>
               <List>
                   {busqueda.map((row) =>{
                       return <ListItem key={row.id}>
                                <ListItemAvatar>
                                 <Avatar src={row.image} className={this.bigAvatar}/>
                                </ListItemAvatar>
                                <ListItemText primary={row.name} secondary={"Catch Rate: " + row.Catch}/>  
                                <ListItemText secondary={'Tipo: ' + row.Type1 + ' ' + row.Type2}/>
                                </ListItem>
                   })}
              </List>
              <Button variant="contained" 
                color="primary" 
                className={classes.button}
                onClick={this.handleAdd.bind(this)}>
                  Agregar Pokemon
              </Button>
              </Paper>
             </div>
             {this.state.addPokemon ? 
             addform:
            <div></div>
             }
          </div>
        );
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(PokemonList));