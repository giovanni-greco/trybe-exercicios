import React from "react";
import pokemons from "../data";

class Pokemon extends React.Component {
    render() {
        const {pokemon: {name, type}} = this.props
        return (
            <>
            <p>Nome: {this.props.pokemon.name}</p>
            <p>Type: {this.props.pokemon.type}</p>
            </>
        

        ) 
    } 

}

// Pokemon.propTypes = {
//     name: PropTypes.string,
//     type: PropTypes.string,
//     averageWeight: PropTypes.number,
//   };

export default Pokemon


