import React from 'react'
import translations from './Alerts.translations'
import Localizer from '../../lib/Localizer'

const Localize = Localizer(translations)

const Alerts = () => {
    return (<div>
                <h1><Localize>Alerts</Localize></h1>
                <p><Localize>In a future version...</Localize></p>
            </div>)
} 

export default Alerts