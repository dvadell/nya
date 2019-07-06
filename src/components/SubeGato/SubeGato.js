import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { postGato } from '../../actions'
import Dropzone from 'react-dropzone';
import { geolocated } from 'react-geolocated';
import compressImg from '../../lib/compressImg';
import WithLoading from '../withLoading'
import ModalWithMap from './Modal';
import Localizer from '../../lib/Localizer'
import translations from './SubeGato.translations.js'

const Localize = Localizer(translations)
const WithLoadingDropzone = WithLoading(Dropzone);

const mapStateToProps = state => {
    return {
        gatos: state.requestGatos.gatos,
        isPending: state.requestGatos.isPending,
        message: state.requestGatos.message,
        error: state.requestGatos.error
    }
}

const mapDispatchToProps = dispatch  => {
    return { 
        onPostGato: (gato)       => dispatch(postGato(gato))  
    }
}
class SubeGato extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coords: '',
            customCoords: false,
            value: '',
            nombre: '',
            descr: '',
            imgChosen: false,
            img: '/img/Cat_Sil_Placeholder.jpg',
            modalIsOpen: false,
            gatoSent: false
        };
        this.fileInput = React.createRef();
    }
    
    handleNameChange   = (event) => this.setState({nombre: event.target.value});
    handleDescrChange  = (event) => this.setState({descr: event.target.value});
    handleCoordsChange = (event) => this.setState({coords: event.target.value});
    
    handleSubmit = (event) => {
        event.preventDefault();
        let gato = {
            coords: this.state.coords,
            nombre: this.state.nombre,
            descr: this.state.descr,
            img: this.state.img,
            fechahora: Date.now()
        }
        console.log('handleSubmit: Enviando', gato)
        this.props.onPostGato(gato);
        this.setState({gatoSent: true})
    }

    onImageDrop(event) {
        if(event && event[0]){
            let reader = new FileReader();
            reader.onload = function(ev){
                // ev.target.result es reader.result
                compressImg(ev.target.result, (compressedImg) => {
                    console.log('compressedImg mide:', compressedImg.length)
                    this.setState({ 
                        img: compressedImg
                    });
                })
            }.bind(this);
            reader.readAsDataURL(event[0]);            
        }
        this.setState({
            imgChosen: true
        })
        !this.props.isGeolocationAvailable ? 
            this.setState({error: 'Your browser does not support Geolocation'}) :
            !this.props.isGeolocationEnabled ?
                this.setState({error: 'Geolocation is not enabled'}) :
                this.props.coords && !this.state.coords ? 
                    this.setState({
                        coords: this.props.coords.latitude + ', ' + this.props.coords.longitude
                    }) : console.log('No coords?')
    }

    openModal = () => {
        console.log('SubeGato: openModal called!')
        this.setState({modalIsOpen: true});
    }

    closeModal = () => {
        console.log('SubeGato: closeModal called!')
        this.setState({modalIsOpen: false});
    }

    setCoords = (latlng) => {
        this.setState( {
            coords: latlng.lat + ',' + latlng.lng
        })
    }

    render(){
        return (
        <div> 
            <ModalWithMap setCoords={this.setCoords}
                modalIsOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
            </ModalWithMap>
            <div className="tc">
                <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                    <WithLoadingDropzone isLoading={this.props.isPending} onDrop={this.onImageDrop.bind(this)}
                        accept="image/*" multiple={false}>
                        {({getRootProps, getInputProps}) => {
                            return (
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {
                                        <div>
                                            <img alt={this.state.nombre} src={this.state.img} 
                                                style={{maxWidth: 200, maxHeight: 200}}/>
                                                <h2>{this.state.nombre}</h2>
                                                <p>{this.state.descr}</p>
                                        </div>
                                    }
                                </div>
                            )
                        }}
                    </WithLoadingDropzone>
                    {
                        this.state.imgChosen ?
                        <button onClick={this.handleSubmit}><Localize>Send</Localize></button> : ''
                    }
                </div>
            </div>
            <form className="pa4 black-80">
                <label className="f6 b db mb2"> 
                    <Localize>Nombre</Localize>: <span className="normal black-60">(<Localize>optional</Localize>)</span>
                    <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" 
                            value={this.state.nombre} onChange={this.handleNameChange} />
                </label>
                <br />

                <label className="f6 b db mb2">
                    <Localize>Coordenadas</Localize>: <small><a href="#" onClick={this.openModal}>(<Localize>change</Localize>)</a></small>
                    <br/>
                {
                    this.state.customCoords ? (
                        <input className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"
                            value={this.state.coords} onChange={this.handleCoordsChange} />
                    ) : (<span className="normal black-60">{this.state.coords}</span>)
                }
                </label>
                <br/>
                <label className="f6 b db mb2"> 
                    <Localize>Notas</Localize>: <span className="normal black-60">(<Localize>optional</Localize>)</span>
                    <textarea className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"
                             value={this.state.descr} onChange={this.handleDescrChange}></textarea>
                </label>
                <br />
            </form>
            {
                this.state.gatoSent && (<Redirect to='/' />)
            }
        </div>
        )
    }
}

export default geolocated({
        positionOptions: {
            enableHighAccuracy: true,
        },
        userDecisionTimeout: 5000,
    })(connect(mapStateToProps, mapDispatchToProps)(SubeGato));