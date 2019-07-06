import * as actions from './actions'
import {CHANGE_SEARCH_FIELD, 
    REQUEST_GATOS_PENDING, REQUEST_GATOS_FAILED, REQUEST_GATOS_SUCCESS,
    POST_GATO_PENDING, POST_GATO_FAILED, POST_GATO_SUCCESS, SET_LANGUAGE} from './constants';


import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const mockStore = configureMockStore({thunkMiddleware})

// describe('blah blha', () => {
//     it('should create an action to search', () => {
//         const text = 'wooo';
//         const expectedAction = {
//             type: CHANGE_SEARCH_FIELD,
//             payload: text
//         }
//         expect(actions.setSearchField(text)).toEqual(expectedAction)
//     })

//     it('handles requesting gatos API', () => {
//         const store = mockStore()
//         store.dispatch(actions.requestGatos())
//         const action = store.getActions()
//         console.log('Action:', action)
//         const expectedAction = {
//             type: REQUEST_GATOS_PENDING,
//         }
//         expect(actions[0]).toEqual(expectedAction)
//     })
// })

describe('Set Language actions', () => {
    it('should change language', () => {
        const lang = 'es_ar';
        const expectedAction = {
            type: SET_LANGUAGE,
            payload: lang
        }
        expect(actions.setLanguageAction(lang)).toEqual(expectedAction)
    })
})


