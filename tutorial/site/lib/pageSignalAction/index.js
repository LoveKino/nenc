'use strict';

const {
   // signal constants
} = require('../signals');

let {wrapBaseSignalActions} = require('kabanery-lumine/lib/flow/baseSignalActions');

/**
 * 
 * {
 *      [pageName]: {
 *          [signalName]: [{
 *              type,       // updateState | sendRequest
 *              content,    // tree-script
 *              
 *              response,    // response of sendRequest, tree-script
 *              error,       // error of sendRequest, tree-script
 *              variableMap: {}
 *          }]
 *      }
 * }
 * 
 * source tree data in tree-script
 *     updateState: {signal, viewState, localStorage}
 *     response: {response, viewState, localStorage}
 *     error: {errorMsg, error, viewState, localStorage}
 * 
 * Special signals:
 *      kabanery_page_render // when this page rendered
 * 
 * tree-script: https://github.com/LoveKino/tree-script
 */
module.exports = wrapBaseSignalActions({
    indexPage: {
        'kabanery_page_render': []
    }
});