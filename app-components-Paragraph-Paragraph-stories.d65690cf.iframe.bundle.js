"use strict";(self.webpackChunkpersonal_frontend=self.webpackChunkpersonal_frontend||[]).push([[887],{"./src/app/components/Paragraph/Paragraph.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MidParaGraphBlock:()=>MidParaGraphBlock,Primary:()=>Primary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_MidParaGraphBlock$pa,_MidParaGraphBlock$pa2,_Users_nathanharris_Documents_personal_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Paragraph/index.js"),_mainText_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/components/Paragraph/mainText.json"),_midParagraphText_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/components/Paragraph/midParagraphText.json");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_nathanharris_Documents_personal_frontend_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Molecules/Paragraph",component:___WEBPACK_IMPORTED_MODULE_1__.n,tags:["autodocs"]};var Primary={args:{textData:_mainText_json__WEBPACK_IMPORTED_MODULE_2__}},MidParaGraphBlock={args:{textData:_midParagraphText_json__WEBPACK_IMPORTED_MODULE_3__}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    textData\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),MidParaGraphBlock.parameters=_objectSpread(_objectSpread({},MidParaGraphBlock.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MidParaGraphBlock$pa=MidParaGraphBlock.parameters)||void 0===_MidParaGraphBlock$pa?void 0:_MidParaGraphBlock$pa.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    textData: midParagraphData\n  }\n}"},null===(_MidParaGraphBlock$pa2=MidParaGraphBlock.parameters)||void 0===_MidParaGraphBlock$pa2||null===(_MidParaGraphBlock$pa2=_MidParaGraphBlock$pa2.docs)||void 0===_MidParaGraphBlock$pa2?void 0:_MidParaGraphBlock$pa2.source)})})},"./src/app/components/Paragraph/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>Paragraph});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/components/Text/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Paragraph=function Paragraph(_ref){var textData=_ref.textData;return __jsx("div",null,textData.map((function(data){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_Text__WEBPACK_IMPORTED_MODULE_1__.x,data,data.text," "))})))};Paragraph.displayName="Paragraph",Paragraph.propTypes={textData:prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({color:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,text:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,strong:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,size:prop_types__WEBPACK_IMPORTED_MODULE_2___default().string,linebreak:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool,light:prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool}))},Paragraph.__docgenInfo={description:"",methods:[],displayName:"Paragraph",props:{textData:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{color:{name:"string",required:!1},text:{name:"string",required:!1},strong:{name:"bool",required:!1},size:{name:"string",required:!1},linebreak:{name:"bool",required:!1},light:{name:"bool",required:!1}}}},required:!1}}}},"./src/app/components/Text/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Text_text=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/app/components/Text/text.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Text_text.Z,options);Text_text.Z&&Text_text.Z.locals&&Text_text.Z.locals;var __jsx=react.createElement,Text=function Text(_ref){var _ref$color=_ref.color,color=void 0===_ref$color?"black":_ref$color,children=_ref.children,_ref$strong=_ref.strong,strong=void 0!==_ref$strong&&_ref$strong,_ref$size=_ref.size,size=void 0===_ref$size?"1.5em":_ref$size,_ref$lineBreak=_ref.lineBreak,lineBreak=void 0!==_ref$lineBreak&&_ref$lineBreak,_ref$fontWeight=_ref.fontWeight,fontWeight=void 0===_ref$fontWeight?"normal":_ref$fontWeight,_ref$light=_ref.light,light=void 0!==_ref$light&&_ref$light,styles={color,fontSize:size,fontWeight:fontWeight=light?"100":fontWeight};return __jsx(react.Fragment,null,strong?__jsx("strong",null,__jsx("span",{className:"customText",style:styles},children)):__jsx("span",{className:classnames_default()("customText",{"light-text":light}),style:styles},children),lineBreak?__jsx("br",null):"")};Text.propTypes={color:prop_types_default().string,children:prop_types_default().string,strong:prop_types_default().bool,size:prop_types_default().string,linebreak:prop_types_default().bool,fontweight:prop_types_default().string,light:prop_types_default().bool},Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{color:{defaultValue:{value:'"black"',computed:!1},description:"",type:{name:"string"},required:!1},strong:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},size:{defaultValue:{value:'"1.5em"',computed:!1},description:"",type:{name:"string"},required:!1},lineBreak:{defaultValue:{value:"false",computed:!1},required:!1},fontWeight:{defaultValue:{value:'"normal"',computed:!1},required:!1},light:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{description:"",type:{name:"string"},required:!1},linebreak:{description:"",type:{name:"bool"},required:!1},fontweight:{description:"",type:{name:"string"},required:!1}}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/app/components/Text/text.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_fontsource_roboto_index_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@fontsource/roboto/index.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@fontsource/roboto/300.css"),_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_fontsource_roboto_100_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/@fontsource/roboto/100.css"),___CSS_LOADER_EXPORT___=_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_fontsource_roboto_index_css__WEBPACK_IMPORTED_MODULE_2__.Z),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_fontsource_roboto_300_css__WEBPACK_IMPORTED_MODULE_3__.Z),___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_7_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_fontsource_roboto_100_css__WEBPACK_IMPORTED_MODULE_4__.Z),___CSS_LOADER_EXPORT___.push([module.id,".customText{\n    font-family: Roboto;\n    font-weight: 300;\n}\n\n.customText.light{\n    font-weight: 100;\n}","",{version:3,sources:["webpack://./src/app/components/Text/text.css"],names:[],mappings:"AAKA;IACI,mBAAmB;IACnB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;AACpB",sourcesContent:['@import "~@fontsource/roboto";\n@import "~@fontsource/roboto/300.css";\n@import "~@fontsource/roboto/100.css"; \n\n\n.customText{\n    font-family: Roboto;\n    font-weight: 300;\n}\n\n.customText.light{\n    font-weight: 100;\n}'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/app/components/Paragraph/mainText.json":module=>{module.exports=JSON.parse('[{"text":"Pixel Perfect","size":"5em"},{"text":"UI","size":"5em","color":"#f9009e","strong":true},{"text":"and","size":"5em","lineBreak":true},{"text":"Data Visualization","size":"5em","lineBreak":true,"color":"#007dff","strong":true},{"text":"Engineering.","size":"5em"}]')},"./src/app/components/Paragraph/midParagraphText.json":module=>{module.exports=JSON.parse('[{"text":"6+ years of Experience with Front End and SaaS engineering expereince including","size":"2.25em","lineBreak":true,"light":true},{"text":"React, D3, Typescript, SASS, Jest, and More.","size":"2.25em","light":true}]')}}]);