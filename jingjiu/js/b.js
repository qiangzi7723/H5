function GetUrlParms(e) {
	var a = new RegExp("(^|\\?|&)" + e + "=([^&]*)(\\s|&|$)", "i");
	if (a.test(location.href)) return decodeURIComponent(RegExp.$2.replace(/\+/g, " "));
	return ""
}
var openid_ = GetUrlParms("openid");
console.log(openid_);
if (openid_ == "" || openid_ == undefined) {
	console.log("nopenid");
	// window.location.href = "http://www.seth5.com/jingjiu1020/index.php"
}
$(function() {
	var e = window,
		a = document;
	window.ontouchmove = function(e) {
		return false
	};
	var o = false;
	var n = document.getElementById("video");
	var t = false,
		s = false;
	var r = J.addMp4({
		src: "http://www.seth5.com/jingjiu1020/media/hh.mp3",
		autoplay: false,
		loop: true
	});
	var i = J.addMp4({
		src: "http://www.seth5.com/jingjiu1020/media/dang.mp3",
		autoplay: false,
		loop: false
	});
	var l = J.addMp4({
		src: "http://www.seth5.com/jingjiu1020/media/ddm.mp3",
		autoplay: false,
		loop: false
	});
	var d = J.addMp4({
		src: "http://www.seth5.com/jingjiu1020/media/dog.mp3",
		autoplay: false,
		loop: false
	});
	var p = J.addMp4({
		src: "http://www.seth5.com/jingjiu1020/media/game2.mp3",
		autoplay: false,
		loop: false
	});
	var f = J.addMp4({
		src: "http://www.seth5.com/jingjiu1020/media/win.mp3",
		autoplay: false,
		loop: false
	});
	var c = J.addMp4({
		src: "http://www.seth5.com/jingjiu1020/media/pb.mp3",
		autoplay: false,
		loop: true
	});
	var u = J.addMp4({
		src: "http://www.seth5.com/jingjiu1020/media/jh.mp3",
		autoplay: false,
		loop: true
	});
	var m = J.addMp4({
		src: "http://www.seth5.com/jingjiu1020/media/end.mp3",
		autoplay: false,
		loop: true
	});
	var h = J.addMp4({
		src: "http://www.seth5.com/jingjiu1020/media/shake.mp3",
		autoplay: false,
		loop: false
	});
	var g = J.addMp4({
		src: "http://www.seth5.com/jingjiu1020/media/bar.mp3",
		autoplay: false,
		loop: true
	});
	var w = J.addMp4({
		src: "http://www.seth5.com/jingjiu1020/media/yh.mp3",
		autoplay: false,
		loop: true
	});
	var v = function() {
			r.play();
			r.pause();
			i.play();
			i.pause();
			l.play();
			l.pause();
			d.play();
			d.pause();
			p.play();
			p.pause();
			f.play();
			f.pause();
			c.play();
			c.pause();
			u.play();
			u.pause();
			m.play();
			m.pause();
			h.play();
			h.pause();
			g.play();
			g.pause();
			w.play();
			w.pause();
			document.removeEventListener("touchstart", v, false)
		};
	document.addEventListener("WeixinJSBridgeReady", function() {
		v()
	}, false);
	document.addEventListener("YixinJSBridgeReady", function() {
		v()
	}, false);
	document.addEventListener("touchstart", v, false);
	v();
	var x = $("#canEle"),
		y = {
			p1: [{
				src: "http://www.seth5.com/jingjiu1020/img/jiu1.png",
				id: "jiu1",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/0_1.png",
				id: "h1",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/0_2.png",
				id: "h2",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/0_tx.png",
				id: "h3",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/1.jpg",
				id: "h4",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/1.png",
				id: "h5",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/2.png",
				id: "h6",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/3.png",
				id: "h7",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/5.png",
				id: "h8",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/5.png",
				id: "h9",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/6.png",
				id: "h10",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/7.png",
				id: "h11",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/arr.png",
				id: "h12",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/arr0.png",
				id: "h13",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/arr2.png",
				id: "h14",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/arr3.png",
				id: "h15",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/arr.png",
				id: "h12",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/atx.png",
				id: "h13",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/btx.png",
				id: "h14",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/copy.png",
				id: "h15",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/ctx.png",
				id: "h16",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/etx.png",
				id: "h17",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/ftx.png",
				id: "h18",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/gtx.png",
				id: "h19",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/htx.png",
				id: "h20",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/f1.png",
				id: "f1",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/f2.png",
				id: "f2",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/f3.png",
				id: "f3",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/f4.png",
				id: "f4",
				fl: "other"
			}, {
				src: "http://www.seth5.com/jingjiu1020/img/f5.png",
				id: "f5",
				fl: "other"
			}],
			p2: [],
			p3: [],
			p4: [],
			p5: [],
			p6: []
		},
		M = {
			sprite: {},
			other: {},
			sound: {}
		};
	H5Init({
		pageAnimateType: "fade",
		viewportHeight: 1040,
		pageSwipeB: {
			0: false,
			1: false,
			2: false,
			3: false,
			4: false
		}
	});
	var j = {
		title: "你能挑战一口气上五楼吗？",
		desc: "拯救乏味，无劲不欢",
		imgUrl: "http://www.seth5.com/jingjiu1020/http://www.seth5.com/jingjiu1020/img/fx.jpg",
		link: "http://www.seth5.com/jingjiu1020/index.html",
		success: function() {}
	};
	jssdk.init({
		debug: false
	}).done(function() {
		jssdk.share(j)
	});
	J.pageFunc(1);
	var _ = new createjs.Stage(x.get(0));
	createjs.Touch.enable(_);
	createjs.Ticker.setFPS(25);
	createjs.Ticker.addEventListener("tick", T);

	function T() {
		_.update()
	}
	var k = false,
		C = false,
		b = false,
		I = false,
		E = false,
		B = false,
		O, A, L, N, P, D, S, H = 0; +
	function() {
		var e = "";
		M.sprite.c1 = [];
		for (var a = 0; a < 50; a++) {
			e = "http://www.seth5.com/jingjiu1020/f/c1/jinjiu_001_bg-(";
			y.p1.push({
				src: e + (a * 2 + 1) + ").jpg",
				id: "c_" + a,
				fl: "c1"
			})
		}
		for (var a = 0; a < 50; a++) {
			e = "http://www.seth5.com/jingjiu1020/f/c1/jinjiu_001_fg (";
			y.p1.push({
				src: e + (a * 2 + 1) + ").png",
				id: "c_" + (a + 50),
				fl: "c1"
			})
		}
		var e = "";
		M.sprite.c2 = [];
		for (var a = 1; a < 17; a++) {
			e = "http://www.seth5.com/jingjiu1020/f/c2/jinjiu_002-(";
			y.p2.push({
				src: e + a + ").jpg",
				id: "c_" + a,
				fl: "c2"
			})
		}
		for (var a = 0; a < 31; a++) {
			e = "http://www.seth5.com/jingjiu1020/f/c2/jinjiu_002-(";
			y.p2.push({
				src: e + (a * 2 + 17) + ").jpg",
				id: "c_" + a,
				fl: "c2"
			})
		}
		var e = "";
		M.sprite.c3 = [];
		for (var a = 0; a < 30; a++) {
			e = "http://www.seth5.com/jingjiu1020/f/c3/jinjiu_003 (";
			y.p3.push({
				src: e + (a * 2 + 1) + ").jpg",
				id: "c_" + a,
				fl: "c3"
			})
		}
		var e = "";
		M.sprite.c4 = [];
		for (var a = 0; a < 10; a++) {
			e = "http://www.seth5.com/jingjiu1020/f/c4/jinjiu_004 (";
			y.p4.push({
				src: e + (a * 2 + 1) + ").jpg",
				id: "c_" + a,
				fl: "c4"
			})
		}
		for (var a = 0; a < 13; a++) {
			e = "http://www.seth5.com/jingjiu1020/f/c4/jinjiu_004 (";
			y.p4.push({
				src: e + (a * 2 + 39) + ").jpg",
				id: "c_" + a,
				fl: "c4"
			})
		}
		var e = "";
		M.sprite.c5 = [];
		for (var a = 1; a < 3; a++) {
			e = "http://www.seth5.com/jingjiu1020/img/xlz_";
			y.p5.push({
				src: e + a + ".jpg",
				id: "c_" + a,
				fl: "c5"
			})
		}
		for (var a = 0; a < 50; a++) {
			e = "http://www.seth5.com/jingjiu1020/f/c5/jinjiu_005-(";
			y.p5.push({
				src: e + (a * 2 + 1) + ").jpg",
				id: "c_" + (a + 3),
				fl: "c5"
			})
		}
		var e = "";
		M.sprite.c6 = [];
		for (var a = 0; a < 53; a++) {
			e = "http://www.seth5.com/jingjiu1020/f/c6/end- (";
			y.p6.push({
				src: e + (a * 2 + 1) + ").jpg",
				id: "c_" + a,
				fl: "c6"
			})
		}
		for (var a = 106; a < 153; a++) {
			e = "http://www.seth5.com/jingjiu1020/f/c6/end- (";
			y.p6.push({
				src: e + a + ").jpg",
				id: "c_" + a,
				fl: "c6"
			})
		}
	}();
	Y(function() {
		console.log("加载：1");
		k = true;
		G(function() {
			console.log("加载：2");
			b = true;
			F(function() {
				console.log("加载：3");
				C = true;
				X(function() {
					console.log("加载：4");
					I = true;
					W(function() {
						console.log("加载：5");
						E = true
					})
				})
			})
		})
	});
	var R = new createjs.Bitmap("http://www.seth5.com/jingjiu1020/img/gb_1.png");
	R.x = 0;
	R.y = -300;
	var Q = new createjs.Bitmap("http://www.seth5.com/jingjiu1020/img/gb_3.png");
	Q.x = 0;
	Q.y = -2680;
	var z = new createjs.Bitmap("http://www.seth5.com/jingjiu1020/img/gb_2.png");
	z.x = 0;
	z.y = -2680;
	var U = new createjs.Bitmap("http://www.seth5.com/jingjiu1020/img/gb_4.png");
	U.x = 0;
	U.y = -2680;

	function Y(e) {
		var a = new createjs.LoadQueue;
		a.on("fileload", function(e) {
			var a = e.item;
			if (a.fl == "other") {
				M.other[e.item.id] = e.result
			} else {
				M.sprite[a.fl].push(e.result)
			}
		});
		a.on("progress", function(e) {
			var a = Math.floor(e.progress * 100);
			$(".pz0").css("height", e.progress * 154 + 14 + "px");
			$("#set_load_num").html(a + "%")
		});
		a.on("complete", function() {
			window.cont1 = new createjs.Container;
			A = Z({
				w: 750,
				h: 1150,
				x: -55,
				y: -110,
				imgObjArr: M.sprite["c1"],
				animations: {
					show: {
						frames: ee(0, 8),
						next: "agin",
						speed: .5
					},
					agin: {
						frames: ee(1, 7).reverse(),
						next: "show",
						speed: .5
					},
					end: {
						frames: ee(9, 50),
						next: "loop",
						speed: .5
					},
					loop: {
						frames: ee(20, 50),
						next: "loop",
						speed: .5
					}
				},
				callback: function(e) {
					if (e.name == "show") {
						console.log("showshow")
					}
					if (e.name == "end") {
						setTimeout(function() {
							H = 1;
							$(".downPg").fadeIn();
							$(".wordsM").removeClass().addClass("wordsM wordsM2")
						}, 500)
					}
				}
			});
			O = Z({
				w: 750,
				h: 1150,
				x: -55,
				y: -110,
				imgObjArr: M.sprite["c1"],
				animations: {
					show: {
						frames: ee(51, 59),
						next: "show",
						speed: .5
					},
					end: {
						frames: ee(59, 100),
						next: "loop",
						speed: .5
					},
					loop: {
						frames: ee(70, 100),
						next: "loop",
						speed: .5
					}
				},
				callback: function(e) {}
			});
			cont1.addChild(A, O, R);
			_.addChild(cont1);
			$(".loadBox").fadeOut();
			$(".page1 .hand").addClass("show");
			$(".topTx").show();
			$(".page1 .tx").fadeIn();
			if (e) e()
		});
		a.loadManifest(y.p1)
	}
	function F(e) {
		var a = new createjs.LoadQueue;
		a.on("fileload", function(e) {
			var a = e.item;
			if (a.fl == "other") {
				M.other[e.item.id] = e.result
			} else {
				M.sprite[a.fl].push(e.result)
			}
		});
		a.on("progress", function(e) {});
		a.on("complete", function() {
			L = Z({
				w: 750,
				h: 1150,
				x: -55,
				y: -1340,
				imgObjArr: M.sprite["c2"],
				animations: {
					show: {
						frames: ee(0, 16),
						next: "agin",
						speed: .5
					},
					agin: {
						frames: ee(1, 15).reverse(),
						next: "show",
						speed: .5
					},
					end: {
						frames: ee(17, 47),
						next: "loop",
						speed: .5
					},
					loop: {
						frames: ee(27, 47),
						next: "loop",
						speed: .5
					}
				},
				callback: function(e) {
					if (e.name == "end") {
						setTimeout(function() {
							H = 2;
							$(".downPg").fadeIn();
							$(".wordsM").removeClass().addClass("wordsM wordsM6")
						}, 1e3)
					}
				}
			});
			if (e) e()
		});
		a.loadManifest(y.p2)
	}
	function G(e) {
		var a = new createjs.LoadQueue;
		a.on("fileload", function(e) {
			var a = e.item;
			if (a.fl == "other") {
				M.other[e.item.id] = e.result
			} else {
				M.sprite[a.fl].push(e.result)
			}
		});
		a.on("progress", function(e) {});
		a.on("complete", function() {
			N = Z({
				w: 750,
				h: 1150,
				x: -55,
				y: -1340,
				imgObjArr: M.sprite["c3"],
				animations: {
					show: {
						frames: ee(0, 4),
						next: "agin",
						speed: .5
					},
					agin: {
						frames: ee(0, 4).reverse(),
						next: "show",
						speed: .5
					},
					end: {
						frames: ee(5, 30),
						next: false,
						speed: .5
					}
				},
				callback: function(e) {
					if (e.name == "end") {
						setTimeout(function() {
							H = 3;
							$(".downPg").fadeIn();
							$(".wordsM").removeClass().addClass("wordsM wordsM4")
						}, 1500)
					}
				}
			});
			if (e) e()
		});
		a.loadManifest(y.p3)
	}
	function X(e) {
		var a = new createjs.LoadQueue;
		a.on("fileload", function(e) {
			var a = e.item;
			if (a.fl == "other") {
				M.other[e.item.id] = e.result
			} else {
				M.sprite[a.fl].push(e.result)
			}
		});
		a.on("progress", function(e) {});
		a.on("complete", function() {
			P = Z({
				w: 750,
				h: 1150,
				x: -55,
				y: -1340,
				imgObjArr: M.sprite["c4"],
				animations: {
					show: {
						frames: ee(0, 9),
						next: "show",
						speed: .5
					},
					end: {
						frames: ee(10, 23),
						next: "loop",
						speed: .5
					},
					loop: {
						frames: ee(17, 23),
						next: "loop",
						speed: .5
					}
				},
				callback: function(e) {
					if (e.name == "end") {
						setTimeout(function() {
							H = 4;
							$(".downPg").fadeIn();
							$(".wordsM").removeClass().addClass("wordsM wordsM8")
						}, 1500)
					}
				}
			});
			if (e) e()
		});
		a.loadManifest(y.p4)
	}
	function W(e) {
		var a = new createjs.LoadQueue;
		a.on("fileload", function(e) {
			var a = e.item;
			if (a.fl == "other") {
				M.other[e.item.id] = e.result
			} else {
				M.sprite[a.fl].push(e.result)
			}
		});
		a.on("progress", function(e) {});
		a.on("complete", function() {
			D = Z({
				w: 750,
				h: 1150,
				x: -55,
				y: -1340,
				imgObjArr: M.sprite["c5"],
				animations: {
					show: {
						frames: ee(0, 52),
						next: "loop",
						speed: .5
					},
					loop: {
						frames: ee(3, 52),
						next: "loop",
						speed: .5
					}
				},
				callback: function(e) {
					if (e.name == "show") {
						$(".tipBox5 .botT").removeClass().addClass("abso botT botT3");
						$(".yaoyao").fadeIn();
						o = true
					}
				}
			});
			if (e) e()
		});
		a.loadManifest(y.p5)
	}
	$(".goIN").on("click", function() {
		console.log(k);
		if (k) {
			q()
		} else {
			$(".loading").fadeIn();
			var e = setInterval(function() {
				if (k) {
					clearInterval(e);
					q()
				}
			}, 50)
		}
		$(".page1 .hand").fadeOut()
	});

	function q() {
		l.play();
		$(".loading").fadeOut();
		setTimeout(function() {
			J.pageFunc(2);
			$(".mask_1").fadeIn();
			A.s.gotoAndPlay("show");
			O.s.gotoAndPlay("show")
		}, 500)
	}
	$(".mask_1 .botT").on("click", function() {
		A.s.gotoAndPlay("end");
		O.s.gotoAndPlay("end");
		$(".wordsM").removeClass().addClass("wordsM wordsM1");
		setTimeout(function() {
			$(".wordsM").fadeIn()
		}, 500);
		r.play();
		$(this).fadeOut()
	});
	var K = new Hammer($("#content")[0]);
	K.get("swipe").set({
		direction: Hammer.DIRECTION_ALL
	});
	K.on("swipedown", function() {
		console.log("swipedown");
		if (parseInt(H) !== 0) {
			$(".downPg").fadeOut();
			$(".wordsM").fadeOut()
		}
		switch (parseInt(H)) {
		case 0:
			return false;
			break;
		case 1:
			H = 0;
			if (b == false) {
				$(".loading").fadeIn()
			}
			var e = setInterval(function() {
				if (b) {
					$(".loading").fadeOut();
					clearInterval(e);
					A.s.stop();
					r.pause();
					g.play();
					cont1.addChild(N, Q);
					$(".mask_2").show();
					TweenMax.to(A, 1, {
						y: 1150,
						repeat: 0,
						ease: Linear.easeNone
					});
					TweenMax.to(R, 1, {
						y: 1040,
						repeat: 0,
						ease: Linear.easeNone
					});
					TweenMax.to(".mask_1", 1, {
						y: 1250,
						repeat: 0,
						ease: Linear.easeNone
					});
					TweenMax.to(".mask_2", 1, {
						y: 1040,
						repeat: 0,
						ease: Linear.easeNone
					});
					TweenMax.to(Q, 1, {
						y: -300,
						repeat: 0,
						ease: Linear.easeNone
					});
					TweenMax.to(N, 1, {
						y: 1240,
						ease: Linear.easeNone,
						onComplete: function() {
							cont1.removeChild(A);
							cont1.removeChild(O);
							cont1.removeChild(R);
							N.s.gotoAndPlay("show");
							$(".mask_1").hide();
							$(".tipBox2").fadeIn(800);
							TweenMax.to(".arr", 1, {
								opacity: 0,
								repeat: 3,
								yoyo: true,
								ease: Expo.easeNone
							})
						}
					})
				}
			}, 50);
			break;
		case 2:
			H = 0;
			if (I == false) {
				$(".loading").fadeIn()
			}
			var e = setInterval(function() {
				if (I) {
					$(".loading").fadeOut();
					clearInterval(e);
					L.s.stop();
					p.pause();
					c.play();
					cont1.addChild(P, U);
					$(".mask_4").show();
					TweenMax.to(L, 1, {
						y: 2080,
						repeat: 0
					});
					TweenMax.to(z, 1, {
						y: 1040,
						repeat: 0
					});
					TweenMax.to(".mask_3", 1, {
						y: 2280,
						repeat: 0
					});
					TweenMax.to(".mask_4", 1, {
						y: 1040,
						repeat: 0
					});
					TweenMax.to(U, 1, {
						y: -300,
						repeat: 0
					});
					TweenMax.to(P, 1, {
						y: 1240,
						onComplete: function() {
							cont1.removeChild(L);
							P.s.gotoAndPlay("show");
							$(".mask_3").hide();
							$(".tipBox4").fadeIn(800);
							TweenMax.to(".arr3", 1, {
								y: 10,
								repeat: 3,
								yoyo: true,
								ease: Expo.easeNone
							})
						}
					})
				}
			}, 50);
			break;
		case 3:
			H = 0;
			if (C == false) {
				$(".loading").fadeIn()
			}
			var e = setInterval(function() {
				if (C) {
					$(".loading").fadeOut();
					clearInterval(e);
					N.s.stop();
					cont1.addChild(L, z);
					g.pause();
					p.play();
					$(".mask_3").show();
					TweenMax.to(N, 1, {
						y: 2080,
						repeat: 0
					});
					TweenMax.to(Q, 1, {
						y: 1040,
						repeat: 0
					});
					TweenMax.to(".mask_2", 1, {
						y: 2280,
						repeat: 0
					});
					TweenMax.to(".mask_3", 1, {
						y: 1040,
						repeat: 0
					});
					TweenMax.to(z, 1, {
						y: -300,
						repeat: 0
					});
					TweenMax.to(L, 1, {
						y: 1240,
						onComplete: function() {
							cont1.removeChild(N);
							L.s.gotoAndPlay("show");
							$(".mask_2").hide();
							$(".tipBox3").fadeIn(800);
							TweenMax.to(".arr2", 1, {
								opacity: 0,
								repeat: 3,
								yoyo: true,
								ease: Expo.easeNone
							})
						}
					})
				}
			}, 50);
			break;
		case 4:
			H = 0;
			if (E == false) {
				$(".loading").fadeIn()
			}
			var e = setInterval(function() {
				if (E) {
					$(".loading").fadeOut();
					clearInterval(e);
					P.s.stop();
					c.pause();
					cont1.addChild(D);
					$(".mask_5").show();
					TweenMax.to(P, 1, {
						y: 2080,
						repeat: 0,
						ease: Expo.easeNone
					});
					TweenMax.to(U, 1, {
						y: 1040,
						repeat: 0
					});
					TweenMax.to(".mask_4", 1, {
						y: 2280,
						repeat: 0,
						ease: Expo.easeNone
					});
					TweenMax.to(".mask_5", 1, {
						y: 1040,
						repeat: 0,
						ease: Expo.easeNone
					});
					TweenMax.to(D, 1, {
						y: 1240,
						ease: Expo.easeNone,
						onComplete: function() {
							cont1.removeChild(P);
							$(".mask_4").hide();
							$(".tipBox5").fadeIn(800)
						}
					})
				}
			}, 50);
			break;
		default:
			break
		}
	});
	var K = new Hammer($(".tipBox2 .gonext")[0]);
	K.get("pan").set({
		velocity: 0,
		threshold: 30,
		direction: 30
	});
	K.on("panright", function() {
		N.s.gotoAndPlay("end");
		$(".tipBox2").fadeOut();
		$(".wordsM").removeClass().addClass("wordsM wordsM3");
		$(".wordsM").fadeIn();
		setTimeout(function() {
			i.play()
		}, 500)
	});
	var K = new Hammer($(".tipBox3 .gonext")[0]);
	K.get("pan").set({
		velocity: 0,
		threshold: 30,
		direction: 30
	});
	K.on("panright", function() {
		L.s.gotoAndPlay("end");
		f.play();
		$(".tipBox3").fadeOut();
		$(".wordsM").removeClass().addClass("wordsM wordsM5");
		$(".wordsM").fadeIn()
	});
	$(".tipBox4 .gonext").on("click", function() {
		P.s.gotoAndPlay("end");
		$(".tipBox4").fadeOut();
		$(".wordsM").removeClass().addClass("wordsM wordsM7");
		$(".wordsM").fadeIn()
	});
	$(".tipBox5 .gonext").on("click", function() {
		u.play();
		$(".tipBox5 .botT").removeClass().addClass("abso botT botT2");
		$(".deng0").hide();
		var e = 1;
		$(".mask_5 .bk").hide();
		D.s.gotoAndPlay("show")
	});

	function V() {
		cont1.removeChild(Q, z, U);
		u.pause();
		$(".lou_1").show();
		TweenMax.to("canvas", 1, {
			scaleX: .45,
			scaleY: .45,
			srepeat: 0,
			ease: Expo.easeNone,
			delay: .5
		});
		TweenMax.to(".lou_1", 1.5, {
			scaleX: 1,
			scaleY: 1,
			repeat: 0,
			ease: Expo.easeNone,
			onComplete: function() {
				$(".lou_2").show();
				TweenMax.to(".lou_2", 1.5, {
					scaleX: 1,
					scaleY: 1,
					opacity: 1,
					srepeat: 0,
					ease: Expo.easeNone,
					onComplete: function() {
						$(".lou_3").show();
						$(".lou_1").hide();
						TweenMax.to(".lou_2", 1.5, {
							y: 1040,
							repeat: 0,
							ease: Expo.easeNone
						});
						TweenMax.to(".lou_3", 1, {
							y: 1040,
							repeat: 0,
							ease: Expo.easeNone,
							onComplete: function() {
								$(".copyae").fadeIn(500);
								$(".tbTx").fadeIn(800);
								m.play()
							}
						})
					}
				})
			}
		})
	} +
	function() {
		var e = 0,
			a = null,
			o = null,
			n = null;
		window.DME = window.DME || {
			curTime: 100,
			B: false,
			threshold: 4e3,
			callback: null,
			handler: function(t) {
				var s = t.accelerationIncludingGravity,
					r = (new Date).getTime(),
					i = window.DME;
				if (r - e < i.curTime) return false;
				var l = r - e;
				e = r;
				if (i.B) {
					var d = Math.abs(s.x + s.y + s.z - a - o - n) / l * 1e4;
					if (d > i.threshold) {
						i.callback && i.callback()
					}
					a = s.x;
					o = s.y;
					n = s.z
				}
			}
		}
	}();
	window.DME.B = true;
	if (window.DeviceMotionEvent && window.DME) {
		window.addEventListener("devicemotion", window.DME.handler, false)
	}
	window.DME.callback = function() {
		if (!o) return false;
		o = false;
		h.play();
		$(".yaoyao").addClass("shake");
		setTimeout(function() {
			$(".tipBox5").fadeOut();
			V()
		}, 1e3)
	};

	function Z(e) {
		var a = new createjs.SpriteSheet({
			framerate: 1,
			images: e.imgObjArr,
			animations: e.animations,
			frames: {
				width: e.w,
				height: e.h
			}
		});
		var o = new createjs.Sprite(a);
		o.x = e.x;
		o.y = e.y;
		o.addEventListener("animationend", function(a) {
			if (e.callback) e.callback(a)
		});
		var n = new createjs.Container;
		n.addChild(o);
		n.s = o;
		n.setChildIndex(e.index != undefined ? e.index : 1);
		return n
	}
	function ee(e, a) {
		var o = [];
		for (var n = e; n < a; n++) {
			o.push(n)
		}
		return o
	}
});