"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[220],{"./src/stories/buttons/card-button/ShopButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Default$parameters,_Default$parameters2,_Default$parameters2$;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Example/ShopButton",component:__webpack_require__("./src/stories/buttons/card-button/ShopButton.tsx").Z,tags:["autodocs"]};var Default={args:{itemCount:0}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    itemCount: 0\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/stories/buttons/card-button/ShopButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>card_button_ShopButton});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),PlusIcon=function PlusIcon(){return(0,jsx_runtime.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M5.832 13.536H7.96V8.132H13.084V6.228H7.96V0.907999H5.832V6.228H0.568V8.132H5.832V13.536Z",fill:"white"})})};PlusIcon.displayName="PlusIcon";const plus=PlusIcon;var MinusIcon=function MinusIcon(){return(0,jsx_runtime.jsx)("svg",{width:"12",height:"2",viewBox:"0 0 12 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("line",{y1:"1",x2:"12",y2:"1",stroke:"white",strokeWidth:"2"})})};MinusIcon.displayName="MinusIcon";const minus=MinusIcon;var Button=__webpack_require__("./src/stories/buttons/button/Button.tsx"),ui=__webpack_require__("./src/stories/buttons/card-button/ui/index.jsx"),ShopButton=function ShopButton(_ref){var _ref$itemCount=_ref.itemCount,itemCount=void 0===_ref$itemCount?0:_ref$itemCount;return!itemCount||itemCount<=0?(0,jsx_runtime.jsx)(Button.z,{label:"BUY NOW",size:"medium",type:"button",onClick:function onClickShopButton(){console.log("Shop button clicked")}}):(0,jsx_runtime.jsxs)(ui.Z,{children:[(0,jsx_runtime.jsx)(ui.Z.Button,{onClick:function onDecreaseValue(){console.log("Decrease value")},children:(0,jsx_runtime.jsx)(minus,{})}),(0,jsx_runtime.jsx)(ui.Z.Input,{type:"number",min:0,max:100,step:1,value:itemCount}),(0,jsx_runtime.jsx)(ui.Z.Button,{onClick:function onIncreaseValue(){console.log("Increase value")},children:(0,jsx_runtime.jsx)(plus,{})})]})};ShopButton.displayName="ShopButton";const card_button_ShopButton=ShopButton;try{ShopButton.displayName="ShopButton",ShopButton.__docgenInfo={description:"",displayName:"ShopButton",props:{itemCount:{defaultValue:{value:"0"},description:"",name:"itemCount",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/buttons/card-button/ShopButton.tsx#ShopButton"]={docgenInfo:ShopButton.__docgenInfo,name:"ShopButton",path:"src/stories/buttons/card-button/ShopButton.tsx#ShopButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/buttons/card-button/ui/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,_templateObject3,styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var ShopCountButton=styled_components__WEBPACK_IMPORTED_MODULE_0__.zo.button(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 29px;\n  background: linear-gradient(180deg, #46a358 0%, rgba(70, 163, 88, 0.8) 100%);\n  color: #ffffff;\n  font-size: 28px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  border: none;\n  outline: none;\n  padding: 0;\n\n  &:hover,\n  &:focus {\n    opacity: 0.8;\n  }\n\n  &:active {\n    opacity: 0.5;\n  }\n"]))),ShopCountInput=styled_components__WEBPACK_IMPORTED_MODULE_0__.zo.input(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  border-radius: 5px;\n  border: 1px solid #eaeaea;\n  box-sizing: border-box;\n  width: min-content;\n  width: 50px;\n  height: 38px;\n  text-align: center;\n  background: #fff;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  &:focus,\n  &:hover,\n  &:active,\n  &:focus-visible {\n    border: 1px solid #46a358;\n    outline: none;\n  }\n"]))),ShopButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_0__.zo.div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 5px;\n  align-items: center;\n"])));const __WEBPACK_DEFAULT_EXPORT__=Object.assign(ShopButtonWrapper,{Button:ShopCountButton,Input:ShopCountInput})}}]);