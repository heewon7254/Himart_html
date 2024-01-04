// drop menu
let menuList = document.querySelectorAll('header nav .gnb .l_menu');
let bgMask = document.querySelector('.bg_mask');

menuList.forEach(function(item,idx){
	item.addEventListener('mouseover',function(){
		this.classList.add('active');
		bgMask.classList.add('on');
	});
	item.addEventListener('mouseleave',function(){
		this.classList.remove('active');
		bgMask.classList.remove('on');
	});
});

// main tab slide 
// let tabTitle = document.querySelectorAll('.main_tab_slide .tab_btn');

// tabTitle.forEach(function(item){
// 	item.addEventListener('click',function(){
// 		item.classList.remove('swiper-slide-active');
// 		this.classList.add('swiper-slide-active');
// 	});
// });