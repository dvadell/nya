import {CHANGE_SEARCH_FIELD, 
    REQUEST_GATOS_PENDING, REQUEST_GATOS_FAILED, REQUEST_GATOS_SUCCESS,
    POST_GATO_PENDING, POST_GATO_FAILED, POST_GATO_SUCCESS,
    POST_COMMENT_PENDING, POST_COMMENT_FAILED, POST_COMMENT_SUCCESS, SET_LANGUAGE} from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchGatos = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state;
    }
}

const initialStateGatos = {
    isPending: false,
    gatos: [],
    error: false,
    message: ''
}

export const requestGatos = (state=initialStateGatos, action={}) => {
    switch(action.type) {
        case REQUEST_GATOS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_GATOS_SUCCESS:
            return Object.assign({}, state, {isPending: false, gatos: action.payload})
        case REQUEST_GATOS_FAILED:
            return Object.assign({}, state, {isPending: false, error: true, message: action.payload})

            case POST_GATO_PENDING: 
            return Object.assign({}, state, {isPending: true})
        case POST_GATO_SUCCESS:
            return Object.assign({}, state, {isPending: false, error: false, message: 'POST_GATO_SUCCESS OK'})
        case POST_GATO_FAILED:
            return Object.assign({}, state, {isPending: false, error: true, message: 'POST_GATO_FAILED'})

        case POST_COMMENT_PENDING: 
            return Object.assign({}, state, {isPending: true})
        case POST_COMMENT_SUCCESS:
            let _id = action.payload._id;
            let comentario = action.payload.comentario;
            let gatoId;   // El índice en el array gatos

            // gatos: [{ _id, ... , comentarios: [{fechahora, comentario}] }]
            for(let i = 0; i < state.gatos.length; i++) {
                if (state.gatos[i]._id === _id) {
                    gatoId = i;
                    break;
                }
            }
            let newGatos = [...state.gatos];
            newGatos[gatoId].comentarios.push({fechahora: new Date().toISOString(), comentario: comentario})
            return Object.assign({}, state, {isPending: false, error: false, 
                                            gatos: newGatos, message: 'POST_COMMENT_SUCCESS OK'})
        case POST_COMMENT_FAILED:
            return Object.assign({}, state, {isPending: false, error: true, message: 'POST_COMMENT_FAILED'})

        default:
            return state;
    }
}


export const LanguageReducer = (state={ lang: 'en' }, action={}) => {
    switch(action.type) {
        case SET_LANGUAGE:
            return Object.assign({}, state, {lang: action.payload})
        default:
            return state;
    }
}