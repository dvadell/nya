import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setSearchField, requestGatos } from './actions'
import MainPage from './components/MainPage';

const mapStateToProps = state => {
    return {
        searchField: state.searchGatos.searchField, // from the reducer
        gatos: state.requestGatos.gatos,
        isPending: state.requestGatos.isPending,
        message: state.requestGatos.message,
        error: state.requestGatos.error
    }
}

const mapDispatchToProps = dispatch  => {
    return { 
        onSearchChange: (event)  => dispatch(setSearchField(event.target.value)),
        onRequestGatos: ()       => dispatch(requestGatos())  
    }
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { view: 'cards' }
    }

    render() {
        return <MainPage {...this.props}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);