window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme13"]=window.wsb["Theme13"]||window.radpack("@widget/LAYOUT/bs-layout13-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=/<script[^>]*>([\s\S]*)<\/script>/;let l,n,i;function s(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function c(e){if(i=document.getElementById(o),!i)return;l=document.createElement("div"),l.style.cssText="width:100%;",i.prepend(l),n=document.createElement("div"),n.setAttribute("data-freemium-ad",!0),n.style.cssText="overflow:hidden;width:100%;z-index:10000;position:fixed;left:0;",n.innerHTML=(e||"").replace(r,""),i.prepend(n);const t=`${n.offsetHeight}px`;if(l.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=r.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else n.addEventListener("click",s,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?c(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),c(e))})).catch((()=>{}))}(),function(){!a&&n&&n.removeEventListener("click",s,{useCapture:!0}),i&&(i.removeChild(l),i.removeChild(n))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-272625\"}"));
window.wsb["DynamicFontScaler"]=function(t){let e,{containerId:n,targetId:o,fontSizes:r,maxLines:i,prioritizeDefault:s}=t;if("undefined"==typeof document)return;const a=document.getElementById(n),c=document.getElementById(o);function l(t){return function(t){const e=parseInt(y(t,"padding-left")||0,10),n=parseInt(y(t,"padding-right")||0,10);return t.scrollWidth+e+n}(t)<=a.clientWidth&&function(t){const e=t.offsetHeight,n=parseInt(y(t,"line-height"),10)||1;return Math.floor(e/n)}(t)<=i}function p(t){return parseInt(y(t,"font-size")||0,10)}function d(t){if(1===t.length)return t[0];const e=t.filter(l);if(1===e.length)return e[0];if(!e.length)return function(t){return t.sort(((t,e)=>p(t)-p(e)))[0]}(t);return e.sort(((t,e)=>p(e)-p(t)))[0]}function u(){if(!a||!c||e===window.innerWidth)return;if(c.hasAttribute("data-font-scaled"))return void g();e=window.innerWidth;const t=Array.prototype.slice.call(a.querySelectorAll(`[data-scaler-id="scaler-${n}"]`)).sort(((t,e)=>r.indexOf(t.getAttribute("data-size"))-r.indexOf(e.getAttribute("data-size"))));if(a.clientWidth&&t.length){const e=a.style.width||"";a.style.width="100%",t.forEach((t=>{t.style.display="inline-block",t.style.maxWidth=`${a.clientWidth}px`}));const n=d(t);!function(t){t.forEach((t=>{t.style.display="none",t.style.maxWidth=""}))}(t),a.style.width=e;const r=y(n,"font-size"),i=c.getAttribute("data-last-size");if(r&&r!==i){if(s){const t=y(c,"font-size");if(parseInt(r,10)>=parseInt(t,10))return}c.setAttribute("data-last-size",r);let t=document.querySelector(`#${o}-style`);t||(t=document.createElement("style"),t.id=`${o}-style`,document.head.appendChild(t)),t.textContent=`#${c.id} { font-size: ${r} !important; }`}}}function g(){c&&c.removeAttribute("data-last-size");const t=document.querySelector(`#${o}-style`);t&&t.parentNode.removeChild(t)}function y(t,e){return document.defaultView.getComputedStyle(t).getPropertyValue(e)}return u(),window.addEventListener("resize",u),()=>{g(),window.removeEventListener("resize",u)}};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-272629\",\"targetId\":\"logo-text-272630\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":3,\"prioritizeDefault\":true}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-272638\",\"targetId\":\"logo-text-272639\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":1,\"prioritizeDefault\":true}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"league-spartan\",\"default\",\"\"],\"colors\":[\"#5b5364\"],\"locale\":\"en-IN\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"7998dcec-d617-4b41-9eae-ed296fa871e3\":{\"pageId\":\"23a7fcf9-0d3e-4ae8-bafa-e0c1384f9243\",\"routePath\":\"/\"}},\"isHomepage\":true,\"navigationMap\":{\"00291854-2799-4c6f-923e-e7004631be97\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"00291854-2799-4c6f-923e-e7004631be97\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\",\"INTRODUCTION\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"23a7fcf9-0d3e-4ae8-bafa-e0c1384f9243\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"23a7fcf9-0d3e-4ae8-bafa-e0c1384f9243\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#5b5364\",\"meta\":{\"primary\":\"rgb(91, 83, 100)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"league-spartan\",\"description\":\"\",\"meta\":{\"order\":20,\"primary\":{\"id\":\"league-spartan\",\"name\":\"League Spartan\",\"url\":\"//img1.wsimg.com/blobby/go/font/LeagueSpartan/league-spartan.css\",\"family\":\"'League Spartan', arial, helvetica, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"helvetica\",\"name\":\"Helvetica\",\"url\":\"\",\"family\":\"Helvetica, arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme13\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-272640\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navContainer-272635\",\"widgetId\":\"0408dcb0-ed59-4869-95a2-3f8e8ed18862\",\"section\":\"default\",\"category\":\"primary\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"0408dcb0-ed59-4869-95a2-3f8e8ed18862\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"primary\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSecondary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateSplitNavSpacing"]=function(e){let{containerId:a,navId:n,splitNavId:i,logoImageId:l,inlineUtilitiesMenu:o,forceBreakpoint:r}=e;let c,s,g,p,d,u,y,m;const b=document.getElementById(n),v=document.getElementById(i);function h(){if(s||!b||!T(b))return;p=Array.from(b.children),g=Array.from(b.children),g.forEach(E),o&&(d=g.pop(),M(d)),u=g.pop();const e=u.querySelector("ul");y=e?Array.from(e.children):[],b.style.whiteSpace="normal",m=T(b.parentElement,"floor"),b.style.whiteSpace="nowrap",window.requestAnimationFrame(I)}function I(){const e=d&&d.querySelector("[data-ux='Pipe']");e&&R(e);const t=g,a=t.map((e=>T(e)));const n=d?T(d):0;let i=0,l=a.concat(n).findIndex((e=>{if(i+e>m)return e;i+=e}));l<0&&(l=a.length);const o=a.slice(0,l);let r,c,s=a.slice(l);if(k(s)+n<m)r=!1,c=0;else{r=!0,c=T(u);let e=0,t=c+n;s.some((a=>{if(t+=a,t>=m)return!0;e++})),s=s.slice(0,e)}for(;o.length>1&&B(o,s.concat([c,n]).filter(Boolean));)s.unshift(o.pop());const b=Array.from(v.children);if(f(b,0,o.length,M),f(t,0,o.length,R),f(y,0,o.length,R),f(b,o.length,o.length+s.length,R),f(t,o.length,o.length+s.length,M),f(y,o.length,o.length+s.length,R),f(b,o.length+s.length,t.length,R),f(t,o.length+s.length,t.length,R),f(y,o.length+s.length,t.length,M),r?M(u):R(u),function(){const e=p.filter((e=>"visible"===e.style.visibility&&e.classList.contains("nav-item"))),t=e[e.length-1];t&&t.classList.add("last-visible-nav-item")}(),e){t.find((e=>"visible"===e.style.visibility))&&M(e)}window.dispatchEvent(new Event("NavItemsResized"))}function w(){window.innerWidth<1024&&r&&r!==t.K||(window.clearTimeout(c),c=window.setTimeout(h,50))}function f(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function E(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("last-visible-nav-item","visible")}function R(e){e.style.display="none",e.classList.remove("visible")}function M(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function k(e){return e.reduce(((e,t)=>e+t),0)}function T(e){return"ceil"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil")?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}function B(e,t){if(!t.length&&e.length>1)return!0;const a=e[e.length-1],n=k(e),i=k(t);return Math.abs(n-i)>Math.abs(n-a-(i+a))}if(w(),window.ResizeObserver){const e=new window.ResizeObserver(w);return[document.getElementById(a),document.getElementById(l)].forEach((t=>t&&e.observe(t))),()=>{s=!0,e.disconnect()}}return window.addEventListener("resize",w,{passive:!0}),()=>{s=!0,window.removeEventListener("resize",w,{passive:!0})}};
window.wsb["CalculateSplitNavSpacing"](JSON.parse("{\"navId\":\"n-272623272634-navId-2\",\"inlineUtilitiesMenu\":false,\"containerId\":\"navContainer-272635\",\"splitNavId\":\"n-272623272633-navId-1\"}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"tagline-container-272643\",\"targetId\":\"dynamic-tagline-272644\",\"fontSizes\":[\"xxlarge\",\"xxxlarge\",\"xlarge\"],\"maxLines\":4}"));
window.wsb['context-bs-2']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"league-spartan\",\"default\",\"\"],\"colors\":[\"#5b5364\"],\"fontScale\":\"medium\",\"locale\":\"en-IN\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"7998dcec-d617-4b41-9eae-ed296fa871e3\":{\"pageId\":\"23a7fcf9-0d3e-4ae8-bafa-e0c1384f9243\",\"routePath\":\"/\"}},\"isHomepage\":true,\"navigationMap\":{\"00291854-2799-4c6f-923e-e7004631be97\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"00291854-2799-4c6f-923e-e7004631be97\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\",\"INTRODUCTION\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"23a7fcf9-0d3e-4ae8-bafa-e0c1384f9243\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"23a7fcf9-0d3e-4ae8-bafa-e0c1384f9243\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#5b5364\",\"meta\":{\"primary\":\"rgb(91, 83, 100)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"league-spartan\",\"description\":\"\",\"meta\":{\"order\":20,\"primary\":{\"id\":\"league-spartan\",\"name\":\"League Spartan\",\"url\":\"//img1.wsimg.com/blobby/go/font/LeagueSpartan/league-spartan.css\",\"family\":\"'League Spartan', arial, helvetica, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"helvetica\",\"name\":\"Helvetica\",\"url\":\"\",\"family\":\"Helvetica, arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}}}},\"theme\":\"Theme13\"}");
Core.utils.renderBootstrap({elId:'bs-2',componentName:'@widget/MESSAGING/bs-Component',props:JSON.parse("{\"config\":{\"formSubmitEndpoint\":\"/messaging\",\"assetsHost\":\"https://img1.wsimg.com\",\"assetsBasePath\":\"/isteam\",\"contactsHost\":\"https://contacts.godaddy.com\",\"conversationsWebHost\":\"https://conversations.godaddy.com\",\"formSubmitHost\":\"https://contact.apps-api.instantpage.secureserver.net\",\"generateUrlHost\":\"https://url-generator.apps.secureserver.net\",\"vNextApiHost\":\"https://websites.api.godaddy.com\",\"reamazeApiHost\":\"https://{{brandId}}reamaze.godaddy.com\",\"reamazeJsSource\":\"https://cdn.reamaze.com/assets/reamaze-loader.js\",\"reamazeCookieJsSource\":\"https://cdn.reamaze.com/assets/reamaze-godaddy-loader.js\"},\"businessName\":\"Noob31's Space\",\"reamazeBrandId\":null,\"welcomeMessage\":\"Hi! Let us know how we can help and we\u2019ll respond shortly.\",\"formSuccessMessage\":\"Thanks for the message. We'll get back to you as soon as we can.\",\"emailOptInMessage\":\"Sign up to receive email updates, announcements, and more.\",\"emailOptInEnabled\":false,\"domainName\":\"noob31.godaddysites.com\",\"cookieBannerEnabled\":true,\"formFields\":[{\"keyName\":\"name\",\"type\":\"SINGLE_LINE\",\"label\":\"Name\",\"validation\":\"required\",\"required\":true},{\"keyName\":\"phone\",\"type\":\"PHONE\",\"label\":\"Mobile\",\"validation\":\"phone\",\"required\":true},{\"keyName\":\"email\",\"type\":\"EMAIL\",\"label\":\"Email\",\"validation\":\"email\",\"required\":true,\"replyTo\":true},{\"keyName\":\"message\",\"type\":\"MULTI_LINE\",\"label\":\"How can we help?\",\"validation\":\"required\",\"required\":true},{\"type\":\"SUBMIT\",\"label\":\"Send\"}],\"accountId\":\"b91dc072-c93d-11ef-837d-3417ebe724ff\",\"websiteId\":\"4a246196-fe2b-4a98-b61a-36ca21085fbd\",\"id\":\"089165d2-bb23-459b-865e-a7ecb204f02d\",\"staticContent\":{\"submitButtonLoadingLabel\":\"Sending\",\"infoStartTitle\":\"Conversations\",\"contactFormResponseErrorMessage\":\"Something went wrong while sending your message, please try again later\",\"infoStartDesc\":\"Respond smarter and faster to website messages, text messages and Facebook Messenger. Receive instant notifications, reply from anywhere, all from your phone.\",\"infoStartTag\":\"New\",\"phoneValidationErrorMessage\":\"Please enter a valid phone number.\",\"defaultCancelButtonLabel\":\"Cancel\",\"contactsLinkInfoMessaging\":\"Contacts from your website messaging form are captured in Connections.\",\"defaultSubmitButtonLabel\":\"Send\",\"endOfChat\":\"end of chat\",\"infoConnectedDesc\":\"You are connected to the Conversations mobile app and are currently receiving all website messages there.\",\"infoRecommendedTag\":\"Recommended\",\"infoStartLink\":\"Get Started\",\"phoneUsOnlyValidationErrorMessage\":\"Please enter a valid U.S. mobile phone number.\",\"infoIncludedTag\":\"Included\",\"infoPublishRequiredDesc\":\"A publish is needed in order to complete this first step of enabling this feature.\",\"infoPendingLoginDesc\":\"A text message has been sent to you to download the Conversations app. Please download and install to complete set up.\",\"termsOfSerivce\":\"Terms of Service\",\"infoUnavailableDesc\":\"We currently only allow this to work with one website. To use this feature on this website, please disconnect from the active one.\",\"recaptchaDisclosure\":\"This site is protected by reCAPTCHA and the Google {privacyPolicy} and {termsOfSerivce} apply.\",\"emailValidationErrorMessage\":\"Please enter a valid email address.\",\"privacyPolicyURL\":\"https://policies.google.com/privacy\",\"infoUnavailableTitle\":\"Conversations\",\"requiredValidationErrorMessage\":\"Please fill in this required field\",\"infoUnavailableTag\":\"Unavailable\",\"contactsLinkText\":\"Manage my contacts\",\"privacyPolicy\":\"Privacy Policy\",\"infoPublishRequiredLink\":\"Publish Now\",\"infoPendingLoginLink\":\"Resend Link\",\"infoConnectedTitle\":\"Conversations Mobile App\",\"termsOfSerivceURL\":\"https://policies.google.com/terms\",\"messagesRatesLegalDisclosure\":\"By submitting your phone number, you agree to receive text messages from us. Message/ data rates may apply.\",\"emailMaxCountValidationErrorMessage\":\"Your email address is too long\",\"infoConnectedTag\":\"Connected\"},\"emailConfirmationMessage\":\"We've sent you a confirmation email, please click the link to verify your address.\",\"recaptchaType\":\"V3\",\"isMobile\":null,\"notificationPreference\":\"EMAIL\",\"isReseller\":false,\"reamazePrompt\":\"Let me know if you have any questions!\",\"reamazePromptEnabled\":true,\"reamazeStarter1\":\"I have a question\",\"reamazeThemeColor\":\"#5b5364\",\"reamazePosition\":\"bottom-right\",\"reamazeConfirmationMessage\":\"Thanks! Your message has been submitted. We'll get back to you here or via email.\",\"reamazeAvatarImage\":\"\",\"widgetId\":\"089165d2-bb23-459b-865e-a7ecb204f02d\",\"section\":\"default\",\"category\":\"neutral\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"089165d2-bb23-459b-865e-a7ecb204f02d\",\"widgetType\":\"MESSAGING\",\"widgetPreset\":\"messaging1\",\"section\":\"default\",\"category\":\"neutral\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"HIGHCONTRAST\"}},\"ButtonSecondary\":{\"value\":{\"color\":\"HIGHCONTRAST\"}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-2',radpack:"@widget/MESSAGING/bs-Component"});
window.wsb["CookieBannerScript"]=function({id:e,acceptCookie:t,dismissCookie:o}){let a,n,i;function r(e,t=60){const o=new Date;o.setTime(o.getTime()+864e5*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function l(e){document.cookie=`${e}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`}function s(e){return document.cookie.includes(e)}function c(){n&&n.removeEventListener("click",d),i&&i.removeEventListener("click",u),a.style.display="none"}function p(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}function g(){s(o)||(a=document.getElementById(`${e}-banner`),n=document.getElementById(`${e}-accept`),i=document.getElementById(`${e}-decline`),n&&n.addEventListener("click",d),i&&i.addEventListener("click",u),a.style.transform="translateY(-500px)")}function d(e){e.preventDefault(),p(),r(o),r(t),c()}function u(e){e.preventDefault(),r(o),s(t)&&l(t),c()}!s(t)||navigator.globalPrivacyControl?setTimeout((()=>{navigator.globalPrivacyControl?(window._allowCT=!1,s(o)&&l(o),s(t)&&l(t),c()):g()}),200):p()};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"7c4d5d6a-95b2-48c9-9db1-caadcca204ce\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
document.getElementById('page-272622').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":true,"wam_site_headerTreatment":"Blur","wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":true,"wam_site_businessCategory":"personal_gaming","wam_site_theme":"layout13","wam_site_locale":"en-IN","wam_site_fontPack":"league-spartan","wam_site_cookieBannerEnabled":true,"wam_site_membershipEnabled":true,"wam_site_hasHomepageHTML":false,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"freemiumV1","wam_site_isHomepage":true,"wam_site_htmlWidget":false};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);