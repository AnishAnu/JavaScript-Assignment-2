(function(q,h,J){q.execute(function(){q.when("a-domready").execute(function(){var h=document.createElement("DIV");h.id="ap_container";document.body.childNodes.length?document.body.insertBefore(h,document.body.childNodes[0]):document.body.appendChild(h)});h.AmazonPopoverImages="https:"===location.protocol?{snake:"https://images-na.ssl-images-amazon.com/images/G/01/javascripts/lib/popover/images/snake._V1_.gif",btnClose:"https://images-na.ssl-images-amazon.com/images/G/01/javascripts/lib/popover/images/btn_close._V1_.gif",
closeTan:"https://images-na.ssl-images-amazon.com/images/G/31/nav2/images/close-tan-sm._V1_.gif",closeTanDown:"https://images-na.ssl-images-amazon.com/images/G/31/nav2/images/close-tan-sm-dn._V1_.gif",loadingBar:"https://images-na.ssl-images-amazon.com/images/G/01/javascripts/lib/popover/images/loading-bar-small._V1_.gif",pixel:"https://images-na.ssl-images-amazon.com/images/G/01/icons/blank-pixel._V1_.gif"}:{snake:"http://g-ecx.images-amazon.com/images/G/01/javascripts/lib/popover/images/snake._V1_.gif",
btnClose:"http://g-ecx.images-amazon.com/images/G/01/javascripts/lib/popover/images/btn_close._V1_.gif",closeTan:"http://g-ecx.images-amazon.com/images/G/31/nav2/images/close-tan-sm._V1_.gif",closeTanDown:"http://g-ecx.images-amazon.com/images/G/31/nav2/images/close-tan-sm-dn._V1_.gif",loadingBar:"http://g-ecx.images-amazon.com/images/G/01/javascripts/lib/popover/images/loading-bar-small._V1_.gif",pixel:"http://g-ecx.images-amazon.com/images/G/01/icons/blank-pixel._V1_.gif"};(function(){function q(e){if(!e||
e.AmazonPopover)return!1;var r=function(){var a=e("#ap_container");return a.length&&a||e("body")},p={width:function(){return Math.min(e(h).width(),e(document).width())},height:function(){return e(h).height()}},C=function(){var a=[],b=[{x:0,y:0}],c=0,d=[0,0],f=!1,l=function(){for(var a=[],d=1;3>d;d++)a.push(b[(c-d+3)%3]);return e.extend(!0,{},{cursor:b[c],priorCursors:a})},k=function(d){for(var f=0;f<a.length;f++){var k=a[f],h=0<e.grep(k.rects,function(a){return b[c].x>=a[0]&&b[c].y>=a[1]&&b[c].x<
a[0]+a[2]&&b[c].y<a[1]+a[3]}).length;null!==k.inside&&h&&!k.inside&&k.mouseEnter?k.inside=k.mouseEnter(l()):null!==k.inside&&!h&&k.inside&&k.mouseLeave&&(k.inside=!k.mouseLeave(d,l()))}},m=function(){d=[e(h).scrollLeft(),e(h).scrollTop()];e(document).mousemove(function(a){"undefined"!==typeof a.pageY&&(c=(c+1)%3,b[c]={x:a.pageX,y:a.pageY});k()});D(!0)||e(document).scroll(function(a){b[c].x+=e(h).scrollLeft()-d[0];b[c].y+=e(h).scrollTop()-d[1];d=[e(h).scrollLeft(),e(h).scrollTop()];k()});f=!0};return{add:function(b,
c){f||m();var d=e.extend({rects:b},c);a.push(d);return d},remove:function(b){for(var c=0;c<a.length;c++)if(a[c]===b){a.splice(c,1);break}},checkNow:function(){k(!0)},getCallbackArgs:function(){return l()}}}(),X=function(){var a='<iframe frameborder="0" tabindex="-1" src="'+(e.browser.msie&&6>=parseInt(e.browser.version,10)?h.AmazonPopoverImages.pixel:"javascript:void(false)")+'" style="display:none;position:absolute;z-index:0;filter:Alpha(Opacity=\'0\');opacity:0;" />',b=[],c=function(c){for(var f=
0;f<c;f++)b.push(e(a).prependTo(r()))};e(document).ready(function(){c(3)});return{checkout:function(a){b.length||c(1);return b.pop().css({display:"block",top:a.offset().top,left:a.offset().left,width:a.outerWidth(),height:a.outerHeight(),zIndex:Number(a.css("z-index"))-1})},checkin:function(a){b.push(a.css("display","none"))}}}(),z=function(){var a=[];/Win/.test(navigator.platform);/Mac/.test(navigator.platform);/Linux/.test(navigator.platform);parseInt(e.browser.version,10);var b=function(a){if(a.hasClass("ap_never_hide"))return!0;
for(var b=[a.offset().left,a.offset().top,a.outerWidth(),a.outerHeight()],c=[],k=0;k<n.length;k++){var h=!1;n[k].settings.modal||(h=n[k].bounds,h=b[0]>h[0]+h[2]||h[0]>b[0]+b[2]||b[1]>h[1]+h[3]||h[1]>b[1]+b[3]);h||c.push(n[k])}return c.length&&(a.is("object,embed")&&"window"==(a.attr("wmode")||a.children("object,embed").attr("wmode")||a.parent("object,embed").attr("wmode")||"window").toLowerCase()||a.is("iframe")&&e.browser.safari)?!1:!0},c=function(a,b){a.is("iframe[id^=DA],iframe[id^=cachebust]")?
a.css({display:b?"block":"none"}):a.css({visibility:b?"visible":"hidden"})};return{update:function(){for(var d=[],f=0;f<a.length;f++){var l=a[f];b(l)?c(l,1):d.push(l)}a=d;e("object:visible,embed:visible,iframe:visible").each(function(){var d=e(this);b(d)||(a.push(d),c(d,0))})}}}(),K=function(a,b){var c=null,d=null;b=b||{};!1!==b.useIFrame&&(d=X.checkout(a));var e=[[a.offset().left,a.offset().top,a.outerWidth(),a.outerHeight()]];if(b.additionalCursorRects)for(var l=0;l<b.additionalCursorRects.length;l++)e.push(b.additionalCursorRects[l]);
c=C.add(e,b);z.update();a.backing={destroy:function(){c&&(C.remove(c),c=null);d&&(X.checkin(d),d=null);z.update()},refreshBounds:function(){var b=[a.offset().left,a.offset().top,a.outerWidth(),a.outerHeight()];c&&(c.rects[0]=b);d&&d.css({left:b[0],top:b[1],width:b[2],height:b[3]});z.update()},reposition:function(a,b){d&&d.css({left:a,top:b});c&&(c.rects[0][0]=a,c.rects[0][1]=b)},iframe:d}},L={width:500,followScroll:!1,locationMargin:4,alignMargin:0,windowMargin:4,locationFitInWindow:!0,focusOnShow:!0,
modal:!1,draggable:!1,zIndex:200,showOnHover:!1,hoverShowDelay:400,hoverHideDelay:200,skin:"default",useIFrame:!0,clone:!1,ajaxSlideDuration:400,ajaxErrorContent:null,paddingLeft:17,paddingRight:17,paddingBottom:8},t=null,n=[],v={MOUSE_ENTER:1,MOUSE_LEAVE:2,CLICK_TRIGGER:4,CLICK_OUTSIDE:8,fromStrings:function(a){var b=0,c=this;a&&e.each(e.makeArray(a),function(){b|=c[this]});return b}},H={},E=null,A={},M={"default":'<div class="ap_popover ap_popover_sprited" surround="6,16,18,16" tabindex="0">                     <div class="ap_header">                         <div class="ap_left"/>                         <div class="ap_middle"/>                         <div class="ap_right"/>                     </div>                     <div class="ap_body">                         <div class="ap_left"/>                         <div class="ap_content"><img src="'+
h.AmazonPopoverImages.snake+'"/></div>                         <div class="ap_right"/>                     </div>                     <div class="ap_footer">                         <div class="ap_left"/>                         <div class="ap_middle"/>                         <div class="ap_right"/>                     </div>                     <div class="ap_titlebar">                         <div class="ap_title"/>                     </div>                     <div class="ap_close"><a href="#"><span class="ap_closetext"/><span class="ap_closebutton"><span></span></span></a></div>                 </div>',
default_non_sprited:'<div class="ap_popover ap_popover_unsprited" surround="6,16,18,16" tabindex="0">                     <div class="ap_header">                         <div class="ap_left"/>                         <div class="ap_middle"/>                         <div class="ap_right"/>                     </div>                     <div class="ap_body">                         <div class="ap_left"/>                         <div class="ap_content"><img src="'+h.AmazonPopoverImages.snake+'"/></div>                         <div class="ap_right"/>                     </div>                     <div class="ap_footer">                         <div class="ap_left"/>                         <div class="ap_middle"/>                         <div class="ap_right"/>                     </div>                     <div class="ap_titlebar">                         <div class="ap_title"/>                     </div>                     <div class="ap_close"><a href="#"><span class="ap_closetext"/><img border="0" src="'+
h.AmazonPopoverImages.btnClose+'"/></a></div>                 </div>',classic:'<div class="ap_classic">                     <div class="ap_titlebar">                         <div class="ap_close">                             <img width="46" height="16" border="0" alt="close" onmouseup=\'this.src="'+h.AmazonPopoverImages.closeTan+"\";' onmouseout='this.src=\""+h.AmazonPopoverImages.closeTan+"\";' onmousedown='this.src=\""+h.AmazonPopoverImages.closeTanDown+'";\' src="'+h.AmazonPopoverImages.closeTan+
'" />                         </div>                         <span class="ap_title"></span>                     </div>                     <div class="ap_content"><img src="'+h.AmazonPopoverImages.loadingBar+'"/></div>                 </div>'},Y=function(a){var b={left:Infinity,top:Infinity,right:-Infinity,bottom:-Infinity};a.each(function(){try{var a=e(this),d=a.offset(),f=a.outerWidth(),l=a.outerHeight();if(a.is("area"))var k=N(a),d={left:k[0],top:k[1]},f=k[2]-k[0],l=k[3]-k[1];d.left<b.left&&(b.left=
d.left);d.top<b.top&&(b.top=d.top);d.left+f>b.right&&(b.right=d.left+f);d.top+l>b.bottom&&(b.bottom=d.top+l)}catch(h){}});return b},Z=function(a){if(!(1>=n.length)){var b=Math.max.apply(Math,e.map(n,function(a){return Number(a.css("z-index"))}));Number(a.css("z-index"))!=b&&(a.css("z-index",b+2),a.backing&&a.backing.iframe.css("z-index",b+1))}};e.fn.removeAmazonPopoverTrigger=function(){this.unbind("click.amzPopover");this.unbind("mouseover.amzPopover");this.unbind("mouseout.amzPopover");return this};
e.fn.amazonPopoverTrigger=function(a){var b=e.extend({},L,a),c=this,d=null;b.showOnHover||"default"!=b.skin||this.bind("mouseover.amzPopover",O);a="string"==typeof b.showOnHover?c.filter(b.showOnHover):b.showOnHover?c:e([]);var f=null;a.bind("mouseover.amzPopover",function(a){d||f||(f=setTimeout(function(){if(!d){var a=c.parent(),e=a.length,a=e?a.attr("tagName")||a.get(0).tagName:J;e&&a&&(!b.triggeringEnabled||b.triggeringEnabled.call(c))&&(d=x(b,c,function(){d=null}))}f=null},b.hoverShowDelay));
return!1});a.bind("mouseout.amzPopover",function(a){!d&&f&&(clearTimeout(f),f=null)});c.bind("click.amzPopover",function(a){if(!0===b.followLink||"function"==typeof b.followLink&&b.followLink.call(c,d,b))return!0;if(d)d.triggerClicked();else if(!b.triggeringEnabled||b.triggeringEnabled.call(c))d=x(b,c,function(){d=null});return!1});this.amznPopoverHide=function(){d&&d.close()};this.amznPopoverVisible=function(){return!!d};return this};var x=function(a,b,c){aa(a);var d=null;if(b)for(var f=b.eq(0).parents().get(),
l=0;l<f.length&&!d;l++)for(var k=0;k<n.length&&!d;k++)n[k].get(0)==f[l]&&(d=n[k]);var m=[];m.remove=function(a){for(var b=0;b<this.length;b++)if(this[b]===a){this.splice(b,1);break}};var p=!1;e.each(L,function(b,c){"undefined"==typeof a[b]&&(a[b]=c)});a.location||(a.location=a.modal||!b?"centered":"auto");null===a.showCloseButton&&(a.showCloseButton=!a.showOnHover);e.each(n,function(){a.zIndex=Math.max(a.zIndex,Number(this.css("z-index"))+2)});var q=(a.showOnHover?v.MOUSE_LEAVE:v.CLICK_TRIGGER)|(a.modal?
v.CLICK_OUTSIDE:0),q=(q|v.fromStrings(a.closeEventInclude))&~v.fromStrings(a.closeEventExclude),ga,u=function(){a.group&&(A[a.group]=null);x&&x.parents("body").length&&(Q&&Q.parents("body").length?(x.hide().insertAfter(Q),Q.remove(),Q=null):x.hide().appendTo(r()));x!=g&&g.remove();d&&d.children.remove(g);for(var f=0;f<n.length;f++)if(n[f]===g){n.splice(f,1);break}g.backing&&(g.backing.destroy(),g.backing=null);C.checkNow();c&&c();a.onHide&&a.onHide.call(b,g,a);a.modal&&t&&(t.fitToScreen&&e(h).unbind("resize",
t.fitToScreen),t.remove(),t=null);e(document).unbind("scroll.AmazonPopover");e(document).unbind("click",ga);for(f=0;f<m.length;f++)m[f].close();m=[];return!1},y=function(c,d){var f=g.find(".ap_sub_content");0===f.length&&(f=g.find(".ap_content"));"string"==typeof c?f.html(c):f.empty().append(c);if("boolean"==typeof a.autoshow?a.autoshow:d)e.browser.msie&&f.children().show().hide(),f.children(":not(style)").show();f.find(".ap_custom_close").click(u);a.onFilled&&a.onFilled.call(b,g,a);return f};a.modal&&
!t&&(t=ba(u,a.zIndex));var g=null,x=null,Q=null;"default"==a.skin?(O(),g=E,E=null):(f=(f=e.isFunction(a.skin)?a.skin():a.skin)||"<div><div class='ap_content' /></div>",f=/^[^<]*(<(.|\s)+>)[^>]*$/.test(f)?f:M[f],g=e(f));e.browser.msie&&6==parseInt(e.browser.version,10)&&ca(g);"default"==a.skin&&g.find(".ap_content").css({paddingLeft:a.paddingLeft,paddingRight:a.paddingRight,paddingBottom:a.paddingBottom});a.localContent?a.clone?y(e(a.localContent).clone(!0),!0):(x=e(a.localContent),Q=e("<span style='display:none' />").insertBefore(x),
y(x,!0)):a.literalContent&&y(a.literalContent);if(a.destination){var z="function"==typeof a.destination?a.destination():a.destination;!1!==a.cacheable&&H[z]?y(H[z]):e.ajax({url:z,timeout:a.ajaxTimeout,success:function(c){a.onAjaxSuccess&&a.onAjaxSuccess.apply(a,arguments);var d=c.match(/^(\s|\x3c!--[\s\S]*?--\x3e)*<\w+[^>]*\s+cacheable="(.*?)"/i)||c.match(/^(\s|\x3c!--[\s\S]*?--\x3e)*<\w+[^>]*\s+cacheable='(.*?)'/i);!1===a.cacheable||d&&"0"===d[2]||(H[z]=c);if(d=c.match(/^(\s|\x3c!--[\s\S]*?--\x3e)*<\w+[^>]*\s+popoverTitle="(.*?)"/i)||
c.match(/^(\s|\x3c!--[\s\S]*?--\x3e)*<\w+[^>]*\s+popoverTitle='(.*?)'/i))a.title=d[2],g.find(".ap_title").html(a.title);0<a.ajaxSlideDuration&&(!e.browser.msie||"BackCompat"!=document.compatMode)?(g.find(".ap_content").hide(),y(c),a.width||B(g,a,b),a.onAjaxShow&&a.onAjaxShow.call(b,g,a),g.find(".ap_content").slideDown(a.ajaxSlideDuration,function(){B(g,a,b)})):(y(c),a.onAjaxShow&&a.onAjaxShow.call(b,g,a),B(g,a,b))},error:function(){var c=null,c="function"==typeof a.ajaxErrorContent?a.ajaxErrorContent.apply(a,
arguments):a.ajaxErrorContent;null!==c&&((c=y(c).children("[popoverTitle]").attr("popoverTitle"))&&g.find(".ap_title").html(c),B(g,a,b))}})}if(!a.localContent&&!a.literalContent&&!a.destination)throw"AmazonPopover wasn't provided a source of content.";d&&d.children.push(g);a.surround=e.map((g.attr("surround")||"0,0,0,0").split(","),function(a){return Number(a)});g.css({zIndex:a.zIndex,position:"absolute",left:-2E3,top:-2E3});g.click(function(a){a.metaKey||a.stopPropagation();p=!0});ga=function(a){0!==
a.button&&1!=a.which||a.metaKey||u()};q&v.CLICK_OUTSIDE&&e(document).click(ga);g.mousedown(function(a){m.length||Z(g)});(f=a.width&&("function"==typeof a.width?a.width():a.width))||(f=R(g,a)||g.outerWidth());f&&g.css("width",f);a.followScroll&&e(document).bind("scroll.AmazonPopover",function(b){a.followScroll(b)});null!==a.title&&a.title!==J?(l=g.find(".ap_titlebar"),"default"==a.skin&&(l.css({width:f-36}),l.find(".ap_title").css("width",f-70),g.find(".ap_content").css({paddingTop:18})),g.find(".ap_title").html(a.title),
a.draggable&&!a.modal&&da(l,g),l.show(),"default"==a.skin&&a.wrapTitlebar&&(l.addClass("multiline"),g.find(".ap_content").css({paddingTop:l.outerHeight()-9}))):g.find(".ap_titlebar").hide();!1!==a.showCloseButton?(g.find(".ap_close").show().click(u).mousedown(function(a){a.preventDefault();a.stopPropagation();return!1}).css("cursor","default"),a.title||g.find(".ap_content").css({paddingTop:10}),g.keydown(function(a){27==a.keyCode&&u()})):g.find(".ap_close").css("display","none");a.closeText?g.find(".ap_closetext").text(a.closeText).show():
g.find(".ap_closebutton span").text("Close");g.appendTo(r());B(g,a,b);e(document.activeElement).filter("input[type=text], select").blur();g.close=u;a.group&&(A[a.group]&&A[a.group].close(),A[a.group]=g);g.show();a.focusOnShow&&(g.get(0).hideFocus=!0,g.focus());t&&t.snapToLeft&&t.snapToLeft();a.onShow&&a.onShow.call(b,g,a);g.bounds=[g.offset().left,g.offset().top,g.outerWidth(),g.outerHeight()];n.push(g);g.reposition=function(){B(g,a,b)};g.close=u;g.settings=a;g.triggerClicked=function(){q&v.CLICK_TRIGGER&&
u()};g.children=m;if(q&v.MOUSE_LEAVE){var w=null,F=[];e.each(b,function(){var a=e(this);a.is("area")?(a=N(a),F.push([a[0],a[1],a[2]-a[0],a[3]-a[1]])):F.push([a.offset().left,a.offset().top,a.outerWidth(),a.outerHeight()])});a.additionalCursorRects&&e(a.additionalCursorRects).each(function(){var a=e(this);F.push([a.offset().left,a.offset().top,a.outerWidth(),a.outerHeight()])});K(g,{solidRectangle:a.solidRectangle,useIFrame:a.useIFrame,mouseEnter:function(){w&&(clearTimeout(w),w=null);return!0},mouseLeave:function(b){if(a.semiStatic&&
p)return!m.length;w&&(clearTimeout(w),w=null);return 0===m.length?(b?u():w=setTimeout(function(){u();w=null},a.hoverHideDelay),!0):!1},additionalCursorRects:F,inside:!0})}else K(g,{solidRectangle:a.solidRectangle,useIFrame:a.useIFrame});e(function(){for(var a=0;a<n.length;a++)n[a].settings.modal&&n[a].backing.refreshBounds()});return g},D=function(a){var b=["iPhone","iPad"];a&&b.push("Silk/","Kindle Fire","Android","\\bTouch\\b");a="("+b.join("|")+")";return navigator.userAgent.match(new RegExp(a,
"i"))},ba=function(a,b){var c=e('<div id="ap_overlay"/>');e.browser.msie?(c.fitToScreen=function(a){a=e(document).height();var f=e(h).width(),l=c.children();c.css({width:f,height:a,backgroundColor:"transparent",zIndex:b});for(var k=[],m=0;m<l.size()||0<a-2E3*m;m++){var n=Math.min(a-2E3*m,2E3);0<n?m<l.size()?l.eq(m).css({width:f,height:n}):(n=e("<div/>").css({opacity:.4,zIndex:b,width:f,height:n,top:2E3*m}),k.push(n[0])):l.eq(m).remove()}k.length&&c.append(k)},c.snapToLeft=function(){c.css("left",
e(document).scrollLeft())},e(h).bind("resize load",c.fitToScreen),e(h).scroll(c.snapToLeft),c.snapToLeft(),c.fitToScreen()):c.css({width:e.browser.msie?e(h).width():"100%",height:e.browser.msie||D()?e(document).height():"100%",position:e.browser.mozilla||e.browser.safari?"fixed":"",opacity:.4,zIndex:b});return c.appendTo(r())},ea=function(a,b,c,d,e){a.hasClass("ap_popover_sprited")&&(b=b-c.top-e[1],45>b?b=45:b>a.outerHeight()-35&&(b=a.outerHeight()-35),d="left"==d?"right":"left",c=a.find(".ap_body .ap_"+
d),0<c.length?c.removeClass("ap_"+d).addClass("ap_"+d+"-arrow"):c=a.find(".ap_body .ap_"+d+"-arrow"),c.css("backgroundPosition",("left"==d?0:-51)+"px "+(b-327)+"px"))},B=function(a,b,c){b.width||a.css("width",R(a,b));var d=b.locationOffset||[0,0];if("function"==typeof b.location)c=b.location.call(c,a,b);else{var f=e.map(e.makeArray(b.location),function(a){return"auto"==a?["bottom","left","right","top"]:a}),l=(c=b.locationElement&&e(b.locationElement)||c)&&Y(c);c=I[f[0]](l,a,b);for(var k=0,h=1;h<f.length&&
!c.fits;h++){var n=I[f[h]](l,a,b);n.fits&&(c=n,k=h)}!b.attached||"left"!=f[k]&&"right"!=f[k]||ea(a,(l.top+l.bottom)/2,c,f[k],d)}a.css({left:c.left+d[0],top:c.top+d[1],margin:c.margin,right:c.right});a.backing&&a.backing.refreshBounds()},S=function(a,b,c){var d=e.makeArray(c.align||"left"),f={min:e(document).scrollLeft()+c.windowMargin-c.surround[3],max:p.width()+e(document).scrollLeft()-c.windowMargin-b.outerWidth(),left:a.left-c.surround[3]-c.alignMargin,right:a.right-b.outerWidth()+c.surround[1]+
c.alignMargin,center:(a.left+a.right-b.outerWidth())/2},d=e.grep(e.makeArray(c.align),function(a){return f[a]});0===d.length&&d.push("left");for(a=0;a<d.length;a++)if(f[d[a]]>=f.min&&f[d[a]]<=f.max)return f[d[a]];return c.forceAlignment?f[d[0]]:f.min>f.max?f.min:f[d[0]]<f.min?f.min:f.max},T=function(a,b,c){var d=e(document).scrollTop()+c.windowMargin,f=p.height()+e(document).scrollTop()-c.windowMargin;if(c.attached){var l=(a.top+a.bottom)/2;l-45<d&&(d=d+45<a.bottom?d:a.bottom-45);l+35>f&&(f=f-35>
a.top?f:a.top+35)}else d=Math.min(a.top-c.alignMargin,d),f=Math.max(a.bottom+c.alignMargin,f);var k={min:d-c.surround[0],max:f-b.outerHeight()+c.surround[2],top:a.top-c.surround[0]-c.alignMargin,bottom:a.bottom-b.outerHeight()+c.alignMargin+c.surround[2],middle:(a.top+a.bottom-b.outerHeight())/2};a=e.grep(e.makeArray(c.align),function(a){return k[a]});0===a.length&&a.push("top");for(b=0;b<a.length;b++)if(k[a[b]]>=k.min&&k[a[b]]<=k.max)return k[a[b]];return c.forceAlignment?k[a[0]]:k.min>k.max?k.min:
k[a[0]]<k.min?k.min:k.max},I={centered:function(a,b,c){a=e(h).scrollTop()+100;return{left:-(b.outerWidth()/2),right:0,top:a,margin:"0% 50%",fits:!0}},top:function(a,b,c){var d=a.top-e(document).scrollTop()-2*c.locationMargin,f=a.left>=e(document).scrollLeft()&&a.right<p.width()+e(document).scrollLeft();return{left:S(a,b,c),top:a.top-b.outerHeight()-c.locationMargin+c.surround[2],fits:f&&d>=b.outerHeight()-c.surround[0]-c.surround[2]}},left:function(a,b,c){var d=a.left-e(document).scrollLeft()-2*c.locationMargin;
return{left:a.left-b.outerWidth()-c.locationMargin+c.surround[1],top:T(a,b,c),fits:d>=b.outerWidth()-c.surround[1]-c.surround[3]}},bottom:function(a,b,c){var d=p.height()+e(document).scrollTop()-a.bottom-2*c.locationMargin,f=a.left>=e(document).scrollLeft()&&a.right<p.width()+e(document).scrollLeft();return{left:S(a,b,c),top:a.bottom+c.locationMargin-c.surround[0],fits:f&&d>=b.outerHeight()-c.surround[0]-c.surround[2]}},right:function(a,b,c){var d=p.width()+e(document).scrollLeft()-a.right-2*c.locationMargin;
return{left:a.right+c.locationMargin-c.surround[3],top:T(a,b,c),fits:d>=b.outerWidth()-c.surround[1]-c.surround[3]}},over:function(a,b,c){var d=b.find(c.align||".ap_content *").offset(),f=b.offset(),l=a.left-(d.left-f.left);a=a.top-(d.top-f.top);d=Math.min(l,p.width()+e(document).scrollLeft()-b.outerWidth()-c.windowMargin);d=Math.max(d,e(document).scrollLeft()-c.surround[3]+c.windowMargin);b=Math.min(a,p.height()+e(document).scrollTop()-b.outerHeight()+c.surround[2]-c.windowMargin);b=Math.max(b,e(document).scrollTop()-
c.surround[0]+c.windowMargin);return{left:c.forceAlignment?l:d,top:c.forceAlignment?a:b,fits:l==d&&a==b}}},aa=function(a){a.align=a.align||a.locationAlign;a.literalContent=a.literalContent||a.loadingContent},O=function(){if(!E){var a=e.browser.msie&&6>=parseInt(e.browser.version,10);E=e(M[a?"default_non_sprited":"default"]).css({left:-2E3,top:-2E3}).appendTo(r())}},ca=function(a){a.find("*").each(function(){var a=(e(this).css("background-image")||"").match(/url\("(.*\.png)"\)/);a&&(a=a[1],e(this).css("background-image",
"none"),e(this).get(0).runtimeStyle.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+a+"',sizingMethod='scale')")})},R=function(a,b){var c=a.find(".ap_content");if("default"==b.skin&&0<c.length){var d=e('<div class="ap_temp">'+c.html()+"</div>");d.css({display:"inline",position:"absolute",top:-9999,left:-9999});r().append(d);var f=parseInt(c.parent().css("margin-left"),10)||0,c=parseInt(c.parent().css("margin-right"),10)||0,f=d.width()+f+c+b.paddingLeft+b.paddingRight+2;0!==f%2&&
f++;d.remove();return Math.min(f,p.width())}return null},da=function(a,b){a.css("cursor","move");U(a.get(0));a.mousedown(function(a){a.preventDefault();U(document.body);var d=[a.pageX-b.offset().left,a.pageY-b.offset().top],f=function(a){a.preventDefault();b.css({left:a.pageX-d[0],top:a.pageY-d[1],margin:0});b.backing&&b.backing.reposition(a.pageX-d[0],a.pageY-d[1])},l=function(a){b.focus();fa(document.body);e(document).unbind("mousemove",f);e(document).unbind("mouseup",l)};e(document).mousemove(f).mouseup(l)})},
U=function(a){a&&(a.onselectstart=function(a){return!1},a.style.MozUserSelect="none")},fa=function(a){a&&(a.onselectstart=function(a){return!0},a.style.MozUserSelect="")},N=function(a){a=e(a);var b=e.map(a.attr("coords").split(","),function(a){return Number(a)});a.attr("shape").match(/circle/i)&&(b=[b[0]-b[2],b[1]-b[2],b[0]+b[2],b[1]+b[2]]);for(var c=[],d=[],f=0;f<b.length;f++)(0===f%2?c:d).push(b[f]);b=[Math.min.apply(Math,c),Math.min.apply(Math,d)];c=[Math.max.apply(Math,c),Math.max.apply(Math,
d)];a=a.parents("map").attr("name");a=e("img[usemap=#"+a+"]");d=a.offset();d.left+=parseInt(a.css("border-left-width"),10);d.top+=parseInt(a.css("border-top-width"),10);return[d.left+b[0],d.top+b[1],d.left+c[0],d.top+c[1]]};e.AmazonPopover={displayPopover:x,mouseTracker:C,updateBacking:function(a){a&&A[a]&&(a=A[a],a.backing&&a.backing.refreshBounds())},support:{skinCallback:!0,controlCallbacks:!0}};return!0}var r=!1;h.amznJQ&&h.amznJQ.available("jQuery",function(){if(q(h.amznJQ.jQuery||h.jQuery)||
r)h.amznJQ.declareAvailable("popover"),r=!0});"object"===typeof h.P&&"function"===typeof h.P.when&&h.P.when("jQuery").execute(function(e){if(q(e)||r)h.P.register("legacy-popover",function(){return null}),r=!0})})()})})(function(){var q=window.AmazonUIPageJS||window.P,h=q._namespace||q.attributeErrors;return h?h("AmazonPopoversAUIShim"):q}(),window);