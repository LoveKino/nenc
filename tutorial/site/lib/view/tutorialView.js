'use strict';

let n = require('kabanery-lumine/lib/util/n');
let lumineView = require('kabanery-lumine/lib/util/lumineView');
let Vn = require('kabanery-lumine/lib/view/layout/vn');
let Hn = require('kabanery-lumine/lib/view/layout/hn');
let FlatButton = require('kabanery-lumine/lib/view/button/flatButton');
let CodeRunnerView = require('./codeRunnerView');
let {
    onSignalType
} = require('kabanery-lumine/lib/util/signal');
let Block = require('kabanery-lumine/lib/view/block/block');

module.exports = lumineView(({
    props
}, ctx) => {
    let tutorial = props.tutorials[props.curIndex];

    return n(Vn, [
        n(Block, [tutorial.goal]),
        n(CodeRunnerView, {
            code: tutorial.code
        }),
        n(Hn, [
            props.curIndex > 0 && n(FlatButton, {
                onsignal: onSignalType('click', () => {
                    ctx.update('props.curIndex', props.curIndex - 1);
                })
            }, 'prev'),

            props.curIndex < props.tutorials.length - 1 && n(FlatButton, {
                onsignal: onSignalType('click', () => {
                    ctx.update('props.curIndex', props.curIndex + 1);
                })
            }, 'next')
        ])
    ]);
}, {
    defaultProps: {
        tutorials: [],
        curIndex: 0
    }
});
