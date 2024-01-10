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

// 메인 상품 추천 탭
let prdRecmdTab = document.querySelectorAll('.main_recom_list .tab_btn button');
let prdRecmdCon = document.querySelectorAll('.main_recom_list .tab_con .list')

prdRecmdTab.forEach(function(item,idx){
	item.addEventListener('click',function(){
		// 탭 버튼 active 초기화
		for(el of prdRecmdTab){
			el.classList.remove('active');
		}
		// 탭 콘텐트 active 초기화
		for(el of prdRecmdCon){
			el.classList.remove('active');
		}

		prdRecmdTab[idx].classList.add('active');
		prdRecmdCon[idx].classList.add('active');
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