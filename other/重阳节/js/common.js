
//	//微信环境判断
//	$(function(){
//		var ua = navigator.userAgent.toLowerCase();
//	        if (ua.match(/MicroMessenger/i) != "micromessenger" ) {
//	          location.href = 'wxerror.html';
//	        }
//			if(window.screen.width>768){
//			location.href = 'wxerror.html';
//			}
//	});
	
	//腾讯移动分析统计
//	$(function(){
//		MtaH5.pgv();
//	})
	
	//微信分享
	$(function(){
	    wechatShare.config.shareTitle = "实在是高，我们登高啦！";  //分享标题
	    wechatShare.config.shareFriendTitle = "实在是高，我们登高啦！";  //分享标题朋友圈
	    wechatShare.config.shareDesc = "九九重阳，登高眺远";  //分享描述
	    wechatShare.init();  //只需要调用一次，即获取一次签名
	    wechatShare.wxReadyCallback();
	})
	
	//泰康统计
//	function tkStatistic(descStr,descStrAdd){
//	if (descStrAdd) {  //添加附加描述
//		TDAPP.onEvent(descStr,descStrAdd);
//	}else{
//		TDAPP.onEvent(descStr);
//	}
//	TDAPP.send(); //解决用户首次点击未统计到数据的问题
//	}

	
	