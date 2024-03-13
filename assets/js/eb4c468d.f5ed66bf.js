"use strict";(self.webpackChunkrxcats_blog=self.webpackChunkrxcats_blog||[]).push([[7387],{5680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>d});var n=a(6540);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=l,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return a?n.createElement(d,o(o({ref:t},g),{},{components:a})):n.createElement(d,o({ref:t},g))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:l,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},312:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(8168),l=(a(6540),a(5680));const r={slug:"setup-develop-env-mac",title:"\uac1c\ubc1c\ud658\uacbd \uc124\uc815\ud558\uae30 (MacOS)",authors:["rxcats"],tags:["setup","develop","environment"],date:new Date("2022-12-31T03:00:00.000Z")},o="MacOS",s={permalink:"/rxcats-blog/blog/setup-develop-env-mac",source:"@site/blog/2022-12-31-setup-develop-env.mdx",title:"\uac1c\ubc1c\ud658\uacbd \uc124\uc815\ud558\uae30 (MacOS)",description:"Mac Xcode Command Line Toos \uc124\uce58",date:"2022-12-31T03:00:00.000Z",formattedDate:"December 31, 2022",tags:[{label:"setup",permalink:"/rxcats-blog/blog/tags/setup"},{label:"develop",permalink:"/rxcats-blog/blog/tags/develop"},{label:"environment",permalink:"/rxcats-blog/blog/tags/environment"}],readingTime:1.1,hasTruncateMarker:!1,authors:[{name:"rxcats",title:"Mobile Game Backend Developer",url:"https://github.com/rxcats",imageURL:"https://avatars.githubusercontent.com/u/6582519?v=4",key:"rxcats"}],frontMatter:{slug:"setup-develop-env-mac",title:"\uac1c\ubc1c\ud658\uacbd \uc124\uc815\ud558\uae30 (MacOS)",authors:["rxcats"],tags:["setup","develop","environment"],date:"2022-12-31T03:00:00.000Z"},prevItem:{title:"Retrying Feign Calls",permalink:"/rxcats-blog/blog/openfeign-retry"}},i={authorsImageUrls:[void 0]},c=[{value:"Mac Xcode Command Line Toos \uc124\uce58",id:"mac-xcode-command-line-toos-\uc124\uce58",level:2},{value:"Oh My ZSH \uc124\uce58",id:"oh-my-zsh-\uc124\uce58",level:2},{value:"\ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790 Homebrew \uc124\uce58",id:"\ud328\ud0a4\uc9c0-\uad00\ub9ac\uc790-homebrew-\uc124\uce58",level:2},{value:"Homebrew \ud658\uacbd\uc124\uc815",id:"homebrew-\ud658\uacbd\uc124\uc815",level:3},{value:"\ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790 asdf \uc124\uce58",id:"\ud328\ud0a4\uc9c0-\uad00\ub9ac\uc790-asdf-\uc124\uce58",level:2},{value:"JDK \uc124\uce58",id:"jdk-\uc124\uce58",level:3},{value:"Node JS \uc124\uce58",id:"node-js-\uc124\uce58",level:3},{value:"Docker \uc124\uce58",id:"docker-\uc124\uce58",level:2},{value:"JetBrains ToolBox \uc124\uce58",id:"jetbrains-toolbox-\uc124\uce58",level:2}],g={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,l.yg)(p,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"mac-xcode-command-line-toos-\uc124\uce58"},"Mac Xcode Command Line Toos \uc124\uce58"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"xcode-select --install\n")),(0,l.yg)("h2",{id:"oh-my-zsh-\uc124\uce58"},"Oh My ZSH \uc124\uce58"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://ohmyz.sh/"},"https://ohmyz.sh/"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\n\n# zsh-autosuggestions\ngit clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM}/plugins/zsh-autosuggestions\n\n# zsh-syntax-highlighting\ngit clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM}/plugins/zsh-syntax-highlighting\n')),(0,l.yg)("h2",{id:"\ud328\ud0a4\uc9c0-\uad00\ub9ac\uc790-homebrew-\uc124\uce58"},"\ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790 Homebrew \uc124\uce58"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://brew.sh/"},"https://brew.sh/"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,l.yg)("h3",{id:"homebrew-\ud658\uacbd\uc124\uc815"},"Homebrew \ud658\uacbd\uc124\uc815"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Homebrew \uc124\uce58\ud6c4 $PATH \uc124\uc815\uc774 \ub418\uc9c0 \uc54a\uc558\uc744 \uacbd\uc6b0 brew \uba85\ub839\uc5b4\uac00 \ub3d9\uc791\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc73c\ubbc0\ub85c $PATH \uc124\uc815\uc744 \ucd94\uac00"),(0,l.yg)("li",{parentName:"ul"},".zprofile \uc5d0 \ucd94\uac00\ub418\ub3c4\ub85d \ud558\uae30")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> ~/.zprofile\nsource ~/.zprofile\nbrew doctor\n")),(0,l.yg)("h2",{id:"\ud328\ud0a4\uc9c0-\uad00\ub9ac\uc790-asdf-\uc124\uce58"},"\ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790 asdf \uc124\uce58"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"https://asdf-vm.com/"},"https://asdf-vm.com/")),(0,l.yg)("li",{parentName:"ul"},"\uc608\ub97c\ub4e4\uba74 jdk \uc5ec\ub7ec\uac1c\uc758 \ubc84\uc804\uc744 \uc124\uce58\ud558\uace0 \uad00\ub9ac\ud560 \uc218 \uc788\uc74c")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"brew install asdf\n")),(0,l.yg)("h3",{id:"jdk-\uc124\uce58"},"JDK \uc124\uce58"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"asdf plugin add java\nasdf install java liberica-21.0.2+14\nasdf global java liberica-21.0.2+14\n")),(0,l.yg)("h3",{id:"node-js-\uc124\uce58"},"Node JS \uc124\uce58"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"asdf plugin add nodejs\nasdf install nodejs 20.11.1\nasdf global nodejs 20.11.1\n")),(0,l.yg)("h2",{id:"docker-\uc124\uce58"},"Docker \uc124\uce58"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Docker Desktop \ub300\uccb4")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"brew install colima\n")),(0,l.yg)("h2",{id:"jetbrains-toolbox-\uc124\uce58"},"JetBrains ToolBox \uc124\uce58"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"brew install --cask jetbrains-toolbox\n")))}u.isMDXComponent=!0}}]);