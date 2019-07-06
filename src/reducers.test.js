import {CHANGE_SEARCH_FIELD, 
    REQUEST_GATOS_PENDING, REQUEST_GATOS_FAILED, REQUEST_GATOS_SUCCESS,
    POST_GATO_PENDING, POST_GATO_FAILED, POST_GATO_SUCCESS, SET_LANGUAGE} from './constants';

import * as reducers from './reducers'

describe('searchGatos', () => {
    it('should return the initial state', () => {
        expect(reducers.searchGatos(undefined, {})).toEqual({ searchField: '' })
    })

    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchGatos({searchField: ''}, 
                                    {type: CHANGE_SEARCH_FIELD, payload: 'abc'})).toEqual(
                                        { searchField: 'abc' }
                                    )
    })
})

describe('Set language', () => {
    it('should change language', () => {
        expect(reducers.LanguageReducer({lang: 'en'}, 
                                        {type: SET_LANGUAGE, payload: 'es_ar'}))
                                        .toEqual({ lang: 'es_ar' })
    })
})