webpackJsonp([47558472723404],{372:function(e,t){e.exports={data:{site:{siteMetadata:{title:"playable"}},page:{frontmatter:{layout:"simple",title:"Playback adapters",include:null},headings:[{depth:1,value:"Playback adapters"},{depth:2,value:"Basic concept"},{depth:2,value:"How to use"},{depth:3,value:"Import to your project"},{depth:3,value:"Add script with proper bundle"},{depth:2,value:"Create your own adapter"}],htmlAst:{type:"root",children:[{type:"element",tagName:"h1",properties:{id:"playback-adapters"},children:[{type:"element",tagName:"a",properties:{href:"#playback-adapters",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Playback adapters"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"basic-concept"},children:[{type:"element",tagName:"a",properties:{href:"#basic-concept",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Basic concept"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"There are lot of varios formats and concept of delivering video to end user.\nYou could be satisfied with "},{type:"element",tagName:"a",properties:{href:"https://en.wikipedia.org/wiki/Progressive_download",target:"_blank",rel:["nofollow","noopener","noreferrer"]},children:[{type:"text",value:"progressive download"}]},{type:"text",value:" of your mp4 video, which has cross-browser support and almost no specific requirements for your backend.\nBut if the user experience is really important for you, you should consider using "},{type:"element",tagName:"a",properties:{href:"https://en.wikipedia.org/wiki/Adaptive_bitrate_streaming",target:"_blank",rel:["nofollow","noopener","noreferrer"]},children:[{type:"text",value:"adaptive streaming"}]},{type:"text",value:".\nPros - better user experience.\nCons - there is no cross-browser support of main formats (HLS and MPEG-DASH) of adaptive streaming.\nThere are various libraries that add this support to the browser.\nWe did not add them to our default bundle because they are heavyweight, but we give you the ability to use them."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In Playable we have a concept of adapters. To use some library that is responsible for playing video of some format, create ES6 class that implements proper interface and add it to Playable as playback adapter. We have couple adapters written by ourselfs. Use them or check code for inspiration."}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"how-to-use"},children:[{type:"element",tagName:"a",properties:{href:"#how-to-use",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"How to use"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"There are 2 ways of adding them."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"import-to-your-project"},children:[{type:"element",tagName:"a",properties:{href:"#import-to-your-project",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Import to your project"}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"code",properties:{className:["language-javascript"]},children:[{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"import"}]},{type:"text",value:" Playabale "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"from"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'playable'"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"import"}]},{type:"text",value:" HLSAdapter "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"from"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'playable/dist/adapters/hls'"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"import"}]},{type:"text",value:" DASHAdapter "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"from"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:"'playable/dist/adapters/dash'"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n\nPlayable"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"registerPlaybackAdapter"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"HLSAdapter"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\nPlayable"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"registerPlaybackAdapter"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"text",value:"DASHAdapter"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{id:"add-script-with-proper-bundle"},children:[{type:"element",tagName:"a",properties:{href:"#add-script-with-proper-bundle",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Add script with proper bundle"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"You can just take our bundle with hls or dash, where we already connected our adapter with Playable:"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"With HLS - "},{type:"element",tagName:"a",properties:{href:"https://unpkg.com/playable@1.3.3/dist/statics/playable-hls.bundle.min.js",target:"_blank",rel:["nofollow","noopener","noreferrer"]},children:[{type:"text",value:"https://unpkg.com/playable/dist/statics/playable-hls.bundle.min.js"}]},{type:"element",tagName:"br",properties:{},children:[]},{type:"text",value:"\nWith MPEG-DASH - "},{type:"element",tagName:"a",properties:{href:"https://unpkg.com/playable@1.3.3/dist/statics/playable-dash.bundle.min.js",target:"_blank",rel:["nofollow","noopener","noreferrer"]},children:[{type:"text",value:"https://unpkg.com/playable/dist/statics/playable-dash.bundle.min.js"}]},{type:"element",tagName:"br",properties:{},children:[]}]},{type:"text",value:"\n"},{type:"element",tagName:"div",properties:{className:["gatsby-highlight"]},children:[{type:"text",value:"\n      "},{type:"element",tagName:"pre",properties:{className:["language-html"]},children:[{type:"element",tagName:"code",properties:{className:["language-html"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"<"}]},{type:"text",value:"script"}]},{type:"text",value:" "},{type:"element",tagName:"span",properties:{className:["token","attr-name"]},children:[{type:"text",value:"src"}]},{type:"element",tagName:"span",properties:{className:["token","attr-value"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"="}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]},{type:"text",value:"https://unpkg.com/playable/dist/statics/playable-hls.bundle.min.js"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:'"'}]}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"/>"}]}]},{type:"element",tagName:"span",properties:{className:["token","script"]},children:[{type:"element",tagName:"span",properties:{className:["token","language-javascript"]},children:[{type:"text",value:"\n"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"<"}]},{type:"text",value:"script"},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:">"}]},{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["token","keyword"]},children:[{type:"text",value:"const"}]},{type:"text",value:" player "},{type:"element",tagName:"span",properties:{className:["token","operator"]},children:[{type:"text",value:"="}]},{type:"text",value:" Playable"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"create"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n  player"},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"."}]},{type:"element",tagName:"span",properties:{className:["token","function"]},children:[{type:"text",value:"setSrc"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"("}]},{type:"element",tagName:"span",properties:{className:["token","string"]},children:[{type:"text",value:'"URL_TO_YOUR_HLS_FILE"'}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:")"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:";"}]},{type:"text",value:"\n"}]}]},{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","tag"]},children:[{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:"</"}]},{type:"text",value:"script"}]},{type:"element",tagName:"span",properties:{className:["token","punctuation"]},children:[{type:"text",value:">"}]}]}]}]},{type:"text",value:"\n      "}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{id:"create-your-own-adapter"},children:[{type:"element",tagName:"a",properties:{href:"#create-your-own-adapter",ariaHidden:!0,className:["anchor"]},children:[{type:"element",tagName:"svg",properties:{ariaHidden:"true",height:16,version:"1.1",viewBox:"0 0 16 16",width:16},children:[{type:"element",tagName:"path",properties:{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"},children:[]}]}]},{type:"text",value:"Create your own adapter"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"In near future we gonna update this page with required interface for adapters, so you could create one by yourself. For now - check our "},{type:"element",tagName:"a",properties:{href:"https://github.com/wix/playable",target:"_blank",rel:["nofollow","noopener","noreferrer"]},children:[{type:"text",value:"repository"}]}]}],data:{quirksMode:!1}}}},pathContext:{slug:"/adapters/"}}}});
//# sourceMappingURL=path---adapters-65949bb48edd9fe2aad8.js.map