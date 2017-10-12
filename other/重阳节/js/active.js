
(function(){
    //全局变量
    var global = {

        grade:0,//目前的成绩
        radio: window.innerWidth / 750,  //宽高比例系数
        gameOver:false,//是否游戏结束,
        inputNode:getTd("range"),
        personNode:getTd("person"),
        groundNode:getTd("ground"),
        wingsNode:getTd("wings"),
        bagNode:getTd("bag"),
        rocketNode:getTd("rocket"),
        winW: document.body.clientWidth,//窗口的宽
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
        var figuresDetail = getLocation(global.figuresObj); //获人物的位置信息
        this.ay = 1200 * global.radio; //初始y轴加速度
        this.vy = 1100 * global.radio; //初始化速度
        this.width = figuresDetail.width;
        this.height = figuresDetail.height;

    }
    //绘制任务
    figures.prototype.drow = function(){
        var figuresDetail = getLocation(global.figuresObj); //获人物的位置信息
        this.vy += this.ay;
        this.y += this.vy;
        
        // if(){

        // }
        this.x = inputNode.value * global.winW * 0.01;
        
    }

    //台阶
    var steps = function(){
        allFather.call(this);  
        this.ay = 1200 * radio; //初始y轴加速度
    }
    //翅膀
    var wings = function(){
        allFather.call(this);  
       
    }
    //地面
    var ground = function(){
        allFather.call(this);  
        
    }
    //包
    var bag = function(){
        allFather.call(this);  
        
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

    var render = function() {
        //实例化人物
		
		if(!endG) {
			window.requestAnimationFrame(render);
		}
	}; 

    var figuresObj = new figures();
		// var steps = new steps();
    var groundObj = new ground();
    var wingsdObj = new wings();
    var groundObj = new ground();
	
	//调用render方法
	render();

})()