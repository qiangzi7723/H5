;(function(jssdk,$){
	
	jssdk.init=function(myOpt){
		var dfd=$.Deferred();
		$config={
			url:window.location.href.split('#')[0],
			debug:false,
			time:new Date().getTime(),
			signUrl:'http://119.23.22.179/jssdk/jssdk_seth5.php'//签名后端
		}
		$.extend($config,myOpt);
		$.get($config.signUrl,$config,function(json){
			if(json.code && json.code==400){
				dfd.reject(json);
			}else{
				wx.config(json);//注入权限验证配置
				wx.ready(function(){//验证成功
					dfd.resolve();
				});
//				wx.error(function(res){//验证失败处理
// 				 	alert('验证失败:'+res.errMsg);
//					
//				});
			}		
		}, 'jsonp');
		return dfd.promise();
	}
	//接口检测
	jssdk.check=function(){
		wx.checkJsApi({
      		jsApiList: [
            	'checkJsApi',
            	'onMenuShareTimeline',
            	'onMenuShareAppMessage',
            	'onMenuShareQQ',
             	'onMenuShareWeibo',
             	'hideMenuItems',
             	'showMenuItems',
            	'hideAllNonBaseMenuItem',
            	'showAllNonBaseMenuItem',
           		'translateVoice',
            	'startRecord',
           		'stopRecord',
				'onVoiceRecordEnd',
				'playVoice',
				'onVoicePlayEnd',
				'pauseVoice',
				'stopVoice',
				'uploadVoice',
				'downloadVoice',
          		'onRecordEnd',
              	'chooseImage',
             	'previewImage',
              	'uploadImage',
             	'downloadImage',
             	'getNetworkType',
              	'openLocation',
             	'getLocation',
             	'hideOptionMenu',
             	'showOptionMenu',
             	'closeWindow',
             	'scanQRCode',
             	'chooseWXPay',
              	'openProductSpecificView',
              	'addCard',
              	'chooseCard',
              	'openCard'
      		],
      		success: function (res) {
      			alert("检测通过："  +JSON.stringify(res));
      		},
     	 	fail: function(res) {
      			alert("检测失败："  +JSON.stringify(res));
      		},
      		complete: function(res) {
      			alert("检测结束");
      		}
    	});	
	}
	
	
	//分享
	jssdk.share=function(opt){
		$config={
			title: '', // 分享标题
			desc: '', // 分享描述
    		link: '', // 分享链接
    		imgUrl: '', // 分享图标
			type: '', // 分享类型,music、video或link，不填默认为link
    		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			title2:'',
    		success: function () { 
        		// 用户确认分享后执行的回调函数
    		},
    		cancel: function () { 
        		// 用户取消分享后执行的回调函数
   		 	}
		};
		
		$.extend($config,opt);
		
		//朋友圈
		wx.onMenuShareTimeline({
    		title: $config.title, // 分享标题
    		link: $config.link, // 分享链接
    		imgUrl: $config.imgUrl, // 分享图标
    		success: function () { 
        		// 用户确认分享后执行的回调函数
				$config.success();
    		},
    		cancel: function () { 
        		// 用户取消分享后执行的回调函数
				$config.cancle();
    		}
		});
		
		//分享给朋友
		wx.onMenuShareAppMessage({
    		title: $config.title, // 分享标题
    		desc: $config.desc, // 分享描述
    		link: $config.link, // 分享链接
    		imgUrl: $config.imgUrl, // 分享图标
    		type: $config.type, // 分享类型,music、video或link，不填默认为link
    		dataUrl: $config.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
    		success: function () { 
        		// 用户确认分享后执行的回调函数
				$config.success();
    		},
    		cancel: function () { 
        		// 用户取消分享后执行的回调函数
				$config.cancle();
    		}
		});
		
			
	}
	
	
	// voice = {
	// 	localId: '',
	// 	serverId: ''
	// };	
	// // 4 音频接口
	// // 4.2 开始录音
	// document.querySelector('#startRecord').onclick = function () {
	// 	wx.startRecord({
	// 		cancel: function () {
	// 			alert('用户拒绝授权录音');
	// 			window.location.href = "http://www.cui2.com/h5/pangGeTaiDu20151015/index.php";
	// 		}
	// 	});
	// };
	
 //  // 4.3 停止录音
 //  document.querySelector('#stopRecord').onclick = function () {
 //    wx.stopRecord({
 //      success: function (res) {
 //        voice.localId = res.localId;
 //      },
 //      fail: function (res) {
 //       // alert(JSON.stringify(res));
 //      }
 //    });
 //  };

 //  // 4.4 监听录音自动停止
 //  wx.onVoiceRecordEnd({
 //    complete: function (res) {
 //      voice.localId = res.localId;
 //      alert('录音时间已超过一分钟');
 //    }
 //  });

 //  // 4.5 播放音频
 //  document.querySelector('#playVoice').onclick = function () {
 //    if (voice.localId == '') {
 //      alert('请先使用 startRecord 接口录制一段声音');
 //      return;
 //    }
 //    wx.playVoice({
 //      localId: voice.localId
 //    });
 //  };

 //  // 4.6 暂停播放音频
 //  document.querySelector('#pauseVoice').onclick = function () {
 //    wx.pauseVoice({
 //      localId: voice.localId
 //    });
 //  };

 //  // 4.7 停止播放音频
 //  document.querySelector('#stopVoice').onclick = function () {
 //    wx.stopVoice({
 //      localId: voice.localId
 //    });
 //  };

 //  // 4.8 监听录音播放停止
 //  wx.onVoicePlayEnd({
 //    complete: function (res) {
 //      alert('录音（' + res.localId + '）播放结束');
 //    }
 //  });

 //  // 4.8 上传语音
 //  document.querySelector('#uploadVoice').onclick = function () {
 //    if (voice.localId == '') {
 //      alert('请先使用 startRecord 接口录制一段声音');
 //      return;
 //    }
 //    wx.uploadVoice({
 //      localId: voice.localId,
 //      success: function (res) {
 //        //alert('上传语音成功，serverId 为' + res.serverId);
		
 //        voice.serverId = res.serverId;
	// 	var sid = res.serverId;
		
	// 	/*$.post("http://www.cui2.com/h5/pangGeTaiDu20151015/index.php",{act:'up',serverId:sid},function(data){
	// 		var data = JSON.parse(data);
			
	// 		alert(data.error);	
 //            alert(data.img);
	// 		alert(data.msg);
			
	// 		$('#error').val(data.error);
	// 		$('#img').val(data.img);
	// 		$('#msg').val(data.msg);
			
			
			
	// 		//alert(data.msg);		
	// 	});*/
		
 //      }
 //    });
 //  };

 //  // 4.9 下载语音
 //  document.querySelector('#downloadVoice').onclick = function () {
      
 //    if (voice.serverId == '') {
 //      alert('请先使用 uploadVoice 上传声音');
 //      return;
 //    }
    
 //    //alert(wx.downloadVoice);
 //    wx.downloadVoice({
 //      serverId: voice.serverId,
      
 //      success: function (res) {
 //        //alert('下载语音成功，localId 为' + res.localId);
 //        voice.localId = res.localId;
 //      }
 //    });
 //  };
  
 // document.querySelector('#saoyisao').onclick = function () {  
	//   wx.scanQRCode({
	// 	needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
	// 	scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
	// 	success: function (res) {
	// 		var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
	// 	}
	// });
 // };
	
function decryptCode(code, callback) {
    $.getJSON('/jssdk/decrypt_code.php?code=' + encodeURI(code), function (res) {
      if (res.errcode == 0) {
        codes.push(res.code);
      }
    });
  }

  
})(window.jssdk=window.jssdk ||{},jQuery);






















