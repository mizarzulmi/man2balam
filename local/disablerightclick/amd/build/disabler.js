define(["jquery","core/ajax","core/notification","core/modal_factory","core/modal_events","core/templates"],function(e,t,o,i,n,a){return{init:function(){var n={isOpen:!1,orientation:void 0},l=160,r=[],c=null,d=null,s={SETTINGS:function(e){return t.call([{methodname:"local_disablerightclick_settings",args:{contextid:e}}])[0]},SUPPORT:function(e){return t.call([{methodname:"local_disablerightclick_support",args:{action:e}}])[0]}};function u(t,o){null==o&&(o=2e3);var i=e("<div class='disabler-toaster toaster-container'><lable class='toaster-message'>"+t+"</lable></div>");e("html").append(i),e(i).addClass("show"),setTimeout(function(){e(i).addClass("fade"),setTimeout(function(){e(i).removeClass("fade"),setTimeout(function(){e(i).remove()},300)},o)})}function p(t){1==t&&(console.clear(),c=e("body").detach(),e("head")&&(d=e("head").detach()),0==e("#body-detached-css").length&&e("html").append(e('<style id="body-detached-css">.disabler-toaster.toaster-container {position: fixed;width: 100%;top: 1vw;z-index: 140002;left: 0;opacity: 0;text-align: center;transition: top 0.3s linear, opacity 0.3s linear;display: none;}.disabler-toaster.toaster-container.fade {top: 6vw;opacity: 1;}.disabler-toaster.toaster-container.show {display: block;}.disabler-toaster.toaster-container .toaster-message {padding: 1rem 2rem;color: white;border-radius: 2px;background-color: #424242;}</style>')),u(r.developertoolsopened,5e3)),0==t&&(e("html").append(c),c=null,null!==d&&e("html").append(d))}function f(e,t){var o=!1;return(t=t.trim().split("\n")).forEach(function(t){o||-1!=e.indexOf(t.trim())&&(o=!0)}),o}function h(e,t){if(0!=t.length){var o=window.location.href;if(""==t.allowall||!f(o,t.allowall)){if(t.disablerightclick&&1==t.disablerightclick){if(""!=t.allowrightclick&&f(o,t.allowrightclick))return;e.contextmenu(function(e){u(r.rightclick),e.preventDefault()})}if(t.disablecutcopypaste&&1==t.disablecutcopypaste){if(""!=t.allowcutcopypaste&&f(o,t.allowcutcopypaste))return;e.on("keydown",function(e){if(1==e.ctrlKey&&-1!=[65,67,83,86,88].indexOf(e.keyCode))return u(r.cutcopypaste),void e.preventDefault()})}if(t.disabledevelopertools&&1==t.disabledevelopertools){if(""!=t.allowdevelopertools&&f(o,t.allowdevelopertools))return;!function(e){e.on("keydown",function(e){if(123==e.keyCode||1==e.ctrlKey&&1==e.shiftKey&&-1!=[67,73,74].indexOf(e.keyCode)||1==e.ctrlKey&&-1!=[85].indexOf(e.keyCode))return u(r.developertools),void e.preventDefault()}),setInterval(function(){var e=window.outerWidth-window.innerWidth>l,t=window.outerHeight-window.innerHeight>l,o=e?"vertical":"horizontal";t&&e||!(window.Firebug&&window.Firebug.chrome&&window.Firebug.chrome.isInitialized||e||t)?(n.isOpen&&p(!1),n.isOpen=!1,n.orientation=void 0):(n.isOpen&&n.orientation===o||p(!0),n.isOpen=!0,n.orientation=o)},1e3)}(e)}}}}e(document).ready(function(){var t=0;null!=M.cfg.contextid&&(t=M.cfg.contextid),s.SETTINGS(t).done(function(t){var n,l=JSON.parse(t);r=l.strings,h(e("body"),l.settings),n=l.showsupport,l.context,1==n&&i.create({type:i.types.DEFAULT,title:r.supporttitle,body:a.render("local_disablerightclick/support_modal",{})},e("#create-modal")).done(function(t){t.getRoot(),t.show(),e("body").on("click","[data-action-disablerightclick]",function(){s.SUPPORT(e(this).data("value")),t.destroy()})}).fail(o.exception),setInterval(function(){0!=e("iframe").length&&e("iframe:not(.applied-disablement)").each(function(t,o){e(this).addClass("applied-disablement"),h(e(o.contentWindow.document.body),l.settings)})},1e3)}).fail(o.exception)})}}});