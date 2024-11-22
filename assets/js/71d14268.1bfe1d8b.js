"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8374],{3151:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=t(4848),n=t(8453);const a={sidebar_label:"Appium Library",title:"Appium Library"},o=void 0,l={id:"different_libraries/appium",title:"Appium Library",description:"Introduction",source:"@site/docs/different_libraries/appium.md",sourceDirName:"different_libraries",slug:"/different_libraries/appium",permalink:"/docs/different_libraries/appium",draft:!1,unlisted:!1,editUrl:"https://github.com/MarketSquare/robotframeworkguides/edit/main/website/docs/different_libraries/appium.md",tags:[],version:"current",frontMatter:{sidebar_label:"Appium Library",title:"Appium Library"},sidebar:"tutorialSidebar",previous:{title:"RPA Framework",permalink:"/docs/different_libraries/rpa"},next:{title:"Browser Library",permalink:"/docs/different_libraries/browser"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Tutorial Videos about RF and Appium",id:"tutorial-videos-about-rf-and-appium",level:3},{value:"Keyword Documentation",id:"keyword-documentation",level:2},{value:"Installation",id:"installation",level:2},{value:"Device Setup",id:"device-setup",level:2},{value:"Example",id:"example",level:2}];function u(e){const r={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"https://github.com/serhatbolsu/robotframework-appiumlibrary",children:"AppiumLibrary"})," is an appium testing library for ",(0,i.jsx)(r.a,{href:"https://robotframework.org/",children:"Robot Framework"}),". Library can be downloaded from ",(0,i.jsx)(r.a,{href:"https://pypi.org/project/robotframework-appiumlibrary/",children:"PyPI"}),".",(0,i.jsx)(r.br,{}),"\n","It uses Appium to communicate with Android and iOS application similar to how Selenium WebDriver talks to web browser.",(0,i.jsx)(r.br,{}),"\n","It is supporting Python 3.7+ (since Appium Python Client doesn't support Python 2.7 anymore)"]}),"\n",(0,i.jsx)(r.h3,{id:"tutorial-videos-about-rf-and-appium",children:"Tutorial Videos about RF and Appium"}),"\n",(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/videoseries?list=PL4GZKvvcjS3vAPWLqWbKZogkL5cD71yrT",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,i.jsxs)(r.p,{children:["Link to Playlist: ",(0,i.jsx)(r.a,{href:"https://youtube.com/playlist?list=PL4GZKvvcjS3vAPWLqWbKZogkL5cD71yrT",children:"https://youtube.com/playlist?list=PL4GZKvvcjS3vAPWLqWbKZogkL5cD71yrT"})]}),"\n",(0,i.jsx)(r.h2,{id:"keyword-documentation",children:"Keyword Documentation"}),"\n",(0,i.jsxs)(r.p,{children:["See ",(0,i.jsx)(r.a,{href:"http://serhatbolsu.github.io/robotframework-appiumlibrary/AppiumLibrary.html",children:"Keyword Documentation"})," for available keywords and more information about the library in general."]}),"\n",(0,i.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(r.p,{children:"Install with pip:"}),"\n",(0,i.jsx)(r.p,{children:"pip install robotframework-appiumlibrary"}),"\n",(0,i.jsx)(r.h2,{id:"device-setup",children:"Device Setup"}),"\n",(0,i.jsxs)(r.p,{children:["After installing the library, you still need to setup an simulator/emulator or real device to use in tests. iOS and Android have separate paths to follow, and those steps better explained in ",(0,i.jsx)(r.a,{href:"https://appium.io/docs/en/2.1/quickstart/uiauto2-driver/",children:"Appium Driver Setup Guide"}),". Please follow the Driver-Specific Setup according to platform."]}),"\n",(0,i.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-robotframework",children:"*** Settings ***\r\nDocumentation  Simple example using AppiumLibrary\r\nLibrary  AppiumLibrary\r\n\r\n*** Variables ***\r\n${ANDROID_AUTOMATION_NAME}    UIAutomator2\r\n${ANDROID_APP}                ${CURDIR}/demoapp/ApiDemos-debug.apk\r\n${ANDROID_PLATFORM_NAME}      Android\r\n${ANDROID_PLATFORM_VERSION}   %{ANDROID_PLATFORM_VERSION=11}\r\n\r\n*** Test Cases ***\r\nShould send keys to search box and then check the value\r\n  Open Test Application\r\n  Input Search Query  Hello World!\r\n  Submit Search\r\n  Search Query Should Be Matching  Hello World!\r\n\r\n\r\n*** Keywords ***\r\nOpen Test Application\r\n  Open Application  http://127.0.0.1:4723/wd/hub  automationName=${ANDROID_AUTOMATION_NAME}\r\n  ...  platformName=${ANDROID_PLATFORM_NAME}  platformVersion=${ANDROID_PLATFORM_VERSION}\r\n  ...  app=${ANDROID_APP}  appPackage=io.appium.android.apis  appActivity=.app.SearchInvoke\r\n\r\nInput Search Query\r\n  [Arguments]  ${query}\r\n  Input Text  txt_query_prefill  ${query}\r\n\r\nSubmit Search\r\n  Click Element  btn_start_search\r\n\r\nSearch Query Should Be Matching\r\n  [Arguments]  ${text}\r\n  Wait Until Page Contains Element  android:id/search_src_text\r\n  Element Text Should Be  android:id/search_src_text  ${text}\n"})})]})}function d(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>l});var i=t(6540);const n={},a=i.createContext(n);function o(e){const r=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:r},e.children)}}}]);