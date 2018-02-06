webpackJsonp([77098458055955],{366:function(n,s){n.exports={data:{site:{siteMetadata:{navigation:[{path:"/player-config",title:"Configuration"},{path:"/video-source",title:"Video source"},{path:"/api",title:"API reference"},{path:"/modules",title:"Modules"},{path:"/events",title:"Player events"},{path:"/adapters",title:"Playback adapters"}]}},page:{frontmatter:{layout:null,title:"",include:null},headings:[{depth:1,value:"Video source"},{depth:2,value:"And now, the best part..."}],html:'<h1 id="video-source"><a href="#video-source" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Video source</h1>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">import</span> Playable <span class="token keyword">from</span> <span class="token string">\'playable\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> player <span class="token operator">=</span> Playable<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  src<span class="token punctuation">:</span> <span class="token string">\'https://my-url/video.mp4\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nplayer<span class="token punctuation">.</span><span class="token function">setSrc</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token string">\'https://my-url/video.mp4\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'https://my-url/video.webm\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'https://my-url/video.m3u8\'</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Set the source of the video stream:</p>\n<p>The type of stream is automatically detected from the URL. The following extensions are recognized:</p>\n<ul>\n<li>MP4 <code>.mp4</code></li>\n<li>WebM <code>.webm</code></li>\n<li>HLS manifest <code>.m3u8</code></li>\n<li>DASH manifest <code>.mpd</code></li>\n</ul>\n<p>You can provide multiple source as an array.</p>\n<h2 id="and-now-the-best-part"><a href="#and-now-the-best-part" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>And now, the best part...</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>player<span class="token punctuation">.</span><span class="token function">setSrc</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token string">\'https://my-url/video.mp4\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> <span class="token string">\'https://my-url/video.webm\'</span><span class="token punctuation">,</span>\n    type<span class="token punctuation">:</span> Playable<span class="token punctuation">.</span>MEDIA_STREAM_TYPES<span class="token punctuation">.</span>WEBM\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> <span class="token string">\'https://my-url/video.m3u8\'</span><span class="token punctuation">,</span>\n    type<span class="token punctuation">:</span> Playable<span class="token punctuation">.</span>MEDIA_STREAM_TYPES<span class="token punctuation">.</span>HLS\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>If the URL does not end with the file extension, the type can be specified explicitly.</p>\n<p>In combination with multiple sources, you can be flexible as much as you want:</p>\n<p><strong><em>player</em></strong> assumes the URLs point to <strong>different formats</strong> of the <strong>same video</strong>,\nand will automatically detect and choose the ideal format for the current browser.</p>\n<p>The order of sources in the array doesn\'t matter.</p>\n<p>The logic uses the following prioritization system to pick the most suitable format (<em>from highest priority to lowest</em>):</p>\n<ol>\n<li><strong>Adaptive sources</strong> that can be played via <strong>native</strong> browser support. <em>Example: HLS on Safari</em></li>\n<li><strong>Adaptive sources</strong> that can be played via <strong>MSE</strong>-based libraries. <em>Example: DASH on Chrome</em></li>\n<li><strong>Progressive</strong> sources (MP4 and WebM) that can be played via <strong>native</strong> browser support.</li>\n</ol>\n<p>The algorithm bases decisions using browser feature detection.</p>\n<p>And boi, you can extend \'dis logic with your own custom shit, <a href="/adapters">trust me</a>!</p>'}},pathContext:{slug:"/video-source/"}}}});
//# sourceMappingURL=path---video-source-ff5c19b9613d4b56168e.js.map