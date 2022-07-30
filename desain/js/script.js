// pada saat link di klik
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan =$(this).attr('href');
    // Tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);


    // pindahkan scroll
    $('body, html').animate({ 
        scrollTop: elemenTujuan.offset().top - 55
    }, 1250, 'easeInOutExpo');

    e.preventDefault();

});

// Animasi

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    

    if( wScroll > $('.illustrasi2d').offset().top - 250 ) {
        $('.class-animasi .teks2_1-animasi').each(function(i){
            setTimeout(function(){
                $('.class-animasi .teks2_1-animasi').eq(i).addClass('muncul');
                
            }, 300 * (i+1));
        })
    };

    if( wScroll > $('.illustrasi3d').offset().top - 250 ) {
        $('.class-animasi .teks2_2-animasi').each(function(i){
            setTimeout(function(){
                $('.class-animasi .teks2_2-animasi').eq(i).addClass('muncul');
                
            }, 300 * (i+1));
        })
    };
    
    //------------------------------------------------------------------------------------------------------------------------------------------------------------------



    if( wScroll > $('.images').offset().top - 250 ) {
        $('.class-animasi .teks2_3-animasi').each(function(i){
            setTimeout(function(){
                $('.class-animasi .teks2_3-animasi').eq(i).addClass('muncul');
                
            }, 300 * (i+1));
        })
    };

    if( wScroll > $('.vector').offset().top - 250 ) {
        $('.class-animasi .teks2_4-animasi').each(function(i){
            setTimeout(function(){
                $('.class-animasi .teks2_4-animasi').eq(i).addClass('muncul');
                
            }, 300 * (i+1));
        })
    };
    
    if( wScroll > $('.edit_compress').offset().top - 250 ) {
        $('.class-animasi .teks2_5-animasi').each(function(i){
            setTimeout(function(){
                $('.class-animasi .teks2_5-animasi').eq(i).addClass('muncul');
                
            }, 300 * (i+1));
        })
    };
    
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------




    

});


