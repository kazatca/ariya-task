import fetch from 'isomorphic-fetch';
import {polyfill as promisePlyfill} from 'es6-promise';

import {set as setNotify} from '../actions/notify.js';

promisePlyfill();

export default backendUrl =>
  ({dispatch}) => next => action => {
    if(!action.remote || !action.remote.url){
      return next(action);
    }
    let {method, url, body} = action.remote;
    method = method || 'GET';

    return fetch(`${backendUrl}${url}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method,
      body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(resp => {
      const {success} = action.remote;
      if(typeof success == 'function'){
        dispatch(success(resp));
      }
      return resp;
    })
    .catch(() => 
      dispatch(setNotify(
        !method || method == 'GET' ? 
        'loading error': 
        'unsaved changes'
      ))
    );
  };