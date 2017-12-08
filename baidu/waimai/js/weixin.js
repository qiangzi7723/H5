var toURL = window.location.href.substring(0,location.href.lastIndexOf('/'));

var wxDefault = {
    title:"测测你的耳朵有多会吃？",
    desc:"这几种声音，一般人晚上不敢听",
    imgUrl:toURL+"/images/share.jpg",
    link:toURL+"/index.html",
	success:function(){
    	_czc.push(["_trackEvent", "事件", "分享回调", "分享回调"]);
    }
};

$(function(){
    var pageUrl = location.href;
    $.ajax({
        url:"https://h5.hecoe.com/wx/index.php?w=jssdk",
        dataType:"jsonp",
        jsonp:"jsoncallback",
        data:{url:encodeURIComponent(pageUrl)},
        success:function(data){
            data.debug = false;
            wx.config(data);
            wx.ready(function(){
                wxShare();
            });
        }
    })

});

function wxShare(data){
    if(typeof(wx) == "undefined"){
        return;
    }
    var newData = $.extend({},wxDefault, data);
    wx.onMenuShareAppMessage(newData);
    wx.onMenuShareQQ(newData);
    wx.onMenuShareWeibo(newData);
    wx.onMenuShareTimeline(newData);
}