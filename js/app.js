'use strict';

const app = document.querySelector('.app');

// [ fromValue, fromUnit, toValue, toUnit ]
//let cv = [ "degc", "  ℃", "mv", " mV"]

function converter() {
  let tcType = 'k',
    to = 'degc',
    result = ' Input is not a number';

  function getTcType(e) {
    tcType = e.target.value;
    document.querySelector('#tcinput').dispatchEvent(new Event('input'));
  }

  function convType(e) {
    to = e.target.value;
    document.querySelector('#tcinput').dispatchEvent(new Event('input'));
    // console.log('to ', to)
  }

  function convertInput(e) {
    try {
      if (isNaN(e.target.value)) {
        throw new TypeError('Input is not a number');
      }

      let res = Thermocouple.convert(e.target.value, {
        type: tcType,
        input: to
      });
      let txt = to === 'degc' ? ' mV' : ' ℃';
      result = res.toFixed(4) + txt;
    } catch (err) {
      result = err.message;
    }
  }

  return {
    oncreate: vnode => {
      // set default selected radio values
      vnode.dom.querySelector('#typek').checked = true;
      vnode.dom.querySelector('#mv').checked = true;
    },
    view: vnode => {
      return m(
        'div',

        [
          m('div.block.margin-bottom', m('h3.text-bold', 'TC Conversion tool')),
          m('div.box', [
            m('hr'),
            m('h4.block.text-left', 'Select TC type'),
            m('div.radio-group', [
              m(radioBtn, {
                name: 'type',
                value: 'b',
                id: 'typeb',
                text: 'B',
                callback: getTcType
              }),
              m(radioBtn, {
                name: 'type',
                value: 'e',
                id: 'typee',
                text: 'E',
                callback: getTcType
              }),
              m(radioBtn, {
                name: 'type',
                value: 'j',
                id: 'typej',
                text: 'J',
                callback: getTcType
              }),
              m(radioBtn, {
                name: 'type',
                value: 'k',
                id: 'typek',
                text: 'K',
                callback: getTcType
              }),
              m(radioBtn, {
                name: 'type',
                value: 'n',
                id: 'typen',
                text: 'N',
                callback: getTcType
              }),
              m(radioBtn, {
                name: 'type',
                value: 'r',
                id: 'typer',
                text: 'R',
                callback: getTcType
              }),
              m(radioBtn, {
                name: 'type',
                value: 's',
                id: 'types',
                text: 'S',
                callback: getTcType
              }),
              m(radioBtn, {
                name: 'type',
                value: 't',
                id: 'typet',
                text: 'T',
                callback: getTcType
              })
            ]),
            m('hr')
          ]),
          m('div.box.calc-group', [
            m('h4.block.text-left', 'Select coversion type'),
            m('div.block.margin-bottom', [
              m(radioBtn, {
                class: 'inline-block',
                name: 'unit',
                id: 'mv',
                text: ' to mV',
                value: 'degc',
                callback: convType
              }),
              m(radioBtn, {
                class: 'inline-block',
                name: 'unit',
                id: 'degc',
                text: ' to ℃',
                value: 'mv',
                callback: convType
              })
            ]),
            m('hr'),
            m('div.block.margin-bottom.text-left', [
              m('h4', 'Conversion:'),
              m('h4', result)
            ]),
            m('hr'),
            m(
              'div.block.margin-bottom.text-left.inline-block',
              [
                m(inputValue, {
                  id: 'tcinput',
                  text: 'Input value',
                  // [ fromValue, fromUnit, toValue, toUnit ]
                  unit: to === 'mv' ? ' mV' : ' ℃',
                  callback: convertInput
                })
              ]
            ),
            m('hr'),
            m(
              "a.block.text-right[href='img/tc-colour-code-chart.jpg'][target='_blank']",
              'tc colors'
            )
          ])
        ]
      ); // end main div
    }
  };
}

m.mount(app, converter);
