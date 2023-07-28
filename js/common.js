// 클릭 시 보여주기
$('.tit').on('click', function(){
    $(this).next('.cont').toggleClass('is-open').fadeToggle(300);
}); 