import React, {Component}  from 'react';
import { connect } from 'react-redux'
import { requestGatos } from '../../actions'
import Card   from '../../Card'
import ListaComentarios  from './ListaComentarios'
import DejarComentario   from './DejarComentario'
import Descrip from './Descrip';

const mapStateToProps = state => {
    return {
        gatos: state.requestGatos.gatos
    }
}

const mapDispatchToProps = dispatch  => {
    return { 
        onRequestGatos: ()       => dispatch(requestGatos())  
    }
}

class Ver extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         esteGato: {}
    //     }
    // }

    componentDidMount() {
        if (!this.props.gatos[0]) {
            // console.log('Ver: ComponentDidMount: no hay gatos!')
            this.props.onRequestGatos()
        } else {
            // console.log('Ver: ComponentDidMount: hay', this.props.gatos.length, 'gatos')
        }
    }

    render() {
        let esteGato;
        if (this.props.gatos[0]) {
            console.log('Ya hay ', this.props.gatos.length, 'gatos')
            for(let i = 0; i < this.props.gatos.length; i++) {
                if (this.props.gatos[i]._id === this.props.match.params.id) {
                    esteGato = i;
                    break;
                }
            }
        }

        // console.log('Ver: this.props.gatos:', this.props.gatos)
        // console.log('Ver: esteGato:', this.props.gatos[esteGato])

        let nombre = this.props.gatos[esteGato] ? this.props.gatos[esteGato].nombre : ''

        return (<div>
            <h1>{nombre}</h1>
            {
                this.props.gatos.length && this.props.gatos[esteGato]._id ?
                    (   <div>
                            <Card {...this.props.gatos[esteGato]}/>
                            <Descrip descr={this.props.gatos[esteGato].descr}
                                         fechahora={this.props.gatos[esteGato].fechahora} />
                            <ListaComentarios comentarios={this.props.gatos[esteGato].comentarios} />
                            <DejarComentario _id={this.props.gatos[esteGato]._id} />
                        </div> 
                    ) : ''    
            }
        </div>)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ver);

