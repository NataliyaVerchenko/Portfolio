!function(a){a.fn.viewportChecker=function(b){
var c={classToAdd:"visible",classToRemove:"invisible",offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1};a.extend(c,b);
var d=this,e={height:a(window).height(),width:a(window).width()},f=-1!=navigator.userAgent.toLowerCase().indexOf("webkit")?"body":"html";return this.checkElements=function(){
var b,g;c.scrollHorizontal?(b=a(f).scrollLeft(),g=b+e.width):(b=a(f).scrollTop(),g=b+e.height),d.each(function(){
var d=a(this),f={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(f,c),a.extend(f,h),!d.hasClass(f.classToAdd)||f.repeat){String(f.offset).indexOf("%")>0&&(f.offset=parseInt(f.offset)/100*e.height);var i=f.scrollHorizontal?Math.round(d.offset().left)+f.offset:Math.round(d.offset().top)+f.offset,j=f.scrollHorizontal?i+d.width():i+d.height();f.invertBottomOffset&&(j-=2*f.offset),g>i&&j>b?(d.removeClass(f.classToRemove),d.addClass(f.classToAdd),f.callbackFunction(d,"add")):d.hasClass(f.classToAdd)&&f.repeat&&(d.removeClass(f.classToAdd),f.callbackFunction(d,"remove"))}})},a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(window).bind("load scroll touchmove",this.checkElements),a(window).resize(function(b){e={height:a(window).height(),width:a(window).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);


jQuery(document).ready(function() {
jQuery('.elementanm').addClass("hidden").viewportChecker({
classToAdd: 'visible animated slideRight',
offset: 100
});
});

jQuery(document).ready(function() {
jQuery('.elementanm').addClass("hidden").viewportChecker({
classToAdd: 'visible animated slideTop',
offset: 100
});
});


jQuery(document).ready(function() {
jQuery('.elementanm').addClass("hidden").viewportChecker({
classToAdd: 'visible animated slideLeft',
offset: 100
});
});

$(window).scroll(function(){
$('.mov').each(function(){
var imagePos = $(this).offset().top;
var topOfWindow = $(window).scrollTop();
if(imagePos < topOfWindow+200){
$(this).addClass('flipInX');
}
});
})