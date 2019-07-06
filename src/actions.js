// import React, { Component } from 'react'
import {reactLocalStorage} from 'reactjs-localstorage';
import {CHANGE_SEARCH_FIELD, 
        REQUEST_GATOS_PENDING, REQUEST_GATOS_FAILED, REQUEST_GATOS_SUCCESS,
        POST_GATO_PENDING, POST_GATO_FAILED, POST_GATO_SUCCESS,
        REQUEST_GATO_BY_ID_PENDING, REQUEST_GATO_BY_ID_FAILED, REQUEST_GATO_BY_ID_SUCCESS,
        POST_COMMENT_PENDING, POST_COMMENT_FAILED, POST_COMMENT_SUCCESS,
        SET_LANGUAGE} from './constants';

import { reject } from 'q';
const API_URL = '/api/v1/gatos';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})
export const requestGatos = () => (dispatch) => {
    dispatch({
        type: REQUEST_GATOS_PENDING
    });
    fetch(API_URL + '/100')
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            reject(res.statusText)
        })
        .then(data => {
            if (data.errmsg) {
                dispatch({ type: REQUEST_GATOS_FAILED, payload: data })
            } else {
                dispatch({ type: REQUEST_GATOS_SUCCESS, payload: data })
            }
        })
        .catch(err => {
            console.log('requestGatos', err);
            dispatch({ type: REQUEST_GATOS_FAILED, payload: err })
        })
}

export const postCommentAction = ({_id, comentario}) => (dispatch) => {
    const logID = 'postCommentAction:'
    let endpoint = '/' + _id + '/comentarios';
    console.log(logID, 'recibí:', _id, comentario)

    dispatch({
        type: POST_COMMENT_PENDING
    });

    fetch(API_URL + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({_id, comentario})
    })
        .then(res => { 
            if (res.ok) {
                console.log(logID, 'res.ok para', endpoint)
                return res.json()
            }
            console.log(logID, 'res.ok NO ok para', endpoint)
            throw new Error(res.status + ' ' + res.statusText)
        })
        .then(data => dispatch({ type: POST_COMMENT_SUCCESS, payload: {_id: _id, comentario: comentario} }))
        .catch(err => {
            console.log('postComment:', err);
            dispatch({ type: POST_COMMENT_FAILED, payload: err })
        })
}

export const postGato = (gato) => (dispatch) => {
    dispatch({
        type: POST_COMMENT_PENDING
    });
    let myCatsList = reactLocalStorage.getObject('myCatsList') || {};
    console.log('Action postGato: myCatsList:', myCatsList)
    reactLocalStorage.setObject('myCatsList', {...myCatsList, [gato.fechahora]: gato});

    fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(gato)
    })
        .then(res => { 
            if (res.ok) {
                return res.json()
            }
            reject(res.statusText);
        })
        .then(data => dispatch({ type: POST_GATO_SUCCESS, payload: data }))
        .catch(err => {
            console.log('postGato:', err);
            dispatch({ type: POST_GATO_FAILED, payload: err })
        })
}

export const setLanguageAction = (lang) => ({
    type: SET_LANGUAGE,
    payload: lang
})