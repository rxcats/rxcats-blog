"use strict";(self.webpackChunkrxcats_blog=self.webpackChunkrxcats_blog||[]).push([[2041],{5680:(e,r,n)=>{n.d(r,{xA:()=>g,yg:()=>d});var t=n(6540);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},g=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=c(n),y=l,d=u["".concat(p,".").concat(y)]||u[y]||s[y]||o;return n?t.createElement(d,a(a({ref:r},g),{},{components:n})):t.createElement(d,a({ref:r},g))}));function d(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=y;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3623:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(8168),l=(n(6540),n(5680));const o={slug:"openfeign-retry",title:"Retrying Feign Calls",authors:["rxcats"],tags:["SpringCloud","OpenFeign","Retry","ErrorDecoder","RetryableException"],date:new Date("2023-03-07T05:00:00.000Z")},a="Retrying Feign Calls",i={permalink:"/rxcats-blog/blog/openfeign-retry",source:"@site/blog/2023-03-07-openfeign-retry.mdx",title:"Retrying Feign Calls",description:"\uc18c\uac1c",date:"2023-03-07T05:00:00.000Z",formattedDate:"March 7, 2023",tags:[{label:"SpringCloud",permalink:"/rxcats-blog/blog/tags/spring-cloud"},{label:"OpenFeign",permalink:"/rxcats-blog/blog/tags/open-feign"},{label:"Retry",permalink:"/rxcats-blog/blog/tags/retry"},{label:"ErrorDecoder",permalink:"/rxcats-blog/blog/tags/error-decoder"},{label:"RetryableException",permalink:"/rxcats-blog/blog/tags/retryable-exception"}],hasTruncateMarker:!1,authors:[{name:"rxcats",title:"Game Backend Developer",url:"https://github.com/rxcats",imageURL:"https://avatars.githubusercontent.com/u/6582519?v=4",key:"rxcats"}],frontMatter:{slug:"openfeign-retry",title:"Retrying Feign Calls",authors:["rxcats"],tags:["SpringCloud","OpenFeign","Retry","ErrorDecoder","RetryableException"],date:"2023-03-07T05:00:00.000Z"},prevItem:{title:"flyway \ub97c \uc774\uc6a9\ud55c \ub370\uc774\ud130\ubca0\uc774\uc2a4 schema \uad00\ub9ac",permalink:"/rxcats-blog/blog/flyway"},nextItem:{title:"php output_buffering \uc73c\ub85c \uc778\ud55c \uc751\ub2f5\uc5d0 \uc624\ub958 \uba54\uc2dc\uc9c0\uac00 \uc11e\uc774\ub294 \ubb38\uc81c",permalink:"/rxcats-blog/blog/php-output-buffering"}},p={authorsImageUrls:[void 0]},c=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"Spring Cloud OpenFeign \ud658\uacbd\uc124\uc815",id:"spring-cloud-openfeign-\ud658\uacbd\uc124\uc815",level:2},{value:"Feign Retryer",id:"feign-retryer",level:2},{value:"Default Implementation",id:"default-implementation",level:3},{value:"No Retrying",id:"no-retrying",level:3},{value:"Creating Retryable Exceptions",id:"creating-retryable-exceptions",level:2},{value:"ErrorDecoder \uc640 RetryableException",id:"errordecoder-\uc640-retryableexception",level:3},{value:"Custom Error Decoder \uc0dd\uc131",id:"custom-error-decoder-\uc0dd\uc131",level:3},{value:"Custom Error Decoder \uc124\uc815 \ucd94\uac00",id:"custom-error-decoder-\uc124\uc815-\ucd94\uac00",level:3}],g={toc:c},u="wrapper";function s(e){let{components:r,...n}=e;return(0,l.yg)(u,(0,t.A)({},g,n,{components:r,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"\uc18c\uac1c"},"\uc18c\uac1c"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"REST \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \ud1b5\ud574 \uc678\ubd80 \uc11c\ube44\uc2a4\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uc740 Feign\uacfc \uac19\uc740 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc5d0\uc11c \ub9e4\uc6b0 \uac04\ub2e8\ud558\uac8c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.yg)("li",{parentName:"ul"},"\uadf8\ub7ec\ub098 \uc774\ub7ec\ud55c \ud638\ucd9c \uc911\uc5d0 \ub9ce\uc740 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubb38\uc81c\uc758 \ub300\ubd80\ubd84\uc740 \ubb34\uc791\uc704\uc801\uc774\uac70\ub098 \uc77c\uc2dc\uc801\uc778 \uac83\uc785\ub2c8\ub2e4."),(0,l.yg)("li",{parentName:"ul"},"\uc5ec\uae30\uc5d0\uc11c\ub294 \uc2e4\ud328\ud55c \ud638\ucd9c\uc744 \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uace0 \ubcf4\ub2e4 \ud0c4\ub825\uc801\uc778 REST \ud074\ub77c\uc774\uc5b8\ud2b8\ub97c \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4.")),(0,l.yg)("h2",{id:"spring-cloud-openfeign-\ud658\uacbd\uc124\uc815"},"Spring Cloud OpenFeign \ud658\uacbd\uc124\uc815"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"# application.properties\nspring.cloud.openfeign.compression.request.enabled=true\nspring.cloud.openfeign.compression.response.enabled=true\nspring.cloud.openfeign.client.config.default.logger-level=full\nspring.cloud.openfeign.client.config.default.connect-timeout=5000\nspring.cloud.openfeign.client.config.default.read-timeout=5000\n")),(0,l.yg)("h2",{id:"feign-retryer"},"Feign Retryer"),(0,l.yg)("h3",{id:"default-implementation"},"Default Implementation"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Feign\uc740 \uc7ac\uc2dc\ub3c4 \uc778\ud130\ud398\uc774\uc2a4\uc758 \ud569\ub9ac\uc801\uc778 \uae30\ubcf8 \uad6c\ud604\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,l.yg)("li",{parentName:"ul"},"\uc8fc\uc5b4\uc9c4 \ud69f\uc218\ub9cc\ud07c\ub9cc \uc7ac\uc2dc\ub3c4\ud558\uace0, \uc77c\uc815 \uc2dc\uac04 \uac04\uaca9\uc73c\ub85c \uc2dc\uc791\ud55c \ub2e4\uc74c, \uc7ac\uc2dc\ub3c4\ud560 \ub54c\ub9c8\ub2e4 \uc9c0\uc815\ub41c \ucd5c\ub300\uac12\uae4c\uc9c0 \uac04\uaca9\uc744 \ub298\ub9bd\ub2c8\ub2e4."),(0,l.yg)("li",{parentName:"ul"},"\uc2dc\uc791 \uac04\uaca9\uc744 1\ucd08, \ucd5c\ub300 \uac04\uaca9\uc744 3\ucd08, \ucd5c\ub300 \uc2dc\ub3c4 \ud69f\uc218\ub97c 3\ud68c\ub85c \uc815\uc758\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"@Configuration(proxyBeanMethods = false)\npublic class CustomOpenFeignConfig {\n    @Bean\n    public Retryer feignRetryer() {\n        return new Retryer.Default(1000, TimeUnit.SECONDS.toMillis(3), 3);\n    }\n}\n")),(0,l.yg)("h3",{id:"no-retrying"},"No Retrying"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Feign\uc774 \ud638\ucd9c\uc744 \uc7ac\uc2dc\ub3c4\ud558\uc9c0 \uc54a\ub3c4\ub85d \ud558\ub824\uba74 \ud074\ub77c\uc774\uc5b8\ud2b8 \ube4c\ub354\uc5d0 Retryer.NEVER_RETRY \uad6c\ud604\uc744 \uc81c\uacf5\ud558\uba74 \ub429\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \ub9e4\ubc88 \uc608\uc678\ub97c \uc804\ud30c\ud558\uae30\ub9cc \ud558\uba74 \ub429\ub2c8\ub2e4.")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"@Configuration(proxyBeanMethods = false)\npublic class CustomOpenFeignConfig {\n    @Bean\n    public Retryer feignNoRetryer() {\n        return Retryer.NEVER_RETRY;\n    }\n}\n")),(0,l.yg)("h2",{id:"creating-retryable-exceptions"},"Creating Retryable Exceptions"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\uc774\uc804\uc5d0\ub294 \ud638\ucd9c\uc744 \uc7ac\uc2dc\ub3c4\ud558\ub294 \ube48\ub3c4\ub97c \uc81c\uc5b4\ud558\ub294 \ubc29\ubc95\uc744 \ubc30\uc6e0\uc2b5\ub2c8\ub2e4."),(0,l.yg)("li",{parentName:"ul"},"\uc774\uc81c \ud638\ucd9c\uc744 \uc7ac\uc2dc\ub3c4\ud560 \ub54c\uc640 \ub2e8\uc21c\ud788 \uc608\uc678\ub97c \ub358\uc9c8 \ub54c\ub97c \uc81c\uc5b4\ud558\ub294 \ubc29\ubc95\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.")),(0,l.yg)("h3",{id:"errordecoder-\uc640-retryableexception"},"ErrorDecoder \uc640 RetryableException"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\uc798\ubabb\ub41c \uc751\ub2f5\uc744 \ubc1b\uc73c\uba74 Feign\uc740 \uc774\ub97c \uc5b4\ub5bb\uac8c \ucc98\ub9ac\ud560\uc9c0 \uacb0\uc815\ud558\ub294 ErrorDecoder \uc778\ud130\ud398\uc774\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\ub85c \uc804\ub2ec\ud569\ub2c8\ub2e4."),(0,l.yg)("li",{parentName:"ul"},"\uac00\uc7a5 \uc911\uc694\ud55c \uac83\uc740 \ub514\ucf54\ub354\uac00 \uc608\uc678\ub97c RetryableException\uc758 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ub9e4\ud551\ud558\uc5ec Retryer\uac00 \ud638\ucd9c\uc744 \uc7ac\uc2dc\ub3c4\ud560 \uc218 \uc788\ub3c4\ub85d \ud55c\ub2e4\ub294 \uc810\uc785\ub2c8\ub2e4."),(0,l.yg)("li",{parentName:"ul"},'ErrorDecoder\uc758 \uae30\ubcf8 \uad6c\ud604\uc740 \uc751\ub2f5\uc5d0 "Retry-After" \ud5e4\ub354\uac00 \ud3ec\ud568\ub41c \uacbd\uc6b0\uc5d0\ub9cc RetryableException \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \uac00\uc7a5 \uc77c\ubc18\uc801\uc73c\ub85c 503 \uc11c\ube44\uc2a4 \uc0ac\uc6a9 \ubd88\uac00 \uc751\ub2f5\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.'),(0,l.yg)("li",{parentName:"ul"},"\uc774\ub294 \uc88b\uc740 \uae30\ubcf8 \ub3d9\uc791\uc774\uc9c0\ub9cc \ub54c\ub85c\ub294 \ub354 \uc720\uc5f0\ud574\uc57c \ud560 \ub54c\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.yg)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4, \ub54c\ub54c\ub85c 500 \ub0b4\ubd80 \uc11c\ubc84 \uc624\ub958\ub85c \ubb34\uc791\uc704\ub85c \uc751\ub2f5\ud558\ub294 \uc678\ubd80 \uc11c\ube44\uc2a4\uc640 \ud1b5\uc2e0\ud558\uace0 \uc788\ub294\ub370 \uc774\ub97c \ud574\uacb0\ud560 \uc218 \uc788\ub294 \uad8c\ud55c\uc774 \uc5c6\ub294 \uacbd\uc6b0\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.yg)("li",{parentName:"ul"},"\uc6b0\ub9ac\uac00 \ud560 \uc218 \uc788\ub294 \uc77c\uc740 \ub2e4\uc74c \ubc88\uc5d0\ub294 \ud1b5\ud654\uac00 \uc131\uacf5\ud560 \uac83\uc774\ub77c\ub294 \uac83\uc744 \uc54c\uae30 \ub54c\ubb38\uc5d0 \ud1b5\ud654\ub97c \ub2e4\uc2dc \uc2dc\ub3c4\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),(0,l.yg)("li",{parentName:"ul"},"\uc774\ub97c \uc704\ud574\uc11c\ub294 \uc0ac\uc6a9\uc790 \uc815\uc758 ErrorDecoder \uad6c\ud604\uc744 \uc791\uc131\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,l.yg)("h3",{id:"custom-error-decoder-\uc0dd\uc131"},"Custom Error Decoder \uc0dd\uc131"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790 \uc815\uc758 \ub514\ucf54\ub354\uc5d0\uc11c \uad6c\ud604\ud574\uc57c \ud558\ub294 \uba54\uc11c\ub4dc\ub294 decode \ud558\ub098\ubfd0\uc785\ub2c8\ub2e4."),(0,l.yg)("li",{parentName:"ul"},"\uc774 \uba54\uc11c\ub4dc\ub294 \ub450 \uac1c\uc758 \uc778\uc790, \uc989 String \uba54\uc11c\ub4dc \ud0a4\uc640 Response \uac1d\uccb4\ub97c \ubc1b\uc2b5\ub2c8\ub2e4."),(0,l.yg)("li",{parentName:"ul"},"\uc774 \uba54\uc11c\ub4dc\ub294 \uc608\uc678\ub97c \ubc18\ud658\ud558\ub294\ub370, \uc774 \uc608\uc678\uac00 RetryableException\uc758 \uc778\uc2a4\ud134\uc2a4\uc774\uac70\ub098 \uad6c\ud604\uc5d0 \ub530\ub77c \ub2e4\ub978 \uc608\uc678\uc778 \uacbd\uc6b0 \uc608\uc678\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,l.yg)("li",{parentName:"ul"},"\ub514\ucf54\ub529 \uba54\uc11c\ub4dc\ub294 \ub2e8\uc21c\ud788 \uc751\ub2f5\uc758 \uc0c1\ud0dc \ucf54\ub4dc\uac00 500\ubcf4\ub2e4 \ub192\uac70\ub098 \uac19\uc740\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,l.yg)("li",{parentName:"ul"},"\uc774 \uacbd\uc6b0 RetryableException\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. \uadf8\ub807\uc9c0 \uc54a\uc740 \uacbd\uc6b0, FeignException \ud074\ub798\uc2a4\uc758 errorStatus \ud329\ud1a0\ub9ac \ud568\uc218\ub85c \uc0dd\uc131\ub41c \uae30\ubcf8 FeignException\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"public class Custom5xxErrorDecoder implements ErrorDecoder {\n    @Override\n    public Exception decode(String methodKey, Response response) {\n        FeignException exception = feign.FeignException.errorStatus(methodKey, response);\n        int status = response.status();\n        if (status >= 500) {\n            return new RetryableException(\n              response.status(),\n              exception.getMessage(),\n              response.request().httpMethod(),\n              exception,\n              null,\n              response.request());\n        }\n        return exception;\n    }\n}\n")),(0,l.yg)("h3",{id:"custom-error-decoder-\uc124\uc815-\ucd94\uac00"},"Custom Error Decoder \uc124\uc815 \ucd94\uac00"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-java"},"@Configuration(proxyBeanMethods = false)\npublic class CustomOpenFeignConfig {\n    @Bean\n    public ErrorDecoder custom5xxErrorDecoder() {\n        return new Custom5xxErrorDecoder();\n    }\n}\n")))}s.isMDXComponent=!0}}]);