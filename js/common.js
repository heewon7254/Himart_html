// 헤더 드롭 메뉴
let menuList = document.querySelectorAll('header nav .gnb .l_menu');
let bgMask = document.querySelector('.bg_mask');

menuList.forEach(function(item,idx){
	// 메뉴 마우스 호버 시
	item.addEventListener('mouseover',function(){
		this.classList.add('active');
		bgMask.classList.add('on');
	});
	// 메뉴 마우스 아웃 시
	item.addEventListener('mouseout',function(){
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
		// 해당 인덱스 탭 활성화
		prdRecmdTab[idx].classList.add('active');
		prdRecmdCon[idx].classList.add('active');
	});
});