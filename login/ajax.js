'use strict';
function ajax(url,fnSucc,fnFaild){
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest();
	}else{
		var oAjax=new ActiveXObject('Microsoft XMLHTTP');
	}
	oAjax.open('GET',url,true);
	oAjax.send();
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if(oAjax.status==200){
				fnSucc&&fnSucc(oAjax.responseText);
			}else{
				fnFaild&&fnFaild(oAjax.status);
			}
		}
	};
}
