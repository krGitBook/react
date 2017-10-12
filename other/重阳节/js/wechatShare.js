document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    WeixinJSBridge.call('hideOptionMenu');
    WeixinJSBridge.call('hideToolbar');
});

var projectPath = window.location.origin + "/midAutumn";
var oauth22 = "http://fans-t.activity.wx.taikang.com/fans-pub/com/skipOauthLink?redirectUrl=";
var urls22 = projectPath+"/index.html;
var shareUrl22 = oauth22+urls22;

var baseUrl = new Base64();  //base64 
var wechatShare={
    "config" : {
        "debugFlag"  : false,   //是否开启微信debug模式: true 开启  false 关闭
        "isTestFlag" : false,  //是否是测试环境：true 测试  false 生产(不在匹配域名数组中的域名需配置该选项)
        "isOauthLink" : true,  //分享链接是否生成oauth链接: true(生成oauth链接)  false(本页面链接)
        "shareTitle" : "",  //分享标题
        "shareFriendTitle" : "",  //分享标题朋友圈
        "shareDesc"  : "", //分享描述
        "shareImgurl": projectPath+"/images/share.png",  //分享给朋友图片链接
        "shareLink"  : shareUrl22  //分享oauth链接:参数为点击分享链接进入的页面链接
    },
    "EnvironMatch" : {
        "domains" : [{   //匹配的域名数组
            "domainName" : "http://wxpt-t.taikang.com",
            "isTestFlag" : true
        },{
            "domainName" : "http://localhost:8080",
            "isTestFlag" : true
        },{
            "domainName" : "http://q.taikang.com",
            "isTestFlag" : false
        },{
            "domainName" : "http://tkuat.wcs.95522.taikang.com",
            "isTestFlag" : true
        },{
            "domainName" : "http://www.95522.cn",
            "isTestFlag" : false
        },{
            "domainName" : "http://fans-t.activity.wx.taikang.com",
            "isTestFlag" : true
        },{
            "domainName" : "http://fans.activity.wx.taikang.com",
            "isTestFlag" : false
        }],
        "testConfig" : {  //测试环境appid及oauth的redirect_uri
            "appid" : "wxdbbe2c84a6e68304",
            "redirect_uri" : "http://wxpt-t.taikang.com"
        },
        "productConfig" : {  //生产环境appid及oauth的redirect_uri
            "appid" : "wx2f763d09aa9ca523",
            "redirect_uri" : "http://wxpt.taikang.com"
        }
    },
    "getEnvironConfig" : function(){  //获取环境apppid&redirect_uri&oauth链接
        var domain = window.location.origin;
        var domainsArr = this.EnvironMatch.domains;
        for(var i in domainsArr){
            var item = domainsArr[i];
            if(item.domainName == domain){
                if(item.isTestFlag){
                    this.config.appid = this.EnvironMatch.testConfig.appid;
                    this.config.redirect_uri = this.EnvironMatch.testConfig.redirect_uri;
                }else{
                    this.config.appid = this.EnvironMatch.productConfig.appid;
                    this.config.redirect_uri = this.EnvironMatch.productConfig.redirect_uri;
                    this.config.debugFlag = false;
                    window.alert = function(){};
                }
                this.config.oauthLink = this.creatfLink(this.config.shareLink);
                return false;
            }
        }
    },
    "creatfLink" : function(link){  //生成oauth链接
        var newlink = baseUrl.encode(link);
        var fLink="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+ this.config.appid +"&redirect_uri="+ this.config.redirect_uri +"/tkmap/wechat/oauth2/redirect/"+ this.config.appid +"?other="+ newlink +"&response_type=code&scope=snsapi_base&state=redict&connect_redirect=1#wechat_redirect";   //分享链接
        return fLink;
    },
    "init" : function(){  //获取签名接口
        //alert("projectPath:"+projectPath);
        this.getEnvironConfig();
        var _this=this;
        var pageUrl=encodeURIComponent(window.location.href.split('#')[0]);   //页面地址
        // z_poploader();
        $.ajax({
            type : "GET",
            url:"/tkmap/wechat/jsapi/getSignature.do",
            data:"appId="+ _this.config.appid +"&url="+ pageUrl,
            dataType : "json"
            // async : false
        })
            .done(function(data) {
               // alert(JSON.stringify(data));

                _this.shareConfig(data);
                wx.error(function(res){
                    wx.hideOptionMenu();
                    //alert("微信分享出现错误！");
                });

            })
            .fail(function() {
                //alert("网络正在开小差，请检查网络连接！");
            })
            .always(function() {
                // z_closeloader();
            });
    },
    "wxReadyCallback" : function(){
        this.getEnvironConfig();
        var _this = this;
        wx.ready(function(){
            wx.showOptionMenu();
            _this.shareMenu.onMenuShareAppMessage(_this.config);
            _this.shareMenu.onMenuShareTimeline(_this.config);
            _this.hideMenuItems();
        });
    },
    "shareConfig" : function(signObj){  //微信config注入
        var _this = this;
        var configs = this.config;
        wx.config({
            debug: configs.debugFlag,
            appId: configs.appid,
            timestamp: signObj.timestamp,
            nonceStr: ''+(signObj.noncestr)+'',
            signature: ''+(signObj.signature)+'',
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'hideMenuItems',
                'hideAllNonBaseMenuItem',
                'getNetworkType',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'closeWindow'
            ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
    },
    "shareMenu" : { //微信分享
        "onMenuShareAppMessage" : function(configs){
            wx.onMenuShareAppMessage({
                title:  configs.shareTitle,
                desc:   configs.shareDesc,
                link:   shareUrl22,
                imgUrl: projectPath+"/images/share.png", 
                success: function () {
                    console.log("成功分享给朋友");
                    //tkStatistic("成功分享给朋友");
                    //MtaH5.clickStat("sharefriend");
                },
                cancel: function () {
                    console.log("取消分享给朋友");
                }
            });
        },
        "onMenuShareTimeline" : function(configs){
            wx.onMenuShareTimeline({
                title:  configs.shareFriendTitle,
                link: shareUrl22,
                imgUrl: projectPath+"/images/share.png", 
                success: function () {
                    console.log("成功分享到朋友圈");
                    //tkStatistic("成功分享到朋友圈");
                   // MtaH5.clickStat("sharepyq");
                },
                cancel: function () {
                    console.log("取消分享到朋友圈");
                }
            });
        }
    },
    "hideMenuItems" : function(){ //隐藏右上角相应按钮
        wx.hideMenuItems({
            menuList: [
                'menuItem:readMode', // 阅读模式
                'menuItem:openWithQQBrowser',
                'menuItem:openWithSafari',
                'menuItem:originPage',
                'menuItem:share:qq',
                'menuItem:share:weiboApp',
                'menuItem:share:facebook',
                'menuItem:share:QZone',
                'menuItem:copyUrl' // 复制链接
            ],
            success: function(res) {},
            fail: function(res) {}
        });
    }
};

/*------------base64*start------------*/
/**
 *
 *  Base64 encode / decode
 *
 *  @author haitao.tu
 *  @date   2010-04-26
 *  @email  tuhaitao@foxmail.com
 *
 */

function Base64() {

    // private property
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    // public method for encoding
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }

    // public method for decoding
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    }

    // private method for UTF-8 encoding
    _utf8_encode = function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }
        return utftext;
    }

    // private method for UTF-8 decoding
    _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while ( i < utftext.length ) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}
/*------------base64*End------------*/
