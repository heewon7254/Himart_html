// drop menu
let menuList = document.querySelectorAll('header nav .gnb .l_menu');

menuList.forEach(function(item,idx){
	item.addEventListener('mouseover',function(){
		this.classList.add('active');
	});
	item.addEventListener('mouseleave',function(){
		this.classList.remove('active');
	});
});
