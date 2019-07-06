import React  from 'react'
import translations from './Credits.translations'
import Localizer from '../../lib/Localizer'

const Localize = Localizer(translations)

const Credits = () => {
    return (<div>
                <h1><Localize>Credits</Localize></h1>
                <p>Diego Vadell - <Localize>Programmer</Localize></p>
                <p>Verónica Caligaris - Project Manager / QA</p>
                <p>Black Cat Line, <Localize>by</Localize> George Bokhua</p>
            </div>)
} 

export default Credits