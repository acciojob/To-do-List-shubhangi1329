//your code here
var btn=document.querySelector('button');
function Todo(){
	var todoitem=document.querySelector('input').value;
	
	var ol=document.querySelector('ol');
	if(todoitem){
		var li=document.createElement('li');
		li.textContent=todoitem;
		ol.appendChild(li);
		todoitem="";
		
	}
}
btn.addEventListener('click',Todo)
	
