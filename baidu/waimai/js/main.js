$(function(){
    var mobile   = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    var touchstart = mobile ? "touchstart" : "mousedown";
    var touchend = mobile ? "touchend" : "mouseup";
    var touchmove = mobile ? "touchmove" : "mousemove";
    var Android=false;
    if (/(Android)/i.test(navigator.userAgent)) Android=true;


    //定义图片路径
    var loadingPath='https://h5.hecoe.com/baidu/waimai/hearfood171127/images/';

    //正确答案
    var rightArr=['4','4','1','3','4','1','3','3','1','2','4']
    //当前题号
    var nowQuestionNum = 1;
    //争取答案数量
    var rightCount = 0;
    //定义背景音乐播放
    var bgSound = document.getElementById("bgsound");
    var questionSound = document.getElementById("sound");
    //答对声音
    var daduiSound = document.getElementById("voice");
    // 答错声音
    var errorSound = document.getElementById("error");
    // btn声音
    var btnSound = document.getElementById("btn");
    //是否允许选项
    var allowClick = false;
    //是否允许选项
    var allowToNextClick = true;
    //弹幕
    var danmuArr = ["p1_6_1.png", "p1_6_1.png", "p1_6_1.png", "p1_6_1.png", "p1_6_1.png", "p1_6_1.png", "p1_6_1.png", "p1_6_1.png", "p1_6_1.png", "p1_6_1.png", "p1_6_1.png", "p1_6_1.png"];
    var danmuTime;

    var loadImgNum=1;
    var waver;
    //可调节的参数
    var motionObj = {};
    var manifest=[
        {src:loadingPath+'loading_bg.jpg'},
        {src:loadingPath+'bg1.jpg'},
        {src:loadingPath+'bg2.jpg'},
        {src:loadingPath+'bg3.jpg'},
        {src:loadingPath+'bg4.jpg'},
        {src:loadingPath+'conceal_1.png'},
        {src:loadingPath+'conceal.png'},
        {src:loadingPath+'conceal_3.png'},
        {src:loadingPath+'cover_1.png'},
        {src:loadingPath+'cover_2.png'},
        {src:loadingPath+'cover_3.png'},
        {src:loadingPath+'cover_4.png'},
        {src:loadingPath+'cover_5.png'},
        {src:loadingPath+'cover_6.png'},
        {src:loadingPath+'cover_7.png'},
        {src:loadingPath+'cover_8.png'},
        {src:loadingPath+'cover_9.png'},
        {src:loadingPath+'cover_10.png'},
        {src:loadingPath+'cover_11.png'},
        {src:loadingPath+'load_1.png'},
        {src:loadingPath+'load_2.png'},
        {src:loadingPath+'logo.jpg'},
        {src:loadingPath+'p1_1_1.png'},
        {src:loadingPath+'p1_1_2.png'},
        {src:loadingPath+'p1_1_3.png'},
        {src:loadingPath+'p1_1_4.png'},
        {src:loadingPath+'p1_2.png'},
        {src:loadingPath+'p1_3.png'},
        {src:loadingPath+'p1_4.png'},
        {src:loadingPath+'p1_5.png'},
        {src:loadingPath+'p1_6.png'},
        {src:loadingPath+'p2_2_1.png'},
        {src:loadingPath+'p2_2_2.png'},
        {src:loadingPath+'p2_2_3.png'},
        {src:loadingPath+'p2_2_4.png'},
        {src:loadingPath+'p2_2_5.png'},
        {src:loadingPath+'p2_2_6.png'},
        {src:loadingPath+'p2_2_7.png'},
        {src:loadingPath+'p2_2_8.png'},
        {src:loadingPath+'p2_2_9.png'},
        {src:loadingPath+'p2_2_10.png'},
        {src:loadingPath+'p2_2_11.png'},
        {src:loadingPath+'p2_4.png'},
        {src:loadingPath+'p2_5.png'},
        {src:loadingPath+'p2_6_1.png'},
        {src:loadingPath+'p2_7_1.png'},
        {src:loadingPath+'p2_7_2.png'},
        {src:loadingPath+'p2_7_3.png'},
        {src:loadingPath+'p2_7_4.png'},
        {src:loadingPath+'p2_7_5.png'},
        {src:loadingPath+'p2_7_6.png'},
        {src:loadingPath+'p2_7_7.png'},
        {src:loadingPath+'p2_7_8.png'},
        {src:loadingPath+'p2_7_9.png'},
        {src:loadingPath+'p2_7_10.png'},
        {src:loadingPath+'p2_7_11.png'},
        {src:loadingPath+'p3_2_1.jpg'},
        {src:loadingPath+'p3_2_2.jpg'},
        {src:loadingPath+'p3_2_3.jpg'},
        {src:loadingPath+'p3_2_4.jpg'},
        {src:loadingPath+'p3_2_5.jpg'},
        {src:loadingPath+'p3_2_6.jpg'},
        {src:loadingPath+'p3_2_7.jpg'},
        {src:loadingPath+'p3_2_8.jpg'},
        {src:loadingPath+'p3_2_9.jpg'},
        {src:loadingPath+'p3_2_10.jpg'},
        {src:loadingPath+'p3_2_11.jpg'},
        {src:loadingPath+'p3_4_1.png'},
        {src:loadingPath+'p3_5_1.png'},
        {src:loadingPath+'p3_4_2.png'},
        {src:loadingPath+'p3_5_2.png'},
        {src:loadingPath+'p3_6.png'},
        {src:loadingPath+'p3_7_1.png'},
        {src:loadingPath+'p3_7_2.png'},
        {src:loadingPath+'p3_7_3.png'},
        {src:loadingPath+'p3_7_4.png'},
        {src:loadingPath+'p3_7_5.png'},
        {src:loadingPath+'p3_7_6.png'},
        {src:loadingPath+'p3_7_7.png'},
        {src:loadingPath+'p3_7_8.png'},
        {src:loadingPath+'p3_7_9.png'},
        {src:loadingPath+'p3_7_10.png'},
        {src:loadingPath+'p3_7_11.png'},
        {src:loadingPath+'p3_8_1.png'},
        {src:loadingPath+'p3_8_2.png'},
        {src:loadingPath+'p4_1_0.png'},
        {src:loadingPath+'p4_1_1.png'},
        {src:loadingPath+'p4_1_2.png'},
        {src:loadingPath+'p4_1_3.png'},
        {src:loadingPath+'p4_1_4.png'},
        {src:loadingPath+'p4_1_5.png'},
        {src:loadingPath+'p4_1_6.png'},
        {src:loadingPath+'p4_1_7.png'},
        {src:loadingPath+'p4_1_8.png'},
        {src:loadingPath+'p4_1_9.png'},
        {src:loadingPath+'p4_1_10.png'},
        {src:loadingPath+'p4_1_11.png'},
        {src:loadingPath+'p4_2_1.png'},
        {src:loadingPath+'p4_2_2.png'},
        {src:loadingPath+'p4_2_2_0.png'},
        {src:loadingPath+'p4_2_2_1.png'},
        {src:loadingPath+'p4_2_2_2.png'},
        {src:loadingPath+'p4_2_2_3.png'},
        {src:loadingPath+'p4_2_2_4.png'},
        {src:loadingPath+'p4_3.png'},
        {src:loadingPath+'p4_3_1.gif'},
        {src:loadingPath+'p4_3_2_0.png'},
        {src:loadingPath+'p4_3_2_1.png'},
        {src:loadingPath+'p4_3_2_2.png'},
        {src:loadingPath+'p4_3_2_3.png'},
        {src:loadingPath+'p4_3_2_4.png'},
        {src:loadingPath+'p4_4_1.png'},
        {src:loadingPath+'p4_4_2.png'},
        {src:loadingPath+'p4_4_3.png'},
        {src:loadingPath+'p4_5_0.png'},
        {src:loadingPath+'p4_5_1.png'},
        {src:loadingPath+'p4_5_2.png'},
        {src:loadingPath+'p4_5_3.png'},
        {src:loadingPath+'p4_5_4.png'},
        {src:loadingPath+'popup_2.png'},
        {src:loadingPath+'popup_3.png'}
    ];

    init();
    //初始化函数
    function init(){
        iniListenSound();
        startLoad();
        iniBtn();

        $('html,body').on(touchmove,function(e){
            e.preventDefault();
        });

        //loading动画交替
        waver = setInterval(function(){
            loadImgNum=loadImgNum+1;
            if(loadImgNum==3){
                loadImgNum=1;
            }
            $(".load1>img").attr('src','https://h5.hecoe.com/baidu/waimai/hearfood171127/images/load_'+loadImgNum+'.png');
        },200);


    };

    function startLoad(){
		_czc.push(['_trackEvent','loading页面','页面曝光','页面曝光']);
        var loader = new createjs.LoadQueue(false);
        loader.installPlugin(createjs.Sound);
        loader.addEventListener("progress", handleOverallProgress);
        loader.addEventListener("complete", handleOverallComplete);
        loader.loadManifest(manifest);
    }
    //微信端背景音乐播放
    function iniListenSound(){
        document.addEventListener("WeixinJSBridgeReady", function(){
            bgsound.play();
            $('#sound').load();
        }, false);
    }
    //loading
    function handleOverallProgress(event){
        var comnum=Math.ceil(event.loaded*100);
        $('.load3').css('width',3*comnum/100+"rem");
        $('.loadingtxt').text(Math.ceil(event.loaded*100)+"%");
    }
    //
    function handleOverallComplete(){
        for(var i=1;i<=4;i++){
            motionObj["page"+i] = new TimelineMax();
        }
        initPageMotion();
    }
    //
    function initPageMotion(){
        // motionObj['page'+1].add(TweenMax.from('.p1_2',0.6,{scale:0,ease:Bounce.easeOut}));
        motionObj['page'+1].add(TweenMax.from('.p1_1',0.4,{scale:0, alpha: 0,ease:Linear.easeOut,onComplete:function(){
            $('.p1_3').addClass('fom');
            setTimeout(function(){
                $('.p1_1_5').addClass('turn');
            },2000)
            setTimeout(function(){
                // $('.p1_6').addClass('movee');
            },2050)
        }}));
        // motionObj['page'+1].add(TweenMax.from('.p1_4>img',0.6,{scale:0,ease:Bounce.easeOut}),'+=0.7');
        // motionObj['page'+1].add(TweenMax.from('.p1_5>img',0.6,{scale:0,ease:Bounce.easeOut,onComplete:function(){
        //     $('.p1_5>img').addClass('zuoyou');
        // }}));
        motionObj['page'+1].pause();
        // motionObj['page'+2].add(TweenMax.from('.p2_6,.p2_7',0.6,{alpha: 0,ease:Linear.easeOut}),'+=1');//选项按钮动画
        // motionObj['page'+2].pause();

        // motionObj['page'+3].add(TweenMax.from('.p3_6',0.6,{x:-40,ease:Linear.easeOut}));
        // motionObj['page'+3].add(TweenMax.from('.p3_4',0.6,{x:300,ease:Linear.easeOut,onComplete:function(){
        //     //$('.p3_4_1').addClass('yundong');
        // }}),'-=0.6');
        // motionObj['page'+3].add(TweenMax.from('.p3_2',0.8,{alpha:0,ease:Linear.easeOut}),'+=0.4');
        motionObj['page'+3].add(TweenMax.from('.cover',0.8,{y:-400,ease:Linear.easeOut,onComplete:function(){
            allowToNextClick = true;
            nowQuestionNum = nowQuestionNum+1;
        }}),'-=1.2');
        motionObj['page'+3].add(TweenMax.from('.p3_7',0.01,{ease:Linear.easeOut,onComplete:function(){
            if (nowQuestionNum == 11) {
                //设置分享
                if (rightCount ==0){
                    wxDefault.title='我滴妈！我的耳朵竟然不会吃东西！快来测测你会吗！';
                    wxShare();
                }
                else if(rightCount >0 && rightCount <=4){
                    wxDefault.title='我的耳朵竟然能吃'+rightCount+'种食物！吃货届的泥食流就是我，不服来战略略略～';
                    wxShare();
                }else if(rightCount >4 && rightCount <=7){
                    wxDefault.title='我的耳朵竟然能吃'+rightCount+'种食物！吃货届的吃汉就是我，不服来战略略略～';
                    wxShare();
                }else if(rightCount >7 && rightCount <=10){
                    wxDefault.title='我的耳朵竟然能吃'+rightCount+'种食物！吃货届的食精病就是我，不服来战略略略～';
                    wxShare();
                }else{
                    wxDefault.title='我的耳朵竟然能吃'+rightCount+'种食物！吃货届的扛把子就是我，不服来战略略略～';
                    wxShare();
                }
                // $('.p3_8').hide();

            }
            else {
                $('.p3_8').show();

                // $('#sound').attr('src','images/music/1_'+nowQuestionNum+'.mp3');
            }

        }}),'-=1.2');
        motionObj['page'+3].pause();

        // motionObj['page'+4].add(TweenMax.from('.p4_1',0.8,{alpha:0,ease:Linear.easeOut}));
        motionObj['page'+4].add(TweenMax.from('.p4_2',0.8,{x:300,ease:Linear.easeOut,onComplete:function(){
            $('.p4_2_4').fadeIn().addClass('zuoyou1');//右上角气泡动画
        }}),'-=1.2');
        // motionObj['page'+4].add(TweenMax.from('.p4_3',0.6,{scale:0,ease:Bounce.easeOut,onComplete:function(){
        //     $('.p4_3_1').addClass('sclall');//右上角气泡动画
        // }}));
        motionObj['page'+4].add(TweenMax.from('.p4_4',0,{ease:Linear.easeOut,onComplete:function(){
            // setTimeout(function(){
            //     $('.p4_5_1').addClass('movee');
            // },1300)
        }}));
        motionObj['page'+4].pause();

        $(".main").fadeIn(500,function(){
            clearInterval(waver);//清除loading循环
            //luan(1000);
            danmuShow(14);
            $('.loading').remove();
            motionObj['page'+1].play();
			_czc.push(['_trackEvent','首页','页面曝光','页面曝光']);
        });
    }

    function toSelectPage()
    {
        $('.p2_2>img').attr('src','https://h5.hecoe.com/baidu/waimai/hearfood171127/images/p2_2_'+nowQuestionNum+'.png');
        $('.p2_7>img').attr('src','https://h5.hecoe.com/baidu/waimai/hearfood171127/images/p2_7_'+nowQuestionNum+'.png');
        if(nowQuestionNum == 1) $('.page1').fadeOut();
        else{

            if(nowQuestionNum == 11) {
                $('.p3_8').hide();
                $('.p3_9').show();
            }
            $('.page3').fadeOut(function(){
                // $('.p3_9').hide();
                $('.p3_4_1').hide().removeClass('yundong1');//右上角气泡动画
                // TweenMax.set('.p3_6',{x:-40});
                // TweenMax.set('.p3_2',{alpha:0});
                // TweenMax.set('.p3_4',{x:300});
                TweenMax.set('.cover',{y:-400});
                // TweenMax.set('.p3_7',{alpha:0});
            });
        }
        $('.page2').fadeIn(function(){
            $('.p2_2').fadeIn();//题目显示
            $('.danmu').hide();//题目显示
            $('.p2_3').addClass('fom');//指针移入
            //motionObj['page'+2].restart();
            questionSound.play();
            setTimeout(function(){
                // $('.p2_5').fadeIn().addClass('zuoyou1');//右上角气泡动画
                $('.p2_1_5').addClass('turn');//盘子转动
                $('.p2_6,.p2_7').fadeIn();
                allowClick = true;
                //allowToNextClick = true;
            },1000)
        });
    }
    function toResultPage(selDom)
    {
        // questionSound.pause();
        var rightNum = rightArr[nowQuestionNum-1];
        var selectNum = selDom.attr('data-index');
        console.log(rightNum);
        console.log(selectNum);
        if (parseInt(rightNum) == parseInt(selectNum)){
            daduiSound.play();//答对声音
            console.log('答对了')
            rightCount++;
            $('.p3_4_1>img').attr('src','https://h5.hecoe.com/baidu/waimai/hearfood171127/images/p3_4_1.png')
            // $('.p3_4_2>img').attr('src','images/p3_4_2.png')
            $('.p3_4_2,.p3_4_3').show();
            $('.p3_4_4').hide();
        }else{
           errorSound.play();//答错声音
            console.log('答错了')
            $('.p3_4_1>img').attr('src','https://h5.hecoe.com/baidu/waimai/hearfood171127/images/p3_5_1.png')
            // $('.p3_4_2>img').attr('src','images/p3_5_2.png')
            $('.p3_4_4').show();
            $('.p3_4_2,.p3_4_3').hide();
        }
        console.log('答对数:'+rightCount);
        $('.p3_2>img').attr('src','https://h5.hecoe.com/baidu/waimai/hearfood171127/images/p3_2_'+nowQuestionNum+'.jpg');//正确答案左上角文字
        $('.p3_7>img').attr('src','https://h5.hecoe.com/baidu/waimai/hearfood171127/images/p3_7_'+nowQuestionNum+'.png');//正确答案底部介绍
        $('.cover>img').attr('src','https://h5.hecoe.com/baidu/waimai/hearfood171127/images/cover_'+nowQuestionNum+'.png')//正确答案光盘套

        $('.page3').fadeIn(function(){

            questionSound.currentTime = 0;//暂停回到初始位置
            questionSound.pause();
            $('.p3_3').addClass('fom_one');//指针移入
            motionObj['page'+3].restart();
            setTimeout(function(){
                $('.p3_4_1').fadeIn().addClass('yundong1');//右上角气泡动画
                //if(nowQuestionNum != 11)
                //{
                    questionSound.play();
                //}
            },500)
        });
        $('.page2').fadeOut(function(){
            // $('.p2_6,.p2_7').fadeOut();
            // $('.p2_2').hide();
            $('.p2_3').removeClass('fom');
            // $('.p2_5').hide().removeClass('yundong');//右上角气泡动画
            $('.p2_1_1').removeClass('turn');//盘子转动
        });
    }

    //点击事件
    function iniBtn(){
        $('.p1_4>img').on(touchstart,function(){
            // btnSound.play();//btn音效
            $(this).toggleClass('btnover');
        });

        $('.p1_4>img').on(touchend,function(){
            if(allowToNextClick){
				_czc.push(['_trackEvent','首页','点击事件','开始食用']);
                danmuRemove(14);
                allowToNextClick = false;
                toSelectPage();
                $(this).toggleClass('btnover');
                bgSound.pause();//暂停背景音乐
                // btnSound.play();//btn音效
            }
        });

        //选择页面
        $('.p2_6>div').on(touchstart,function(){
            //btnSound.play();//btn音效
            $(this).toggleClass('btnover');
        });


        $('.p2_6>div').on(touchend,function(){
            $(this).toggleClass('btnover');
            if(allowClick){
                allowClick = false;
                toResultPage($(this));
               }

        });

        //下一题
        $('.p3_8').on(touchstart,function(){
            //btnSound.play();//btn音效
            $(this).toggleClass('btnover');
        });
        $('.p3_8').on(touchend,function(){
            $(this).toggleClass('btnover');
            if(allowToNextClick)
            {
                allowToNextClick = false;
                $('#sound').attr('src','https://h5.hecoe.com/baidu/waimai/hearfood171127/images/music/1_'+nowQuestionNum+'.mp3');
                $('#sound').load();
                toSelectPage();

            }
        });

        //查看成绩
        $('.p3_9').on(touchstart,function(){
            //btnSound.play();//btn音效
            console.log(rightCount);
            $('.p4_1>img').attr('src','https://h5.hecoe.com/baidu/waimai/hearfood171127/images/p4_1_'+rightCount+'.png');
            var rightFiles,danmuImgDir;
            //rightCount = 11;
            if(rightCount == 0){
                rightFiles = 0;
                danmuImgDir = 2;
            }else if (rightCount >=1 &&rightCount <=4) {
                rightFiles = 1;
                danmuImgDir = 3;
            }else if (rightCount >=5 && rightCount <=7) {
                rightFiles = 2;
                danmuImgDir = 4;
            }else if (rightCount >=8 && rightCount <=10) {
                rightFiles = 3;
                danmuImgDir = 5;
            }else if (rightCount == 11) {
                rightFiles = 4;
                danmuImgDir = 6;
            }

            for(var i =1 ;i<=14;i++)
            {
                console.log(danmuImgDir);
                $('.danmu_'+i+'>img').attr('src','https://h5.hecoe.com/baidu/waimai/hearfood171127/images/danmu/'+danmuImgDir+'/'+i+'.png');
            }


            $('.p4_2_2_1>img').attr('src','https://h5.hecoe.com/baidu/waimai/hearfood171127/images/p4_2_2_'+rightFiles+'.png');
            $('.p4_3_2>img').attr('src','https://h5.hecoe.com/baidu/waimai/hearfood171127/images/p4_3_2_'+rightFiles+'.png');

            $('.page3').fadeOut();
            $('.page4').fadeIn(function(){
                console.log(11);
                bgsound.play();
                $('.danmu').show();
                motionObj['page'+4].play();
                danmuShow(12);
				_czc.push(['_trackEvent','落版页面','页面曝光','页面曝光']);
            });

        });
        //浮层显示
        $('.p4_4_2').on(touchstart,function(){
            //btnSound.play();//btn音效
            $(this).toggleClass('btnover');
        });
        $('.p4_4_2').on(touchend,function(){
            $('.popup').fadeIn();
            $('.danmu').hide();
            $(this).toggleClass('btnover');

        })
        $('.popup_1').on(touchstart,function(){

            $('.popup').fadeOut();
            $('.danmu').show();
        })
        //再听一遍
        $('.p4_4_1>img').on(touchstart,function(){
           // btnSound.play();//btn音效
		   
            $(this).toggleClass('btnover');
        });
        $('.p4_4_1>img').on(touchend,function(){
            $(this).toggleClass('btnover');
            var _linkRandNum = Math.round(Math.random()*1);
			_czc.push(['_trackEvent','落版页','点击事件','再听一遍']);
            setTimeout(function(){
                location.href='index.html?'+_linkRandNum;//重新加载页面
            },300);
        });

        //跳转连接按钮
        $('.p4_4_3>img').on(touchstart,function(){
            //btnSound.play();//btn音效
            $(this).toggleClass('btnover');
        });
        $('.p4_4_3>img').on(touchend,function(){
			_czc.push(['_trackEvent','落版页','点击事件','跳转链接']);
            $(this).toggleClass('btnover');
            setTimeout(function(){
                location.href='https://waimai.baidu.com/hongbao/npactivity?caseid=HMjA4MjMwMzM4OA==&sign=ead1140ab9adccf33da49daca97f09f5';//跳转链接
            },300);

        });

    }


    function danmuShow(dCount)
    {
        for(var i =1 ;i<=dCount;i++)
        {
            console.log(i);
            $('.danmu_'+i).addClass('movee_'+i);
        }
    }
    function danmuRemove(dCount)
    {
        for(var i =1 ;i<=dCount;i++)
        {
            $('.danmu_'+i).removeClass('movee_'+i);
        }
    }



})