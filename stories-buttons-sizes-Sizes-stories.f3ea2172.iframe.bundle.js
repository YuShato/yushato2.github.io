"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[657],{"./src/stories/buttons/sizes/Sizes.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Sizes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/buttons/sizes/Sizes.tsx"),_utils_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/buttons/sizes/utils/constants/index.ts");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Sizes",component:_Sizes__WEBPACK_IMPORTED_MODULE_0__.Z,tags:["autodocs"]};var Default={args:{sizes:_utils_constants__WEBPACK_IMPORTED_MODULE_1__.z,activeSize:"s"},argTypes:{sizes:{control:"radio"},activeSize:{control:"radio",options:["s","m","l","xl"]}}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    sizes: SIZES,\n    activeSize: 's'\n  },\n  argTypes: {\n    sizes: {\n      control: 'radio'\n    },\n    activeSize: {\n      control: 'radio',\n      options: ['s', 'm', 'l', 'xl']\n    }\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/stories/buttons/sizes/Sizes.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>sizes_Sizes});__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var SizesList=styled_components_browser_esm.zo.ul(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  column-gap: 10px;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),SizeItem=styled_components_browser_esm.zo.li(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  margin: 0;\n  padding: 0;\n"]))),SizeListButton=styled_components_browser_esm.zo.button(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n  color: #727272;\n  text-align: center;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  border-radius: 28px;\n  width: 28px;\n  height: 28px;\n  transition: 0.3s all;\n  border: 1px solid #eaeaea;\n  padding: 0;\n  margin: 0;\n\n  ","\n\n  &:hover {\n    opacity: 0.7;\n  }\n"])),(function(_ref){return _ref.active&&(0,styled_components_browser_esm.iv)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n      color: #46a358;\n      border: 1px solid #46a358;\n    "])))})),SizeListTitle=styled_components_browser_esm.zo.h3(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  color: #3d3d3d;\n  font-size: 15px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 16px;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n"])));const sizes_ui=Object.assign(SizesList,{Item:SizeItem,Button:SizeListButton,Title:SizeListTitle});try{ui.displayName="ui",ui.__docgenInfo={description:"",displayName:"ui",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/buttons/sizes/ui/index.tsx#ui"]={docgenInfo:ui.__docgenInfo,name:"ui",path:"src/stories/buttons/sizes/ui/index.tsx#ui"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Sizes_SizeItem=function SizeItem(_ref){var size=_ref.size,_ref$activeSize=_ref.activeSize,activeSize=void 0===_ref$activeSize?"s":_ref$activeSize,isCurrentSizeActive=size.id===activeSize;return(0,jsx_runtime.jsx)(sizes_ui.Item,{children:(0,jsx_runtime.jsx)(sizes_ui.Button,{active:isCurrentSizeActive,title:size.title,children:size.label})})};Sizes_SizeItem.displayName="SizeItem";var Sizes=function Sizes(_ref2){var sizes=_ref2.sizes,_ref2$activeSize=_ref2.activeSize,activeSize=void 0===_ref2$activeSize?"s":_ref2$activeSize;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(sizes_ui.Title,{children:"Size:"}),(0,jsx_runtime.jsx)(sizes_ui,{children:sizes.map((function(size){return(0,jsx_runtime.jsx)(Sizes_SizeItem,{size,activeSize},size.id)}))})]})};const sizes_Sizes=Sizes;try{Sizes.displayName="Sizes",Sizes.__docgenInfo={description:"",displayName:"Sizes",props:{activeSize:{defaultValue:{value:"s"},description:"",name:"activeSize",required:!1,type:{name:"string"}},sizes:{defaultValue:null,description:"",name:"sizes",required:!0,type:{name:"SizeItemTypes[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/buttons/sizes/Sizes.tsx#Sizes"]={docgenInfo:Sizes.__docgenInfo,name:"Sizes",path:"src/stories/buttons/sizes/Sizes.tsx#Sizes"})}catch(__react_docgen_typescript_loader_error){}},"./src/stories/buttons/sizes/utils/constants/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>DEFAULT_SIZE,z:()=>SIZES});var SIZES=[{id:"s",label:"S",title:"Small"},{id:"m",label:"M",title:"Medium"},{id:"l",label:"L",title:"Large"},{id:"xl",label:"XL",title:"Extra Large"}],DEFAULT_SIZE="s"}}]);