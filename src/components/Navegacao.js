import React, { Component } from 'react';

// criando class / componente
class Navegacao extends Component {
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <a href="" className="text-white">
                    {/* recebendo os dados da propriedade titulo de onde o componente é chamado */}
                    { this.props.titulo.toUpperCase() }
                </a>       
            </nav>
        )
    }
}

// exportando componente para ser usado em qualquer lugar
export default Navegacao;