$(function() {

	//人物动画切换
	var personNum = 1;
	var personTimer = null;

	function person() {
		personNum++;
		if(personNum == 3) {
			personNum = 1
		}
		$('.person').attr('src', 'images/person' + personNum + '.png')
	}
	personTimer = setInterval(person, 300);

	//结果页面
	//	var resultScore=$('.score').html();
	//	if(resultScore<=200){
	//		$('.resultTxt img').attr('src','images/resultTxt1.png');
	//	}else if(resultScore>200&&resultScore<=1000){
	//		$('.resultTxt img').attr('src','images/resultTxt2.png');
	//	}else if(resultScore>1000){
	//		$('.resultTxt img').attr('src','images/resultTxt3.png');
	//	}

	//跳跃
	var radio = window.innerWidth / 750; //宽高比例系数

	/*JQ自定义input事件*/
	var ie = !-[1, ];
	$.fn.input = function(Fn) {
		if(ie) {
			$(this).on('propertychange', function() {
				Fn.apply(this);
			})
		} else {
			$(this).on('input', function() {
				Fn.apply(this);
			})
		}
	};
	/* */
	$('#range').input(function() { //模拟重力加速度
		Xt = this.value * winW * 0.01;
	});
	/* */

	var t0 = 0.018; //默认屏幕刷新时间

	var $P = $('#person'); //人物
	var X0 = parseFloat($P.css('left')), //人物初始位置x
		Y0 = parseFloat($P.css('bottom')); //人物初始位置y

	var Vy0 = 800 * radio, //初始y轴速度
		Vx0 = 0, //初始x轴速度
		ay = 900 * radio, //初始y轴加速度
		ax = 0; //初始x轴加速度

	var Xt = X0, //人物当前位置x
		Yt = Y0, //人物当前位置y
		Vyt = Vy0, //人物当前y轴速度
		Vxt = Vx0, //人物当前x轴速度
		ayt = ay, //人物当前y轴加速度
		axt = ax; //人物当前x轴加速度

	var ground = Y0, //地面y轴位置
		winW = $(window).width(); //屏幕宽
	var endG = false; //是否结束
	var LocB = true; //是否运动
	var random; //随机函数
	var randomNum; //随机数1到3----有三种不同的背景
	var LocFn = function() { //人物运动函数

		if(LocB) {
			Vxt = Vxt + axt * t0;
			Vyt = Vyt - ayt * t0;
			/*//此处正式用时请解开
			Xt = Vxt * t0 + Xt;*/
			Yt = Vyt * t0 + Yt;
			$P.css({
				'left': Xt,
				'bottom': Yt,
			});
			if(Vyt <= 0 && Yt <= ground) {
				if(Yt > -10) {
					Vyt = Vy0;
				} else {
					endG = true;
					alert('哦噢，死了！');
				}
			};
			if(Xt > winW + 30) {
				Xt = -30
			};
			if(Xt < -30) {
				Xt = winW + 30
			}
		}
	};

	var $stair = $('<div class="stairs"><div>'); //创建台阶

	//三种台阶样式随机显示
	var stepsImg;
	var stepsHeight;

	function stepsStyle() {

		random = function(min, max) {
			return Math.floor((max - min + 1) * Math.random()) + min;
		};
		randomNum = random(1, 3);

		if(randomNum == 1) {
			stepsImg = "steps";
			stepsHeight = 148 * radio + 'px'
		} else if(randomNum == 2) {
			stepsImg = "steps2";
			stepsHeight = 124 * radio + 'px'
		} else if(randomNum == 3) {
			stepsImg = "steps3";
			stepsHeight = 126 * radio + 'px';
		}

		//台阶高度
		$stair.css({
			'height': stepsHeight
		});
	};

	/*var stairsL = [ //台阶位置数组
		[0.4, 100, 1],//第一个是比例系数，第二个是bottom值，第三个是index
		[0.5, 150, 2],
	];*/
	
	//渲染台阶
	var stairsL = [];
	for(var i = 0; i < 10; i++) {
		stairsL[i] = [];
		stairsL[i][0] = Math.random();
		stepsStyle();
		if(i == 0) {
			stairsL[i][1] = parseFloat(stepsHeight) + parseFloat(Math.random() * 30+40); //第一个台阶bottom
		} else {
			stairsL[i][1] = parseFloat(stepsHeight) + parseFloat(randomNum * 30) + stairsL[i - 1][1] //第i+1个bottom值
		};
		stairsL[i][2] = i + 1; //当前台阶index值
		if(stairsL[i][0]<(winW-271*radio)){
			stairsL[i][0]= stairsL[i][0] * winW / 2;
		}else{
			stairsL[i][0]= winW-271*radio;
		}
		 ; //left值
		$stair.clone().appendTo('#steps').css({
			'left': stairsL[i][0],
			'bottom': stairsL[i][1],
			'background': 'url(images/' + stepsImg + '.png) no-repeat center top',
			'background-size': 'cover'
		})
		$stairs = $('.stairs');
	};

	//登上台阶    Yt人物当前位置y
	var collideB = true; //登上台阶检测
	var onStageNumber = 0;
	var collideFn = function() { //登上台阶函数
		if(Vyt < 0 && collideB) {console.log()
			for(var i = 0; i < stairsL.length; i++) {
				if(Yt <= stairsL[i][1] + 85*radio && Yt - Vyt * t0 >= stairsL[i][1] + 85*radio) {//这个常数就是决定人物是否站在石板中间
					
					//人物接触地板，停止跳跃动画
					clearInterval(personTimer);
					$('.person').attr('src', 'images/person1.png');

					if(Xt >= stairsL[i][0] - 201*radio && Xt <= stairsL[i][0] + 201*radio) {    //left值是从左下角算起   bottom值是从最底部算起
						//console.log('登上台阶' + stairsL[i][2]);						
						//如果到达第一个台阶---灰色地面和人物投影消失
						onStageNumber = stairsL[i][2];
						
						//分数
						$('.score').html(onStageNumber*50)
						
						if(onStageNumber >= 1) {
							$('.personShadow').animate({
								'bottom': '-1.3333rem'
							}, 800);
							$('.ground').animate({
								'bottom': '-2.8rem'
							}, 800);
						};
						Vyt = Vy0;
						var stairsOne = parseFloat($('.stairs').eq(0).css('bottom'));

						/*如果当前位置大于300,且本次登上的台阶和上次的上的台阶不是一个台阶,触发画布相对运动*/
						if(Yt > 300 && onStageNumber != onStageNumberOld) { //触发画布相对运动
							onStageNumberOld = onStageNumber;
							falldownB = true;
						}
					}
				}else{
					//人物处于石板之间的时候，添加动画
					clearInterval(personTimer);
					personTimer = setInterval(person, 300);
					
				}
			}
		}
	};
	var onStageNumberOld = 0;
	//最开始就生成在屏幕最上方(第六个台阶也在屏幕最上方)
	knapsackB = true;
	wingB = true;	
	

	/*翅膀*/
	var winH = document.documentElement.clientHeight;
	var $wing = $('<div class="wing"></div>');
	var wingLeft, wingBottm;
	var wingB = false;
	var wingE = false; //有无翅膀
	var wingFn = function() {
		if(wingB) {
			//翅膀的位置
			wingBottm = Math.random() * winH * 0.4 + winH;
			var wingLeftNot = [];
			for(var i = 0; i < stairsL.length - 1; i++) {
				if(stairsL[i][1] >= wingBottm && stairsL[i][1] < wingBottm + 100) {
					wingLeftNot[0] = stairsL[i][0];
					wingLeftNot[1] = stairsL[i + 1][0];
					break;
				}
			}
			var coincide = 20, //翅膀可与台阶重合度
				notCoincide = 50 - coincide;
			var wingLeftM = function() {
				wingLeft = Math.random() * (winW-206*radio);
				if((wingLeft >= wingLeftNot[0] - notCoincide && wingLeft <= wingLeftNot[0] + notCoincide) || (wingLeft >= wingLeftNot[1] - notCoincide && wingLeft <= wingLeftNot[1] + notCoincide)) {
					wingLeftM();
				} else {
					//wingLeft = winW * 0.5; //手动设置的位子
					$wing.appendTo('#steps').css({
						'bottom': wingBottm,
						'left': wingLeft,
						'background': 'url(images/wingIcon1.png) no-repeat center top',
						'background-size': 'cover',
						'width': '5.4933rem',
						'height': '4.3733rem'
					})

					//.html('翅膀');
					wingE = true;
				}
			}
			wingLeftM();
			wingB = false;
		}
	};
	var wingCollideB = true;
	var $wingImg;
	var $wingTxt;
	var wingCollideFn = function() {
		if(wingCollideB && wingE) {
			//此处为碰撞的接触距离,可以根据实际效果调整
			if(Yt + 40 >= wingBottm && Yt <= wingBottm + 50) {
				//此处为碰撞的接触距离,可以根据实际效果调整
				if(Xt + 10 <= wingLeft + 156*radio && Xt - 10 >= wingLeft - 156*radio) {
					//console.log('碰撞到翅膀');

					//碰到翅膀，改变跳跃图片
					$('.personAni').hide();
					
					$wingImg = $('<img src="images/wingIcon3.png" class="wingImg"></img>');
					$wingImg.appendTo('#person').css({
						'bottom': '0',
						'left': '0',
						'width': '8.8533rem',
						'height': '6.16rem',
						'z-index': '99'
					})
					$wingTxt = $('<img src="images/wingIcon2.png" class="wingTxt"></img>');
					$wingTxt.appendTo('#person').css({
						'bottom': '-2rem',
						'right': '0.5rem',
						'width': '10.8533rem',
						'height': '2.64rem',
						'z-index': '98'
					})
					setTimeout(function(){
						$('.wingTxt').hide();
					},1000)
					
					//最左边位置限定
					if(parseFloat($('#person').css('left'))+$('#person').width()<$('.wingTxt').width()){
						$('#person').css('left',$('.wingTxt').width()+10-$('#person').width())
					}
					
					$wing.remove(); //删除翅膀
					wingE = false;
					wingUpB = true; //打开翅膀飞升
					collideB = false; //关闭登上台阶检测
					wingCollideB = false; //关闭翅膀碰撞检测
					knapsackCollideB = false; //关闭背包检测
					LocB = false; //关闭人物主动运动
				}
			}
		}
		//如果翅膀位置小于50,跟新翅膀位置
		if(wingBottm < 50) {
			wingB = true;
		}
	};

	var wingUpB = false,
		wingUpC = 0,
		UpC = 5;
	var wingUpFn = function() { //翅膀飞升
		if(wingUpB) {
			//ground -= 5;
			for(var i = 0; i < stairsL.length; i++) {
				stairsL[i][1] -= 5;
			}
			$stairs.css('bottom', '-=5');
			wingUpC++;

			wingBottm -= 5;
			$wing.css('bottom', '-=5');

			knapsackBottm -= 5;
			$knapsack.css('bottom', '-=5');

			if(wingUpC == 20 * UpC) {
				wingUpB = false;
				wingUpC = 0;
				for(var j = 0; j < UpC; j++) {
					falldown++;
					refreshFn();
				}
				collideB = true; //打开登上台阶检测
				wingCollideB = true; //打开翅膀碰撞检测
				knapsackCollideB = true; //打开背包检测
				LocB = true; //打开人物主动运动
				wingB = true; //翅膀飞升结束,再在屏幕最上方生成翅膀;
				
				//落下来切换图片
				if(wingB == true){
					
					$('.personAni').fadeIn();
					$wingImg.remove();
					$wingTxt.remove();
				}
				
			}
		}
	}
	/*翅膀结束*/
	
	
	/*背包*/
	var $knapsack = $('<div class="knapsack">');
	var knapsackLeft, knapsackBottm;
	var knapsackB = false;
	var knapsackE = false; //有无背包
	var knapsackFn = function() {
		if(knapsackB) {
			//背包生成的位置
			knapsackBottm = Math.random() * winH * 0.4 + winH;
			var knapsackLeftNot = [];
			for(var i = 0; i < stairsL.length - 1; i++) {
				if(stairsL[i][1] >= knapsackBottm && stairsL[i][1] < knapsackBottm + 100) {
					knapsackLeftNot[0] = stairsL[i][0];
					knapsackLeftNot[1] = stairsL[i + 1][0];
					break;
				}
			}
			var coincide = 30, //背包可与台阶重合度
				notCoincide = 50 - coincide;
			var knapsackLeftM = function() {
				knapsackLeft = Math.random() * winW / 2;
				if((knapsackLeft >= knapsackLeftNot[0] - notCoincide && knapsackLeft <= knapsackLeftNot[0] + notCoincide) || (knapsackLeft >= knapsackLeftNot[1] - notCoincide && knapsackLeft <= knapsackLeftNot[1] + notCoincide)) {
					knapsackLeftM();
				} else {
					knapsackLeft = winW * 0.5; //手动设置的位置
					$knapsack.appendTo('#steps').css({
						'bottom': knapsackBottm,
						'left': knapsackLeft,
						'background': 'url(images/packIcon1.png) no-repeat center top',
						'background-size': 'cover',
						'width': '3.28rem',
						'height': '4.0533rem'
					})
					//.html('背包');
					//console.log("背包")
					knapsackE = true;
				}
			}
			knapsackLeftM();
			knapsackB = false;
		}
	};
	var knapsackCollideB = true;
	var knapsackCollideFn = function() {
		if(knapsackCollideB && knapsackE) {
			//此处为碰撞的接触距离,可以根据实际效果调整
			if(Yt + 40 >= knapsackBottm && Yt <= knapsackBottm + 50) {
				//此处为碰撞的接触距离,可以根据实际效果调整
				if(Xt + 10 <= knapsackLeft + 73 && Xt - 10 >= knapsackLeft - 73) {
					//console.log('碰撞到背包');
					
					//碰到背包，改变跳跃图片
					$('.personAni').hide();
					
					$packImg = $('<img src="images/packIcon3.png" class="packImg"></img>');
					$packImg.appendTo('#person').css({
						'bottom': '0',
						'left': '0',
						'width': '5.3067rem',
						'height': '6.4rem',
						'z-index': '99'
					})
					$packTxt = $('<img src="images/packIcon2.png" class="packTxt"></img>');
					$packTxt.appendTo('#person').css({
						'bottom': '-2rem',
						'right': '0.5rem',
						'width': '10.8533rem',
						'height': '2.64rem',
						'z-index': '98'
					})
					setTimeout(function(){
						$('.packTxt').hide();
					},1000)
					
					$knapsack.remove(); //删除背包
					knapsackE = false;
					knapsackDownB = true; //打开背包下跌
					collideB = false; //关闭登上台阶检测
					wingCollideB = false; //关闭翅膀碰撞检测
					knapsackCollideB = false; //关闭背包检测
					LocB = false; //关闭人物主动运动
				}
			}
		}
		//如果背包位置小于50,跟新背包位置
		if(knapsackBottm < 50) {
			knapsackB = true;
		}
	};

	var knapsackDownB = false,
		knapsackDownC = 0,
		downC = 3;
	var knapsackDownFn = function() { //背包下跌
		if(knapsackDownB) {
			//ground += 5;
			for(var i = 0; i < stairsL.length; i++) {
				stairsL[i][1] += 5;
			}

			$stairs.css('bottom', '+=5');
			knapsackDownC++;

			wingBottm += 5;
			$wing.css('bottom', '+=5');

			knapsackBottm += 5;
			$knapsack.css('bottom', '+=5');

			wingCollideB = false; //关闭翅膀检测
			if(knapsackDownC == 20 * downC) {
				knapsackDownB = false;
				knapsackDownC = 0;
				for(var j = 0; j < downC; j++) {
					falldown--;
					refresh2Fn();
				}
				collideB = true; //打开登上台阶检测
				wingCollideB = true; //打开翅膀碰撞检测
				knapsackCollideB = true; //打开背包检测
				LocB = true; //打开人物主动运动
				knapsackB = true; //背包下跌结束,再在屏幕最上方生成背包
				
				//落下来切换图片
				if(knapsackB == true){
					
					$('.personAni').fadeIn();
					$packImg.remove();
					$packTxt.remove();
				}
				
			}
		}
	}
	/*背包结束*/
	
	
	/*火箭开始*/
	var $rocket = $('<div class="rocket"></div>');
	var rocketLeft, rocketBottm;
	var rocketB = false;
	var rocketE = false; //有无翅膀
	var rocketFn = function() {
		if(rocketB) {
			//翅膀的位置
			rocketBottm = Math.random() * winH * 0.4 + winH;
			var rocketLeftNot = [];
			for(var i = 0; i < stairsL.length - 1; i++) {
				if(stairsL[i][1] >= rocketBottm && stairsL[i][1] < rocketBottm + 100) {
					rocketLeftNot[0] = stairsL[i][0];
					rocketLeftNot[1] = stairsL[i + 1][0];
					break;
				}
			}
			var coincide = 20, //翅膀可与台阶重合度
				notCoincide = 50 - coincide;
			var rocketLeftM = function() {
				rocketLeft = Math.random() * (winW-107*radio);
				if((rocketLeft >= rocketLeftNot[0] - notCoincide && rocketLeft <= rocketLeftNot[0] + notCoincide) || (rocketLeft >= rocketLeftNot[1] - notCoincide && rocketLeft <= rocketLeftNot[1] + notCoincide)) {
					rocketLeftM();
				} else {
					//rocketLeft = winW * 0.5; //手动设置的位子
					$rocket.appendTo('#steps').css({
						'bottom': rocketBottm,
						'left': rocketLeft,
						'background': 'url(images/rocketIcon1.png) no-repeat center top',
						'background-size': 'cover',
						'width': '2.8533rem',
						'height': '2.9067rem'
					})

					//.html('翅膀');
					rocketE = true;
				}
			}
			rocketLeftM();
			rocketB = false;
		}
	};
	
	var rocketCollideB = true;
	var $rocketImg;
	var $rocketTxt;
	var rocketCollideFn = function() {
		if(rocketCollideB && rocketE) {
			//此处为碰撞的接触距离,可以根据实际效果调整
			if(Yt + 40 >= rocketBottm && Yt <= rocketBottm + 50) {
				//此处为碰撞的接触距离,可以根据实际效果调整
				if(Xt + 10 <= rocketLeft + 156*radio && Xt - 10 >= rocketLeft - 156*radio) {
					//console.log('碰撞到翅膀');

					//碰到翅膀，改变跳跃图片
					$('.personAni').hide();
					
					$rocketImg = $('<img src="images/rocketIcon3.png" class="rocketImg"></img>');
					$rocketImg.appendTo('#person').css({
						'bottom': '0',
						'left': '0',
						'width': '6.4267rem',
						'height': '14.5333rem',
						'z-index': '99'
					})
					$rocketTxt = $('<img src="images/rocketIcon2.png" class="rocketTxt"></img>');
					$rocketTxt.appendTo('#person').css({
						'bottom': '-2rem',
						'right': '0.5rem',
						'width': '10.8533rem',
						'height': '2.64rem',
						'z-index': '98'
					})
					setTimeout(function(){
						$('.rocketTxt').hide();
					},1000)
					
					//最左边位置限定
					if(parseFloat($('#person').css('left'))+$('#person').width()<$('.rocketTxt').width()){
						$('#person').css('left',$('.rocketTxt').width()+10-$('#person').width())
					}
					
					$rocket.remove(); //删除翅膀
					rocketE = false;
					rocketUpB = true; //打开翅膀飞升
					collideB = false; //关闭登上台阶检测
					rocketCollideB = false; //关闭翅膀碰撞检测
					knapsackCollideB = false; //关闭背包检测
					wingCollideB = false; //关闭背包检测
					LocB = false; //关闭人物主动运动
				}
			}
		}
		//如果翅膀位置小于50,跟新翅膀位置
		if(rocketBottm < 50) {
			rocketB = true;
		}
	};
	
	var rocketUpB = false,
		rocketUpC = 0,
		rocSpeedUpC = 5;
	var rocketUpFn = function() { //翅膀飞升
		if(rocketUpB) {
			//ground -= 5;
			for(var i = 0; i < stairsL.length; i++) {
				stairsL[i][1] -= 5;
			}
			$stairs.css('bottom', '-=5');
			rocketUpC++;
			
			wingBottm -= 5;
			$wing.css('bottom', '-=' + falldownDis);

			rocketBottm -= 5;
			$rocket.css('bottom', '-=5');

			knapsackBottm -= 5;
			$knapsack.css('bottom', '-=5');

			if(rocketUpC == 20 * rocSpeedUpC) {
				rocketUpB = false;
				rocketUpC = 0;
				for(var j = 0; j < rocSpeedUpC; j++) {
					falldown++;
					refreshFn();
				}
				collideB = true; //打开登上台阶检测
				rocketCollideB = true; //打开翅膀碰撞检测
				knapsackCollideB = true; //打开背包检测
				LocB = true; //打开人物主动运动
				rocketB = true; //翅膀飞升结束,再在屏幕最上方生成翅膀;
				
				//落下来切换图片
				if(rocketB == true){
					
					$('.personAni').fadeIn();
					$rocketImg.remove();
					$rocketTxt.remove();
				}
			}
		}
	}
	/*火箭结束*/
	
	
	var falldownB = false, //触发画布相对运动布尔值
		falldownC = 0, //计数器
		falldown = 0; //下降台阶数
	var $stairs = $('.stairs'); //所有台阶

	var falldownDis = 0;
	var falldownFn = function() { //画布相对运动函数
		//这里的单步距离改为(stairsL[1][1]-stairsL[0][1])/20;这样就能保证每次下移一个台阶了
		if(falldownB) {
			if(falldownC == 0) {
				falldownDis = (stairsL[1][1] - stairsL[0][1]) / 20;
			}
			ground -= falldownDis;
			Yt -= falldownDis;
			$P.css({
				'bottom': Yt,
			})
			for(var i = 0; i < stairsL.length; i++) {
				stairsL[i][1] -= falldownDis;
			}
			$stairs.css('bottom', '-=' + falldownDis);
			falldownC++;

			wingBottm -= 5;
			$wing.css('bottom', '-=' + falldownDis);

			knapsackBottm -= 5;
			$knapsack.css('bottom', '-=' + falldownDis);
			
			rocketBottm -= 5;
			$rocket.css('bottom', '-=' + falldownDis);

			knapsackBottm -= 5;
			$knapsack.css('bottom', '-=' + falldownDis);

			if(falldownC == 20) {
				falldownB = false;
				falldownC = 0;
				falldown++;
				refreshFn();
			}
		}
	};
	/* */
	var refreshFn = function() { //更新台阶
		if(stairsL[0][1] < -10) {
			stairsL.shift();
			stepsStyle();
			stairsL.push([Math.random(), stairsL[stairsL.length - 1][1] + parseFloat(stepsHeight) + parseFloat(randomNum * 30), stairsL[stairsL.length - 1][2] + 1]);
			
			if(stairsL[stairsL.length - 1][0]<winW-271*radio){
				stairsL[stairsL.length - 1][0]= stairsL[stairsL.length - 1][0] * winW / 2;
			}else{
				stairsL[stairsL.length - 1][0]= winW-271*radio;
			}

//			if( stairsL[stairsL.length - 1][1]>$(window).height()-parseFloat(stepsHeight)/2){
//				stairsL[stairsL.length - 1][1]=$(window).height()-parseFloat(stepsHeight)/2;
//				console.log(stairsL[stairsL.length - 1][1])
//			}
			$stairs.eq(0).remove();
			$stair.clone().appendTo('#steps').css({
				'left': stairsL[stairsL.length - 1][0],
				'bottom': stairsL[stairsL.length - 1][1],
				'background': 'url(images/' + stepsImg + '.png) no-repeat center top',
				'background-size': 'cover'
			})
			//.html('台阶' + stairsL[stairsL.length - 1][2]);
			$stairs = $('.stairs');
		}
	};
	var refresh2Fn = function() { //向下更新台阶
		var stairsLlen = stairsL.length;
		stepsStyle();
		if(stairsL[stairsLlen - 1][1] > winH + 20) {
			stairsL.pop();
			stairsL.unshift([Math.random(), stairsL[0][1] - parseFloat(stepsHeight) - parseFloat(randomNum * 30), stairsL[0][2] - 1]);
			
			if(stairsL[0][0]<winW-271*radio){
				stairsL[0][0] = stairsL[0][0] * winW/2;
			}else{
				stairsL[0][0]= winW-271*radio;
			}
			$stairs.eq(-1).remove();
			$stair.clone().prependTo('#steps').css({
				'left': stairsL[0][0],
				'bottom': stairsL[0][1],
				'background': 'url(images/' + stepsImg + '.png) no-repeat center top',
				'background-size': 'cover'
			})
			//.html('台阶' + stairsL[0][2]);
			$stairs = $('.stairs');
		}
	};

	window.requestAnimFrame = (function() {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	})();
	
	setInterval(function() {
		knapsackB = true;
	}, 11200);

	setInterval(function() {
		wingB = true;
	}, 15700);
	
	setInterval(function() {
		rocketB = true;
	}, 9000);

	var render = function() {
		LocFn();
		collideFn();
		falldownFn();
		wingFn();
		wingCollideFn();
		wingUpFn();
		rocketFn();
		rocketCollideFn();
		rocketUpFn();
		knapsackFn();
		knapsackCollideFn();
		knapsackDownFn();

		if(!endG) {
			window.requestAnimationFrame(render);
		}
	}; //调用render方法
	render();
})