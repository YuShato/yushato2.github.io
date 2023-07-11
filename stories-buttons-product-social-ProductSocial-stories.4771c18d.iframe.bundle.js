"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[938],{"./src/stories/buttons/product-social/ProductSocial.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_components_buttons_product_social_ProductSocial__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/buttons/product-social/ProductSocial.tsx"),_components_buttons_product_social_utils_constants_product_social__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/buttons/product-social/utils/constants/product-social.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Buttons/ProductSocial",component:_components_buttons_product_social_ProductSocial__WEBPACK_IMPORTED_MODULE_0__.Z,tags:["autodocs"]};var Default={args:{list:_components_buttons_product_social_utils_constants_product_social__WEBPACK_IMPORTED_MODULE_1__.B},argTypes:{list:{control:"check",options:_objectSpread({},_components_buttons_product_social_utils_constants_product_social__WEBPACK_IMPORTED_MODULE_1__.B)}}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    list: PRODUCT_SOCIAL\n  },\n  argTypes: {\n    list: {\n      control: 'check',\n      options: {\n        ...PRODUCT_SOCIAL\n      }\n    }\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/buttons/product-social/ProductSocial.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>product_social_ProductSocial});var _templateObject,_templateObject2,_templateObject3,_templateObject4,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var ProductSocialButton=styled_components_browser_esm.zo.a(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  width: 18px;\n\n  height: 18px;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: 0.3s ease color;\n\n  svg {\n    max-width: 100%;\n    max-height: 100%;\n    transition: 0.3s ease all;\n  }\n\n  &:hover {\n    opacity: 0.8;\n  }\n\n  &:active {\n    svg path {\n      fill: #46a358;\n    }\n  }\n"]))),ProductSocialWrapper=styled_components_browser_esm.zo.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 15px;\n  align-items: center;\n"]))),ProductSocialTitle=styled_components_browser_esm.zo.h4(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  color: #3d3d3d;\n  font-size: 15px;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  margin: 0;\n  padding: 0;\n"]))),ProductSocialList=styled_components_browser_esm.zo.ul(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 20px;\n  align-items: center;\n  justify-content: start;\n  padding: 0;\n  margin: 0;\n"])));const product_social_ui=Object.assign(ProductSocialWrapper,{List:ProductSocialList,Button:ProductSocialButton,Title:ProductSocialTitle});try{ui.displayName="ui",ui.__docgenInfo={description:"",displayName:"ui",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/product-social/ui/index.tsx#ui"]={docgenInfo:ui.__docgenInfo,name:"ui",path:"src/components/buttons/product-social/ui/index.tsx#ui"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),GrayFacebook=function GrayFacebook(){return(0,jsx_runtime.jsx)("svg",{width:"8",height:"15",viewBox:"0 0 8 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M1.875 5H0V7.5H1.875V15H5V7.5H7.25L7.5 5H5V3.9375C5 3.375 5.125 3.125 5.6875 3.125H7.5V0H5.125C2.875 0 1.875 1 1.875 2.875V5Z",fill:"#3D3D3D"})})};GrayFacebook.displayName="GrayFacebook";const icons_GrayFacebook=GrayFacebook;var GrayLinkedin=function GrayLinkedin(){return(0,jsx_runtime.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M3.125 1.5625C3.125 2.4375 2.4375 3.125 1.5625 3.125C0.6875 3.125 0 2.4375 0 1.5625C0 0.6875 0.6875 0 1.5625 0C2.4375 0 3.125 0.6875 3.125 1.5625ZM3.125 4.375H0V14.375H3.125V4.375ZM8.125 4.375H5V14.375H8.125V9.125C8.125 6.1875 11.875 5.9375 11.875 9.125V14.375H15V8.0625C15 3.125 9.4375 3.3125 8.125 5.75V4.375Z",fill:"#3D3D3D"})})};GrayLinkedin.displayName="GrayLinkedin";const icons_GrayLinkedin=GrayLinkedin;var GrayMessage=function GrayMessage(){return(0,jsx_runtime.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 4.09091C7.30168 4.09091 4.98846 4.2365 3.51951 4.34356C3.03167 4.37911 2.65385 4.76529 2.65385 5.23696V5.76996L8.53304 8.85802C8.82344 9.01056 9.17656 9.01056 9.46697 8.85802L15.3462 5.76996V5.23696C15.3462 4.76529 14.9683 4.37911 14.4805 4.34356C13.0115 4.2365 10.6983 4.09091 9 4.09091ZM15.3462 7.01792L10.0273 9.81165C9.38843 10.1472 8.61157 10.1472 7.97268 9.81165L2.65385 7.01792V12.763C2.65385 13.2347 3.03167 13.6209 3.51951 13.6564C4.98846 13.7635 7.30168 13.9091 9 13.9091C10.6983 13.9091 13.0115 13.7635 14.4805 13.6564C14.9683 13.6209 15.3462 13.2347 15.3462 12.763V7.01792ZM3.43083 3.25588C4.90066 3.14876 7.25301 3 9 3C10.747 3 13.0993 3.14876 14.5692 3.25588C15.6676 3.33593 16.5 4.20441 16.5 5.23696V12.763C16.5 13.7956 15.6676 14.6641 14.5692 14.7441C13.0993 14.8512 10.747 15 9 15C7.25301 15 4.90066 14.8512 3.43083 14.7441C2.33237 14.6641 1.5 13.7956 1.5 12.763V5.23696C1.5 4.20441 2.33237 3.33593 3.43083 3.25588Z",fill:"#3D3D3D"})})};GrayMessage.displayName="GrayMessage";const icons_GrayMessage=GrayMessage;var GrayTwitter=function GrayTwitter(){return(0,jsx_runtime.jsx)("svg",{width:"15",height:"13",viewBox:"0 0 15 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M4.71737 12.1908C10.378 12.1908 13.4736 7.50111 13.4736 3.4346C13.4736 3.30135 13.4709 3.1688 13.4647 3.03675C14.0656 2.60239 14.588 2.06021 15 1.44331C14.4486 1.6883 13.8552 1.85327 13.2327 1.92765C13.868 1.54669 14.356 0.94378 14.5861 0.225197C13.9914 0.577835 13.3329 0.834082 12.632 0.972271C12.0702 0.374134 11.2704 0 10.3855 0C8.68578 0 7.30747 1.37831 7.30747 3.07718C7.30747 3.31876 7.3346 3.55351 7.38714 3.77887C4.82962 3.65041 2.56162 2.42565 1.04392 0.563675C0.779318 1.01833 0.626969 1.54686 0.626969 2.11037C0.626969 3.17801 1.17034 4.12059 1.99658 4.67216C1.49176 4.65663 1.01748 4.51776 0.602743 4.2871C0.602061 4.2999 0.602061 4.31286 0.602061 4.32634C0.602061 5.81691 1.66305 7.06129 3.07104 7.3433C2.81257 7.41376 2.54063 7.45163 2.25982 7.45163C2.06158 7.45163 1.86879 7.43184 1.6813 7.39619C2.07301 8.61873 3.20923 9.5086 4.55632 9.53368C3.50284 10.3592 2.17588 10.8511 0.734108 10.8511C0.48588 10.8511 0.240893 10.8369 0 10.8084C1.36193 11.6812 2.97908 12.1908 4.71737 12.1908Z",fill:"#3D3D3D"})})};GrayTwitter.displayName="GrayTwitter";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["viewtype"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SocialIcon={facebook:icons_GrayFacebook,linkedin:icons_GrayLinkedin,twitter:GrayTwitter,email:icons_GrayMessage},ProductSocial_ProductSocialButton=function ProductSocialButton(_ref){var viewtype=_ref.viewtype,props=_objectWithoutProperties(_ref,_excluded),Icon=SocialIcon[viewtype];return(0,jsx_runtime.jsx)(product_social_ui.Button,_objectSpread(_objectSpread({viewtype},props),{},{children:(0,jsx_runtime.jsx)(Icon,{})}))};ProductSocial_ProductSocialButton.displayName="ProductSocialButton";var ProductSocial_ProductSocialList=function ProductSocialList(_ref2){var list=_ref2.list;return list&&list.length?(0,jsx_runtime.jsxs)(product_social_ui,{children:[(0,jsx_runtime.jsx)(product_social_ui.Title,{children:"Share this products:"}),(0,jsx_runtime.jsx)(product_social_ui.List,{children:list.map((function(item){return(0,jsx_runtime.jsx)(ProductSocial_ProductSocialButton,_objectSpread({viewtype:item.viewtype},item),item.id)}))})]}):null};ProductSocial_ProductSocialList.displayName="ProductSocialList";const product_social_ProductSocial=ProductSocial_ProductSocialList;try{ProductSocial.displayName="ProductSocial",ProductSocial.__docgenInfo={description:"",displayName:"ProductSocial",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"[] | SocialItemProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/product-social/ProductSocial.tsx#ProductSocial"]={docgenInfo:ProductSocial.__docgenInfo,name:"ProductSocial",path:"src/components/buttons/product-social/ProductSocial.tsx#ProductSocial"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/buttons/product-social/utils/constants/product-social.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>PRODUCT_SOCIAL});var PRODUCT_SOCIAL=[{id:"1",link:"https://example.com",viewtype:"email"},{id:"2",link:"https://facebook.com",viewtype:"facebook"},{id:"3",link:"https://linkedin.com",viewtype:"linkedin"},{id:"4",link:"https://twitter.com",viewtype:"twitter"}]}}]);