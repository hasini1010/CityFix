"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[99961],{711344:(e,t,n)=>{n.d(t,{xR:()=>g,ZP:()=>v,vR:()=>m});var r=n(231486),a=n(226198),i=n(932046),o=n(867820),s=n(644035),u=n(67347);let l={".pinterdev.com":"pinterdev","playhouse-worker-www":"playhouse-worker-www","playhouse-worker-sterling":"playhouse-worker-sterling","playhouse-worker-analytics":"playhouse-worker-analytics"},c=["accounts-oauth.pinterest.com","analytics-latest.pinterest.com","analytics.pinterest.com","canary.pinterest.com","latest.pinterest.com","sss.www.pinterest.com","testing.pinterest.com","testing-k8s.pinterest.com","unknown","www.pinterest.com","www.pinterest.co.kr","www.pinterest.co.uk","www.pinterest.com.au","www.pinterest.com.mx"],d=/www\.pinterest\.[A-Za-z]{2}/,p=/[A-Za-z]{2}\.pinterest\.com/,f=()=>{let e=navigator&&navigator.userAgent.toLowerCase();if(e){if(e.indexOf("googlebot")>-1||e.indexOf("google web preview")>-1||e.indexOf("google page speed insights")>-1)return"google_bot";if(e.indexOf("msnbot")>-1||e.indexOf("bingbot")>-1)return"ms_bot";if(e.indexOf("applebot")>-1)return"apple_bot";if(e.indexOf("yahoo")>-1||e.indexOf("slurp")>-1)return"yahoo_bot";else if(e.indexOf("yandex")>-1)return"yandex"}},m=e=>{let{userAgent:t}=e;if(!t.isMobile&&!t.isTablet)return"desktop";switch(t.platform){case s.RL:return"iphone";case s.GW:return t.isTablet?"android_tablet":"android";case s.s4:return"ipad";default:return"mobile_other"}};function g(e){let t=c.indexOf(e)>-1||d.test(e)||p.test(e);if(t)return e;for(let t in l)if(Object.prototype.hasOwnProperty.call(l,t)&&e.indexOf(t)>-1)return l[t];return"other"}let h=({moduleName:e,pageType:t,requestContext:n})=>{var s;let l;let c=m(n),d=n.isAuthenticated?"auth":"unauth",p=f(),h=(0,i.Z)(),v=(l=!1,r.U2(a.VL)||(r.t8(a.VL,"1",(0,r.kZ)(a.VL)),l=!0),l),y=document.domain||"unknown";v&&((0,o.My)(`traffic.${c}.${h}.${e}.${d}`),(0,o.My)(`traffic_subdomain.${y}.${h}.${e}.${d}`),(0,o.My)(`traffic_subdomain.${y}.${c}.${h}.${e}.${d}`),(0,o.My)(`traffic_subdomain.${y}.${c}.${d}`),(0,o.My)(`traffic_duplo.${c}.${h}.${e}.${d}`),p&&(0,o.My)(`traffic_bot.${p}.${e}`));let w={domain:g(y),referrer:null!=h?h:"unknown",platform:null!=c?c:"unknown",browser:null!==(s=n.userAgent.browserName)&&void 0!==s?s:"unknown",bot_type:null!=p?p:"none",page_type:null!=t?t:"unknown",is_auth:null!=d?d:"unknown",module:null!=e?e:"unknown",moduleType:function(e){if(/.*Board(React)?Page(Wrapper)?$/.test(e))return"Board";if(/Closeup|.*Pin(Landing|React)?Page$/.test(e))return"Pin";if("HomePage"===e||"UnauthHomeReactPage"===e||"LoginPage"===e||"Signup"===e)return"Home";if(/.*ProfilePage(Container)?$/.test(e))return"Profile";if("TopicPage"===e||"UnauthTopicPage"===e)return"Topic";if(/.*TodayTab(Feed)?Page$/.test(e))return"TodayTab";if("UnauthTodayArticleFeedPage"===e||"TodayArticleFeedPage"===e)return"TodayArticle";else if(/.*Idea(s)?RootPage$/.test(e))return"IdeasRoot";else if(/.*Idea(s)?(Topic)?Page$/.test(e))return"Ideas";else if(/.*Video(s)?RootPage$/.test(e))return"VideosRoot";else if(/.*Video(s)?(Category)?Page$/.test(e))return"VideosCategory";else if(/.*ShoppingRootPage$/.test(e))return"ShoppingRoot";else if(/.*Shopping(Category)?Page$/.test(e))return"ShoppingCategory";else return"other"}(null!=e?e:"unknown"),first_visit:null!=v?v:"unknown"};(0,u.nP)("webapp.traffic",{sampleRate:.1,tags:w}),("google"===h||"other"===h)&&(0,u.nP)(`webapp.traffic.${c}.${h}`,{sampleRate:.1,tags:w})};function v({pageType:e,requestContext:t,route:n}){h({moduleName:{"/":"HomePage","/login":"LoginPage","/pin/:id":"Closeup","/:username":"ProfilePage","/:username/:slug":"BoardPage","/topics/:interest":"TopicPage","/today":"TodayTabPage","/today/:term/:title/:articleId":"TodayArticleFeedPage","/ideas":"IdeasRootPage","/ideas/:interest/:id":"IdeasPage","/videos":"VideosRootPage","/videos/:category/:id":"VideosCategoryPage","/shopping":"ShoppingRootPage","/shopping/:category/:id":"ShoppingCategoryPage"}[n]||"other",pageType:e,requestContext:t})}},198462:(e,t,n)=>{n.d(t,{cA:()=>W,fM:()=>Y,N5:()=>X});var r=n(667294),a=n(616550),i=n(991067),o=n(7789);let s=e=>{switch(e){case"/":return"homefeed";case"/pin/:id":case"/pin/:id/sent":return"pin_closeup";case"/pin/:id/visual-search":return"flashlight";case"/:username/:slug":return"board";case"/:username":return"other_profile";case"/search/:scope":return"search";case"/ideas/:interest/:id":return"topic";default:return null}},u=e=>{switch(e){case"/pin/:id":case"/pin/:id/sent":return"pin_closeup";case"/:username/:slug":return"board";case"/:username":return"other_profile";case"/ideas/:interest/:id":return"topic";default:return null}};var l=n(969853),c=n(45528),d=n(711344),p=n(31062),f=n(156381),m=n(311560),g=n(435851),h=n(69028);let v=({botType:e,browserName:t,deviceType:n,region:r})=>{let a=`pwtlogger.${e}.${n}`,i=["all",...r?[r.toLowerCase()]:[]],o=[];"desktop"===n?("Chrome"===t||"Edge"===t||"Safari"===t||"Firefox"===t||"Opera"===t)&&(o=[t.toLowerCase().replace(/\s/g,"_")]):"phone"===n?("Chrome"===t||"Mobile Safari"===t||"Samsung Browser"===t||"Chrome WebView"===t||"GSA"===t)&&(o=[t.toLowerCase().replace(/\s/g,"_")]):"tablet"===n&&"Chrome"===t&&(o=[t.toLowerCase().replace(/\s/g,"_")]);let s=["all",...o],u=[];return i.forEach(e=>{s.forEach(t=>{u.push(`${a}.region_${e}.browser_${t}`)})}),u};var y=n(991565),w=n(893641);let E=e=>10*Math.round(e/10);var _=n(361115),T=n(67347);let b={pin_closeup:{LCP:"pin_closeup_lcp",INP:"pin_closeup_inp"},board:{LCP:"board_lcp",INP:"board_inp"},other_profile:{LCP:"other_profile_lcp",INP:"other_profile_inp"},topic:{LCP:"topic_lcp",INP:"topic_inp"}},S=["CA","GB","DE","FR","AU","JP","BR","MX","AU","IN"],L=({surface:e,pwtStaticContext:t})=>{switch(e){case"pin_closeup":return[(0,_.Uw)({isDesktop:"desktop"===t.deviceType,viewerType:t.isBot&&"bot"||t.isAuthenticated&&"auth"||"unauth"}),t.isAuthenticated?"web_eager_loadable_auth":"web_eager_loadable_unauth"];case"board":return[t.isAuthenticated?"web_eager_loadable_auth":"web_eager_loadable_unauth"];default:return[]}},C=({pwtStaticContext:e,surface:t})=>{let n=(0,p.Jx)({annotateExperiments:L({surface:t,pwtStaticContext:e}),annotateResourceTimingForSurface:t,annotateMarks:["initialAppLoad","RenderReactContainer",...e.isAuthenticated?[]:["firstClientRenderUnauthPageWrapper","mountUnauthPageWrapper"],..."pin_closeup"===t?["firstClientRenderCloseupPage","firstClientRenderCloseupImage"]:[]],name:b[t].LCP,pwtStaticContext:e}),r=(0,p.Jx)({name:b[t].INP,pwtStaticContext:e});return(e,t)=>{"LCP"===e?n.stop(t):"INP"===e&&r.stop(t)}},P=({pwtStaticContext:e,surface:t,getCurrentRoute:n})=>{let r=C({pwtStaticContext:e,surface:t}),{isAuthenticated:a,isBot:i,isSocialBot:o,deviceType:s,country:u,fullPath:l,browserName:p,osName:_}=e,b={},L=({name:c,value:f,metricDetails:E})=>{if(!b[c]){let L;b[c]=!0;let C=(0,g.Z)(e),P=`${C}.${t}.${c}`,$=`${C}.tags.${t}.${c}`;if(L="iOS"===_&&"Chrome"===p?"iOS_Chrome":"CrUX","LCPCount"===c)(0,T.QX)(`${P}.sum`,f,{sampleRate:1}),(0,T.nP)(`${P}.size`,{sampleRate:1});else{let e=(0,m.Z)(u),g=(0,h.Z)(l);if("INP"===c){if(E){let{rating:t,navigationType:r}=E,{eventTime:i,eventType:o,loadState:s}=E.attribution,u=(0,y.Z)(i),{path:l}=n(),c={isAuth:a,path:l,CrUXSegment:L,region:e,CWVBucket:t,eventTimeGroup:u,eventType:o,loadState:s,navigationType:r,domain:(0,d.xR)(document.domain||"unknown")};if((0,T.LY)(`${P}`,f,{sampleRate:1}),(0,T.LY)(`${$}`,f,{sampleRate:1,tags:c}),"Chrome"===p){let e=(0,w.Z)(E);e&&(0,T.LY)(`${C}.INPBoundary`,f,{sampleRate:1,tags:{...c,INPBoundary:e}})}}}else(0,T.LY)(`${P}`,f,{sampleRate:1}),(0,T.LY)(`${$}`,f,{sampleRate:1,tags:{isAuth:a,CrUXSegment:L,region:e,...g&&{pinType:g}}});!a&&S.includes(u)&&v({botType:o&&"socialBot"||i&&"bot"||"nonbot",browserName:p,deviceType:s,region:e}).forEach(e=>{(0,T.LY)(`${e}.tags.growthSEO.${t}_${c}`,f,{sampleRate:1,tags:{country:u}})}),r(c,f)}}};(0,c.NO)(({value:e})=>{L({name:"LCPCount",value:(0,f.Kj)()}),L({name:"LCP",value:E(e)})}),(0,c.a4)(({value:e})=>L({name:"FCP",value:e})),(0,c.Yn)(e=>{L({name:"INP",value:e.value,metricDetails:e})})};var $=n(790348),A=n(543059),R=n(383434);let k=(0,R.XV)("LayoutShiftDebugger"),O=e=>e<=.1?"good":e<=.25?"adequate":"poor",I=e=>e instanceof HTMLElement&&e.dataset&&(e.dataset.layoutShiftBoundaryId||e.dataset.testId)||e.parentNode&&I(e.parentNode)||null,M=e=>Math.round(1e3*e),x=[],B=e=>{let t=Object.freeze({}),n=0;x.forEach(({value:e,shift:{sources:r},route:a,params:i,hadRecentNavigation:o,hadRecentScroll:s,isAuth:u})=>{if(n+=e,!r||!r.length)return;let l=e/r.length;r.forEach(({node:e})=>{let n=e?I(e)||"ROOT":"NODE_REMOVED",r=i&&i.scope?i.scope:"none",c={route:a,searchScope:r,boundaryId:n,hadRecentNavigation:o,hadRecentScroll:s,isAuth:u},d=JSON.stringify(c);t={...t,[d]:{score:((t[d]||{}).score||0)+l,tags:c}}})}),Object.keys(t).forEach(n=>{let{score:r,tags:a}=t[n];(0,T.QX)(`${e}.shifts`,M(r),{sampleRate:1,tags:{...a}})}),k("Debug CLS boundaries",n,t,x),x=[]},N=({staticContext:e,getCurrentRoute:t,getLastNavigationTime:n})=>{let r;let a=(0,p.Jx)({annotateMarks:["initialAppLoad","RenderReactContainer"],name:"cumulative_layout_shift",pwtStaticContext:e}),i=0,o=e=>{i=e.timeStamp};window.addEventListener("scroll",o),window.addEventListener("beforeunload",()=>{window.removeEventListener("scroll",o)});let s=`${(0,g.Z)(e)}.CLS`,u=()=>B(s),l=0,d=0,f=0;(0,c.mw)(({entries:a,value:o})=>{if(f=o||0,a.length){let{path:s,params:u}=t();r=n();let c=a[0].startTime,p=l!==c,f=p?a:a.slice(d);p&&(l=c),x=x.concat(f.map(t=>({value:o,shift:t,route:s,params:u,hadRecentNavigation:r>0&&r+500>t.startTime,hadRecentScroll:i>0&&i+500>t.startTime,isAuth:e.isAuthenticated}))),d=a.length}},!0);let m=setInterval(()=>{if(x.length){u();let e=O(f);(0,T.QX)(`${s}.${e}`,1,{sampleRate:1}),a.stop(M(f))}},1e3);window.addEventListener("beforeunload",()=>{clearInterval(m),0===f&&a.abort("no_shifts_detected")})},D=null,Z=(e,t)=>{let n,r=0,a=0,i=null,o=null,s=null,u=null,l=[],c=()=>{a+=1,s=window.requestAnimationFrame(c)},d=()=>{if(u){let n=l.some(e=>null!==i&&i-e>0&&i-e<=500),a=t(),{isAuthenticated:s}=e;if(n){let t=(0,p.Jx)({name:"scroll_session",pwtStaticContext:e});if(!t)return;let n={surface:a,isAuthenticated:s};if(null===i||null===o||0===r){if(null===i&&null===o)t.error("no_duration",n);else if(null==i)D=o,t.error("no_start",n);else if(null==o){let e;e=D&&i-D<750?"no_end.outside_window":"no_end.single_event",t.error(e,n)}else t.error("no_frames",n)}else{D=o;let e=o-i,u=e/r;0===u?t.error("zero_value",n):u<0?t.error("negative_value",n):(t.addBinaryAnnotation("surface",a,"STRING"),t.addBinaryAnnotation("isAuthenticated",s,"BOOL"),t.addBinaryAnnotation("duration_ms",e,"I32"),t.addBinaryAnnotation("total_frames_rendered",r,"I16"),t.stop(u))}}else(0,$.A9)("WARN.scroll_session.not_user",{tags:{isAuthenticated:s,surface:a}})}window.cancelAnimationFrame(s),r=0,a=0,l=[],o=null,i=null,u=null},f=({timeStamp:e})=>{n&&clearTimeout(n),n=setTimeout(d,500),null===u?(u=100*Math.random()<10)&&(s=window.requestAnimationFrame(c),i=e):u&&(o=e,r+=a,a=0)},m=({timeStamp:e})=>{l.push(e)};["wheel","pointerdown","keydown"].forEach(e=>{window.addEventListener(e,m,{passive:!0,capture:!0})}),window.addEventListener("scroll",f,{passive:!0}),window.addEventListener("pagehide",()=>{window.removeEventListener("scroll",f),["wheel","pointerdown","keydown"].forEach(e=>{window.removeEventListener(e,m)})})};var H=n(22773),F=n(785893);let j=(0,r.createContext)(null),V=(0,r.createContext)(null),U=()=>{(0,$.A9)("totalSessionVolume"),window.performance?["clearMarks","clearMeasures","clearResourceTimings","getEntries","getEntriesByName","getEntriesByType","mark","measure","now","setResourceTimingBufferSize"].forEach(e=>{window.performance[e]||(0,$.A9)(`not_supported.window.performance.${e}`)}):(0,$.A9)("not_supported.window.performance"),window.PerformanceObserver||(0,$.A9)("not_supported.window.PerformanceObserer"),(0,l.v)()||(0,$.A9)("not_supported.grid_profiler")},z=()=>{var e;return null!==(e=window.performance)&&void 0!==e&&e.now?window.performance.now():null},q=e=>["/advertiser/"].reduce((t,n)=>e.includes(n)||t,!1);function W({children:e,immutableLocation:t,resourceTimingCacheSize:n,routerHistoryAction:l,staticContext:c}){let d=(0,r.useRef)(null),p=(0,r.useRef)(null),m=(0,r.useRef)(t),g=(0,r.useRef)(!0),{path:h,params:v}=(0,a.$B)(),y=(0,r.useRef)(h),w=(0,r.useRef)(v),E=!c.isCachedRender&&(0,i.Z)(c.deviceType);(0,r.useEffect)(()=>{y.current=h},[h]),(0,r.useEffect)(()=>{w.current=v},[v]),(0,r.useEffect)(()=>{if((0,H.X_)({size:n||1e3}),(0,f.UQ)(),U(),g.current=!1,E&&!o.is&&(Z(c,()=>s(y.current)||y.current||"UNKNOWN_SURFACE"),"Chrome"===c.browserName)){N({staticContext:c,getCurrentRoute:()=>({path:y.current,params:w.current}),getLastNavigationTime:()=>p.current||0});let e=u(y.current);e&&P({pwtStaticContext:c,surface:e,getCurrentRoute:()=>({path:y.current})})}},[]);let _=q(t.pathname)?m.current.pathname!==t.pathname:m.current!==t;if(_){m.current=t,p.current=z();let{current:e}=p;if(!g.current){let t=!d.current;(0,$.A9)("routeStart",{tags:{action:l}}),(0,H.Eg)(t),(0,f.Ux)(t),(0,f.on)(),(0,A.tl)();let{customBufferSize:n,defaultBufferSize:r}=(0,H.LH)();e&&((0,$.A9)("routeStart.customBufferSize",{count:n}),(0,$.A9)("routeStart.defaultBufferSize",{count:r}),d.current={time:e,action:l})}}return(0,F.jsx)(j.Provider,{value:E?c:null,children:(0,F.jsx)(V.Provider,{value:d.current,children:e})})}let Y=()=>(0,r.useContext)(V),X=()=>(0,r.useContext)(j)},607150:(e,t,n)=>{n.d(t,{D3:()=>i,Hd:()=>u,jh:()=>s,rX:()=>o});var r=n(672115),a=n(156381);let i=e=>({...(0,r.Z)(e),domComplete:e.domComplete||0,domContentLoadedEventEnd:e.domContentLoadedEventEnd||0,domContentLoadedEventStart:e.domContentLoadedEventStart||0,domInteractive:e.domInteractive||0,loadEventEnd:e.loadEventEnd||0,loadEventStart:e.loadEventStart||0}),o=()=>{let{largestContentfulPaint:e}=(0,a.v2)();return{largestContentfulPaint:e||0}},s=(e,t)=>Object.keys(t).reduce((n,r)=>({...n,[`${e}${r}`]:t[r]}),{}),u=(e,t)=>Object.keys(e).reduce((n,r)=>t.includes(r)?{...n,[r]:e[r]}:n,Object.freeze({}))},672115:(e,t,n)=>{n.d(t,{Z:()=>r});let r=e=>({connectEnd:e.connectEnd||0,connectStart:e.connectStart||0,domainLookupEnd:e.domainLookupEnd||0,domainLookupStart:e.domainLookupStart||0,fetchStart:e.fetchStart||0,requestStart:e.requestStart||0,redirectEnd:e.redirectEnd||0,redirectStart:e.redirectStart||0,responseEnd:e.responseEnd||0,responseStart:e.responseStart||0,secureConnectionStart:e.secureConnectionStart||0,startTime:e.startTime||0,workerStart:e.workerStart||0,unloadEventStart:e.unloadEventStart||0,unloadEventEnd:e.unloadEventEnd||0})},505771:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(528961),a=n(672115),i=n(358864);let o=({category:e,isDeferred:t,isExternal:n})=>[e].concat(t?["deferred"]:[]).concat(n?["external"]:[]).join("_");function s(e,t){let{category:n,timing:s,isDeferred:u,isExternal:l,isVisuallyCompleteRequired:c}=e;return s.responseEnd&&("image"!==n||c)?{name:o(e),id:(0,i.Z)(),parentId:t,startTime:s.startTime,endTime:s.responseEnd,annotationMap:(0,a.Z)(s),binaryAnnotationMap:{category:(0,r.sk)(n),decodedBodySize:(0,r.cC)(s.decodedBodySize||0),initiatorType:(0,r.sk)(s.initiatorType),isDeferred:(0,r.qr)(u),isExternal:(0,r.qr)(l),name:(0,r.sk)(s.name),nextHopProtocol:(0,r.sk)(s.nextHopProtocol),transferSize:(0,r.cC)(s.transferSize||0)}}:null}},31062:(e,t,n)=>{n.d(t,{ku:()=>$,Jx:()=>L,PY:()=>P});var r=n(383434),a=n(790348),i=n(543059),o=n(607150),s=n(638089),u=n(860273),l=n(156381);let c=()=>(0,l.PJ)().reduce((e,{identifier:t,loadTime:n,renderTime:r})=>e[`${t}_loadTime`]?e[`${t}_dupe_loadTime`]?{...e,[`${t}_dupe_loadTime`]:n,[`${t}_dupe_renderTime`]:r}:e:{...e,[`${t}_loadTime`]:n,[`${t}_renderTime`]:r},Object.freeze({}));var d=n(672115),p=n(464609),f=n(22773);let m=e=>{let t=(0,f.y0)();return e.reduce((e,{name:n,match:r})=>t.filter(e=>r(e)).slice(0,2).reduce((e,t,r)=>({...e,...(0,o.jh)(`${n}${r?"_dupe1":""}_`,(0,d.Z)(t))}),e),Object.freeze({}))},g=e=>{if("pin_closeup"===e){let e=(0,p.Z)();return m([{name:"mainImage",match:({name:t})=>t===e},{name:"PinResource",match:({name:e})=>e.includes("PinResource")}])}return{}};var h=n(453821),v=n(558775),y=n(505771),w=n(69028),E=n(169213),_=n(358864);let T=(0,r.XV)("LightStopwatch"),b=()=>{let e=[],t=null;return window.PerformanceObserver&&(t=(0,E.Z)({entryTypes:["resource"]},t=>{(e=e.concat(t.getEntries())).length>1e3&&(e=e.slice(-1e3))})),{get:()=>e,disconnect:()=>{t&&t.disconnect()}}},S={},L=({annotateExperiments:e,annotateMarks:t,annotateResourceTimingForSurface:n,name:r,pwtStaticContext:l})=>{let d=b(),p=(0,w.Z)(l.fullPath),f=!0,m={...p?{pagePath:{value:p,type:"STRING"}}:{}};(0,a.A9)(`TIMING.${r}`,{tags:{isAuth:l.isAuthenticated}});let E={type:"stopwatch",name:r,navigationType:"initial_app_load"},L={abort:e=>{if(!f){(0,a.H)("duplicate_abort_action",{action:r});return}f=!1,(0,v.Z)({metricId:E,pwtStaticContext:l,result:{type:"ABORT",reason:e}})},error:(e,t)=>{let n={...t,action:r};if(!f){(0,a.H)("duplicate_error_action",n);return}e&&(0,a.H)(e,n),d&&d.disconnect(),f=!1},stop:p=>{if(!f){(0,a.H)("duplicate_stop_action",{action:r});return}f=!1,d.disconnect();let w=(0,_.Z)(),T=(0,u.Z)(),b=d.get(),S={type:"COMPLETE",traceId:(0,_.Z)(),startTime:0,endTime:p,spans:[{name:"network_resources",id:w,startTime:0,endTime:p,annotationMap:{},binaryAnnotationMap:{},parentId:null},...b.map(e=>(0,y.Z)((0,h.p)(e,[]),w)).filter(Boolean)],annotationMap:{...(0,o.jh)("resource_",n?g(n):{}),...(0,o.jh)("element_",c()),...(0,o.jh)("mark_",t&&t.length?(0,o.Hd)((0,i.gQ)(),t):{}),...(0,o.jh)("browser_",T?(0,o.D3)(T):{})},binaryAnnotationMap:(0,s.ng)({annotateExperiments:e,metricId:E,pwtStaticContext:l,performanceResourceTimings:b,binaryAnnotations:m})};(0,v.Z)({metricId:E,pwtStaticContext:l,result:S,isAuth:l.isAuthenticated})},addBinaryAnnotation:(e,t,n)=>{T(`adding binary annotation {${e}: ${String(t)}}`),m={...m,[e]:{value:t,type:n}}}};return S[r]=L,L},C=e=>S[e],P=e=>!!C(e),$=({stopwatchName:e,binaryAnnotationName:t,value:n,annotationType:r})=>{let a=C(e);a&&a.addBinaryAnnotation(t,n,r)}},991565:(e,t,n)=>{n.d(t,{Z:()=>r});let r=e=>e<100?"0-100ms":e<250?"100-250ms":e<500?"250-500ms":e<1e3?"500-1000ms":e<2e3?"1000-2000ms":e<3e3?"2000-3000ms":e<4e3?"3000-4000ms":e<5e3?"4000-5000ms":e<6e3?"5000-6000ms":e<7e3?"6000-7000ms":e<8e3?"7000-8000ms":e<9e3?"8000-9000ms":e<1e4?"9000-10000ms":"10000+ms"},435851:(e,t,n)=>{n.d(t,{Z:()=>r});let r=e=>{let{deviceType:t,isBot:n,isSocialBot:r}=e;return`coreWebVitalsLite.v1.${r&&"socialBot"||n&&"bot"||"nonbot"}.${t}`}},69028:(e,t,n)=>{n.d(t,{Z:()=>r});function r(e){var t;let n=null!==(t=e.split("?")[0])&&void 0!==t?t:"";if(!n.startsWith("/pin/"))return null;let r=n.split("/")[3];return r?"feedback"===r||"sent"===r?r:null:"default"}},893641:(e,t,n)=>{n.d(t,{Z:()=>a});let r=e=>{var t;return e?"HTML"===e.tagName&&null===e.parentElement?"HTML":"BODY"===e.tagName&&(null===(t=e.parentElement)||void 0===t?void 0:t.tagName)==="HTML"?"BODY":e.dataset.layoutShiftBoundaryID||e.dataset.testId?e.dataset.layoutShiftBoundaryID||e.dataset.testId:e.parentElement&&e.parentElement instanceof HTMLDivElement?r(e.parentElement):null:"NODE_REMOVED"},a=e=>{let{target:t}=e.attribution.eventEntry;return t?r(t):"NODE_REMOVED"}},464609:(e,t,n)=>{n.d(t,{Z:()=>a,f:()=>r});let r="closeupImage",a=()=>{if(!document.querySelector)return null;let e=document.querySelector('head>link[rel="preload"][as="image"][href^="https://i.pinimg.com/"]');return e instanceof HTMLLinkElement?e.href:null}},644035:(e,t,n)=>{n.d(t,{GW:()=>a,RL:()=>r,s4:()=>i});let r="ios",a="android",i="ipad"},45528:(e,t,n)=>{n.d(t,{NO:()=>en,Yn:()=>K,a4:()=>I,mw:()=>O});var r,a,i,o,s,u=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},l=function(e){if("loading"===document.readyState)return"loading";var t=u();if(t){if(e<t.domInteractive)return"loading";if(0===t.domContentLoadedEventStart||e<t.domContentLoadedEventStart)return"dom-interactive";if(0===t.domComplete||e<t.domComplete)return"dom-content-loaded"}return"complete"},c=function(e){var t=e.nodeName;return 1===e.nodeType?t.toLowerCase():t.toUpperCase().replace(/^#/,"")},d=function(e,t){var n="";try{for(;e&&9!==e.nodeType;){var r=e,a=r.id?"#"+r.id:c(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(n.length+a.length>(t||100)-1)return n||a;if(n=n?a+">"+n:a,r.id)break;e=r.parentNode}}catch(e){}return n},p=-1,f=function(){return p},m=function(e){addEventListener("pageshow",function(t){t.persisted&&(p=t.timeStamp,e(t))},!0)},g=function(){var e=u();return e&&e.activationStart||0},h=function(e,t){var n=u(),r="navigate";return f()>=0?r="back-forward-cache":n&&(document.prerendering||g()>0?r="prerender":document.wasDiscarded?r="restore":n.type&&(r=n.type.replace(/_/g,"-"))),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},v=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver(function(e){Promise.resolve().then(function(){t(e.getEntries())})});return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},y=function(e,t,n,r){var a,i;return function(o){var s;t.value>=0&&(o||r)&&((i=t.value-(a||0))||void 0===a)&&(a=t.value,t.delta=i,t.rating=(s=t.value)>n[1]?"poor":s>n[0]?"needs-improvement":"good",e(t))}},w=function(e){requestAnimationFrame(function(){return requestAnimationFrame(function(){return e()})})},E=function(e){var t=function(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||e(t)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},_=function(e){var t=!1;return function(n){t||(e(n),t=!0)}},T=-1,b=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},S=function(e){"hidden"===document.visibilityState&&T>-1&&(T="visibilitychange"===e.type?e.timeStamp:0,C())},L=function(){addEventListener("visibilitychange",S,!0),addEventListener("prerenderingchange",S,!0)},C=function(){removeEventListener("visibilitychange",S,!0),removeEventListener("prerenderingchange",S,!0)},P=function(){return T<0&&(T=b(),L(),m(function(){setTimeout(function(){T=b(),L()},0)})),{get firstHiddenTime(){return T}}},$=function(e){document.prerendering?addEventListener("prerenderingchange",function(){return e()},!0):e()},A=[1800,3e3],R=function(e,t){t=t||{},$(function(){var n,r=P(),a=h("FCP"),i=v("paint",function(e){e.forEach(function(e){"first-contentful-paint"===e.name&&(i.disconnect(),e.startTime<r.firstHiddenTime&&(a.value=Math.max(e.startTime-g(),0),a.entries.push(e),n(!0)))})});i&&(n=y(e,a,A,t.reportAllChanges),m(function(r){n=y(e,a=h("FCP"),A,t.reportAllChanges),w(function(){a.value=performance.now()-r.timeStamp,n(!0)})}))})},k=[.1,.25],O=function(e,t){var n,r;n=function(t){(function(e){if(e.entries.length){var t,n=e.entries.reduce(function(e,t){return e&&e.value>t.value?e:t});if(n&&n.sources&&n.sources.length){var r=(t=n.sources).find(function(e){return e.node&&1===e.node.nodeType})||t[0];if(r)return void(e.attribution={largestShiftTarget:d(r.node),largestShiftTime:n.startTime,largestShiftValue:n.value,largestShiftSource:r,largestShiftEntry:n,loadState:l(n.startTime)})}}e.attribution={}})(t),e(t)},r=(r=t)||{},R(_(function(){var e,t=h("CLS",0),a=0,i=[],o=function(n){n.forEach(function(e){if(!e.hadRecentInput){var t=i[0],n=i[i.length-1];a&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(a+=e.value,i.push(e)):(a=e.value,i=[e])}}),a>t.value&&(t.value=a,t.entries=i,e())},s=v("layout-shift",o);s&&(e=y(n,t,k,r.reportAllChanges),E(function(){o(s.takeRecords()),e(!0)}),m(function(){a=0,e=y(n,t=h("CLS",0),k,r.reportAllChanges),w(function(){return e()})}),setTimeout(e,0))}))},I=function(e,t){R(function(t){!function(e){if(e.entries.length){var t=u(),n=e.entries[e.entries.length-1];if(t){var r=t.activationStart||0,a=Math.max(0,t.responseStart-r);return void(e.attribution={timeToFirstByte:a,firstByteToFCP:e.value-a,loadState:l(e.entries[0].startTime),navigationEntry:t,fcpEntry:n})}}e.attribution={timeToFirstByte:0,firstByteToFCP:e.value,loadState:l(f())}}(t),e(t)},t)},M={passive:!0,capture:!0},x=new Date,B=function(e,t){r||(r=t,a=e,i=new Date,Z(removeEventListener),N())},N=function(){if(a>=0&&a<i-x){var e={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+a};o.forEach(function(t){t(e)}),o=[]}},D=function(e){if(e.cancelable){var t,n,r,a=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?(t=function(){B(a,e),r()},n=function(){r()},r=function(){removeEventListener("pointerup",t,M),removeEventListener("pointercancel",n,M)},addEventListener("pointerup",t,M),addEventListener("pointercancel",n,M)):B(a,e)}},Z=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return e(t,D,M)})},H=0,F=1/0,j=0,V=function(e){e.forEach(function(e){e.interactionId&&(F=Math.min(F,e.interactionId),H=(j=Math.max(j,e.interactionId))?(j-F)/7+1:0)})},U=function(){return s?H:performance.interactionCount||0},z=function(){"interactionCount"in performance||s||(s=v("event",V,{type:"event",buffered:!0,durationThreshold:0}))},q=[200,500],W=0,Y=function(){return U()-W},X=[],J={},G=function(e){var t=X[X.length-1],n=J[e.interactionId];if(n||X.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};J[r.id]=r,X.push(r)}X.sort(function(e,t){return t.latency-e.latency}),X.splice(10).forEach(function(e){delete J[e.id]})}},Q=function(e,t){t=t||{},$(function(){z();var n,r,a=h("INP"),i=function(e){e.forEach(function(e){e.interactionId&&G(e),"first-input"!==e.entryType||X.some(function(t){return t.entries.some(function(t){return e.duration===t.duration&&e.startTime===t.startTime})})||G(e)});var t,n=(t=Math.min(X.length-1,Math.floor(Y()/50)),X[t]);n&&n.latency!==a.value&&(a.value=n.latency,a.entries=n.entries,r())},o=v("event",i,{durationThreshold:null!==(n=t.durationThreshold)&&void 0!==n?n:40});r=y(e,a,q,t.reportAllChanges),o&&("PerformanceEventTiming"in window&&"interactionId"in PerformanceEventTiming.prototype&&o.observe({type:"first-input",buffered:!0}),E(function(){i(o.takeRecords()),a.value<0&&Y()>0&&(a.value=0,a.entries=[]),r(!0)}),m(function(){X=[],W=U(),r=y(e,a=h("INP"),q,t.reportAllChanges)}))})},K=function(e,t){Q(function(t){!function(e){if(e.entries.length){var t=e.entries.sort(function(e,t){return t.duration-e.duration||t.processingEnd-t.processingStart-(e.processingEnd-e.processingStart)})[0],n=e.entries.find(function(e){return e.target});e.attribution={eventTarget:d(n&&n.target),eventType:t.name,eventTime:t.startTime,eventEntry:t,loadState:l(t.startTime)}}else e.attribution={}}(t),e(t)},t)},ee=[2500,4e3],et={},en=function(e,t){var n,r;n=function(t){(function(e){if(e.entries.length){var t=u();if(t){var n=t.activationStart||0,r=e.entries[e.entries.length-1],a=r.url&&performance.getEntriesByType("resource").filter(function(e){return e.name===r.url})[0],i=Math.max(0,t.responseStart-n),o=Math.max(i,a?(a.requestStart||a.startTime)-n:0),s=Math.max(o,a?a.responseEnd-n:0),l=Math.max(s,r?r.startTime-n:0),c={element:d(r.element),timeToFirstByte:i,resourceLoadDelay:o-i,resourceLoadTime:s-o,elementRenderDelay:l-s,navigationEntry:t,lcpEntry:r};return r.url&&(c.url=r.url),a&&(c.lcpResourceEntry=a),void(e.attribution=c)}}e.attribution={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadTime:0,elementRenderDelay:e.value}})(t),e(t)},r=(r=t)||{},$(function(){var e,t=P(),a=h("LCP"),i=function(n){var r=n[n.length-1];r&&r.startTime<t.firstHiddenTime&&(a.value=Math.max(r.startTime-g(),0),a.entries=[r],e())},o=v("largest-contentful-paint",i);if(o){e=y(n,a,ee,r.reportAllChanges);var s=_(function(){et[a.id]||(i(o.takeRecords()),o.disconnect(),et[a.id]=!0,e(!0))});["keydown","click"].forEach(function(e){addEventListener(e,function(){return setTimeout(s,0)},!0)}),E(s),m(function(t){e=y(n,a=h("LCP"),ee,r.reportAllChanges),w(function(){a.value=performance.now()-t.timeStamp,et[a.id]=!0,e(!0)})})}})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/99961-68ab52c574f3b10c.mjs.map