$(function(){var t=!1;$.idcode.setCode(),$("#Txtidcode").on("blur",function(){var e=$.idcode.validateCode();(t=e)?($("#msg").removeClass("msgF").addClass("msgT"),$("#msg").text("验证码正确")):($("#msg").removeClass("msgT").addClass("msgF"),$("#msg").text("*验证码错误"))}),$(".all").css("marginBottom","130px"),$("#myform").on("submit",function(){if(t){$(".msg").text("");var e=$.toData($("#myform").serialize());e.userPwd=$.md5(e.userPwd),$.ajax({url:"http://127.0.0.1/zol/server/php/login.php",type:"post",dataType:"json",data:e}).then(function(t){if(console.log(t),t.status){for(var e=JSON.parse($.cookie("list")||"[]"),s=0;s<e.length;s++)$.ajax({url:"http://127.0.0.1/zol/server/php/cart.php",type:"post",dataType:"json",data:e[s]});$.removeCookie("list"),alert("登录成功"),window.location.href="index.html"}})}else $(".msg").text("*验证码错误");return!1})});