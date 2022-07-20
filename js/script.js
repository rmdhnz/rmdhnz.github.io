$('.page-scroll').on('click',function(e){
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    
    //pindah scroll
    $('html').animate({
        scrollTop:elemenTujuan.offset().top-50
    },500);
    e.preventDefault();
});