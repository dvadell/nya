import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import SubeGato from './components/SubeGato/SubeGato';
import GatosNavBar from './components/GatosNavBar/GatosNavBar'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchGatos, requestGatos, LanguageReducer } from './reducers';
import WithError from './components/withError';
import Ver from './components/Ver/Ver';
import Credits from './components/Credits/Credits';
import Settings from './components/Settings/Settings';
import MyCats from './components/MyCats/MyCats';
import Alerts from './components/Alerts/Alerts';


const logger = createLogger();
const rootReducer = combineReducers({
                        searchGatos, requestGatos, LanguageReducer
                    })
const store = createStore( rootReducer, applyMiddleware(thunkMiddleware, logger));

const SubeGatoWithError = WithError(SubeGato)

ReactDOM.render(
                <Provider store={store}>
                    <Router>
                        <GatosNavBar />
                        <Route path="/" exact   component={App} />
                        <Route path="/sube/"    component={SubeGatoWithError} />
                        <Route path="/ver/:id"  component={Ver} />
                        <Route path="/credits"  component={Credits} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/mycats"   component={MyCats} />
                        <Route path="/alerts"   component={Alerts} />
                    </Router> 
                </Provider>, 
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
