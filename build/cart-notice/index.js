(()=>{"use strict";const e=window.React,t=window.wp.i18n,c=window.wp.blocks,o=window.wp.blockEditor,n=window.wp.components,i=JSON.parse('{"UU":"cv-woo-cart-checkout-blocks-extends/cart-notice"}'),l={blockId:{type:"string",default:""},noticeText:{type:"string",default:(0,t.__)("This is a default cart notice.","cv-woo-cart-checkout-blocks-extends")}},r=(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100",height:"100",viewBox:"0 0 50 50"},(0,e.createElement)("path",{d:"M 7 4 C 5.3545455 4 4 5.3545455 4 7 L 4 43 C 4 44.645455 5.3545455 46 7 46 L 43 46 C 44.645455 46 46 44.645455 46 43 L 46 7 C 46 5.3545455 44.645455 4 43 4 L 7 4 z M 7 6 L 43 6 C 43.554545 6 44 6.4454545 44 7 L 44 43 C 44 43.554545 43.554545 44 43 44 L 7 44 C 6.4454545 44 6 43.554545 6 43 L 6 7 C 6 6.4454545 6.4454545 6 7 6 z M 22.5 13 C 17.26514 13 13 17.26514 13 22.5 C 13 27.73486 17.26514 32 22.5 32 C 24.758219 32 26.832076 31.201761 28.464844 29.878906 L 36.292969 37.707031 L 37.707031 36.292969 L 29.878906 28.464844 C 31.201761 26.832076 32 24.758219 32 22.5 C 32 17.26514 27.73486 13 22.5 13 z M 22.5 15 C 26.65398 15 30 18.34602 30 22.5 C 30 26.65398 26.65398 30 22.5 30 C 18.34602 30 15 26.65398 15 22.5 C 15 18.34602 18.34602 15 22.5 15 z"}));(0,c.registerBlockType)(i.UU,{icon:r,attributes:l,edit:function({attributes:c,setAttributes:i,clientId:l}){return i({blockId:l}),(0,e.createElement)("div",null,(0,e.createElement)(o.InspectorControls,null,(0,e.createElement)(n.PanelBody,{title:(0,t.__)("Cart Notice Settings","cv-woo-cart-checkout-blocks-extends")},(0,e.createElement)(n.TextControl,{label:(0,t.__)("Notice Text","cv-woo-cart-checkout-blocks-extends"),value:c.noticeText,onChange:e=>i({noticeText:e})}))),(0,e.createElement)("p",null,c.noticeText))},save:function({attributes:t}){return(0,e.createElement)("div",{...o.useBlockProps},t.noticeText)}})})();