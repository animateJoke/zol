jQuery,$(function(){$.fn.extend({rotate:function(t,e){var r=e-t>0?Math.ceil((e-t)/10):Math.floor((e-t)/10),s=0;return this.rotateTimer=setInterval(function(){s++,$(this).css("transform","rotate("+(t+r*s)+"deg)"),s>=10&&clearInterval(this.rotateTimer)}.bind(this),50),this},scale:function(t,e){var r=0,s=10*(e-t);return this.scaleTimer=setInterval(function(){r++,$(this).css("transform","scale("+(t+s*r/100)+")"),r>=10&&clearInterval(this.scaleTimer)}.bind(this),30),this},scaleX:function(t,e){var r=0,s=10*(e-t);return this.scaleTimer=setInterval(function(){r++,$(this).css("transform","scaleX("+(t+s*r/100)+")"),r>=10&&clearInterval(this.scaleTimer)}.bind(this)),this}})});