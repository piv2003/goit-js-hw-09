!function(){refs={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),bodyArea:document.querySelector("body")};var t=refs.startBtn,e=refs.stopBtn,r=refs.bodyArea;t.style.cursor="pointer",e.disabled=!0;t.addEventListener("click",(function(){timerId=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,e.disabled=!1,e.style.cursor="pointer",t.style.cursor="default"})),e.addEventListener("click",(function(){clearInterval(timerId),t.disabled=!1,e.disabled=!0,t.style.cursor="pointer",e.style.cursor="default"}))}();
//# sourceMappingURL=01-color-switcher.6ff4b162.js.map
