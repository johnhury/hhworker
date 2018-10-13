
  var d = document,mtab = d.getElementById("mtab"),sub_bz = d.getElementById("sub_bz").getElementsByTagName("li"),
  mctx = d.getElementById("mctx"),
  tabs = mtab.getElementsByTagName("li"),
  mctxs = mctx.getElementsByTagName("li"),
  ItemWidth = mctxs[0].clientWidth,
  adc = d.getElementById("adc"),
  c_l = d.getElementById("c_l"),
  c_r = d.getElementById("c_r"),
  count = 0,
  timer=null,
  timers=null,
  delay=3000,
  defaultItem=0;

//subnav
for(var j = 0; j<sub_bz.length;j++){
	sub_bz[j].getElementsByTagName("a")[0].style.backgroundPosition= -j*100+"px" +" 0 ";
}
//subnav hover

for(var j=0;j<sub_bz.length;j++){
(function(j){
	sub_bz[j].onmouseover = function(){
		for(var j=0;j<sub_bz.length;j++){
			sub_bz[j].getElementsByTagName("p")[0].getElementsByTagName("a")[0].style.color="#000";
			sub_bz[j].getElementsByTagName("a")[0].style.backgroundImage="url(img/bzicon.gif)";
			sub_bz[j].getElementsByTagName("a")[0].style.transition="all .2s linear";
		}
	this.getElementsByTagName("p")[0].getElementsByTagName("a")[0].style.color="#f60";
	this.getElementsByTagName("a")[0].style.backgroundImage="url(img/bziconh.gif)";	
	this.getElementsByTagName("a")[0].style.transform="rotate(360deg)";	
}
sub_bz[j].onmouseout = function(){
	sub_bz[j].getElementsByTagName("a")[0].style.transform="rotate(0deg)";	
}
})(j);
};
  for (var i = 0; i< tabs.length; i++){
    tabs[i].index = i;
    tabs[i].onmouseover=changeTab;
 	tabs[i].onmouseout=autorun;
  }
  //鼠标经过事件
  	function changeTab(){
  		clearT();
	  //清除所有样式
      clearTab();
	  //当前标签添加样式
	  setTab(this.index);
    }
	//设置选项卡及内容显示样式
	function setTab(index){
		tabs[index].getElementsByTagName("a")[0].style.background="url(img/ta"+index+"h.gif) no-repeat 20px 50%";
		tabs[index].getElementsByTagName("a")[0].style.color="#000000";
		tabs[index].style.background = 'url(img/tabbgh.gif) no-repeat';
		adc.style.width=tabs.length*ItemWidth+"px";
		startMove(-index*ItemWidth);
		
		count = index;
	}
	//清除选项卡及内容显示样式
	function clearTab(){
		for( var i=0;i<tabs.length;i++){
			tabs[i].style.background = "";
			tabs[i].getElementsByTagName("a")[0].style.background="url(img/ta"+i+".gif) no-repeat 20px 50%";
			tabs[i].getElementsByTagName("a")[0].style.color="#ffffff";
			
		  }
	}
	//点击按钮事件
	c_l.onclick=function(){
		count--;

		if(count<0)
			{count=tabs.length-1;
			}
		clearTab();
		
		setTab(count);		
	
	};
	c_r.onclick=function(){
		count++;
		if(count>tabs.length-1)
		{
			count=0;
		}
		clearTab();
		setTab(count);		
	};
	c_l.onmouseover=c_r.onmouseover=adc.onmouseover=clearT;
	c_l.onmouseout=c_r.onmouseout=adc.onmouseout=autorun;
	//网页加载时设置项为默认项
	setTab(defaultItem);
	//自动播放函数
	function autorun(){
		timer = setInterval(function(){
				count++;
				count=count>tabs.length-1?0:count;
				clearTab();
				setTab(count);

		},delay);

	}
        //清除定时器
        function clearT(){
        	
            if(timer)
            {
                clearInterval(timer);
                timer=null;
            }

        }

	  function startMove (dis) {

	  	var bleft = adc.offsetLeft;
	  	clearInterval(timers);

	  	timers=setInterval(function(){
	  		if(dis-adc.offsetLeft>0)
	  			ispeed=Math.ceil((dis-adc.offsetLeft)/8);
	  		else
	  			ispeed=Math.floor((dis-adc.offsetLeft)/8);

	  			if(adc.offsetLeft+dis%ispeed===dis){
	  				clearInterval(timers);
	  			}else{
	  			adc.style.left=adc.offsetLeft+ispeed+"px";}

	  		
	  	},33);
	  }

// main6 Tabs
var m6tabs=d.getElementById("m6tabs").getElementsByTagName("li"),
m6conts = d.getElementById("m6conts").getElementsByTagName("li");
for(var i=0;i<m6tabs.length;i++){
	(function(i){
		m6tabs[i].onmouseover=function(){
			for(var jj=0;jj<m6tabs.length;jj++){
				m6tabs[jj].getElementsByTagName("a")[0].style.backgroundImage="";
				m6tabs[jj].getElementsByTagName("a")[0].style.color="#000";
				if(i==m6tabs.length-1)
				m6conts[2].style.display="";
				m6conts[jj].style.display="none";			
			}
			m6tabs[0].getElementsByTagName("a")[0].className="";
			this.getElementsByTagName("a")[0].style.backgroundImage="url(img/m6_tabsh"+i+".jpg)";
			this.getElementsByTagName("a")[0].style.color="#fff";
			m6conts[i].style.display="block";

		}
	})(i);
}
