"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[1],{"./src/stories/button/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Facebook$parameters,_Facebook$parameters2,_Facebook$parameters3,_Google$parameters,_Google$parameters2,_Google$parameters2$d,_Like$parameters,_Like$parameters2,_Like$parameters2$doc,_Cart$parameters,_Cart$parameters2,_Cart$parameters2$doc,_Logout$parameters,_Logout$parameters2,_Logout$parameters2$d,_Large$parameters,_Large$parameters2,_Large$parameters2$do,_Small$parameters,_Small$parameters2,_Small$parameters2$do;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Cart:()=>Cart,Facebook:()=>Facebook,Google:()=>Google,Large:()=>Large,Like:()=>Like,Logout:()=>Logout,Primary:()=>Primary,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Button",component:__webpack_require__("./src/stories/button/Button.tsx").z,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}};var Primary={args:{primary:!0,label:"Button",type:"button"}},Facebook={args:{label:"Login with Facebook",type:"button",viewtype:"facebook"}},Google={args:{label:"Login with Google",type:"button",viewtype:"google"}},Like={args:{label:"",type:"button",size:"small",viewtype:"like"}},Cart={args:{label:"",type:"button",size:"small",viewtype:"cart",primary:!0}},Logout={args:{label:"Logout",type:"button",size:"small",viewtype:"logout"}},Large={args:{size:"large",label:"Button",type:"button"}},Small={args:{size:"small",label:"Button",type:"button"}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    primary: true,\n    label: 'Button',\n    type: 'button'\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),Facebook.parameters=_objectSpread(_objectSpread({},Facebook.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Facebook$parameters=Facebook.parameters)||void 0===_Facebook$parameters?void 0:_Facebook$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Login with Facebook',\n    type: 'button',\n    viewtype: 'facebook'\n  }\n}"},null===(_Facebook$parameters2=Facebook.parameters)||void 0===_Facebook$parameters2||null===(_Facebook$parameters3=_Facebook$parameters2.docs)||void 0===_Facebook$parameters3?void 0:_Facebook$parameters3.source)})}),Google.parameters=_objectSpread(_objectSpread({},Google.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Google$parameters=Google.parameters)||void 0===_Google$parameters?void 0:_Google$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Login with Google',\n    type: 'button',\n    viewtype: 'google'\n  }\n}"},null===(_Google$parameters2=Google.parameters)||void 0===_Google$parameters2||null===(_Google$parameters2$d=_Google$parameters2.docs)||void 0===_Google$parameters2$d?void 0:_Google$parameters2$d.source)})}),Like.parameters=_objectSpread(_objectSpread({},Like.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Like$parameters=Like.parameters)||void 0===_Like$parameters?void 0:_Like$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: '',\n    type: 'button',\n    size: 'small',\n    viewtype: 'like'\n  }\n}"},null===(_Like$parameters2=Like.parameters)||void 0===_Like$parameters2||null===(_Like$parameters2$doc=_Like$parameters2.docs)||void 0===_Like$parameters2$doc?void 0:_Like$parameters2$doc.source)})}),Cart.parameters=_objectSpread(_objectSpread({},Cart.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Cart$parameters=Cart.parameters)||void 0===_Cart$parameters?void 0:_Cart$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: '',\n    type: 'button',\n    size: 'small',\n    viewtype: 'cart',\n    primary: true\n  }\n}"},null===(_Cart$parameters2=Cart.parameters)||void 0===_Cart$parameters2||null===(_Cart$parameters2$doc=_Cart$parameters2.docs)||void 0===_Cart$parameters2$doc?void 0:_Cart$parameters2$doc.source)})}),Logout.parameters=_objectSpread(_objectSpread({},Logout.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Logout$parameters=Logout.parameters)||void 0===_Logout$parameters?void 0:_Logout$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Logout',\n    type: 'button',\n    size: 'small',\n    viewtype: 'logout'\n  }\n}"},null===(_Logout$parameters2=Logout.parameters)||void 0===_Logout$parameters2||null===(_Logout$parameters2$d=_Logout$parameters2.docs)||void 0===_Logout$parameters2$d?void 0:_Logout$parameters2$d.source)})}),Large.parameters=_objectSpread(_objectSpread({},Large.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Large$parameters=Large.parameters)||void 0===_Large$parameters?void 0:_Large$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    size: 'large',\n    label: 'Button',\n    type: 'button'\n  }\n}"},null===(_Large$parameters2=Large.parameters)||void 0===_Large$parameters2||null===(_Large$parameters2$do=_Large$parameters2.docs)||void 0===_Large$parameters2$do?void 0:_Large$parameters2$do.source)})}),Small.parameters=_objectSpread(_objectSpread({},Small.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Small$parameters=Small.parameters)||void 0===_Small$parameters?void 0:_Small$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    size: 'small',\n    label: 'Button',\n    type: 'button'\n  }\n}"},null===(_Small$parameters2=Small.parameters)||void 0===_Small$parameters2||null===(_Small$parameters2$do=_Small$parameters2.docs)||void 0===_Small$parameters2$do?void 0:_Small$parameters2$do.source)})});var __namedExportsOrder=["Primary","Facebook","Google","Like","Cart","Logout","Large","Small"]}}]);