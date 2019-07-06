import React, { Component } from 'react';
import Modal from 'react-modal';
import SelectLocationMap from './SelectLocationMap'
import translations from './Modal.translations'
import Localizer from '../../lib/Localizer'

class ModalWithMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latlng: {}
        }
        this.fileInput = React.createRef();
    }

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.props.onRequestClose()
    }

    setCoords = (latlng) => {
        console.log('Modal setCoords:', latlng)
        this.props.setCoords(latlng)
    }

    lang = 'en';

    render() {
        // const Localize = Localizer(this.lang, translations)
        const Localize = Localizer(translations)


        return (
        <Modal
            isOpen={this.props.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            className="Modal"
            contentLabel="Location Modal">
                <h2><Localize>Choose your location</Localize><button style={{marginLeft: "10px"}} onClick={this.closeModal}>OK</button></h2>
                <SelectLocationMap setCoords={this.setCoords}></SelectLocationMap>
        </Modal>
    )}
}

export default ModalWithMap;
