"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[137],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayWithHoles})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}__webpack_require__.d(__webpack_exports__,{Z:()=>_nonIterableRest})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray});var arrayWithHoles=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"),nonIterableRest=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");function _slicedToArray(arr,i){return(0,arrayWithHoles.Z)(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||(0,nonIterableRest.Z)()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./node_modules/@charlietango/use-native-lazy-loading/lib/useNativeLazyLoading.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),isSupported=void 0;const __WEBPACK_DEFAULT_EXPORT__=function useNativeLazyLoading(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(isSupported),supported=_useState[0],setSupported=_useState[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){void 0===isSupported&&(isSupported="loading"in HTMLImageElement.prototype),setSupported(isSupported)}),[]),supported}},"./src/stories/item/card-item/ShopItem.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_home_runner_work_yushato2_github_io_yushato2_github_io_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_yushato2_github_io_yushato2_github_io_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Item/ShopItem",component:__webpack_require__("./src/components/item/card-item/ShopItem.tsx").Z,tags:["autodocs"]};var Default={args:{name:"Blushing Bromeliad",imgSrc:"",sku:1995751877966,price:119,itemCount:2},argTypes:{itemCount:{control:{type:"number",min:1,max:100,step:1}}}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    name: 'Blushing Bromeliad',\n    imgSrc: '',\n    sku: 1995751877966,\n    price: 119,\n    itemCount: 2\n  },\n  argTypes: {\n    itemCount: {\n      control: {\n        type: 'number',\n        min: 1,\n        max: 100,\n        step: 1\n      }\n    }\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/components/item/card-item/ShopItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>card_item_ShopItem});var react=__webpack_require__("./node_modules/react/index.js"),ShopButton=__webpack_require__("./src/components/buttons/card-button/ShopButton.tsx"),__jsx=react.createElement,TrashIcon=function TrashIcon(){return __jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("g",{id:"Iconly/Curved/Delete"},__jsx("g",{id:"Delete"},__jsx("path",{id:"Stroke 1",d:"M18.8892 9.55409C18.8892 17.5731 20.0435 21.1979 12.2797 21.1979C4.5149 21.1979 5.693 17.5731 5.693 9.55409",stroke:"#727272",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),__jsx("path",{id:"Stroke 3",d:"M20.3651 6.47981H4.2146",stroke:"#727272",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),__jsx("path",{id:"Stroke 5",d:"M15.7148 6.47981C15.7148 6.47981 16.2434 2.7141 12.2891 2.7141C8.33578 2.7141 8.86435 6.47981 8.86435 6.47981",stroke:"#727272",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))))};TrashIcon.displayName="TrashIcon",TrashIcon.__docgenInfo={description:"",methods:[],displayName:"TrashIcon"};const trash=TrashIcon;var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ShopItemWrapper=styled_components_browser_esm.zo.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: grid;\n  grid-template-columns: 70px 3fr 1fr 1fr 1fr 40px;\n  column-gap: 14px;\n  background: #fbfbfb;\n  color: #a5a5a5;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  margin-bottom: 10px;\n\n  p {\n    padding: 0;\n    margin: 0;\n  }\n"]))),ShopItemName=styled_components_browser_esm.zo.p(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  color: #3d3d3d;\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n"]))),ShopItemSku=styled_components_browser_esm.zo.p(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  color: #a5a5a5;\n  font-size: 14px;\n\n  span {\n    text-transform: uppercase;\n    color: #a5a5a5;\n  }\n"]))),ShopItemInfo=styled_components_browser_esm.zo.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n"]))),ShopItemPrice=styled_components_browser_esm.zo.p(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  color: #727272;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  text-align: center;\n"]))),ShopItemTotal=styled_components_browser_esm.zo.p(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  color: #46a358;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  text-align: center;\n"]))),ShopItemTrashButton=styled_components_browser_esm.zo.button(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  text-align: center;\n  margin-right: 20px;\n  align-self: center;\n\n  @media (hover: hover) {\n    &:hover {\n      svg path {\n        fill: #46a358;\n      }\n    }\n  }\n\n  &:active {\n    svg path {\n      fill: #a34646;\n    }\n  }\n\n  svg {\n    width: 24px;\n    height: 24px;\n  }\n"])));const card_item_ui=Object.assign(ShopItemWrapper,{Name:ShopItemName,Sku:ShopItemSku,Info:ShopItemInfo,Price:ShopItemPrice,Total:ShopItemTotal,TrashButton:ShopItemTrashButton});try{ui.displayName="ui",ui.__docgenInfo={description:"",displayName:"ui",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/item/card-item/ui/index.tsx#ui"]={docgenInfo:ui.__docgenInfo,name:"ui",path:"src/components/item/card-item/ui/index.tsx#ui"})}catch(__react_docgen_typescript_loader_error){}var lazy_image=__webpack_require__("./src/components/lazy-image/index.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),ShopItem_jsx=react.createElement,ShopItem=function ShopItem(_ref){var _ref$imgSrc=_ref.imgSrc,imgSrc=void 0===_ref$imgSrc?"":_ref$imgSrc,_ref$name=_ref.name,name=void 0===_ref$name?"":_ref$name,_ref$price=_ref.price,price=void 0===_ref$price?0:_ref$price,_ref$sku=_ref.sku,sku=void 0===_ref$sku?0:_ref$sku,_ref$itemCount=_ref.itemCount,itemCount=void 0===_ref$itemCount?0:_ref$itemCount,total=price*itemCount;return ShopItem_jsx(card_item_ui,null,ShopItem_jsx(lazy_image.Z,{src:imgSrc,alt:name,width:70,height:70}),ShopItem_jsx(card_item_ui.Info,null,ShopItem_jsx(card_item_ui.Name,null,name),ShopItem_jsx(card_item_ui.Sku,null,ShopItem_jsx("span",null,"sku"),sku)),ShopItem_jsx(card_item_ui.Price,null,"$",price),ShopItem_jsx(ShopButton.Z,{itemCount}),ShopItem_jsx(card_item_ui.Total,null,"$",total),ShopItem_jsx(card_item_ui.TrashButton,{onClick:function deleteFromCart(){console.log("Delete from cart")}},ShopItem_jsx(trash,{"aria-label":"Delete from cart"})))};ShopItem.displayName="ShopItem",ShopItem.__docgenInfo={description:"",methods:[],displayName:"ShopItem",props:{imgSrc:{defaultValue:{value:"''",computed:!1},required:!1},name:{defaultValue:{value:"''",computed:!1},required:!1},price:{defaultValue:{value:"0",computed:!1},required:!1},sku:{defaultValue:{value:"0",computed:!1},required:!1},itemCount:{defaultValue:{value:"0",computed:!1},required:!1}}};const card_item_ShopItem=ShopItem;try{ShopItem.displayName="ShopItem",ShopItem.__docgenInfo={description:"",displayName:"ShopItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"number"}},imgSrc:{defaultValue:{value:""},description:"",name:"imgSrc",required:!1,type:{name:"string"}},itemCount:{defaultValue:{value:"0"},description:"",name:"itemCount",required:!1,type:{name:"number"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},price:{defaultValue:{value:"0"},description:"",name:"price",required:!1,type:{name:"number"}},sku:{defaultValue:{value:"0"},description:"",name:"sku",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/item/card-item/ShopItem.tsx#ShopItem"]={docgenInfo:ShopItem.__docgenInfo,name:"ShopItem",path:"src/components/item/card-item/ShopItem.tsx#ShopItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/lazy-image/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>lazy_image});var _templateObject,esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),useNativeLazyLoading_esm=__webpack_require__("./node_modules/@charlietango/use-native-lazy-loading/lib/useNativeLazyLoading.esm.js"),react_intersection_observer=__webpack_require__("./node_modules/react-intersection-observer/index.mjs"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");const ui=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").zo.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: inherit;\n  background-color: #adbeba;\n  min-width: 250px;\n  min-height: 250px;\n"])));var __jsx=react.createElement,SkeletonImage=function SkeletonImage(){return __jsx(ui,null)};SkeletonImage.displayName="SkeletonImage",SkeletonImage.__docgenInfo={description:"",methods:[],displayName:"SkeletonImage"};const skeleton=SkeletonImage;var _excluded=["width","height","src","alt"],lazy_image_jsx=react.createElement,LazyImage=function LazyImage(_ref){var width=_ref.width,height=_ref.height,src=_ref.src,alt=_ref.alt,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),supportsLazyLoading=(0,useNativeLazyLoading_esm.Z)(),_useInView=(0,react_intersection_observer.YD)({triggerOnce:!0,skip:!1!==supportsLazyLoading,threshold:.1,initialInView:!1}),_useInView2=(0,slicedToArray.Z)(_useInView,2),ref=_useInView2[0],inView=_useInView2[1];return lazy_image_jsx("div",{ref,"data-inview":inView,style:{position:"relative",background:"#9bc0ba",width,height}},inView||supportsLazyLoading?lazy_image_jsx("img",(0,esm_extends.Z)({},rest,{src,alt,loading:"lazy",style:{position:"absolute",width:"100%",height:"100%"}})):lazy_image_jsx(skeleton,null))};LazyImage.displayName="LazyImage",LazyImage.__docgenInfo={description:"",methods:[],displayName:"LazyImage"};const lazy_image=LazyImage;try{lazyimage.displayName="lazyimage",lazyimage.__docgenInfo={description:"",displayName:"lazyimage",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/lazy-image/index.tsx#lazyimage"]={docgenInfo:lazyimage.__docgenInfo,name:"lazyimage",path:"src/components/lazy-image/index.tsx#lazyimage"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/react-intersection-observer/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YD:()=>useInView});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),__defProp=Object.defineProperty,__publicField=(obj,key,value)=>(((obj,key,value)=>{key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value})(obj,"symbol"!=typeof key?key+"":key,value),value),observerMap=new Map,RootIds=new WeakMap,rootId=0,unsupportedValue=void 0;function optionsToId(options){return Object.keys(options).sort().filter((key=>void 0!==options[key])).map((key=>`${key}_${"root"===key?function getRootId(root){return root?(RootIds.has(root)||(rootId+=1,RootIds.set(root,rootId.toString())),RootIds.get(root)):"0"}(options.root):options[key]}`)).toString()}function observe(element,callback,options={},fallbackInView=unsupportedValue){if(void 0===window.IntersectionObserver&&void 0!==fallbackInView){const bounds=element.getBoundingClientRect();return callback(fallbackInView,{isIntersecting:fallbackInView,target:element,intersectionRatio:"number"==typeof options.threshold?options.threshold:0,time:0,boundingClientRect:bounds,intersectionRect:bounds,rootBounds:bounds}),()=>{}}const{id,observer,elements}=function createObserver(options){let id=optionsToId(options),instance=observerMap.get(id);if(!instance){const elements=new Map;let thresholds;const observer=new IntersectionObserver((entries=>{entries.forEach((entry=>{var _a;const inView=entry.isIntersecting&&thresholds.some((threshold=>entry.intersectionRatio>=threshold));options.trackVisibility&&void 0===entry.isVisible&&(entry.isVisible=inView),null==(_a=elements.get(entry.target))||_a.forEach((callback=>{callback(inView,entry)}))}))}),options);thresholds=observer.thresholds||(Array.isArray(options.threshold)?options.threshold:[options.threshold||0]),instance={id,observer,elements},observerMap.set(id,instance)}return instance}(options);let callbacks=elements.get(element)||[];return elements.has(element)||elements.set(element,callbacks),callbacks.push(callback),observer.observe(element),function unobserve(){callbacks.splice(callbacks.indexOf(callback),1),0===callbacks.length&&(elements.delete(element),observer.unobserve(element)),0===elements.size&&(observer.disconnect(),observerMap.delete(id))}}react__WEBPACK_IMPORTED_MODULE_0__.Component;function useInView({threshold,delay,trackVisibility,rootMargin,root,triggerOnce,skip,initialInView,fallbackInView,onChange}={}){var _a;const[ref,setRef]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),callback=react__WEBPACK_IMPORTED_MODULE_0__.useRef(),[state,setState]=react__WEBPACK_IMPORTED_MODULE_0__.useState({inView:!!initialInView,entry:void 0});callback.current=onChange,react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(skip||!ref)return;let unobserve;return unobserve=observe(ref,((inView,entry)=>{setState({inView,entry}),callback.current&&callback.current(inView,entry),entry.isIntersecting&&triggerOnce&&unobserve&&(unobserve(),unobserve=void 0)}),{root,rootMargin,threshold,trackVisibility,delay},fallbackInView),()=>{unobserve&&unobserve()}}),[Array.isArray(threshold)?threshold.toString():threshold,ref,root,rootMargin,triggerOnce,skip,trackVisibility,fallbackInView,delay]);const entryTarget=null==(_a=state.entry)?void 0:_a.target,previousEntryTarget=react__WEBPACK_IMPORTED_MODULE_0__.useRef();ref||!entryTarget||triggerOnce||skip||previousEntryTarget.current===entryTarget||(previousEntryTarget.current=entryTarget,setState({inView:!!initialInView,entry:void 0}));const result=[setRef,state.inView,state.entry];return result.ref=result[0],result.inView=result[1],result.entry=result[2],result}}}]);