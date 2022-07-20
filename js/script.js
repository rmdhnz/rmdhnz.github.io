$('.page-scroll').on('click',function(e){
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    
    //pindah scroll
    $('html,body').animate({
        scrollTop:elemenTujuan.offset().top-50
    },1000);
    e.preventDefault();
});