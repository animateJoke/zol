jQuery.fn.dragbox=function(){var e=new function(){this.ele=null,this.init=function(e){return this.ele=e,this},this.moveStart=function(){var e=this;this.ele.onmousedown=function(n){n.stopPropagation();var t=n||window.event,o=t.clientX-e.ele.offsetLeft,i=t.clientY-e.ele.offsetTop;e.moveIng(o,i),e.moveEnd()}},this.moveIng=function(e,n){var t=this;document.onmousemove=function(o){var i=o||window.event;$(t.ele).css({margin:0,top:0,left:0}),t.ele.style.left=i.pageX-e+"px",t.ele.style.top=i.pageY-n+"px"}},this.moveEnd=function(){document.onmouseup=function(){document.onmousemove=document.onmouseup=null}}};return e.init(this[0]).moveStart(),e};