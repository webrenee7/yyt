// JavaScript Document

window.onload=window.onresize=function(){
	var h;
	var winW = document.documentElement.clientWidth;
	var winH = document.documentElement.clientHeight;
	var bg = document.getElementsByClassName("bg");	
	h=winH-(winW*(0.03*1920)/1920+146);	
	if(document.getElementsByClassName("pagination")[0]){
		h=winH-(winW*(0.03*1920)/1920+248);
	}
	if(document.getElementsByClassName("patient_info")[0]){
		h=winH-(winW*(0.03*1920)/1920+186);
	}	
	
	for(i=0;i<bg.length;i++){
		bg[i].style.height = h+"px";
		if(document.getElementsByClassName("top_here")[0]){
			bg[1].style.height = h-62+"px";
		}
		if(document.getElementById("menu_list")){
			var menu_list = document.getElementById("menu_list");
			bg[i].style.minHeight = menu_list.offsetHeight+15+"px";
		}
	}		
}
