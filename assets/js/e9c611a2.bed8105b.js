"use strict";(self.webpackChunkrxcats_blog=self.webpackChunkrxcats_blog||[]).push([[857],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>b});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=i(r),f=a,b=s["".concat(p,".").concat(f)]||s[f]||g[f]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[s]="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var n=r(8168),a=(r(6540),r(5680));const o={slug:"php-output-buffering",title:"php output_buffering \uc73c\ub85c \uc778\ud55c \uc751\ub2f5\uc5d0 \uc624\ub958 \uba54\uc2dc\uc9c0\uac00 \uc11e\uc774\ub294 \ubb38\uc81c",authors:["rxcats"],tags:["php","output_buffering"],date:new Date("2023-01-10T03:00:00.000Z")},l=void 0,u={permalink:"/rxcats-blog/blog/php-output-buffering",source:"@site/blog/2023-01-10-php-output-buffering.mdx",title:"php output_buffering \uc73c\ub85c \uc778\ud55c \uc751\ub2f5\uc5d0 \uc624\ub958 \uba54\uc2dc\uc9c0\uac00 \uc11e\uc774\ub294 \ubb38\uc81c",description:"\uc99d\uc0c1",date:"2023-01-10T03:00:00.000Z",formattedDate:"January 10, 2023",tags:[{label:"php",permalink:"/rxcats-blog/blog/tags/php"},{label:"output_buffering",permalink:"/rxcats-blog/blog/tags/output-buffering"}],hasTruncateMarker:!1,authors:[{name:"rxcats",title:"Game Backend Developer",url:"https://github.com/rxcats",imageURL:"https://avatars.githubusercontent.com/u/6582519?v=4",key:"rxcats"}],frontMatter:{slug:"php-output-buffering",title:"php output_buffering \uc73c\ub85c \uc778\ud55c \uc751\ub2f5\uc5d0 \uc624\ub958 \uba54\uc2dc\uc9c0\uac00 \uc11e\uc774\ub294 \ubb38\uc81c",authors:["rxcats"],tags:["php","output_buffering"],date:"2023-01-10T03:00:00.000Z"},prevItem:{title:"Retrying Feign Calls",permalink:"/rxcats-blog/blog/openfeign-retry"},nextItem:{title:"c# attribute \ub97c \ud65c\uc6a9\ud55c API enum \uc815\uc758",permalink:"/rxcats-blog/blog/csharp-url-attribute"}},p={authorsImageUrls:[void 0]},i=[{value:"\uc99d\uc0c1",id:"\uc99d\uc0c1",level:2},{value:"\uc6d0\uc778",id:"\uc6d0\uc778",level:2},{value:"\ud574\uacb0",id:"\ud574\uacb0",level:2}],c={toc:i},s="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"\uc99d\uc0c1"},"\uc99d\uc0c1"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\uc2ac\ub799 api \ub97c \ud1b5\ud574 \uc5d0\ub7ec \uba54\uc2dc\uc9c0\ub97c webhook \uc5d0 \uc804\uc1a1\ud558\ub294 api \ub97c \uc0ac\uc6a9\ud558\ub294 \uae30\ub2a5\uc774 \uc788\uc5c8\ub294\ub370 \ud574\ub2f9 webhook \uc744 \ubc1b\ub358 \ucc44\ub110\uc774 \uc774\uc6a9 \ubd88\uac00\ub2a5\ud55c \uc0c1\ud669."),(0,a.yg)("li",{parentName:"ul"},"\uc2ac\ub799 \uba54\uc2dc\uc9c0 \uc0ac\uc6a9\ud55c \ud6c4 \uc751\ub2f5 body \uc5d0 no_serviceAABBCCDD \ucc98\ub7fc no_service \uac00 \ubd99\ub294 \ud604\uc0c1")),(0,a.yg)("h2",{id:"\uc6d0\uc778"},"\uc6d0\uc778"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\uc2ac\ub799\uc5d0\uc11c\ub294 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uc600\uc744 \uacbd\uc6b0 json \uc73c\ub85c \uc751\ub2f5\uc744 \uc8fc\uc9c0 \uc54a\uace0 response body \uc5d0 \ud14d\uc2a4\ud2b8\ub85c \uc804\ub2ec\ud558\ub294 \uacbd\uc6b0\uac00 \uc874\uc7ac",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://api.slack.com/messaging/webhooks"},"https://api.slack.com/messaging/webhooks")),(0,a.yg)("li",{parentName:"ul"},"\uc81c\uc77c \ud558\ub2e8 Handling errors \ubd80\ubd84\uc5d0 no_service \uad00\ub828 \uc0ac\ud56d \ucc38\uace0"))),(0,a.yg)("li",{parentName:"ul"},"php \uc5d0\uc11c curl \uc744 \uc774\uc6a9\ud558\uc5ec api \ub97c \ud638\ucd9c\ud558\uace0 \uc788\ub294\ub370 curl \uc635\uc158\uc911\uc5d0 CURLOPT_RETURNTRANSFER \ub97c false \ub85c \uc124\uc815\ud558\uc600\uc744 \uacbd\uc6b0 response body \uc5d0 \uc77c\ubc18 text \uac00 \uc788\uc73c\uba74 output_buffering \uc5d0 \uae30\ub85d\uc744 \ud558\ub294 \uac83 \uac19\uc2b5\ub2c8\ub2e4."),(0,a.yg)("li",{parentName:"ul"},"\ub530\ub77c\uc11c \uc2ac\ub799 \uba54\uc2dc\uc9c0 \uc804\uc1a1\uc2dc no_service \uac00 \uba3c\uc800 output_buffering \uc5d0 \ub4e4\uc5b4\uac00\uace0 \uc774\ud6c4 \uc751\ub2f5 \uba54\uc2dc\uc9c0\ub97c \ube4c\ub4dc \ud558\uac8c \ub418\uc5b4 \ubc1c\uc0dd\ud55c \ud604\uc0c1.")),(0,a.yg)("h2",{id:"\ud574\uacb0"},"\ud574\uacb0"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\uc751\ub2f5 \uba54\uc2dc\uc9c0\ub97c \uc0dd\uc131\ud560 \ub54c \uc774\uc804\uc5d0 \ubc1c\uc0dd\ub41c output_buffering \uba54\uc2dc\uc9c0\ub97c \uc9c0\uc6b0\ub3c4\ub85d \ucc98\ub9ac")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"function oret($val) {\n    // ...\n\n    $response = JsonEnAES($arr);\n\n    // clear previously echoed item\n    // rendering \ud558\uae30 \uc804 echo \ub41c \ubb38\uc790\uc5f4\uc744 \uc9c0\uc6cc\uc900\ub2e4.\n    ob_clean();\n\n    return $response;\n}\n\n")))}g.isMDXComponent=!0}}]);