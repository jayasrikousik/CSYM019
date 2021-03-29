function myKeyDown() 
{
var element = document.getElementById('circle'); 
var positionTop = element.offsetTop;
element.style.top = positionTop + 10 + 'px';
}
function myLoadEvent() 
{ 
	document.addEventListener('keydown', myKeyDown);
}
document.addEventListener('DOMContentLoaded', myLoadEvent);
