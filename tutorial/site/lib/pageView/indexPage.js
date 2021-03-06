'use strict';

let SimplePager = require('kabanery-lumine/lib/page/simplePager');
let lumineView = require('kabanery-lumine/lib/util/lumineView');
let n = require('kabanery-lumine/lib/util/n');
let {
    syncBindWithKeyMap
} = require('kabanery-lumine/lib/view/compose/mapUI');
let {
    deliver,
    onSignalType
} = require('kabanery-lumine/lib/util/signal');
let {
    // SIGNAL CONSTANTS
} = require('../signals');

// views
let FunctionBar = require('kabanery-lumine/lib/view/header/FunctionBar');
let Vn = require('kabanery-lumine/lib/view/layout/vn');
let Hn = require('kabanery-lumine/lib/view/layout/hn');
let Full = require('kabanery-lumine/lib/view/layout/full');
let Block = require('kabanery-lumine/lib/view/block/block');

let tutorialData = require('../tutorial');

/**
 * // some common signals
 * let {KABANERY_DO_RENDER} = require('kabanery-lumine/lib/flow/baseSignalActions');
 */

/**
 *  SimplePager encapsulate notice and loading view.
 *  
 *      .notice.text
 *      .notice.show
 *      .loading.show
 */

/**
 * syncBindWithKeyMap:
 *     sync child props with parent props
 *     demo: n(Input, syncBindWithKeyMap(ctx, {[parent props]: 'value'}, {bindedProps: {}}))
 */

/**
 * deliver signal 
 *     demo: n(Button, {onsignal: onSignalType('click', deliver(ctx, SIGNAL_TYPE))}, 'save')
 */

let TutorialView = require('../view/tutorialView');

module.exports = SimplePager(lumineView(({}, ctx) => {
    return n(Vn, {}, [
        n(FunctionBar, {
            title: 'nenc'
        }),

        n(Block, {
            style: {
                display: 'block',
                margin: '30 auto 0 auto',
                padding: 12,
                width: 500,
                fontSize: 20,
            }
        }, 'A Simple Cross-Platform Easy-Hybrid Functional Language Which Compiled To Other Platform Languages, like javascript, java ...'),

        n('img src="./img/nenc_function.jpg"', {
            style: {
                margin: 'auto',
                display: 'block'
            }
        }),

        n('div', {
            style: {
                padding: 20
            }
        }, [n(TutorialView, {
            tutorials: tutorialData
        })])
    ]);
}, {
    defaultProps: {}
}));
