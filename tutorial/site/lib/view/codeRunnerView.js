'use strict';

let Hn = require('kabanery-lumine/lib/view/layout/hn');
let {
    compile
} = require('../../../../src/js');
let n = require('kabanery-lumine/lib/util/n');
let lumineView = require('kabanery-lumine/lib/util/lumineView');
let {
    syncBindWithKeyMap
} = require('kabanery-lumine/lib/view/compose/mapUI');
let TextArea = require('kabanery-lumine/lib/view/input/textarea');

module.exports = lumineView(({
    props
}, ctx) => {
    let result = '';
    console.log(props.code);
    try {
        let jsCode = props.code && compile(props.code, 'js');
        result = eval(jsCode);
        if (result === undefined) result = '';
        result += '';
    } catch (err) {
        result = err.toString();
    }

    return n(Hn, [n(TextArea, syncBindWithKeyMap(ctx, {
            'code': 'value'
        }, {
            autoUpdate: true
        })),

        n('div', {
            style: {
                padding: 8,
                width: 300
            }
        }, [result])
    ]);
}, {
    defaultProps: {
        code: ''
    }
});
