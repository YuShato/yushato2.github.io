"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[137],{"./src/stories/item/card-item/ShopItem.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ShopItem_stories});const default_namespaceObject=__webpack_require__.p+"static/media/default.e7b8ce0f.png";__webpack_require__("./node_modules/react/index.js");var ShopButton=__webpack_require__("./src/components/buttons/card-button/ShopButton.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),TrashIcon=function TrashIcon(){return(0,jsx_runtime.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("g",{id:"Iconly/Curved/Delete",children:(0,jsx_runtime.jsxs)("g",{id:"Delete",children:[(0,jsx_runtime.jsx)("path",{id:"Stroke 1",d:"M18.8892 9.55409C18.8892 17.5731 20.0435 21.1979 12.2797 21.1979C4.5149 21.1979 5.693 17.5731 5.693 9.55409",stroke:"#727272",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{id:"Stroke 3",d:"M20.3651 6.47981H4.2146",stroke:"#727272",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,jsx_runtime.jsx)("path",{id:"Stroke 5",d:"M15.7148 6.47981C15.7148 6.47981 16.2434 2.7141 12.2891 2.7141C8.33578 2.7141 8.86435 6.47981 8.86435 6.47981",stroke:"#727272",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})};TrashIcon.displayName="TrashIcon";const trash=TrashIcon;var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var ShopItemWrapper=styled_components_browser_esm.zo.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 70px 3fr 1fr 1fr 1fr 40px;\n  column-gap: 14px;\n  background: #fbfbfb;\n  color: #a5a5a5;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n\n  p {\n    padding: 0;\n    margin: 0;\n  }\n"]))),ShopItemName=styled_components_browser_esm.zo.p(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  color: #3d3d3d;\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n"]))),ShopItemSku=styled_components_browser_esm.zo.p(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  color: #a5a5a5;\n  font-size: 14px;\n\n  span {\n    text-transform: uppercase;\n    color: #a5a5a5;\n  }\n"]))),ShopItemInfo=styled_components_browser_esm.zo.div(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n"]))),ShopItemPrice=styled_components_browser_esm.zo.p(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  color: #727272;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  text-align: center;\n"]))),ShopItemTotal=styled_components_browser_esm.zo.p(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n  color: #46a358;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  text-align: center;\n"]))),ShopItemTrashButton=styled_components_browser_esm.zo.button(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  text-align: center;\n  margin-right: 20px;\n  align-self: center;\n\n  @media (hover: hover) {\n    &:hover {\n      svg path {\n        fill: #46a358;\n      }\n    }\n  }\n\n  &:active {\n    svg path {\n      fill: #a34646;\n    }\n  }\n\n  svg {\n    width: 24px;\n    height: 24px;\n  }\n"])));const card_item_ui=Object.assign(ShopItemWrapper,{Name:ShopItemName,Sku:ShopItemSku,Info:ShopItemInfo,Price:ShopItemPrice,Total:ShopItemTotal,TrashButton:ShopItemTrashButton});try{ui.displayName="ui",ui.__docgenInfo={description:"",displayName:"ui",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/item/card-item/ui/index.tsx#ui"]={docgenInfo:ui.__docgenInfo,name:"ui",path:"src/components/item/card-item/ui/index.tsx#ui"})}catch(__react_docgen_typescript_loader_error){}var ShopItem=function ShopItem(_ref){var _ref$imgSrc=_ref.imgSrc,imgSrc=void 0===_ref$imgSrc?"":_ref$imgSrc,_ref$name=_ref.name,name=void 0===_ref$name?"":_ref$name,_ref$price=_ref.price,price=void 0===_ref$price?0:_ref$price,_ref$sku=_ref.sku,sku=void 0===_ref$sku?0:_ref$sku,_ref$itemCount=_ref.itemCount,itemCount=void 0===_ref$itemCount?0:_ref$itemCount,total=price*itemCount;return(0,jsx_runtime.jsxs)(card_item_ui,{children:[(0,jsx_runtime.jsx)("img",{src:imgSrc||default_namespaceObject,alt:name,width:70,height:70}),(0,jsx_runtime.jsxs)(card_item_ui.Info,{children:[(0,jsx_runtime.jsx)(card_item_ui.Name,{children:name}),(0,jsx_runtime.jsxs)(card_item_ui.Sku,{children:[(0,jsx_runtime.jsx)("span",{children:"sku"}),sku]})]}),(0,jsx_runtime.jsxs)(card_item_ui.Price,{children:["$",price]}),(0,jsx_runtime.jsx)(ShopButton.Z,{itemCount}),(0,jsx_runtime.jsxs)(card_item_ui.Total,{children:["$",total]}),(0,jsx_runtime.jsx)(card_item_ui.TrashButton,{onClick:function deleteFromCart(){console.log("Delete from cart")},children:(0,jsx_runtime.jsx)(trash,{"aria-label":"Delete from cart"})})]})};ShopItem.displayName="ShopItem";const card_item_ShopItem=ShopItem;try{ShopItem.displayName="ShopItem",ShopItem.__docgenInfo={description:"",displayName:"ShopItem",props:{imgSrc:{defaultValue:{value:""},description:"",name:"imgSrc",required:!1,type:{name:"string"}},itemCount:{defaultValue:{value:"0"},description:"",name:"itemCount",required:!1,type:{name:"number"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},price:{defaultValue:{value:"0"},description:"",name:"price",required:!1,type:{name:"number"}},sku:{defaultValue:{value:"0"},description:"",name:"sku",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/item/card-item/ShopItem.tsx#ShopItem"]={docgenInfo:ShopItem.__docgenInfo,name:"ShopItem",path:"src/components/item/card-item/ShopItem.tsx#ShopItem"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const ShopItem_stories={title:"Item/ShopItem",component:card_item_ShopItem,tags:["autodocs"]};var Default={args:{name:"Blushing Bromeliad",imgSrc:"",sku:1995751877966,price:119,itemCount:2},argTypes:{itemCount:{control:{type:"number",min:1,max:100,step:1}}}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    name: 'Blushing Bromeliad',\n    imgSrc: '',\n    sku: 1995751877966,\n    price: 119,\n    itemCount: 2\n  },\n  argTypes: {\n    itemCount: {\n      control: {\n        type: 'number',\n        min: 1,\n        max: 100,\n        step: 1\n      }\n    }\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/buttons/card-button/ShopButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>card_button_ShopButton});var Button=__webpack_require__("./src/components/buttons/button/Button.tsx"),jsx_runtime=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),MinusIcon=function MinusIcon(){return(0,jsx_runtime.jsx)("svg",{width:"12",height:"2",viewBox:"0 0 12 2",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("line",{y1:"1",x2:"12",y2:"1",stroke:"white",strokeWidth:"2"})})};MinusIcon.displayName="MinusIcon";const minus=MinusIcon;var PlusIcon=function PlusIcon(){return(0,jsx_runtime.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,jsx_runtime.jsx)("path",{d:"M5.832 13.536H7.96V8.132H13.084V6.228H7.96V0.907999H5.832V6.228H0.568V8.132H5.832V13.536Z",fill:"white"})})};PlusIcon.displayName="PlusIcon";const plus=PlusIcon;var ui=__webpack_require__("./src/components/buttons/card-button/ui/index.jsx"),ShopButton=function ShopButton(_ref){var _ref$itemCount=_ref.itemCount,itemCount=void 0===_ref$itemCount?0:_ref$itemCount;return!itemCount||itemCount<=0?(0,jsx_runtime.jsx)(Button.z,{label:"BUY NOW",size:"medium",type:"button",onClick:function onClickShopButton(){console.log("Shop button clicked")}}):(0,jsx_runtime.jsxs)(ui.Z,{children:[(0,jsx_runtime.jsx)(ui.Z.Button,{onClick:function onDecreaseValue(){console.log("Decrease value")},children:(0,jsx_runtime.jsx)(minus,{})}),(0,jsx_runtime.jsx)(ui.Z.Input,{type:"number",min:0,max:100,step:1,value:itemCount}),(0,jsx_runtime.jsx)(ui.Z.Button,{onClick:function onIncreaseValue(){console.log("Increase value")},children:(0,jsx_runtime.jsx)(plus,{})})]})};ShopButton.displayName="ShopButton";const card_button_ShopButton=ShopButton;try{ShopButton.displayName="ShopButton",ShopButton.__docgenInfo={description:"",displayName:"ShopButton",props:{itemCount:{defaultValue:{value:"0"},description:"",name:"itemCount",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/buttons/card-button/ShopButton.tsx#ShopButton"]={docgenInfo:ShopButton.__docgenInfo,name:"ShopButton",path:"src/components/buttons/card-button/ShopButton.tsx#ShopButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/buttons/card-button/ui/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,_templateObject3,styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var ShopCountButton=styled_components__WEBPACK_IMPORTED_MODULE_0__.zo.button(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 29px;\n  background: linear-gradient(180deg, #46a358 0%, rgba(70, 163, 88, 0.8) 100%);\n  color: #ffffff;\n  font-size: 28px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  border: none;\n  outline: none;\n  padding: 0;\n\n  &:hover,\n  &:focus {\n    opacity: 0.8;\n  }\n\n  &:active {\n    opacity: 0.5;\n  }\n"]))),ShopCountInput=styled_components__WEBPACK_IMPORTED_MODULE_0__.zo.input(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  border-radius: 5px;\n  border: 1px solid #eaeaea;\n  box-sizing: border-box;\n  width: min-content;\n  width: 50px;\n  height: 38px;\n  text-align: center;\n  background: #fff;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  &:focus,\n  &:hover,\n  &:active,\n  &:focus-visible {\n    border: 1px solid #46a358;\n    outline: none;\n  }\n"]))),ShopButtonWrapper=styled_components__WEBPACK_IMPORTED_MODULE_0__.zo.div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 5px;\n  align-items: center;\n"])));const __WEBPACK_DEFAULT_EXPORT__=Object.assign(ShopButtonWrapper,{Button:ShopCountButton,Input:ShopCountInput})}}]);