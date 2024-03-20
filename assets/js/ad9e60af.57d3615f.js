"use strict";(self.webpackChunkrxcats_blog=self.webpackChunkrxcats_blog||[]).push([[3713],{5680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(r),f=a,y=c["".concat(u,".").concat(f)]||c[f]||m[f]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1657:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(8168),a=(r(6540),r(5680));const o={title:"DynamoDB Custom AttributeConverter",authors:["rxcats"],tags:["DynamoDB","Custom AttributeConverter"],date:new Date("2024-03-20T03:00:00.000Z")},i=void 0,s={permalink:"/rxcats-blog/blog/2024/03/20/dynamodb-attribute-converter",source:"@site/blog/2024-03-20-dynamodb-attribute-converter.mdx",title:"DynamoDB Custom AttributeConverter",description:"Custom AttributeConverter \uc608\uc2dc",date:"2024-03-20T03:00:00.000Z",formattedDate:"March 20, 2024",tags:[{label:"DynamoDB",permalink:"/rxcats-blog/blog/tags/dynamo-db"},{label:"Custom AttributeConverter",permalink:"/rxcats-blog/blog/tags/custom-attribute-converter"}],hasTruncateMarker:!1,authors:[{name:"rxcats",title:"Game Backend Developer",url:"https://github.com/rxcats",imageURL:"https://avatars.githubusercontent.com/u/6582519?v=4",key:"rxcats"}],frontMatter:{title:"DynamoDB Custom AttributeConverter",authors:["rxcats"],tags:["DynamoDB","Custom AttributeConverter"],date:"2024-03-20T03:00:00.000Z"},nextItem:{title:"Shop Titans - Official Data Spreadsheet",permalink:"/rxcats-blog/blog/shoptitans-spreadsheet"}},u={authorsImageUrls:[void 0]},l=[{value:"Custom AttributeConverter \uc608\uc2dc",id:"custom-attributeconverter-\uc608\uc2dc",level:2},{value:"Deflater, Inflater, Base64 \ub97c \uc774\uc6a9\ud558\uc5ec \ucee8\ubc84\ud130 \uc0dd\uc131",id:"deflater-inflater-base64-\ub97c-\uc774\uc6a9\ud558\uc5ec-\ucee8\ubc84\ud130-\uc0dd\uc131",level:3},{value:"\uc5d4\ud2f0\ud2f0 \uc120\uc5b8",id:"\uc5d4\ud2f0\ud2f0-\uc120\uc5b8",level:3}],p={toc:l},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"custom-attributeconverter-\uc608\uc2dc"},"Custom AttributeConverter \uc608\uc2dc"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790 \uc815\uc758 \uc18d\uc131 \ubcc0\ud658\uae30\ub97c \uc774\uc6a9\ud558\uc5ec \ub370\uc774\ud130 \uc555\ucd95\ud558\uc5ec \uc800\uc7a5\ud558\uae30"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ko_kr/sdk-for-java/latest/developer-guide/ddb-en-client-adv-features-conversion.html"},"\uacf5\uc2dd\ubb38\uc11c")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://sdk.amazonaws.com/java/api/latest/software/amazon/awssdk/enhanced/dynamodb/AttributeConverter.html"},"\uae30\ubcf8\uc81c\uacf5 \ucee8\ubc84\ud130"))),(0,a.yg)("h3",{id:"deflater-inflater-base64-\ub97c-\uc774\uc6a9\ud558\uc5ec-\ucee8\ubc84\ud130-\uc0dd\uc131"},"Deflater, Inflater, Base64 \ub97c \uc774\uc6a9\ud558\uc5ec \ucee8\ubc84\ud130 \uc0dd\uc131"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-kotlin"},'class CompressAttributeConverter : AttributeConverter<String> {\n    override fun transformFrom(value: String): AttributeValue {\n        // Deflater\ub97c \uc0ac\uc6a9\ud558\uc5ec string \uc744 \uc555\ucd95\ud558\uc5ec base64 encode\n        val base64 = Compression.compress(value)\n        return AttributeValue.builder()\n            .s(base64)\n            .build()\n    }\n\n    override fun transformTo(attr: AttributeValue?): String {\n        // base64 decode \ud6c4, Inflater\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc555\ucd95\ud574\uc81c\n        if (attr == null) return ""\n        val base64 = attr.s()\n        return Compression.decompress(base64)\n    }\n\n    override fun type(): EnhancedType<String> {\n        return EnhancedType.of(String::class.java)\n    }\n\n    override fun attributeValueType(): AttributeValueType {\n        return AttributeValueType.S\n    }\n\n    companion object {\n        fun create(): CompressAttributeConverter {\n            return CompressAttributeConverter()\n        }\n    }\n\n    private object Compression {\n        @OptIn(ExperimentalEncodingApi::class)\n        fun compress(input: String): String {\n            val bytes = input.toByteArray()\n            return Base64.encode(compress(bytes))\n        }\n\n        @OptIn(ExperimentalEncodingApi::class)\n        fun decompress(input: String): String {\n            val bytes = decompress(Base64.decode(input.toByteArray()))\n            return String(bytes)\n        }\n\n        private fun compress(input: ByteArray): ByteArray {\n            val deflater = Deflater()\n            deflater.setInput(input)\n            deflater.finish()\n\n            val outputStream = ByteArrayOutputStream()\n            val buffer = ByteArray(1024)\n\n            while (!deflater.finished()) {\n                val compressedSize = deflater.deflate(buffer)\n                outputStream.write(buffer, 0, compressedSize)\n            }\n\n            return outputStream.toByteArray()\n        }\n\n        private fun decompress(input: ByteArray): ByteArray {\n            val inflater = Inflater()\n            inflater.setInput(input)\n\n            val outputStream = ByteArrayOutputStream()\n            val buffer = ByteArray(1024)\n\n            while (!inflater.finished()) {\n                val decompressedSize = inflater.inflate(buffer)\n                outputStream.write(buffer, 0, decompressedSize)\n            }\n\n            return outputStream.toByteArray()\n        }\n    }\n}\n')),(0,a.yg)("h3",{id:"\uc5d4\ud2f0\ud2f0-\uc120\uc5b8"},"\uc5d4\ud2f0\ud2f0 \uc120\uc5b8"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-kotlin"},'@DynamoDbBean\ndata class CompressTest(\n    @get:DynamoDbPartitionKey\n    var pk: String = "",\n\n    // \uc555\ucd95\uc744 \uc801\uc6a9\ud560 \ud544\ub4dc\uc5d0 \ucee8\ubc84\ud130 \uba85\uc2dc\n    @get:DynamoDbConvertedBy(CompressAttributeConverter::class)\n    var meta: String = "",\n)\n\n')))}m.isMDXComponent=!0}}]);