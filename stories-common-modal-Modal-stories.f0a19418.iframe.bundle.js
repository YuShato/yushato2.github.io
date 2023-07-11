"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[37],{"./src/stories/common/modal/Modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Open:()=>Open,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),CloseIcon=function CloseIcon(){return(0,jsx_runtime.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.17007 3.17007C3.39682 2.94331 3.76447 2.94331 3.99122 3.17007L9 8.17884L14.0088 3.17007C14.2355 2.94331 14.6032 2.94331 14.8299 3.17007C15.0567 3.39682 15.0567 3.76447 14.8299 3.99122L9.82115 9L14.8299 14.0088C15.0567 14.2355 15.0567 14.6032 14.8299 14.8299C14.6032 15.0567 14.2355 15.0567 14.0088 14.8299L9 9.82116L3.99122 14.8299C3.76447 15.0567 3.39682 15.0567 3.17007 14.8299C2.94331 14.6032 2.94331 14.2355 3.17007 14.0088L8.17884 9L3.17007 3.99122C2.94331 3.76447 2.94331 3.39682 3.17007 3.17007Z",fill:"#46A358"})})};CloseIcon.displayName="CloseIcon",CloseIcon.__docgenInfo={description:"",methods:[],displayName:"CloseIcon"};const assets_close=CloseIcon;var _templateObject,_templateObject2,_templateObject3,media_query=__webpack_require__("./src/constants/media-query.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var Mask=styled_components_browser_esm.zo.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(10, 13, 18, 0.25);\n  z-index: 9999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Window=styled_components_browser_esm.zo.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: auto;\n  max-width: 578px;\n  min-width: 200px;\n  max-height: 830px;\n  min-height: 200px;\n  background-color: #fff;\n  z-index: 10000;\n  border-radius: 4px;\n  padding: 20px;\n  margin-inline: auto;\n  border-bottom: 10px solid #46a358;\n  color: #727272;\n  font-size: 15px;\n  font-weight: 700;\n  line-height: 16px;\n\n  @media "," {\n    max-width: calc(100% - 100px);\n  }\n\n  @media "," {\n    max-width: calc(100% - 50px);\n  }\n"])),media_query.wQ,media_query.dG),CloseButton=styled_components_browser_esm.zo.button(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n\n  svg path {\n    transition: fill 0.3s ease;\n  }\n  @media (hover: hover) {\n    &:hover {\n      svg path {\n        fill: #a3464e;\n      }\n    }\n  }\n"])));const modal_ui=Object.assign(Mask,{Window,CloseButton});try{ui.displayName="ui",ui.__docgenInfo={description:"",displayName:"ui",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/modal/ui/index.tsx#ui"]={docgenInfo:ui.__docgenInfo,name:"ui",path:"src/components/common/modal/ui/index.tsx#ui"})}catch(__react_docgen_typescript_loader_error){}var Modal=function Modal(_ref){var visible=_ref.visible,children=_ref.children;return visible?(0,jsx_runtime.jsx)(modal_ui,{children:(0,jsx_runtime.jsxs)(modal_ui.Window,{children:[(0,jsx_runtime.jsx)(modal_ui.CloseButton,{children:(0,jsx_runtime.jsx)(assets_close,{})}),children]})}):null};Modal.displayName="Modal";const modal_Modal=Modal;try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{visible:{defaultValue:null,description:"",name:"visible",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/components/common/modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}var _Open$parameters,_Open$parameters2,_Open$parameters2$doc;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const Modal_stories={title:"Common/Modal",component:modal_Modal,tags:["autodocs"]};var Open={args:{visible:!0,children:"Open Modal"}};Open.parameters=_objectSpread(_objectSpread({},Open.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Open$parameters=Open.parameters)||void 0===_Open$parameters?void 0:_Open$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    visible: true,\n    children: 'Open Modal'\n  }\n}"},null===(_Open$parameters2=Open.parameters)||void 0===_Open$parameters2||null===(_Open$parameters2$doc=_Open$parameters2.docs)||void 0===_Open$parameters2$doc?void 0:_Open$parameters2$doc.source)})});var __namedExportsOrder=["Open"]},"./src/constants/media-query.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{dG:()=>MOBILE_MAX,um:()=>MOBILE_MAP,wQ:()=>TABLET_MAX});var MOBILE_MAX="(max-width: 500px)",MOBILE_MAP="(max-width: 800px)",TABLET_MAX="(max-width: 1000px)"}}]);