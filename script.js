//your code here

function Todo(){
	var todoitem=document.querySelector('input').value;
	var btn=document.querySelector('button');
	var ol=document.querySelector('ol');
	if(todoitem){
		var li=document.createElement('li');
		li.textContent=todoitem;
		ol.appendChild(li);
		todoitem="";
		
	}
}
btn.addEventListener('click',Todo)
	
