"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[452],{"./src/components/common/modals/popup/assets/images/empty.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={src:"static/media/empty.e43912e3.svg",height:500,width:500,blurDataURL:"static/media/empty.e43912e3.svg"}},"./src/App.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BZ:()=>ProductsContext,Xm:()=>ToggleThemeContext,ZP:()=>src_App});var _templateObject,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),lightTheme={name:"light",body:"#E2E2E2",text:"#363537",toggleBorder:"#FFFFFF",gradient:"linear-gradient(#39598A, #79D7ED)",card:"#FFFFFF",topCard:"#FFFFFF"},darkTheme={name:"dark",body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)",card:"#072f4678",topCard:"#83a5c2a3"},taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),GlobalStyles=(0,styled_components_browser_esm.vJ)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    align-items: center;\n    background: ",";\n    color: ",";\n    width: 100%;\n    min-height: 100vh;\n    margin: 0;\n    padding: 0;\n    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n    transition: all 0.3s linear;\n  }"])),(function(_ref){return _ref.theme.body}),(function(_ref2){return _ref2.theme.text})),localization=__webpack_require__("./src/localization/index.ts"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),settings=__webpack_require__("./src/localization/settings.ts"),LocalizationInitiator=function LocalizationInitiator(){var i18n=(0,es.$G)().i18n;return(0,react.useInsertionEffect)((function(){localStorage.setItem(settings.Ji,i18n.language),document.body.parentElement.lang=i18n.language}),[i18n.language]),null};try{LocalizationInitiator.displayName="LocalizationInitiator",LocalizationInitiator.__docgenInfo={description:"",displayName:"LocalizationInitiator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/localization/LocalizationInitiator.tsx#LocalizationInitiator"]={docgenInfo:LocalizationInitiator.__docgenInfo,name:"LocalizationInitiator",path:"src/localization/LocalizationInitiator.tsx#LocalizationInitiator"})}catch(__react_docgen_typescript_loader_error){}var item=__webpack_require__("./src/components/product-list/utils/helpers/item.tsx"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_router_dist=__webpack_require__("./node_modules/react-router/dist/index.js"),Page=__webpack_require__("./src/components/pages/Page.tsx"),Layout=__webpack_require__("./src/components/common/layout/Layout.tsx"),ProductList=__webpack_require__("./src/components/product-list/ProductList.tsx"),__jsx=react.createElement;function ProductPage(){var mockListData=(0,react.useContext)(ProductsContext);return __jsx(Layout.Z,null,__jsx(ProductList.Z,{list:mockListData}))}ProductPage.displayName="ProductPage",ProductPage.__docgenInfo={description:"",methods:[],displayName:"ProductPage"};const products=ProductPage;var ui_templateObject,_templateObject2,_templateObject3,_templateObject4,asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),index_esm=__webpack_require__("./node_modules/yup/index.esm.js"),StyledErrorMessage=styled_components_browser_esm.zo.div(ui_templateObject||(ui_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  font-size: 12px;\n  color: #e91414;\n  width: 400px;\n  margin-top: 0.25rem;\n\n  &:before {\n    content: '❌ ';\n    font-size: 10px;\n  }\n"]))),StyledLabel=styled_components_browser_esm.zo.label(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  font-weight: 500;\n"]))),UiFormStyles=styled_components_browser_esm.zo.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n\n  form {\n    display: flex;\n    flex-direction: column;\n    row-gap: 10px;\n  }\n\n  input {\n    width: 400px;\n    height: 38px;\n    border-radius: 8px;\n  }\n"]))),FormRow=styled_components_browser_esm.zo.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n  position: relative;\n  padding-bottom: 15px;\n"])));const auth_form_ui=Object.assign(UiFormStyles,{Label:StyledLabel,Error:StyledErrorMessage,Row:FormRow});try{ui.displayName="ui",ui.__docgenInfo={description:"",displayName:"ui",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/forms/auth-form/ui/index.tsx#ui"]={docgenInfo:ui.__docgenInfo,name:"ui",path:"src/components/forms/auth-form/ui/index.tsx#ui"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/components/buttons/button/Button.tsx"),_excluded=["label"],auth_form_jsx=react.createElement,MyTextInput=function MyTextInput(_ref){var label=_ref.label,props=(0,objectWithoutProperties.Z)(_ref,_excluded),name=props.name,id=props.id,_useField=(0,formik_esm.U$)(props),_useField2=(0,slicedToArray.Z)(_useField,2),field=_useField2[0],meta=_useField2[1];return auth_form_jsx(auth_form_ui.Row,null,auth_form_jsx(auth_form_ui.Label,{htmlFor:id||name},label),auth_form_jsx("input",(0,esm_extends.Z)({className:"text-input"},field,props)),meta.touched&&meta.error?auth_form_jsx(auth_form_ui.Error,null,meta.error):null)};MyTextInput.displayName="MyTextInput";var SignupForm=function SignupForm(){return auth_form_jsx(auth_form_ui,null,auth_form_jsx("h1",null,"Sign In"),auth_form_jsx(formik_esm.J9,{initialValues:{firstName:"",lastName:"",email:""},validationSchema:index_esm.Ry({firstName:index_esm.Z_().max(15,"Must be 15 characters or less").required("Required"),lastName:index_esm.Z_().max(20,"Must be 20 characters or less").required("Required"),email:index_esm.Z_().email("Invalid email addresss`").required("Required")}),onSubmit:function(){var _ref3=(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(values,_ref2){var setSubmitting;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return setSubmitting=_ref2.setSubmitting,_context.next=3,new Promise((function(r){return setTimeout(r,500)}));case 3:setSubmitting(!1);case 4:case"end":return _context.stop()}}),_callee)})));return function(_x,_x2){return _ref3.apply(this,arguments)}}()},auth_form_jsx(formik_esm.l0,null,auth_form_jsx(MyTextInput,{label:"First Name",name:"firstName",type:"text",placeholder:"Jane"}),auth_form_jsx(MyTextInput,{label:"Last Name",name:"lastName",type:"text",placeholder:"Doe"}),auth_form_jsx(MyTextInput,{label:"Email Address",name:"email",type:"email",placeholder:"jane@formik.com"}),auth_form_jsx(Button.z,{type:"submit",label:"Submit"}))))};SignupForm.displayName="SignupForm",SignupForm.__docgenInfo={description:"",methods:[],displayName:"SignupForm"};const auth_form=SignupForm;var profile_jsx=react.createElement,ProfilePage=function ProfilePage(){return profile_jsx(Layout.Z,null,profile_jsx(auth_form,null))};ProfilePage.displayName="ProfilePage",ProfilePage.__docgenInfo={description:"",methods:[],displayName:"ProfilePage"};const profile=ProfilePage;var ShopItem=__webpack_require__("./src/components/item/card-item/ShopItem.tsx"),cart_jsx=react.createElement,CartPage=function CartPage(){return cart_jsx(Layout.Z,null,[{name:"Blushing Bromeliad",imgSrc:"https://plus.unsplash.com/premium_photo-1676321046535-848a104819ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90dGVkJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",sku:1995751877966,price:119,itemCount:2},{name:"Blushing Bromeliad 121123",imgSrc:"https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG90dGVkJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",sku:1995751877966,price:119,itemCount:2}].map((function(item){return cart_jsx(ShopItem.Z,(0,esm_extends.Z)({key:item.id},item))})))};CartPage.displayName="CartPage",CartPage.__docgenInfo={description:"",methods:[],displayName:"CartPage"};const cart=CartPage;var popup=__webpack_require__("./src/components/common/modals/popup/index.tsx"),modal_jsx=react.createElement,ModalPage=function ModalPage(){return modal_jsx(Layout.Z,null,modal_jsx(popup.Z,null))};ModalPage.displayName="ModalPage",ModalPage.__docgenInfo={description:"",methods:[],displayName:"ModalPage"};const modal=ModalPage;var routind_jsx=react.createElement,AppRoutes=function AppRoutes(){return routind_jsx(dist.VK,null,routind_jsx(react_router_dist.Z5,null,routind_jsx(react_router_dist.AW,{path:"/",element:routind_jsx(Page.T,null)}),routind_jsx(react_router_dist.AW,{path:"/products",element:routind_jsx(products,null)}),routind_jsx(react_router_dist.AW,{path:"/profile",element:routind_jsx(profile,null)}),routind_jsx(react_router_dist.AW,{path:"/cart",element:routind_jsx(cart,null)}),routind_jsx(react_router_dist.AW,{path:"/modal",element:routind_jsx(modal,null)})))};AppRoutes.displayName="AppRoutes",AppRoutes.__docgenInfo={description:"",methods:[],displayName:"AppRoutes"};const routind=AppRoutes;var App_jsx=react.createElement,ProductsContext=(0,react.createContext)(null),LangContext=(0,react.createContext)(null),ToggleThemeContext=(0,react.createContext)(null);function App(){var _useDarkMode=function useDarkMode(){var _useState=(0,react.useState)("light"),theme=_useState[0],setTheme=_useState[1],_useState2=(0,react.useState)(!1),componentMounted=_useState2[0],setComponentMounted=_useState2[1],setMode=(0,react.useCallback)((function(mode){window.localStorage.setItem("theme",mode),setTheme(mode)}),[setTheme]),toggleTheme=(0,react.useCallback)((function(){setMode("light"===theme?"dark":"light")}),[setMode,theme]);return(0,react.useEffect)((function(){var localTheme=window.localStorage.getItem("theme");window.matchMedia("(prefers-color-scheme: dark)").matches&&!localTheme?setMode("dark"):localTheme?setTheme(localTheme):setMode("light"),setComponentMounted(!0)}),[setMode]),[theme,toggleTheme,componentMounted]}(),_useDarkMode2=(0,slicedToArray.Z)(_useDarkMode,3),theme=_useDarkMode2[0],toggleTheme=_useDarkMode2[1],componentMounted=_useDarkMode2[2],lang=(0,es.$G)().i18n.language===localization.go.ru?localization.go.ru:localization.go.en,mockListData=(0,react.useMemo)((function(){return(0,item.Z)(100,lang)}),[lang]),currentTheme=(0,react.useMemo)((function(){return"light"===theme?lightTheme:darkTheme}),[theme]);return componentMounted?App_jsx(styled_components_browser_esm.f6,{theme:currentTheme},App_jsx(LangContext.Provider,{value:lang},App_jsx(ToggleThemeContext.Provider,{value:toggleTheme},App_jsx(ProductsContext.Provider,{value:mockListData},App_jsx(GlobalStyles,null),App_jsx(LocalizationInitiator,null),App_jsx(routind,null))))):App_jsx("div",null)}App.displayName="App",App.__docgenInfo={description:"",methods:[],displayName:"App"};const src_App=App},"./src/components/common/layout/Layout.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _header_Header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/header/Header.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/common/layout/ui/index.tsx"),_App__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/localization/index.ts"),__webpack_require__("./src/App.tsx")),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Layout=function Layout(_ref){var children=_ref.children,toggleTheme=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_App__WEBPACK_IMPORTED_MODULE_4__.Xm);return __jsx(_ui__WEBPACK_IMPORTED_MODULE_2__.Z,null,__jsx(_ui__WEBPACK_IMPORTED_MODULE_2__.Z.Container,null,__jsx(_header_Header__WEBPACK_IMPORTED_MODULE_1__.h,{onCreateAccount:function onCreateAccount(){console.log("Create account")},onLogin:function onLogin(){console.log("Login")},onLogout:function onLogout(){console.log("Logout")},toggleTheme}),__jsx("div",null,children)))};Layout.displayName="Layout",Layout.__docgenInfo={description:"",methods:[],displayName:"Layout"};const __WEBPACK_DEFAULT_EXPORT__=Layout;try{Layout.displayName="Layout",Layout.__docgenInfo={description:"",displayName:"Layout",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/layout/Layout.tsx#Layout"]={docgenInfo:Layout.__docgenInfo,name:"Layout",path:"src/components/common/layout/Layout.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/layout/ui/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,_home_runner_work_yushato2_github_io_yushato2_github_io_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_constants_media_query__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/constants/media-query.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),LayoutWrapper=styled_components__WEBPACK_IMPORTED_MODULE_0__.zo.div(_templateObject||(_templateObject=(0,_home_runner_work_yushato2_github_io_yushato2_github_io_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  padding-inline: 40px;\n  box-sizing: border-box;\n  min-width: 100%;\n  padding-bottom: 60px;\n  background: ",";\n  color: ",";\n\n  @media "," {\n    padding-inline: 20px;\n    margin-bottom: 40px;\n  }\n\n  @media "," {\n    padding-inline: 15px;\n    margin-bottom: 30px;\n  }\n"])),(function(_ref){return _ref.theme.body}),(function(_ref2){return _ref2.theme.text}),_constants_media_query__WEBPACK_IMPORTED_MODULE_2__.wQ,_constants_media_query__WEBPACK_IMPORTED_MODULE_2__.dG),LayoutContainer=styled_components__WEBPACK_IMPORTED_MODULE_0__.zo.div(_templateObject2||(_templateObject2=(0,_home_runner_work_yushato2_github_io_yushato2_github_io_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 90vh;\n  max-width: 1300px;\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n  margin-inline: auto;\n\n  @media (max-width: 1300px) {\n    max-width: 100%;\n    padding-inline: 30px;\n    box-sizing: border-box;\n  }\n\n  @media "," {\n    padding-inline: 15px;\n  }\n\n  @media "," {\n    padding-inline: 0;\n  }\n"])),_constants_media_query__WEBPACK_IMPORTED_MODULE_2__.um,_constants_media_query__WEBPACK_IMPORTED_MODULE_2__.dG);const __WEBPACK_DEFAULT_EXPORT__=Object.assign(LayoutWrapper,{Container:LayoutContainer});try{ui.displayName="ui",ui.__docgenInfo={description:"",displayName:"ui",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/layout/ui/index.tsx#ui"]={docgenInfo:ui.__docgenInfo,name:"ui",path:"src/components/common/layout/ui/index.tsx#ui"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/modals/popup/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>popup});var _templateObject,_templateObject2,react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./src/components/buttons/button/Button.tsx"),empty=__webpack_require__("./src/components/common/modals/popup/assets/images/empty.svg"),ModalPopup=__webpack_require__("./src/components/common/modals/popup/ModalPopup.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),PopupInput=styled_components_browser_esm.zo.input(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n  height: 40px;\n  padding: 0 10px;\n  font-size: 14px;\n  line-height: 16px;\n  border-radius: 6px;\n  background: #fff;\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);\n  border-radius: 5px;\n  border: 1px solid #eaeaea;\n  color: #3d3d3d;\n  box-sizing: border-box;\n\n  &::placeholder {\n    color: #acacac;\n  }\n\n  &:hover,\n  &:focus {\n    border: 1px solid #46a358;\n    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);\n    outline: none;\n  }\n"]))),PopupWrapper=styled_components_browser_esm.zo.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  position: relative;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n"])));const popup_ui=Object.assign(PopupWrapper,{Input:PopupInput});try{ui.displayName="ui",ui.__docgenInfo={description:"",displayName:"ui",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/modals/popup/ui/index.tsx#ui"]={docgenInfo:ui.__docgenInfo,name:"ui",path:"src/components/common/modals/popup/ui/index.tsx#ui"})}catch(__react_docgen_typescript_loader_error){}var console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement,Popup=function Popup(){var _useState=(0,react.useState)(!1),isOpen=_useState[0],setIsOpen=_useState[1],_useState2=(0,react.useState)(""),text=_useState2[0],setText=_useState2[1],inputRef=(0,react.useRef)(null),closeModal=function closeModal(){setIsOpen(!1)};return(0,react.useEffect)((function(){var keyDownHandler=function keyDownHandler(e){"Escape"===e.key&&(console.log("User pressed: ",e.key),e.preventDefault(),closeModal())};return document.addEventListener("keydown",keyDownHandler),function(){document.removeEventListener("keydown",keyDownHandler)}}),[]),(0,react.useEffect)((function(){var _inputRef$current;null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current||_inputRef$current.focus()}),[]),__jsx(popup_ui,null,__jsx(popup_ui.Input,{ref:inputRef,type:"search",onChange:function changeTextValue(e){setText(e.target.value)},placeholder:"Enter text"}),__jsx(Button.z,{label:"Open Modal",onClick:function openModal(){setIsOpen(!0)},primary:!0,type:"button",viewtype:"default"}),__jsx(ModalPopup.Z,{visible:isOpen,onClose:closeModal},Boolean(!text)&&__jsx("img",{src:empty.Z,alt:"empty",width:400,height:400}),__jsx("p",null,text)))};Popup.displayName="Popup",Popup.__docgenInfo={description:"",methods:[],displayName:"Popup"};const popup=Popup},"./src/components/item/card-item/ShopItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>card_item_ShopItem});var react=__webpack_require__("./node_modules/react/index.js"),ShopButton=__webpack_require__("./src/components/buttons/card-button/ShopButton.tsx"),__jsx=react.createElement,TrashIcon=function TrashIcon(){return __jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},__jsx("g",{id:"Iconly/Curved/Delete"},__jsx("g",{id:"Delete"},__jsx("path",{id:"Stroke 1",d:"M18.8892 9.55409C18.8892 17.5731 20.0435 21.1979 12.2797 21.1979C4.5149 21.1979 5.693 17.5731 5.693 9.55409",stroke:"#727272",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),__jsx("path",{id:"Stroke 3",d:"M20.3651 6.47981H4.2146",stroke:"#727272",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),__jsx("path",{id:"Stroke 5",d:"M15.7148 6.47981C15.7148 6.47981 16.2434 2.7141 12.2891 2.7141C8.33578 2.7141 8.86435 6.47981 8.86435 6.47981",stroke:"#727272",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))))};TrashIcon.displayName="TrashIcon",TrashIcon.__docgenInfo={description:"",methods:[],displayName:"TrashIcon"};const trash=TrashIcon;var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ShopItemWrapper=styled_components_browser_esm.zo.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: grid;\n  grid-template-columns: 70px 3fr 1fr 1fr 1fr 40px;\n  column-gap: 14px;\n  background: #fbfbfb;\n  color: #a5a5a5;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 16px;\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  margin-bottom: 10px;\n\n  p {\n    padding: 0;\n    margin: 0;\n  }\n"]))),ShopItemName=styled_components_browser_esm.zo.p(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  color: #3d3d3d;\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n"]))),ShopItemSku=styled_components_browser_esm.zo.p(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  color: #a5a5a5;\n  font-size: 14px;\n\n  span {\n    text-transform: uppercase;\n    color: #a5a5a5;\n  }\n"]))),ShopItemInfo=styled_components_browser_esm.zo.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n"]))),ShopItemPrice=styled_components_browser_esm.zo.p(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  color: #727272;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  text-align: center;\n"]))),ShopItemTotal=styled_components_browser_esm.zo.p(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  color: #46a358;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  text-align: center;\n"]))),ShopItemTrashButton=styled_components_browser_esm.zo.button(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background-color: transparent;\n  text-align: center;\n  margin-right: 20px;\n  align-self: center;\n\n  @media (hover: hover) {\n    &:hover {\n      svg path {\n        fill: #46a358;\n      }\n    }\n  }\n\n  &:active {\n    svg path {\n      fill: #a34646;\n    }\n  }\n\n  svg {\n    width: 24px;\n    height: 24px;\n  }\n"])));const card_item_ui=Object.assign(ShopItemWrapper,{Name:ShopItemName,Sku:ShopItemSku,Info:ShopItemInfo,Price:ShopItemPrice,Total:ShopItemTotal,TrashButton:ShopItemTrashButton});try{ui.displayName="ui",ui.__docgenInfo={description:"",displayName:"ui",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/item/card-item/ui/index.tsx#ui"]={docgenInfo:ui.__docgenInfo,name:"ui",path:"src/components/item/card-item/ui/index.tsx#ui"})}catch(__react_docgen_typescript_loader_error){}var lazy_image=__webpack_require__("./src/components/lazy-image/index.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),ShopItem_jsx=react.createElement,ShopItem=function ShopItem(_ref){var _ref$imgSrc=_ref.imgSrc,imgSrc=void 0===_ref$imgSrc?"":_ref$imgSrc,_ref$name=_ref.name,name=void 0===_ref$name?"":_ref$name,_ref$price=_ref.price,price=void 0===_ref$price?0:_ref$price,_ref$sku=_ref.sku,sku=void 0===_ref$sku?0:_ref$sku,_ref$itemCount=_ref.itemCount,itemCount=void 0===_ref$itemCount?0:_ref$itemCount,total=price*itemCount;return ShopItem_jsx(card_item_ui,null,ShopItem_jsx(lazy_image.Z,{src:imgSrc,alt:name,width:70,height:70}),ShopItem_jsx(card_item_ui.Info,null,ShopItem_jsx(card_item_ui.Name,null,name),ShopItem_jsx(card_item_ui.Sku,null,ShopItem_jsx("span",null,"sku"),sku)),ShopItem_jsx(card_item_ui.Price,null,"$",price),ShopItem_jsx(ShopButton.Z,{itemCount}),ShopItem_jsx(card_item_ui.Total,null,"$",total),ShopItem_jsx(card_item_ui.TrashButton,{onClick:function deleteFromCart(){console.log("Delete from cart")}},ShopItem_jsx(trash,{"aria-label":"Delete from cart"})))};ShopItem.displayName="ShopItem",ShopItem.__docgenInfo={description:"",methods:[],displayName:"ShopItem",props:{imgSrc:{defaultValue:{value:"''",computed:!1},required:!1},name:{defaultValue:{value:"''",computed:!1},required:!1},price:{defaultValue:{value:"0",computed:!1},required:!1},sku:{defaultValue:{value:"0",computed:!1},required:!1},itemCount:{defaultValue:{value:"0",computed:!1},required:!1}}};const card_item_ShopItem=ShopItem;try{ShopItem.displayName="ShopItem",ShopItem.__docgenInfo={description:"",displayName:"ShopItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"number"}},imgSrc:{defaultValue:{value:""},description:"",name:"imgSrc",required:!1,type:{name:"string"}},itemCount:{defaultValue:{value:"0"},description:"",name:"itemCount",required:!1,type:{name:"number"}},name:{defaultValue:{value:""},description:"",name:"name",required:!1,type:{name:"string"}},price:{defaultValue:{value:"0"},description:"",name:"price",required:!1,type:{name:"number"}},sku:{defaultValue:{value:"0"},description:"",name:"sku",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/item/card-item/ShopItem.tsx#ShopItem"]={docgenInfo:ShopItem.__docgenInfo,name:"ShopItem",path:"src/components/item/card-item/ShopItem.tsx#ShopItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/pages/Page.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>Page});var _common_layout_Layout__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/common/layout/Layout.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_product_list_ProductList__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/product-list/ProductList.tsx"),_App__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/App.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Page=function Page(){var mockListData=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_App__WEBPACK_IMPORTED_MODULE_3__.BZ);return __jsx(_common_layout_Layout__WEBPACK_IMPORTED_MODULE_1__.Z,null,__jsx(_product_list_ProductList__WEBPACK_IMPORTED_MODULE_2__.Z,{list:mockListData}))};Page.displayName="Page",Page.__docgenInfo={description:"",methods:[],displayName:"Page"};try{Page.displayName="Page",Page.__docgenInfo={description:"",displayName:"Page",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/pages/Page.tsx#Page"]={docgenInfo:Page.__docgenInfo,name:"Page",path:"src/components/pages/Page.tsx#Page"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/product-list/ProductList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>product_list_ProductList});var _templateObject,_templateObject2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),ShortItem=__webpack_require__("./src/components/item/short/ShortItem.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),UiProductList=styled_components_browser_esm.zo.ul(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n  row-gap: 20px;\n  column-gap: 15px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n"]))),EmptyList=styled_components_browser_esm.zo.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  row-gap: 30px;\n\n  p {\n    color: #3d3d3d;\n    font-size: 15px;\n    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-style: normal;\n    font-weight: 500;\n    line-height: 16px;\n    margin: 0;\n    padding: 0;\n  }\n"])));const ui=UiProductList;var value_tests=__webpack_require__("./src/utils/helpers/value-tests.ts"),empty=__webpack_require__("./src/components/common/modals/popup/assets/images/empty.svg"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),i18next=__webpack_require__("./node_modules/i18next/dist/esm/i18next.js"),lazy_image=__webpack_require__("./src/components/lazy-image/index.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}var ProductListComponent=function ProductListComponent(_ref){var list=_ref.list,onAddToCart=function onAddToCart(id){console.log("Добавить в корзину",id)},onAddToFavorite=function onAddToFavorite(id){console.log("Добавить в избранное",id)};return!list||(0,value_tests.kf)(list)?__jsx(EmptyList,null,__jsx(lazy_image.Z,{src:empty.Z,alt:"empty",width:400,height:400}),__jsx("p",null,(0,i18next.t)("components.productList.empty"))):__jsx(ui,null,list.map((function(item,index){var itemData=function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({onAddToCart,onAddToFavorite},item.data);return __jsx(ShortItem.Z,{key:item.id,data:itemData,id:item.id,currentIndex:index})})))};ProductListComponent.displayName="ProductListComponent";const product_list_ProductList=(0,es.Zh)()(ProductListComponent);ProductListComponent.__docgenInfo={description:"",methods:[],displayName:"ProductListComponent"};try{ProductListComponent.displayName="ProductListComponent",ProductListComponent.__docgenInfo={description:"",displayName:"ProductListComponent",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"ShortItemProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/product-list/ProductList.tsx#ProductListComponent"]={docgenInfo:ProductListComponent.__docgenInfo,name:"ProductListComponent",path:"src/components/product-list/ProductList.tsx#ProductListComponent"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/product-list/utils/helpers/item.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>item});var mockData=__webpack_require__("./src/components/slider/mockData/index.ts");const helpers_image=function getRandomImages(images,count){for(var randomImages=[],i=0;i<count;i++){var randomIndex=Math.floor(Math.random()*images.length);randomImages.push(images[randomIndex])}return randomImages};var uuidv4=__webpack_require__("./node_modules/uuid/dist/commonjs-browser/index.js").v4,generateRandomText=function generateRandomText(length,lang){var characters;characters="en"===lang?"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ":"абвгдеёжзийклмнопрстуфхцчшщъыьэюя";for(var title="";title.length<length;){for(var remainingLength=length-title.length,wordLength=Math.min(remainingLength,Math.floor(15*Math.random())+1),word="",i=0;i<wordLength;i++){word+=characters[Math.floor(Math.random()*characters.length)]}if((title+=word).length<length)title+=Math.random()<.5?" ":"-"}return title};const item=function generateRandomData(count,lang){for(var generatedData=[],i=0;i<count;i++){var randomOldPrice=Math.floor(1e3*Math.random())+1,randomNewPrice=Math.floor(1e3*Math.random())+1,randomTitleLength=Math.floor(91*Math.random())+10,randomDescriptionLength=Math.floor(201*Math.random())+100,imagesLength=Math.floor(Math.random()*mockData.W.length)+1,item={id:uuidv4(),data:{oldPrice:randomOldPrice,newPrice:randomNewPrice,discount:randomOldPrice>randomNewPrice?Math.floor((randomOldPrice-randomNewPrice)/randomOldPrice*100):null,title:generateRandomText(randomTitleLength,lang),description:generateRandomText(randomDescriptionLength,lang),images:helpers_image(mockData.W,imagesLength)}};generatedData.push(item)}return generatedData}}}]);