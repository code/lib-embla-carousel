"use strict";(self.webpackChunkembla_carousel_docs=self.webpackChunkembla_carousel_docs||[]).push([[3275,1905],{7932:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return w}});var l=n(1184),a=n(4041),r=n(1658),o=n(8783),c=n(7259),s=n(4376);function i(e){const t=Object.assign({h1:"h1",p:"p",strong:"strong",hr:"hr",h2:"h2",a:"a",span:"span",pre:"pre",code:"code",h3:"h3",br:"br"},(0,l.RP)(),e.components),{RepositoryLink:n,BrandPrimaryText:i,BrandSecondaryText:u}=t;return i||m("BrandPrimaryText",!0),u||m("BrandSecondaryText",!0),n||m("RepositoryLink",!0),a.createElement(a.Fragment,null,a.createElement(t.h1,null,"Auto Scroll"),"\n",a.createElement(n,{to:"https://github.com/davidjerleke/embla-carousel/tree/master/packages/embla-carousel-auto-scroll"},a.createElement(t.p,null,"View plugin on GitHub")),"\n",a.createElement(t.p,null,"This plugin is used to extend Embla Carousel with ",a.createElement(t.strong,null,"auto scroll")," functionality."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h2,{id:"example",style:{position:"relative"}},a.createElement(t.a,{href:"#example","aria-label":"example permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Example"),"\n",a.createElement(s.Z),"\n",a.createElement(t.h2,{id:"installation",style:{position:"relative"}},a.createElement(t.a,{href:"#installation","aria-label":"installation permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Installation"),"\n",a.createElement(t.p,null,"Start by installing the ",a.createElement(t.strong,null,"npm package")," and save it to your dependencies:"),"\n",a.createElement(r.t,{groupId:c.sk.GROUP_ID},a.createElement(o.O,{tab:c.sk.TABS.CDN},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html"},'<script src="https://unpkg.com/embla-carousel-auto-scroll/embla-carousel-auto-scroll.umd.js"><\/script>\n'))),a.createElement(o.O,{tab:c.sk.TABS.NPM},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"npm install embla-carousel-auto-scroll --save\n"))),a.createElement(o.O,{tab:c.sk.TABS.YARN},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-shell"},"yarn add embla-carousel-auto-scroll\n")))),"\n",a.createElement(t.h2,{id:"options",style:{position:"relative"}},a.createElement(t.a,{href:"#options","aria-label":"options permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Options"),"\n",a.createElement(t.p,null,"Below follows an exhaustive ",a.createElement(t.strong,null,"list of all")," ",a.createElement(t.code,null,"Auto Scroll")," ",a.createElement(t.strong,null,"options")," and their default values."),"\n",a.createElement(t.h3,{id:"speed",style:{position:"relative"}},a.createElement(t.a,{href:"#speed","aria-label":"speed permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"speed"),"\n",a.createElement(t.p,null,"Type: ",a.createElement(i,null,a.createElement(t.code,null,"number")),a.createElement(t.br),"\n","Default: ",a.createElement(u,null,a.createElement(t.code,null,"2"))),"\n",a.createElement(t.p,null,"Number of pixels auto scroll should advance per frame."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"startdelay",style:{position:"relative"}},a.createElement(t.a,{href:"#startdelay","aria-label":"startdelay permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"startDelay"),"\n",a.createElement(t.p,null,"Type: ",a.createElement(i,null,a.createElement(t.code,null,"number")),a.createElement(t.br),"\n","Default: ",a.createElement(u,null,a.createElement(t.code,null,"1000"))),"\n",a.createElement(t.p,null,"Number of milliseconds auto scroll should ",a.createElement(t.strong,null,"wait before it starts"),". This also applies when user interactions end and ",a.createElement(t.a,{href:"/plugins/auto-scroll/#stoponinteraction"},"stopOnInteraction")," is ",a.createElement(t.code,null,"false"),"."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"direction",style:{position:"relative"}},a.createElement(t.a,{href:"#direction","aria-label":"direction permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"direction"),"\n",a.createElement(t.p,null,"Type: ",a.createElement(i,null,a.createElement(t.code,null,"string")),a.createElement(t.br),"\n","Default: ",a.createElement(u,null,a.createElement(t.code,null,"forward"))),"\n",a.createElement(t.p,null,"This option is used to set the auto scroll direction. Set it to ",a.createElement(t.code,null,"backward")," if you want it to scroll in the opposite direction."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"playoninit",style:{position:"relative"}},a.createElement(t.a,{href:"#playoninit","aria-label":"playoninit permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"playOnInit"),"\n",a.createElement(t.p,null,"Type: ",a.createElement(i,null,a.createElement(t.code,null,"boolean")),a.createElement(t.br),"\n","Default: ",a.createElement(u,null,a.createElement(t.code,null,"true"))),"\n",a.createElement(t.p,null,"If set to ",a.createElement(t.code,null,"false"),", you'll have to start auto scroll yourself by calling the ",a.createElement(t.a,{href:"/plugins/auto-scroll/#play"},"play")," method."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"stoponinteraction",style:{position:"relative"}},a.createElement(t.a,{href:"#stoponinteraction","aria-label":"stoponinteraction permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"stopOnInteraction"),"\n",a.createElement(t.p,null,"Type: ",a.createElement(i,null,a.createElement(t.code,null,"boolean")),a.createElement(t.br),"\n","Default: ",a.createElement(u,null,a.createElement(t.code,null,"true"))),"\n",a.createElement(t.p,null,"If set to ",a.createElement(t.code,null,"false"),", auto scroll will not be disabled after drag interactions, and it will restart every time after an interaction."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"stoponmouseenter",style:{position:"relative"}},a.createElement(t.a,{href:"#stoponmouseenter","aria-label":"stoponmouseenter permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"stopOnMouseEnter"),"\n",a.createElement(t.p,null,"Type: ",a.createElement(i,null,a.createElement(t.code,null,"boolean")),a.createElement(t.br),"\n","Default: ",a.createElement(u,null,a.createElement(t.code,null,"false"))),"\n",a.createElement(t.p,null,"When enabled, auto scroll will stop when a mouse pointer enters the Embla Carousel container. If ",a.createElement(t.a,{href:"/plugins/auto-scroll/#stoponinteraction"},"stopOnInteraction")," is also ",a.createElement(t.code,null,"false"),", auto scroll will resume when the mouse leaves the carousel container."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"stoponfocusin",style:{position:"relative"}},a.createElement(t.a,{href:"#stoponfocusin","aria-label":"stoponfocusin permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"stopOnFocusIn"),"\n",a.createElement(t.p,null,"Type: ",a.createElement(i,null,a.createElement(t.code,null,"boolean")),a.createElement(t.br),"\n","Default: ",a.createElement(u,null,a.createElement(t.code,null,"true"))),"\n",a.createElement(t.p,null,"When enabled, auto scroll will stop when a focusable element inside the carousel recieves focus. If ",a.createElement(t.a,{href:"/plugins/auto-scroll/#stoponinteraction"},"stopOnInteraction")," is ",a.createElement(t.code,null,"false"),", auto scroll will resume when the user leaves focus."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"rootnode",style:{position:"relative"}},a.createElement(t.a,{href:"#rootnode","aria-label":"rootnode permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"rootNode"),"\n",a.createElement(t.p,null,"Type: ",a.createElement(i,null,a.createElement(t.code,null,"(emblaRoot: HTMLElement) => HTMLElement | null")),a.createElement(t.br),"\n","Default: ",a.createElement(u,null,a.createElement(t.code,null,"null"))),"\n",a.createElement(t.p,null,"The ",a.createElement(t.strong,null,"node")," that should ",a.createElement(t.strong,null,"respond")," to user ",a.createElement(t.strong,null,"interactions")," like ",a.createElement(t.a,{href:"/plugins/auto-scroll/#stoponmouseenter"},"stopOnMouseEnter")," and ",a.createElement(t.a,{href:"/plugins/auto-scroll/#stoponinteraction"},"stopOnInteraction"),". If this is omitted, the node that wraps the Embla Carousel will be used as default."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h2,{id:"methods",style:{position:"relative"}},a.createElement(t.a,{href:"#methods","aria-label":"methods permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Methods"),"\n",a.createElement(t.p,null,"Below follows an exhaustive ",a.createElement(t.strong,null,"list of all")," ",a.createElement(t.code,null,"Auto Scroll")," ",a.createElement(t.strong,null,"methods")," with their respective parameters and return values."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"play",style:{position:"relative"}},a.createElement(t.a,{href:"#play","aria-label":"play permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"play"),"\n",a.createElement(t.p,null,"Parameters: ",a.createElement(i,null,a.createElement(t.code,null,"startDelayOverride?: number")),a.createElement(t.br),"\n","Returns: ",a.createElement(u,null,a.createElement(t.code,null,"void"))),"\n",a.createElement(t.p,null,"Start auto scroll. Pass a ",a.createElement(t.strong,null,"startDelayOverride")," if you want to change the ",a.createElement(t.a,{href:"/plugins/auto-scroll/#startdelay"},"startDelay")," option after the plugin has been initialized."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"stop",style:{position:"relative"}},a.createElement(t.a,{href:"#stop","aria-label":"stop permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"stop"),"\n",a.createElement(t.p,null,"Parameters: ",a.createElement(i,null,a.createElement(t.code,null,"none")),a.createElement(t.br),"\n","Returns: ",a.createElement(u,null,a.createElement(t.code,null,"void"))),"\n",a.createElement(t.p,null,"Stops auto scroll."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"reset",style:{position:"relative"}},a.createElement(t.a,{href:"#reset","aria-label":"reset permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"reset"),"\n",a.createElement(t.p,null,"Parameters: ",a.createElement(i,null,a.createElement(t.code,null,"none")),a.createElement(t.br),"\n","Returns: ",a.createElement(u,null,a.createElement(t.code,null,"void"))),"\n",a.createElement(t.p,null,"Stops auto scroll, and starts the timer again using ",a.createElement(t.a,{href:"/plugins/auto-scroll/#startdelay"},"startDelay")," when the carousel has settled. This will only take effect if auto scroll is playing. If auto scroll is stopped, this method won't trigger anything."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"isplaying",style:{position:"relative"}},a.createElement(t.a,{href:"#isplaying","aria-label":"isplaying permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"isPlaying"),"\n",a.createElement(t.p,null,"Parameters: ",a.createElement(i,null,a.createElement(t.code,null,"none")),a.createElement(t.br),"\n","Returns: ",a.createElement(u,null,a.createElement(t.code,null,"boolean"))),"\n",a.createElement(t.p,null,"Returns a boolean whether the carousel is auto scrolling or not."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h2,{id:"events",style:{position:"relative"}},a.createElement(t.a,{href:"#events","aria-label":"events permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"Events"),"\n",a.createElement(t.p,null,"Below follows an exhaustive ",a.createElement(t.strong,null,"list of all")," ",a.createElement(t.code,null,"Auto Scroll")," ",a.createElement(t.strong,null,"events")," together with information about how they work."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"autoscrollplay",style:{position:"relative"}},a.createElement(t.a,{href:"#autoscrollplay","aria-label":"autoscrollplay permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"autoScroll:play"),"\n",a.createElement(t.p,null,"Once: ",a.createElement(i,null,a.createElement(t.code,null,"no"))),"\n",a.createElement(t.p,null,"Fires when auto scroll starts playing."),"\n",a.createElement(t.hr),"\n",a.createElement(t.h3,{id:"autoscrollstop",style:{position:"relative"}},a.createElement(t.a,{href:"#autoscrollstop","aria-label":"autoscrollstop permalink",className:"anchor before"},a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" fill="currentColor" /></svg>'}})),"autoScroll:stop"),"\n",a.createElement(t.p,null,"Once: ",a.createElement(i,null,a.createElement(t.code,null,"no"))),"\n",a.createElement(t.p,null,"Fires when auto scroll stops scrolling."),"\n",a.createElement(t.hr))}var u=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.RP)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)};function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var h=n(352),p=n(824),d=n(408),E=n(6169),f=n(8324),v=n(2272),g=n(3908),S=n(3594),b=n(5413);const y=e=>{const{data:t,pageContext:n}=e,{siteUrl:l,author:r}=(0,d.Q)(),{title:o="",description:c,date:s}=t.mdx.frontmatter,i=(0,a.useMemo)((()=>new Date(`${s} UTC`).toISOString()),[s]);return a.createElement(h.G,{title:o,description:c,url:`${l}${n.slug}`},a.createElement("script",{type:"application/ld+json"},`\n      {\n        "@context": "https://schema.org",\n        "@type": "TechArticle",\n        "name": "${(0,S.b)(l)}",\n        "description": "${c}",\n        "url": "${l}${n.slug}",\n        "headline": "${o}",\n        "image": "${l}/share-image.png",\n        "datePublished": "${i}",\n        "dateModified": "${i}",\n        "author": {\n          "@type": "Person",\n          "name": "${r}"\n        },\n        "publisher": {\n          "@type": "Organization",\n          "name": "${r}",\n          "logo": {\n            "@type": "ImageObject",\n            "width": "512",\n            "height": "512",\n            "url": "${l}${p.A}"\n          }\n        }\n      }\n    `))},H=e=>{const{pageContext:t,children:n}=e,{next:l,previous:r,filePath:o,id:c}=t;return a.createElement(a.Fragment,null,a.createElement(v.Q,{id:c}),a.createElement("article",{id:g.e},a.createElement(b.A,null,n)),a.createElement(E.R,{pageUrl:o}),a.createElement(f.o,{previous:r,next:l}))};function w(e){return a.createElement(H,e,a.createElement(u,e))}},4376:function(e,t,n){n.d(t,{Z:function(){return b}});var l=n(4041),a=n(3057),r=n(651),o=n(1905),c=n(1563),s=n(7736),i=n(8312),u=n(9264),m=n(1021),h=n(5931);const p="embla-carousel-auto-scroll",d=(0,i.F)(8),E={loop:!0},f=(0,s.N1)("45%"),v={id:p,slides:d,options:E,styles:f},g=(0,m.v)(v,"AutoScroll"),S=a.default.div.withConfig({displayName:"AutoScroll__Wrapper",componentId:"sc-1euu7sk-0"})(["",";&.","{",";}"],c.sx,p,f),b=()=>{const[e,t]=(0,r.Wx)(h.T);return l.createElement(l.Fragment,null,l.createElement(u.E,{sandboxes:g}),l.createElement(S,{className:p,ref:e},t?l.createElement(o.default,{slides:d,options:E}):null))}},1905:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var l=n(4041),a=n(7154);const r={direction:"forward",speed:2,startDelay:1e3,active:!0,breakpoints:{},playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,rootNode:null};function o(e){let t,n,l,a;void 0===e&&(e={});let c,s=0,i=!1,u=!1;function m(){if(l)return;if(i)return;n.emit("autoScroll:play");const e=n.internalEngine(),{ownerWindow:r}=e;s=r.setTimeout((()=>{e.scrollBody=function(e){const{location:l,previousLocation:a,offsetLocation:r,target:o,scrollTarget:c,index:s,indexPrevious:i,limit:{reachedMin:u,reachedMax:m,constrain:p},options:{loop:d}}=e,E="forward"===t.direction?-1:1,f=()=>w;let v=0,g=0,S=l.get(),b=0,y=!1;function H(){let e=0;a.set(l),v=E*t.speed,S+=v,l.add(v),o.set(l),e=S-b,g=Math.sign(e),b=S;const f=c.byDistance(0,!1).index;s.get()!==f&&(i.set(s.get()),s.set(f),n.emit("select"));const H="forward"===t.direction?u(r.get()):m(r.get());if(!d&&H){y=!0;const e=p(l.get());l.set(e),o.set(l),h()}return w}const w={direction:()=>g,duration:()=>-1,velocity:()=>v,settled:()=>y,seek:H,useBaseFriction:f,useBaseDuration:f,useFriction:f,useDuration:f};return w}(e),e.animation.start()}),a),i=!0}function h(){if(l)return;if(!i)return;n.emit("autoScroll:stop");const e=n.internalEngine(),{ownerWindow:t}=e;e.scrollBody=c,t.clearTimeout(s),s=0,i=!1}function p(){u||h()}function d(){u||g()}function E(){u=!0,h()}function f(){u=!1,m()}function v(){n.off("settle",v),m()}function g(){n.on("settle",v)}return{name:"autoScroll",options:e,init:function(s,i){n=s;const{mergeOptions:u,optionsAtMedia:v}=i,g=u(r,o.globalOptions),S=u(g,e);if(t=v(S),n.scrollSnapList().length<=1)return;a=t.startDelay,l=!1,c=n.internalEngine().scrollBody;const{eventStore:b}=n.internalEngine(),y=!!n.internalEngine().options.watchDrag,H=function(e,t){const n=e.rootNode();return t&&t(n)||n}(n,t.rootNode);y&&n.on("pointerDown",p),y&&!t.stopOnInteraction&&n.on("pointerUp",d),t.stopOnMouseEnter&&b.add(H,"mouseenter",E),t.stopOnMouseEnter&&!t.stopOnInteraction&&b.add(H,"mouseleave",f),t.stopOnFocusIn&&n.on("slideFocusStart",h),t.stopOnFocusIn&&!t.stopOnInteraction&&b.add(n.containerNode(),"focusout",m),t.playOnInit&&m()},destroy:function(){n.off("pointerDown",p).off("pointerUp",d).off("slideFocusStart",h).off("settle",v),h(),l=!0,i=!1},play:function(e){void 0!==e&&(a=e),m()},stop:function(){i&&h()},reset:function(){i&&(h(),g())},isPlaying:function(){return i}}}o.globalOptions=void 0;var c=n(7105);var s=e=>{const{slides:t,options:n}=e,[r,s]=(0,a.A)(n,[o({playOnInit:!1})]),{0:i,1:u}=(0,l.useState)(!1),{prevBtnDisabled:m,nextBtnDisabled:h,onPrevButtonClick:p,onNextButtonClick:d}=(0,c.Hd)(s),E=(0,l.useCallback)((e=>{var t;const n=null==s||null===(t=s.plugins())||void 0===t?void 0:t.autoScroll;if(!n)return;(!1===n.options.stopOnInteraction?n.reset:n.stop)(),e()}),[s]),f=(0,l.useCallback)((()=>{var e;const t=null==s||null===(e=s.plugins())||void 0===e?void 0:e.autoScroll;if(!t)return;(t.isPlaying()?t.stop:t.play)()}),[s]);return(0,l.useEffect)((()=>{var e;const t=null==s||null===(e=s.plugins())||void 0===e?void 0:e.autoScroll;t&&(u(t.isPlaying()),s.on("autoScroll:play",(()=>u(!0))).on("autoScroll:stop",(()=>u(!1))).on("reInit",(()=>u(t.isPlaying()))))}),[s]),l.createElement("div",{className:"embla"},l.createElement("div",{className:"embla__viewport",ref:r},l.createElement("div",{className:"embla__container"},t.map((e=>l.createElement("div",{className:"embla__slide",key:e},l.createElement("div",{className:"embla__slide__number"},l.createElement("span",null,e+1))))))),l.createElement("div",{className:"embla__controls"},l.createElement("div",{className:"embla__buttons"},l.createElement(c.U1,{onClick:()=>E(p),disabled:m}),l.createElement(c.WE,{onClick:()=>E(d),disabled:h})),l.createElement("button",{className:"embla__play",onClick:f,type:"button"},i?"Stop":"Start")))}},8783:function(e,t,n){n.d(t,{O:function(){return a}});var l=n(4041);const a=e=>l.createElement(l.Fragment,e)}}]);
//# sourceMappingURL=component---src-templates-default-tsx-content-file-path-src-content-pages-plugins-auto-scroll-mdx-7ef83f31b095fe4d4279.js.map