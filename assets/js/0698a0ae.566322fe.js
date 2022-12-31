"use strict";(self.webpackChunkrxcats_blog=self.webpackChunkrxcats_blog||[]).push([[676],{3905:(e,l,t)=>{t.d(l,{Zo:()=>p,kt:()=>v});var a=t(7294);function r(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function n(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?n(Object(t),!0).forEach((function(l){r(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function s(e,l){if(null==e)return{};var t,a,r=function(e,l){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],l.indexOf(t)>=0||(r[t]=e[t]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),u=function(e){var l=a.useContext(i),t=l;return e&&(t="function"==typeof e?e(l):o(o({},l),e)),t},p=function(e){var l=u(e.components);return a.createElement(i.Provider,{value:l},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var l=e.children;return a.createElement(a.Fragment,{},l)}},m=a.forwardRef((function(e,l){var t=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,v=c["".concat(i,".").concat(m)]||c[m]||d[m]||n;return t?a.createElement(v,o(o({ref:l},p),{},{components:t})):a.createElement(v,o({ref:l},p))}));function v(e,l){var t=arguments,r=l&&l.mdxType;if("string"==typeof e||r){var n=t.length,o=new Array(n);o[0]=m;var s={};for(var i in l)hasOwnProperty.call(l,i)&&(s[i]=l[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<n;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const n={slug:"setup-develop-env",title:"\uac1c\ubc1c\ud658\uacbd \uc124\uc815\ud558\uae30",authors:["rxcats"],tags:["setup","develop","environment"],date:new Date("2022-12-31T03:00:00.000Z")},o=void 0,s={permalink:"/rxcats-blog/blog/setup-develop-env",source:"@site/blog/2022-12-31-setup-develop-env.mdx",title:"\uac1c\ubc1c\ud658\uacbd \uc124\uc815\ud558\uae30",description:"Mac Xcode Command Line Toos \uc124\uce58",date:"2022-12-31T03:00:00.000Z",formattedDate:"December 31, 2022",tags:[{label:"setup",permalink:"/rxcats-blog/blog/tags/setup"},{label:"develop",permalink:"/rxcats-blog/blog/tags/develop"},{label:"environment",permalink:"/rxcats-blog/blog/tags/environment"}],readingTime:1.975,hasTruncateMarker:!1,authors:[{name:"rxcats",title:"Mobile Game Backend Developer",url:"https://github.com/rxcats",imageURL:"https://avatars.githubusercontent.com/u/6582519?v=4",key:"rxcats"}],frontMatter:{slug:"setup-develop-env",title:"\uac1c\ubc1c\ud658\uacbd \uc124\uc815\ud558\uae30",authors:["rxcats"],tags:["setup","develop","environment"],date:"2022-12-31T03:00:00.000Z"},prevItem:{title:"\ucf54\ub4dc \uc608\uc058\uac8c \uacf5\uc720\ud558\uae30",permalink:"/rxcats-blog/blog/share-code-carbon"}},i={authorsImageUrls:[void 0]},u=[{value:"Mac Xcode Command Line Toos \uc124\uce58",id:"mac-xcode-command-line-toos-\uc124\uce58",level:2},{value:"Oh My ZSH \uc124\uce58",id:"oh-my-zsh-\uc124\uce58",level:2},{value:"\ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790 Homebrew \uc124\uce58",id:"\ud328\ud0a4\uc9c0-\uad00\ub9ac\uc790-homebrew-\uc124\uce58",level:2},{value:"Homebrew \ud658\uacbd\uc124\uc815",id:"homebrew-\ud658\uacbd\uc124\uc815",level:3},{value:"Homebrew \ub9ac\ub205\uc2a4",id:"homebrew-\ub9ac\ub205\uc2a4",level:3},{value:"Requirements",id:"requirements",level:4},{value:"\ube4c\ub4dc\ud234 \uc124\uce58\ub294 \uc544\ub798 \uba85\ub839\uc5b4\ub85c \uc124\uce58",id:"\ube4c\ub4dc\ud234-\uc124\uce58\ub294-\uc544\ub798-\uba85\ub839\uc5b4\ub85c-\uc124\uce58",level:4},{value:"\ud658\uacbd\uc124\uc815",id:"\ud658\uacbd\uc124\uc815",level:4},{value:"\ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790 asdf \uc124\uce58",id:"\ud328\ud0a4\uc9c0-\uad00\ub9ac\uc790-asdf-\uc124\uce58",level:2},{value:"Node JS \uc124\uce58",id:"node-js-\uc124\uce58",level:3},{value:"JDK 17 \uc124\uce58",id:"jdk-17-\uc124\uce58",level:3},{value:"Docker \uc124\uce58",id:"docker-\uc124\uce58",level:2},{value:"JetBrains ToolBox \uc124\uce58",id:"jetbrains-toolbox-\uc124\uce58",level:2},{value:"direnv \uc124\uce58",id:"direnv-\uc124\uce58",level:2},{value:"direnv \ud658\uacbd\uc124\uc815",id:"direnv-\ud658\uacbd\uc124\uc815",level:3},{value:"direnv \uc0ac\uc6a9\ubc29\ubc95",id:"direnv-\uc0ac\uc6a9\ubc29\ubc95",level:3}],p={toc:u};function c(e){let{components:l,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mac-xcode-command-line-toos-\uc124\uce58"},"Mac Xcode Command Line Toos \uc124\uce58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"xcode-select --install\n")),(0,r.kt)("h2",{id:"oh-my-zsh-\uc124\uce58"},"Oh My ZSH \uc124\uce58"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ohmyz.sh/"},"https://ohmyz.sh/"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\n')),(0,r.kt)("h2",{id:"\ud328\ud0a4\uc9c0-\uad00\ub9ac\uc790-homebrew-\uc124\uce58"},"\ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790 Homebrew \uc124\uce58"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://brew.sh/"},"https://brew.sh/"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,r.kt)("h3",{id:"homebrew-\ud658\uacbd\uc124\uc815"},"Homebrew \ud658\uacbd\uc124\uc815"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Homebrew \uc124\uce58\ud6c4 $PATH \uc124\uc815\uc774 \ub418\uc9c0 \uc54a\uc558\uc744 \uacbd\uc6b0 brew \uba85\ub839\uc5b4\uac00 \ub3d9\uc791\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc73c\ubbc0\ub85c $PATH \uc124\uc815\uc744 \ucd94\uac00"),(0,r.kt)("li",{parentName:"ul"},".zprofile \uc5d0 \ucd94\uac00\ub418\ub3c4\ub85d \ud558\uae30")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> ~/.zprofile\nsource ~/.zprofile\nbrew doctor\n")),(0,r.kt)("h3",{id:"homebrew-\ub9ac\ub205\uc2a4"},"Homebrew \ub9ac\ub205\uc2a4"),(0,r.kt)("h4",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux 3.2 or newer"),(0,r.kt)("li",{parentName:"ul"},"Glibc 2.13 or newer"),(0,r.kt)("li",{parentName:"ul"},"64-bit x86_64 CPU")),(0,r.kt)("h4",{id:"\ube4c\ub4dc\ud234-\uc124\uce58\ub294-\uc544\ub798-\uba85\ub839\uc5b4\ub85c-\uc124\uce58"},"\ube4c\ub4dc\ud234 \uc124\uce58\ub294 \uc544\ub798 \uba85\ub839\uc5b4\ub85c \uc124\uce58"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Debian or Ubuntu")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install build-essential procps curl file git\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fedora, CentOS, or Red Hat")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo yum groupinstall 'Development Tools'\nsudo yum install procps-ng curl file git\n")),(0,r.kt)("h4",{id:"\ud658\uacbd\uc124\uc815"},"\ud658\uacbd\uc124\uc815"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"$PATH \uc124\uc815 .zprofile \uc5d0 \ucd94\uac00")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"echo 'eval \"$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)\"' >> ~/.zprofile\nsource ~/.zprofile\n")),(0,r.kt)("h2",{id:"\ud328\ud0a4\uc9c0-\uad00\ub9ac\uc790-asdf-\uc124\uce58"},"\ud328\ud0a4\uc9c0 \uad00\ub9ac\uc790 asdf \uc124\uce58"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://asdf-vm.com/"},"https://asdf-vm.com/")),(0,r.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uba74 jdk 17 \uc5ec\ub7ec\uac1c\uc758 \ubc84\uc804\uc744 \uc124\uce58\ud558\uace0 \uad00\ub9ac\ud560 \uc218 \uc788\uc74c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"brew install asdf\n")),(0,r.kt)("h3",{id:"node-js-\uc124\uce58"},"Node JS \uc124\uce58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"asdf plugin add nodejs\nasdf install nodejs 18.12.1\nasdf global nodejs 18.12.1\n")),(0,r.kt)("h3",{id:"jdk-17-\uc124\uce58"},"JDK 17 \uc124\uce58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"asdf plugin add java\nasdf install java zulu-17.38.21\nasdf global java zulu-17.38.21\n")),(0,r.kt)("h2",{id:"docker-\uc124\uce58"},"Docker \uc124\uce58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"brew install --cask docker\n")),(0,r.kt)("h2",{id:"jetbrains-toolbox-\uc124\uce58"},"JetBrains ToolBox \uc124\uce58"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"brew install --cask jetbrains-toolbox\n")),(0,r.kt)("h2",{id:"direnv-\uc124\uce58"},"direnv \uc124\uce58"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ub514\ub809\ud1a0\ub9ac\ubcc4\ub85c \ud658\uacbd\ubcc0\uc218\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc74c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"brew install direnv\n")),(0,r.kt)("h3",{id:"direnv-\ud658\uacbd\uc124\uc815"},"direnv \ud658\uacbd\uc124\uc815"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"$PATH \uc124\uc815 .zprofile \uc5d0 \ucd94\uac00")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"echo 'eval \"$(direnv hook zsh)\"' >> ~/.zprofile\nsource ~/.zprofile\n")),(0,r.kt)("h3",{id:"direnv-\uc0ac\uc6a9\ubc29\ubc95"},"direnv \uc0ac\uc6a9\ubc29\ubc95"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc81d\ud2b8 \ub514\ub809\ud1a0\ub9ac\uc5d0 asdf java local \ubc84\uc804 \uc124\uc815"),(0,r.kt)("li",{parentName:"ul"},"project-directory \uc5d0 \ub4e4\uc5b4\uac00\uac8c \ub418\uba74 direnv \ud2b8\ub9ac\uac70\uac00 \uc791\ub3d9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd project-directory\nasdf local java zulu-17.38.21\ndirenv allow .\n")))}c.isMDXComponent=!0}}]);