!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([,,function(e,t,n){e.exports=n(3)},function(module,exports,__webpack_require__){"use strict";var xmlHttp;function createXMLHttp(){xmlHttp=null!=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("microsoft.XMLHTTP")}function test(){createXMLHttp();var e=document.getElementById("city").value;xmlHttp.open("get","http://wthrcdn.etouch.cn/weather_mini?city="+e),xmlHttp.onreadystatechange=testCallback,xmlHttp.send()}function testCallback(){if(4==xmlHttp.readyState&&200==xmlHttp.status){var result=xmlHttp.responseText,obj=eval("("+result+")");1e3==obj.status?(document.getElementById("wendu").innerHTML=obj.data.wendu,document.getElementById("aqi").innerHTML=obj.data.aqi,document.getElementById("ganmao").innerHTML=obj.data.ganmao,document.getElementById("high").innerHTML=obj.data.forecast[0].high,document.getElementById("low").innerHTML=obj.data.forecast[0].low,document.getElementById("fengxiang").innerHTML=obj.data.forecast[0].fengxiang,document.getElementById("fengli").innerHTML=obj.data.forecast[0].fengli):alert("输入的城市信息不存在")}}}]);