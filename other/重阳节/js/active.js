
(function(){
    //全局变量
    var global = {
        grade:0,//目前的成绩
        radio: window.innerWidth / 750,  //宽高比例系数
        gameOver:false,//是否游戏结束,
        inputNode:getTd("range"),
        figuresNode:getTd("person"),//任务节点
        groundNode:getTd("ground"),//地面节点
        wingsNode:getTd("wings"),//翅膀节点
        bagNode:getTd("bag"),//包的节点
        rocketNode:getTd("rocket"),//火箭节点
        bgMap:getTd("map"),
        stepsNodes:[],
        winW: document.body.clientWidth,//窗口的宽
        stepsNum:0,
        stepsVy:0,
    }
   
    //所有物体的父级
    var allFather = function(){
        this.ay = 0; //初始y轴加速度
		this.ax = 0; //初始x轴加速度
        this.vx = 0;
        this.vy = 0;
        this.width = 0;
        this.height = 0;
        this.x = 0;
        this.y = 0;
    }
    //人物
    var figures = function(){
        allFather.call(this);  
        var figuresDetail = getLocation(global.figuresNode); //获人物的位置信息
        this.ay = 1200 * global.radio; //初始y轴加速度
        this.vy = 1100 * global.radio; //初始化速度
        this.width = figuresDetail.width;
        this.height = figuresDetail.height;

    }
    //绘制任务
    figures.prototype.draw = function(){
        var figuresDetail = getLocation(global.figuresNode); //获人物的位置信息
        this.vy += this.ay;
        this.y += this.vy;
        this.x = inputNode.value * global.winW * 0.01;
        global.figuresNode.style.left = this.x + "px";
        global.figuresNode.style.bottom = this.y + "px";
        
    }
    //台阶
    var steps = function(){
        allFather.call(this);  
        this.elem = '';
    }
    //翅膀
    var wings = function(){
        allFather.call(this);  
    }
    //地面
    var ground = function(){
        allFather.call(this);  
        this.x = 0;
        this.y = 0;
        this.show = false;
    }
    //包
    var bag = function(){
        allFather.call(this); 
        this.show = false;
    }
   
    //火箭
    var rocket = function(){
        allFather.call(this);  
    }
  
    /**
     * 工具函数
     */
    //获取节点
    function getTd(elem){
        return document.getElementById(elem);
    }
    //获取位置信息
    function getLocation(elem){
        return elem.getBoundingClientRect;
    }
    //随机函数
    function random(min, max) {
        return Math.floor((max - min + 1) * Math.random()) + min;
    }
    //碰撞函数
    function collision(thisNode,thatNode){
        var thisDetail = getLocation(thisNode);
            thatDetail = getLocation(thatNode);

        // if(){
        //     return true;
        // }else{
        //     return false;
        // }

    }
    //功能包显示
    function tools(show,elem){
        if(show){
            global[elem].style.display = "block";
            global[elem].style.left = this.x;
            global[elem].style.bottom = this.y;
        }else{
            global[elem].style.display = "none";
        }
    }    
    //生成台阶
    function appearSteps(){
        if(stepsObjs.length <10){
            var stepsObj= new steps();
            var elem = global.stepsNodes[random(1,3)];
            elem.style.left = random(0,global.winW - elem.width)+"px";
            stepsObj.elem = elem;
            stepsObj.x = elem.style.left;
            stepsObjs.push(stepsObj);
        }
        global.bgMap.innerHTML = "";
        for(var i=0;i<10;i++){
            var everyElem =  stepsObjs[i].elem;
            if(!i){
                stepsObjs[i].y = everyElem.height + random(115,120);
                
            }else{
                stepsObjs[i].y = everyElem.height + random(115,120) + stepsObjs[i-1].y - global.stepsVy;
            }
            everyElem.style.bottom = stepsObjs[i].y + 'px';
            global.bgMap.appendChild(everyElem);
        }
           
    }
    //生成台阶节点数组
    function stepsNodes(){
        for(var i=0;i<3;i++){
            var elem = new Image();
            elem.src =  '../images/steps'+(i+1)+'.png';
            global.stepsNodes[i] = elem;
        }
        
    }
    var render = function() {
        appearSteps();
        figuresObj.draw();

		if(!global.gameOver) {
			window.requestAnimationFrame(render);
		}
	}; 
    //初始化台阶
    stepsNodes();
    var figuresObj = new figures();//人物实例
		// var steps = new steps();
    var groundObj = new ground();//地面实例
    var wingsdObj = new wings();//翅膀实例
    var bagObj = new bag();//包的实例
    var rocketObj = new rocket(); //火箭实例
	var stepsObjs = [];//页面中出现台阶的集合
	//调用render方法
	render();

})()