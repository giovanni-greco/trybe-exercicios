// Existem duas maneiras de definirmos um componente:

// 1 - Via função JavaScript:

function Greeting(props) {
    return (<h1>Hello, {props.name}</h1>);
  }

  export default Greeting;

// 2 - Via classe :

import React from 'react';

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name}  {this.props.lastName}</h1>);
  }
}

export default Greeting;

// Analisando o código acima, temos:
// A declaração de um componente chamado Greeting .
// O componente Greeting herda da classe Component da biblioteca react .
// O componente Greeting descreve o que vai ser mostrado para quem usar a aplicação , declarado no método obrigatório render . Nesse caso, Greeting retorna: <h1>Hello, {this.props.name}</h1> .
// O componente Greeting possui como propriedade um objeto chamado props , que contém todos os dados passados como parâmetro na hora de chamar um componente. Ou seja, chamar <Greeting name="Samuel" /> faz com que o componente tenha uma prop igual a { name: "Samuel" } .
// Exportamos o componente Greeting de forma que ele possa ser reutilizado na aplicação.


// Props (properties) sao como parametros de uma function(parameter)

import Greeting from './Greeting';

function App() {
  return (
    <main>
      <Greeting name="Samuel" lastName="Silva" />
    </main>
  );
}

export default App;


// PropType Models


import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name} {this.props.lastName}</h1>);
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
};

export default Greeting;


MeuComponente.propTypes = {
    // Todos os validadores aqui são, por padrão, validadores opcionais.
    // Para torná-los obrigatórios basta adicionar .isRequired
    numeroObrigatório: PropTypes.number.isRequired,
  
    // Tipos básico do JS.
    stringOpcional: PropTypes.string,
    numeroOpcional: PropTypes.number,
    booleanoOpcional: PropTypes.bool,
    funcaoOpcional: PropTypes.func,
    objetoOpcional: PropTypes.object,
    arrayOpcional: PropTypes.array,
  
    // Um array de determinado tipo básico
    arrayDe: PropTypes.arrayOf(PropTypes.number),
  
    // Um objeto de determinado tipo básico
    objetoDe: PropTypes.objectOf(PropTypes.number),
  
    // Um objeto com forma específica
    objetoComForma: PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number,
    }),
  
    // Um objeto que não permite props extras
    objetoComFormatoRigoroso: PropTypes.exact({
      name: PropTypes.string,
      quantity: PropTypes.number,
      avaibility: PropTypes.bool,
    }),
  };
