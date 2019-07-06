import React from 'react'
import { reactLocalStorage } from 'reactjs-localstorage';
import CardList from '../../CardList'

import translations from './MyCats.translations.js';
import Localizer from '../../lib/Localizer'

const Localize = Localizer(translations)

const myCatsObj = reactLocalStorage.getObject('myCatsList');


const MyCats = () => {
    return (<div>
                <h1><Localize>My Cats</Localize></h1>
                <CardList gatos={ Object.values(myCatsObj) } />
            </div>)
} 

export default MyCats;
