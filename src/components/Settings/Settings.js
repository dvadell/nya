import React from 'react'
import { connect } from 'react-redux'
import { setLanguageAction } from '../../actions'

import translations from './Settings.translations'
import Localizer from '../../lib/Localizer'

const Localize = Localizer(translations)

const mapDispatchToProps = dispatch  => {
    return { 
        onSetLang: (lang)       => dispatch(setLanguageAction(lang))  
    }
}
const mapStateToProps = state => {
    return {
        lang: state.LanguageReducer.lang
    }
}


const Settings = (props) => {

    const onChange = (event) => {
        props.onSetLang(event.target.value);
    }

    return (
        <div>
            <h1><Localize>Settings</Localize></h1>
            <p><Localize>Language</Localize>:</p>

            <div className="form-check">
                <label>
                    <input type="radio" name="lang" value="en"    checked={props.lang === 'en'} onChange={onChange} />
                    <Localize>English</Localize>
                </label>
                <label>
                    <input type="radio" name="lang" value="es_ar" checked={props.lang === 'es_ar'} onChange={onChange} />
                    <Localize>Spanish</Localize> (Argentina)
                </label>
                <label>
                    <input type="radio" name="lang" value="es_es" checked={props.lang === 'es_es'} onChange={onChange} />
                    <Localize>Spanish</Localize>
                </label>
            </div>
        </div>
    )
} 

export default connect(mapStateToProps, mapDispatchToProps)(Settings);