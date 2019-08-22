'use strict'

function radioBtn(){
    return{
        view:(vnode)=>{
            return m("div.radio",{class: vnode.attrs.class },
            [
              m("input[type='radio']",{
                  id:vnode.attrs.id,
                  name: vnode.attrs.name,
                  value: vnode.attrs.value,
                  onchange: vnode.attrs.callback
              }),
              m("label",{for: vnode.attrs.id }, vnode.attrs.text )
            ]
          )
        }
    }
};

function inputValue(){
    return {
        view:(vnode)=>{
            return m("div.block.margin-bottom",
            [
              m("label",{for: vnode.attrs.id}, vnode.attrs.text ),
              m("input.inline-block.float-left[type='text']",{
                  id: vnode.attrs.id,
                  class: vnode.attrs.class,
                  oninput: vnode.attrs.callback
              }),
              m("span.inline-block.float-right",{
                  style:{
                      "padding": "4px"
                  }
              }, vnode.attrs.unit)
            ]
          )
        }
    }
}