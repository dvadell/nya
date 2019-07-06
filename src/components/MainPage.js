import React, { Component, createRef } from 'react';
import Mapa from './Mapa'
import { isArray } from 'util';
import CardSlider from './CardSlider';
import Localizer from '../lib/Localizer'
import translations from './MainPage.translations'
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css'; // optional styles

const Localize = Localizer(translations)

class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = { view: 'cards', isActive: true }
    }

    toggleNotification() {
        console.log('toggleNotification')
        this.setState({
          isActive: !this.state.isActive
        });
    }

    componentDidMount() {
        this.props.onRequestGatos()
    }

    mapRef = createRef()
 
    render() {
        let filteredGatos = []
        if (isArray(this.props.gatos)) {
            filteredGatos = this.props.gatos.filter(gato => {
                // If the search field is empty, there's no need to filter anything
                if (this.props.searchField) {
                    if (gato.nombre) {
                        return gato.nombre.toLowerCase().includes(this.props.searchField.toLowerCase())
                    } else {
                        console.log('Un gato sin nombre?', gato)
                        return false;
                    } 
                } else {
                    return gato
                }
            })
        } else {
            console.log('Hubo un error!!', this.props.gatos)
        }

        return (
        <div id="App" 
        style={{display: "flex", alignItems: "center", flex: "1 0 auto", justifyContent: "center"}}>
                {
                    this.props.error && toaster.notify(this.props.message, {
                        duration: 5000
                      })
                }
                {
                    this.props.isPending ? 
                        (
                            <span className="fa fa-spinner fa-2x fa-pulse"></span>
                    ) : ( 
                        <div className="tc" style={{width: "100%"}}>
                            <Mapa gatos={filteredGatos} mapRef={this.mapRef}/>
                            <div style={{marginLeft: "30px", marginRight: "30px"}}>
                                <CardSlider mapRef={this.mapRef} gatos={filteredGatos} />
                            </div>
                        </div>
                    )
                }
        </div>)
        
         
        
        
    }
}

export default MainPage;