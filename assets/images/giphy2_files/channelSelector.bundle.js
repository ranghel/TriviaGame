webpackJsonp([1],{0:function(e,t,n){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var r=n(26),i=t(r),o=n(55),a=t(o),l=n(263),s=n(188),c=n(613),u=t(c),p=n(620),d=n(622),f=t(d);e.Giphy=e.Giphy||{},e.Giphy.renderChannelSelector=function(e,t){u["default"].dispatch((0,p.fetchRootChannel)()).then(function(n){u["default"].dispatch((0,p.initChannelSelector)(n)),u["default"].dispatch((0,p.showChannelSection)()),a["default"].render(i["default"].createElement(l.AppContainer,null,i["default"].createElement(s.Provider,{store:u["default"]},i["default"].createElement(f["default"],{isDark:t.isDark,autoClear:t.autoClear,onSave:t.onSave}))),e),t.channelId&&u["default"].dispatch((0,p.saveChannel)(t.channelId))})}}).call(t,function(){return this}())},613:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(195),o=n(219),a=r(o),l=n(225),s=r(l),c=n(614),u=r(c),p=n(621),d=r(p),f=!1,h=f?(0,i.applyMiddleware)(s["default"],(0,a["default"])({collapsed:!0})):(0,i.applyMiddleware)(s["default"]),y=(0,i.compose)(h,window.devToolsExtension?window.devToolsExtension():function(e){return e})(i.createStore);t["default"]=y((0,i.combineReducers)({channelSelectorItems:u["default"],isFetching:d["default"]}))},614:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(4),o=r(i),a=n(615),l=r(a),s=n(616),c=r(s),u=n(618),p=r(u),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=n(620);t["default"]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{channels:{},pagination:[],selectedItem:{},savedItem:{}},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f.INIT_CHANNEL_SELECTOR:var n=d({},e.channels);return(0,p["default"])(t.channels,function(e){n[e.id]=e}),d({},e,{breadcrumbs:[],channels:n,rootChannels:t.channels});case f.UPDATE_CHANNEL_SECTION:var r,i=d({},e.channels[t.parentId]);i.children=[];var a=d({},e.channels,(r={},r[i.id]=i,r));return(0,p["default"])(t.channels,function(e){a[e.id]=e,i.children.push(e.id)}),d({},e,{channels:a});case f.SHOW_CHANNEL_SECTION:var s=t.id;if(!s)return d({},e,{breadcrumbs:[],pagination:[{id:0,children:e.rootChannels}],selectedItem:{children:e.rootChannels}});var u=d({},e.channels[s]);u.children=u.children?u.children.map(function(t){return e.channels[t]||t}):[];var h=u.breadcrumbs.map(function(t){return d({},e.channels[t.id])});h.push(u);var y=(0,c["default"])(h,function(e){return(0,o["default"])(e.children)}),g=(0,l["default"])(y,Math.max(y.length-2,0));return(0,p["default"])(g,function(t){t.children=t.children?t.children.map(function(t){return e.channels[t]||t}):[]}),d({},e,{selectedItem:u,pagination:g,breadcrumbs:h});case f.SAVE_CHANNEL:var m=t.id;return d({},e,{savedItem:m?e.channels[m]:{}});default:return e}}},615:function(e,t,n){function r(e,t,n){var r=e?e.length:0;return r?(n&&"number"!=typeof n&&o(e,t,n)?(t=0,n=r):(t=null==t?0:a(t),n=void 0===n?r:a(n)),i(e,t,n)):[]}var i=n(2),o=n(548),a=n(3);e.exports=r},616:function(e,t,n){function r(e,t){var n=l(e)?i:o;return n(e,s(a(t,3)))}var i=n(305),o=n(306),a=n(313),l=n(17),s=n(617);e.exports=r},617:function(e,t){function n(e){if("function"!=typeof e)throw new TypeError(r);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}var r="Expected a function";e.exports=n},618:function(e,t,n){function r(e,t){var n=l(e)?i:o;return n(e,a(t,3))}var i=n(619),o=n(307),a=n(313),l=n(17);e.exports=r},619:function(e,t){function n(e,t){for(var n=-1,r=e?e.length:0;++n<r&&t(e[n],n,e)!==!1;);return e}e.exports=n},620:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function o(e){return e.json()}function a(e){return function(t){return t((0,u.isFetching)(!0)),(0,c["default"])("/ajax/channels/"+e,m).then(i).then(o).then(function(e){var t=e.result;return t.channels}).then(function(n){t((0,u.isFetching)(!1)),t(y(e,n)),t(g(e))})}}function l(){return function(e){return e((0,u.isFetching)(!0)),(0,c["default"])("/ajax/channels/",m).then(i).then(o).then(function(t){var n=t.result;return e((0,u.isFetching)(!1)),n.channels})}}t.__esModule=!0,t.FETCH_ROOT_CHANNEL_ITEMS=t.FETCH_CHANNEL_ITEMS=t.saveChannel=t.showChannelSection=t.updateChannelSection=t.SAVE_CHANNEL=t.UPDATE_CHANNEL_SECTION=t.SHOW_CHANNEL_SECTION=t.initChannelSelector=t.INIT_CHANNEL_SELECTOR=void 0,t.fetchChannel=a,t.fetchRootChannel=l;var s=n(274),c=r(s),u=n(621),p=t.INIT_CHANNEL_SELECTOR="INIT_CHANNEL_SELECTOR",d=(t.initChannelSelector=function(e){return{type:p,channels:e}},t.SHOW_CHANNEL_SECTION="SHOW_CHANNEL_SECTION"),f=t.UPDATE_CHANNEL_SECTION="UPDATE_CHANNEL_SECTION",h=t.SAVE_CHANNEL="SAVE_CHANNEL",y=t.updateChannelSection=function(e,t){return{type:f,parentId:e,channels:t}},g=t.showChannelSection=function(e){return{type:d,id:e}},m=(t.saveChannel=function(e){return{type:h,id:e}},{method:"get",headers:{Accept:"application/json",Authorization:"ApiKey giphy-website:e0771ed7b244ec9c942bea646ad08e6bf514f51a","X-Requested-With":"XMLHttpRequest"},credentials:"same-origin"});t.FETCH_CHANNEL_ITEMS="FETCH_CHANNEL_ITEMS",t.FETCH_ROOT_CHANNEL_ITEMS="FETCH_ROOT_CHANNEL_ITEMS"},621:function(e,t){"use strict";t.__esModule=!0;var n=t.IS_FETCHING="IS_FETCHING";t["default"]=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case n:return t.fetching;default:return e}},t.isFetching=function(e){return{type:n,fetching:e}}},622:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t["default"]=void 0;var l,s,c=n(26),u=(r(c),n(188)),p=n(623),d=r(p),f=n(620),h=(l=(0,u.connect)(function(e){var t=e.channelSelectorItems,n=e.isFetching;return{selectedItem:t.selectedItem,savedItem:t.savedItem,breadcrumbs:t.breadcrumbs,pagination:t.pagination,isFetching:n}},function(e){return{resetItems:function(){return e((0,f.showChannelSection)())},fetchItems:function(){return e()},saveItem:function(t){return e((0,f.saveChannel)(t?t.id:null))},itemClick:function(t){e(t?t.children?(0,f.showChannelSection)(t.id):(0,f.fetchChannel)(t.id):(0,f.showChannelSection)())}}}),l(s=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return a(t,e),t}(d["default"]))||s);t["default"]=h},623:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t,n,r,i){var o={};return Object.keys(r).forEach(function(e){o[e]=r[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}t.__esModule=!0,t["default"]=void 0;var s,c,u,p,d,f=n(4),h=r(f),y=n(304),g=r(y),m=n(624),b=r(m),_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v=n(26),C=r(v),x=n(355),k=n(289),w=r(k),I=n(625),E=r(I),T=n(629),N=r(T),O=n(633),S=r(O),D=n(639),R=r(D),P=n(642),A=r(P),F=v.PropTypes.array,H=v.PropTypes.object,B=v.PropTypes.func,j=v.PropTypes.bool,L=(s=(0,w["default"])(["selectedItem","savedItem","breadcrumbs","pagination","filterText","autoClear","isFetching","isDark","currentChannel","currentOpenId","isOpen"]),s((d=p=function(e){function t(){var n,r,a;i(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return n=r=o(this,e.call.apply(e,[this].concat(s))),r.state={currentChannel:{},currentOpenId:"",filterText:"",isOpen:!1},a=n,o(r,a)}return a(t,e),t.prototype.saveItemClick=function(){var e=this.props,t=e.autoClear,n=e.saveItem,r=e.resetItems,i=e.onSave,o=this.state.currentChannel;return t?(this.setState({isOpen:!1}),i(o),void r()):void n(o)},t.prototype.resetSavedItem=function(){this.props.resetItems(),this.props.saveItem()},t.prototype.saveItem=function(){this.setState({isOpen:!1})},t.prototype.componentWillReceiveProps=function(e){if(e.selectedItem!==this.props.selectedItem){var t=e.selectedItem,n=(0,b["default"])(t,"id")?t:{};this.setState({currentChannel:n})}e.savedItem!==this.props.savedItem&&((0,h["default"])(e.savedItem)||this.setState({isOpen:!1}),this.props.onSave(e.savedItem))},t.prototype.componentDidUpdate=function(e){var t=e.pagination[e.pagination.length-1],n=this.props.pagination[this.props.pagination.length-1];t&&n&&t.id!==n.id&&this.setState({filterText:""})},t.prototype.getFilteredChannels=function(){var e=this.state.filterText,t=this.props.pagination;if(!e)return t;for(var n=[],r=e.toUpperCase(),i=0;i<t.length;i++)if(i===t.length-1){var o=t[i];n.push(_({},o,{children:(0,g["default"])(o.children,function(e){var t=e.display_name;return t.toUpperCase().indexOf(r)>-1})}))}else n.push(t[i]);return n},t.prototype.render=function(){var e=this,t=this.props,n=t.isFetching,r=t.isDark,i=t.breadcrumbs,o=t.savedItem,a=t.itemClick,l=t.resetItems,s=this.state,c=s.currentChannel,u=s.filterText,p=s.isOpen,d=!(0,h["default"])(c);return C["default"].createElement("div",{className:n?A["default"].containerLoading:A["default"].container},C["default"].createElement(N["default"],{isDark:r,isOpen:p,filterText:u,savedItem:o,onFilter:function(t){return e.setState({filterText:t})},onClick:function(){return e.setState({isOpen:!p})},onResetClick:this.resetSavedItem}),C["default"].createElement("div",{className:p?A["default"].dropdownOpen:A["default"].dropdown},C["default"].createElement(E["default"],{isDark:r,items:i,onItemClick:a}),C["default"].createElement(S["default"],{isDark:r,pagination:this.getFilteredChannels(),filterText:u,currentItem:c,onItemClick:a}),C["default"].createElement(R["default"],{isSaveEnabled:d,saveToLabel:c.display_name,resetClick:l,saveClick:this.saveItemClick})))},t}(v.Component),p.propTypes={itemClick:B.isRequired,onSave:B.isRequired,resetItems:B.isRequired,saveItem:B.isRequired,selectedItem:H.isRequired,savedItem:H,breadcrumbs:F,pagination:F,autoClear:j,isDark:j,isFetching:j.isRequired},u=d,l(u.prototype,"saveItemClick",[x.autobind],Object.getOwnPropertyDescriptor(u.prototype,"saveItemClick"),u.prototype),l(u.prototype,"resetSavedItem",[x.autobind],Object.getOwnPropertyDescriptor(u.prototype,"resetSavedItem"),u.prototype),l(u.prototype,"saveItem",[x.autobind],Object.getOwnPropertyDescriptor(u.prototype,"saveItem"),u.prototype),c=u))||c);t["default"]=L},624:function(e,t){function n(e,t){return null!=e&&i.call(e,t)}var r=Object.prototype,i=r.hasOwnProperty;e.exports=n},625:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(4),o=r(i),a=n(26),l=r(a),s=n(626),c=r(s),u=n(627),p=r(u),d=function(e){var t=e.isDark,n=e.items,r=e.onItemClick;return l["default"].createElement("div",{className:(0,o["default"])(n)?p["default"].containerEmpty:t?p["default"].containerDark:p["default"].container},n.map(function(e,t){return l["default"].createElement(c["default"],{key:t,label:e.display_name||e.name,isCurrent:t===n.length-1,onClick:function(){return r(e)}})}))};d.propTypes={isDark:a.PropTypes.bool,items:a.PropTypes.array,onItemClick:a.PropTypes.func.isRequired},t["default"]=d},626:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(26),o=r(i),a=n(627),l=r(a),s=function(e){var t=e.label,n=e.isCurrent,r=e.onClick;return o["default"].createElement("div",{className:n?l["default"].currentItem:l["default"].item,onClick:r},t)};s.propTypes={label:i.PropTypes.string,isCurrent:i.PropTypes.bool,onClick:i.PropTypes.func.isRequired},t["default"]=s},627:function(e,t,n){var r=n(628);"string"==typeof r&&(r=[[e.id,r,""]]),n(318)(r,{}),r.locals&&(e.exports=r.locals)},628:function(e,t,n){t=e.exports=n(317)(),t.i(n(323),void 0),t.push([e.id,"._1sulVWedPBHRl39UcbrHHz{-ms-flex-line-pack:start;align-content:flex-start;background:"+n(323).locals.giphyDarkGrey+";display:-ms-flexbox;display:flex;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;font-size:13px;height:60px;margin-top:1px;overflow:hidden;padding:0 0 0 15px;width:100%}._1NPyFiRnwLt2K3L4xw4WBb{background:"+n(323).locals.giphyBlack+";margin-top:0}.CpWJIVRl6-Ko8yYQ8r_te{display:none}._3PFisE4jhheDYzmkrd5sEe{color:"+n(323).locals.giphyBlue+';cursor:pointer;display:inline-block;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;font-style:italic;font-weight:600;line-height:60px;margin-right:2px;text-overflow:ellipsis;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}._3PFisE4jhheDYzmkrd5sEe:after{color:#666;content:" /";font-style:normal;position:relative}._2kwYl33LF2rD777NJMbu0j{-ms-flex-negative:1;flex-shrink:1}._2kwYl33LF2rD777NJMbu0j:after{content:""}',""]),t.locals={colors:'"shared/css/colors.css"',giphyDarkGrey:""+n(323).locals.giphyDarkGrey,giphyGrey:""+n(323).locals.giphyGrey,giphyWhite:""+n(323).locals.giphyWhite,giphyBlue:""+n(323).locals.giphyBlue,giphyBlack:""+n(323).locals.giphyBlack,container:"_1sulVWedPBHRl39UcbrHHz",containerDark:"_1NPyFiRnwLt2K3L4xw4WBb _1sulVWedPBHRl39UcbrHHz",containerEmpty:"CpWJIVRl6-Ko8yYQ8r_te",item:"_3PFisE4jhheDYzmkrd5sEe",currentItem:"_2kwYl33LF2rD777NJMbu0j _3PFisE4jhheDYzmkrd5sEe"}},629:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(4),o=r(i),a=n(26),l=r(a),s=n(630),c=r(s),u=n(631),p=r(u),d=function(e){var t=e.isDark,n=e.isOpen,r=e.filterText,i=e.onFilter,o=e.onClick;return l["default"].createElement("div",{className:p["default"].selector},n?l["default"].createElement(c["default"],{filterText:r,onInput:i}):l["default"].createElement("span",{className:p["default"].selectLabel,onClick:o},"Select a channel"),l["default"].createElement("div",{className:t?p["default"].selectorIconDark:p["default"].selectorIcon,onClick:o},l["default"].createElement("i",{className:n?p["default"].selectorIconOpen:p["default"].selectorIconClosed})))},f=function(e){var t=e.breadcrumbs,n=e.onClick,r=e.onResetClick;return l["default"].createElement("div",{className:p["default"].selector},l["default"].createElement("div",{className:p["default"].breadcrumbs,onClick:n},t.map(function(e,t){return l["default"].createElement("span",{className:p["default"].breadcrumb,key:t},e.name||e.display_name)})),l["default"].createElement("div",{className:p["default"].resetButton,onClick:r}))},h=function(e){var t=e.isDark,n=e.isOpen,r=e.filterText,i=e.savedItem,a=e.onFilter,s=e.onClick,c=e.onResetClick;return l["default"].createElement("div",null,(0,o["default"])(i)?l["default"].createElement(d,{isDark:t,filterText:r,isOpen:n,onFilter:a,onClick:s}):l["default"].createElement(f,{breadcrumbs:(i.breadcrumbs||[]).concat([i]),onClick:s,onResetClick:c}))};h.propTypes={isDark:a.PropTypes.bool,isOpen:a.PropTypes.bool,savedItem:a.PropTypes.object,onFilter:a.PropTypes.func.isRequired,onClick:a.PropTypes.func.isRequired,onResetClick:a.PropTypes.func.isRequired},t["default"]=h},630:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(26),o=r(i),a=function(e){var t=e.filterText,n=e.onInput;return o["default"].createElement("input",{type:"text",placeholder:"Filter Channels",value:t||"",onInput:function(e){var t=e.target;return n(t.value)}})};a.propTypes={filterText:i.PropTypes.string,onInput:i.PropTypes.func.isRequired},t["default"]=a},631:function(e,t,n){var r=n(632);"string"==typeof r&&(r=[[e.id,r,""]]),n(318)(r,{}),r.locals&&(e.exports=r.locals)},632:function(e,t,n){t=e.exports=n(317)(),t.i(n(323),void 0),t.push([e.id,".ah5kACH4Rb55hHXeWT04O{background:"+n(323).locals.channelSelectorGrey+";box-sizing:border-box;color:"+n(323).locals.giphyWhite+";-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;height:40px;line-height:40px;padding-right:40px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}._1SbdlJCo34CFWR2NggUuT5{cursor:pointer;display:block;height:40px;padding-left:10px}._1bVDGxmnsDIXOBzdjy1ezS{background:"+n(323).locals.giphyDarkGrey+";color:"+n(323).locals.giphyWhite+";cursor:pointer;font-size:11px;height:40px;line-height:42px;position:absolute;right:0;text-align:center;text-indent:2px;top:0;width:40px}._3tYsE2_EqDFjGzRww_kUyP{background:"+n(323).locals.giphyBlack+"}.Jp6JtZUy3DMuJ2q2AqrDn{bottom:0;left:10px;overflow:hidden;position:absolute;right:50px;text-overflow:ellipsis;top:0;white-space:nowrap;-webkit-animation:C_YxOIt0iwaaENgNmlhu4 .25s cubic-bezier(.77,0,.175,1);animation:C_YxOIt0iwaaENgNmlhu4 .25s cubic-bezier(.77,0,.175,1)}._1JQr7IopV3f7eRuHcx5KW0{color:"+n(323).locals.giphyWhite+"}._1JQr7IopV3f7eRuHcx5KW0:after{color:"+n(323).locals.giphyGrey+';content:" / "}._1JQr7IopV3f7eRuHcx5KW0:last-child:after{display:none}._3A-a2iCOo0XTBFSYohPoHo{background:'+n(323).locals.deleteColor+";box-sizing:content-box;color:"+n(323).locals.giphyWhite+";cursor:pointer;font-size:13px;height:40px;line-height:42px;position:absolute;right:0;text-align:center;text-indent:1px;top:0;width:40px}._3A-a2iCOo0XTBFSYohPoHo:active{opacity:.9}@-webkit-keyframes C_YxOIt0iwaaENgNmlhu4{0%{opacity:0}to{opacity:1}}@keyframes C_YxOIt0iwaaENgNmlhu4{0%{opacity:0}to{opacity:1}}",""]),t.locals={colors:'"shared/css/colors.css"',giphyWhite:""+n(323).locals.giphyWhite,giphyGrey:""+n(323).locals.giphyGrey,giphyDarkGrey:""+n(323).locals.giphyDarkGrey,giphyBlack:""+n(323).locals.giphyBlack,channelSelectorGrey:""+n(323).locals.channelSelectorGrey,deleteColor:""+n(323).locals.deleteColor,selector:"ah5kACH4Rb55hHXeWT04O",selectLabel:"_1SbdlJCo34CFWR2NggUuT5",selectorIcon:"_1bVDGxmnsDIXOBzdjy1ezS",selectorIconDark:"_3tYsE2_EqDFjGzRww_kUyP _1bVDGxmnsDIXOBzdjy1ezS",selectorIconOpen:"_3IcNHtyAXTuMyV1Jxoto7D ss-hyphen",selectorIconClosed:"_2JgIwN6rjgjO3Ldup6hyol ss-plus",breadcrumbs:"Jp6JtZUy3DMuJ2q2AqrDn",breadcrumbsIn:"C_YxOIt0iwaaENgNmlhu4",breadcrumb:"_1JQr7IopV3f7eRuHcx5KW0",resetButton:"_3A-a2iCOo0XTBFSYohPoHo ss-delete"}},633:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t["default"]=void 0;var l,s,c,u,p=n(618),d=r(p),f=n(26),h=r(f),y=n(289),g=r(y),m=n(634),b=r(m),_=n(637),v=r(_),C=(l=(0,g["default"])(["pagination","currentItem","filterText"]),l((u=c=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return a(t,e),t.prototype.checkIfOpen=function(e){var t=this.props.currentItem,n=!1;return(0,d["default"])(t.breadcrumbs||[],function(t){e===t.id&&(n=!0)}),n},t.prototype.render=function(){var e=this,t=this.props,n=t.isDark,r=t.pagination,i=t.currentItem,o=t.onItemClick;return h["default"].createElement("div",{className:n?v["default"].itemsDark:v["default"].items},(r||[]).map(function(t){return h["default"].createElement("div",{className:r&&r.length>1?v["default"].list:v["default"].listSingle,key:t.id},t.children.map(function(t,r){return h["default"].createElement(b["default"],{key:r,label:t.display_name,hasChildren:t.has_children,isDark:n,isOpen:e.checkIfOpen(t.id),isSelected:t.id===(i||{}).id,onClick:function(){return o(t)}})}))}))},t}(f.Component),c.propTypes={isDark:f.PropTypes.bool,filterText:f.PropTypes.string,pagination:f.PropTypes.array,currentItem:f.PropTypes.object,onItemClick:f.PropTypes.func.isRequired},s=u))||s);t["default"]=C},634:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t["default"]=void 0;var l,s,c=n(546),u=r(c),p=n(26),d=r(p),f=n(635),h=r(f),y=(s=l=function(e){function t(){var n,r,a;i(this,t);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return n=r=o(this,e.call.apply(e,[this].concat(s))),r.state={isLoading:!1},a=n,o(r,a)}return a(t,e),t.prototype.shouldComponentUpdate=function(e,t){var n=this;return t.isLoading!==this.state.isLoading||!!(0,u["default"])(["label","hasChildren","isDark","isSelected","isOpen"],function(t){return e[t]!==n.props[t]})},t.prototype.componentDidUpdate=function(){this.props.isSelected&&this.setState({isLoading:!1})},t.prototype.onItemClick=function(){var e=this.props.onClick;this.setState({isLoading:!0}),e()},t.prototype.render=function(){var e=this,t=this.props,n=t.label,r=t.hasChildren,i=t.isOpen,o=t.isSelected,a=t.isDark,l=this.state.isLoading,s=h["default"].item;return i&&(s=h["default"].itemOpen),o&&(s=h["default"].itemSelected),d["default"].createElement("div",{className:a?h["default"].itemWrapperDark:h["default"].itemWrapper},d["default"].createElement("div",{className:s,onClick:function(){return e.onItemClick()}},d["default"].createElement("div",{className:r?h["default"].labelWithChildren:h["default"].label},d["default"].createElement("span",null,n),!l&&r?d["default"].createElement("i",{className:o?h["default"].labelIconSelected:h["default"].labelIcon}):null,l?d["default"].createElement("div",{className:h["default"].loading},d["default"].createElement("div",{className:h["default"].loadingDot}),d["default"].createElement("div",{className:h["default"].loadingDot}),d["default"].createElement("div",{className:h["default"].loadingDot})):null)))},t}(p.Component),l.propTypes={label:p.PropTypes.string.isRequired,hasChildren:p.PropTypes.bool,isDark:p.PropTypes.bool,isSelected:p.PropTypes.bool,isOpen:p.PropTypes.bool,onClick:p.PropTypes.func.isRequired},s);t["default"]=y},635:function(e,t,n){var r=n(636);"string"==typeof r&&(r=[[e.id,r,""]]),n(318)(r,{}),r.locals&&(e.exports=r.locals)},636:function(e,t,n){t=e.exports=n(317)(),t.i(n(323),void 0),t.push([e.id,".dLtnGabmhk9bjK7bHMfCg{border-bottom:1px solid "+n(323).locals.giphyBlack+"}.dLtnGabmhk9bjK7bHMfCg:last-child{border-bottom:0}._17cTMzJUcHig7pdk7eGdqH{border-bottom:1px solid "+n(323).locals.giphyDarkGrey+"}._1FCsugQmn1f0zwJBIh5lcg{cursor:pointer;height:40px;line-height:40px;padding:0 10px 0 15px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._1FCsugQmn1f0zwJBIh5lcg:hover{background-color:hsla(0,0%,100%,.25)}._1FCsugQmn1f0zwJBIh5lcg:active{background-color:hsla(0,0%,100%,.2)}._3WCDqPE3A0yucz3g3z7yAa,._3WCDqPE3A0yucz3g3z7yAa:active,._3WCDqPE3A0yucz3g3z7yAa:hover{background-color:"+n(323).locals.giphyBlue+"}.G_e19hgkwe6jABi0L5VfP{background-color:hsla(0,0%,100%,.25)}._20XBW6hN9ph_k_80TRBJha{overflow:hidden;pointer-events:none;text-overflow:ellipsis;white-space:nowrap}._1NN4MxRnD49nHsZg0KOIpa{padding-right:30px}._2O16NGlB6oaplOhXOEGvI{color:"+n(323).locals.giphyGrey+";font-size:12px;height:40px;line-height:42px;position:absolute;right:0;text-align:center;text-indent:2px;top:0;width:40px}._2P5gQpz1KwOwrBz_htFYWg{color:"+n(323).locals.giphyWhite+"}._20wRRACQIeFjwniU0GqV0{height:4px;position:absolute;right:0;text-align:center;top:18px;width:40px}._1gWbgfGnbzV_je7dNmAd6u{background:"+n(323).locals.giphyWhite+";border-radius:50%;display:inline-block;height:4px;margin:0 1px;vertical-align:top;width:4px;-webkit-animation:k1A8bScxZENc_UsAg-8ZJ 1s linear 0s infinite alternate;animation:k1A8bScxZENc_UsAg-8ZJ 1s linear 0s infinite alternate}._1gWbgfGnbzV_je7dNmAd6u:nth-child(2n){-webkit-animation-delay:.2s;animation-delay:.2s}._1gWbgfGnbzV_je7dNmAd6u:nth-child(3n){-webkit-animation-delay:.4s;animation-delay:.4s}@-webkit-keyframes k1A8bScxZENc_UsAg-8ZJ{0%{opacity:.1}to{opacity:1}}@keyframes k1A8bScxZENc_UsAg-8ZJ{0%{opacity:.1}to{opacity:1}}",""]),t.locals={colors:'"shared/css/colors.css"',giphyWhite:""+n(323).locals.giphyWhite,giphyBlack:""+n(323).locals.giphyBlack,giphyGrey:""+n(323).locals.giphyGrey,giphyDarkGrey:""+n(323).locals.giphyDarkGrey,giphyBlue:""+n(323).locals.giphyBlue,itemWrapper:"dLtnGabmhk9bjK7bHMfCg",itemWrapperDark:"_17cTMzJUcHig7pdk7eGdqH dLtnGabmhk9bjK7bHMfCg",item:"_1FCsugQmn1f0zwJBIh5lcg",itemSelected:"_3WCDqPE3A0yucz3g3z7yAa _1FCsugQmn1f0zwJBIh5lcg",itemOpen:"G_e19hgkwe6jABi0L5VfP _1FCsugQmn1f0zwJBIh5lcg",label:"_20XBW6hN9ph_k_80TRBJha",labelWithChildren:"_1NN4MxRnD49nHsZg0KOIpa _20XBW6hN9ph_k_80TRBJha",labelIcon:"_2O16NGlB6oaplOhXOEGvI ss-navigateright",labelIconSelected:"_2P5gQpz1KwOwrBz_htFYWg _2O16NGlB6oaplOhXOEGvI ss-navigateright",loading:"_20wRRACQIeFjwniU0GqV0",loadingDot:"_1gWbgfGnbzV_je7dNmAd6u",loadingPulse:"k1A8bScxZENc_UsAg-8ZJ"}},637:function(e,t,n){var r=n(638);"string"==typeof r&&(r=[[e.id,r,""]]),n(318)(r,{}),r.locals&&(e.exports=r.locals)},638:function(e,t,n){t=e.exports=n(317)(),t.i(n(323),void 0),t.push([e.id,"._12lx9-wr1o3n_HMIn_JuMQ{-ms-flex-line-pack:start;align-content:flex-start;-ms-flex-align:stretch;align-items:stretch;background:"+n(323).locals.giphyDarkGrey+";display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;margin-top:1px}._29ZRxjku5kr1eGV4bdkR3a{background:"+n(323).locals.giphyBlack+"}._1TfTfBc80yBf-FKJOCy4Ny{-ms-flex-line-pack:start;align-content:flex-start;border-right:1px solid "+n(323).locals.giphyBlack+";box-sizing:border-box;float:left;overflow:auto;width:50%}._29ZRxjku5kr1eGV4bdkR3a ._1TfTfBc80yBf-FKJOCy4Ny{border-right:1px solid "+n(323).locals.giphyDarkGrey+"}._1TfTfBc80yBf-FKJOCy4Ny:last-child{border-right:0}._1YelZxK2CwnT1hoUwRd4Bw{width:100%}",""]),t.locals={colors:'"shared/css/colors.css"',giphyDarkGrey:""+n(323).locals.giphyDarkGrey,giphyBlack:""+n(323).locals.giphyBlack,items:"_12lx9-wr1o3n_HMIn_JuMQ",itemsDark:"_29ZRxjku5kr1eGV4bdkR3a _12lx9-wr1o3n_HMIn_JuMQ",list:"_1TfTfBc80yBf-FKJOCy4Ny",listSingle:"_1YelZxK2CwnT1hoUwRd4Bw _1TfTfBc80yBf-FKJOCy4Ny"}},639:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var i=n(26),o=r(i),a=n(640),l=r(a),s=function(e){var t=e.resetClick,n=e.saveClick,r=e.saveToLabel,i=e.isSaveEnabled;return o["default"].createElement("div",{className:l["default"].container},o["default"].createElement("div",{className:l["default"].resetButton,onClick:t},o["default"].createElement("i",{className:l["default"].resetIcon}),"Reset"),o["default"].createElement("div",{className:i?l["default"].saveButton:l["default"].saveButtonDisabled,onClick:n},"Save to ",o["default"].createElement("span",{className:l["default"].saveToLabel},r)))};s.propTypes={resetClick:i.PropTypes.func.isRequired,saveClick:i.PropTypes.func.isRequired,saveToLabel:i.PropTypes.string,isSaveEnabled:i.PropTypes.bool},t["default"]=s},640:function(e,t,n){var r=n(641);"string"==typeof r&&(r=[[e.id,r,""]]),n(318)(r,{}),r.locals&&(e.exports=r.locals)},641:function(e,t,n){t=e.exports=n(317)(),t.i(n(323),void 0),t.push([e.id,"._2TK65539B223_UPfMDDGVy{display:-ms-flexbox;display:flex;height:50px;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;margin-top:10px;width:100%}._3bMH4JQRQL2wgRUKFFf98u{color:"+n(323).locals.giphyWhite+";cursor:pointer;font-size:13px;font-weight:700;height:50px;line-height:50px;padding:0 15px;text-align:center;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}._3bMH4JQRQL2wgRUKFFf98u:active{opacity:.9}._2i9vF1JrrJNWeDSVIMJ4Kz{background-color:"+n(323).locals.secondaryCTA+";-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;margin-right:10px;width:30%}._8XvLcIXkJf_BxOxZFN93I{display:inline-block;font-size:13px;margin-right:5px;vertical-align:middle}._2BcW9Pv4sKa2LjQbS-qwXf{background-color:"+n(323).locals.primaryCTA+";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}._2YLtLTFv_KlczuIenpCHvC{background-color:"+n(323).locals.primaryCTADisabled+";color:hsla(0,0%,100%,.5);pointer-events:none}._3q4kVTx2ONiWWbI19QSj4o{font-style:italic;font-weight:400}._3q4kVTx2ONiWWbI19QSj4o:empty{display:none}",""]),t.locals={colors:'"shared/css/colors.css"',giphyWhite:""+n(323).locals.giphyWhite,primaryCTA:""+n(323).locals.primaryCTA,primaryCTADisabled:""+n(323).locals.primaryCTADisabled,secondaryCTA:""+n(323).locals.secondaryCTA,container:"_2TK65539B223_UPfMDDGVy",button:"_3bMH4JQRQL2wgRUKFFf98u",resetButton:"_2i9vF1JrrJNWeDSVIMJ4Kz _3bMH4JQRQL2wgRUKFFf98u",resetIcon:"_8XvLcIXkJf_BxOxZFN93I ss-replay",saveButton:"_2BcW9Pv4sKa2LjQbS-qwXf _3bMH4JQRQL2wgRUKFFf98u",saveButtonDisabled:"_2YLtLTFv_KlczuIenpCHvC _2BcW9Pv4sKa2LjQbS-qwXf _3bMH4JQRQL2wgRUKFFf98u",saveToLabel:"_3q4kVTx2ONiWWbI19QSj4o"}},642:function(e,t,n){var r=n(643);"string"==typeof r&&(r=[[e.id,r,""]]),n(318)(r,{}),r.locals&&(e.exports=r.locals)},643:function(e,t,n){t=e.exports=n(317)(),t.push([e.id,"._126H-0keytC-VDRlAdPnXg{color:#fff;font-size:14px;position:relative;text-align:left;width:100%}._1PdZ-urVGAqljlqlxOYJJh{pointer-events:none}._3Fh030Nofbijp9mfcNFNNE{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:0;opacity:0;overflow:hidden;position:relative;width:100%;transition:height .3s cubic-bezier(.77,0,.175,1),opacity .3s cubic-bezier(.77,0,.175,1)}._3SKCTtt2pl1cg-7gNN2hSn{height:340px;opacity:1}",""]),t.locals={slideDuration:".3s",container:"_126H-0keytC-VDRlAdPnXg",containerLoading:"_1PdZ-urVGAqljlqlxOYJJh _126H-0keytC-VDRlAdPnXg",dropdown:"_3Fh030Nofbijp9mfcNFNNE",dropdownOpen:"_3SKCTtt2pl1cg-7gNN2hSn _3Fh030Nofbijp9mfcNFNNE"}}});
//# sourceMappingURL=channelSelector.bundle.js.map