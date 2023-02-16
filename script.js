//your code here
var btn=document.querySelector('button');
var todoitem=document.querySelector('input');
	
	var ol=document.querySelector('ol');
function Todo(){
	
	if(todoitem.value){
		var li=document.createElement('li');
		li.textContent=todoitem.value;
		ol.appendChild(li);
		todoitem.value="";
		
	}
}
btn.addEventListener('click',Todo)
	
