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

// experience
$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    
    if( wScroll > $('.experience').offset().top - 350 ) {
        $('.experience-kotak .experience-p').each(function(i){
            setTimeout(function(){
                $('.experience-kotak .experience-p').eq(i).addClass('muncul');
                
            }, 300 * (i+1));
        })
    };
    if( wScroll > $('.experience').offset().top - 350 ) {
        $('.experience-kotak .experience-h3').each(function(i){
            setTimeout(function(){
                $('.experience-kotak .experience-h3').eq(i).addClass('muncul');
                
            }, 300 * (i+1));
        })
    };
    
});


// Color/Dark mode

// color Picker
const textColor = document.querySelector('#text-color');
const bgColor = document.querySelector('#bg-color');
const secondColor = document.querySelector('#second-color');

textColor.addEventListener('change', function () {
    document.documentElement.style.setProperty('--text-color', this.value);
})
bgColor.addEventListener('change', function () {
    document.documentElement.style.setProperty('--bg-color', this.value);
})
secondColor.addEventListener('change', function () {
    document.documentElement.style.setProperty('--second-color', this.value);
})


// Button
const button = document.querySelector('.button-awal');
const html = document.querySelector('html');

    // ketika tombol diklik
    button.addEventListener('click', function () {
        // chceck color mode saat ini
        if(html.dataset.colorMode === 'light'){
            html.dataset.colorMode = 'dark';
            this.textContent = 'Dark Mode';
        }
        else if(html.dataset.colorMode === 'dark'){
            html.dataset.colorMode = 'light';
            this.textContent = 'Light Mode';
        }
        // else{
        //     html.dataset.colorMode = 'light';
        //     this.textContent = 'Light Mode';
        // }
    });



// Animasi

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    
    if( wScroll > $('.about').offset().top - 250 ) {
        $('.class-animasi .teks-animasi').each(function(i){
            setTimeout(function(){
                $('.class-animasi .teks-animasi').eq(i).addClass('muncul');
                
            }, 300 * (i+1));
        })
        $('.class-animasi .teks2-animasi').each(function(i){
            setTimeout(function(){
                $('.class-animasi .teks2-animasi').eq(i).addClass('muncul');
                
            }, 300 * (i+1));
        })
    };

    
    
    // if( wScroll > $('.experience').offset().top - 250 ) {
    //     $('.kotak .teksp').each(function(i){
    //         setTimeout(function(){
    //             $('.kotak .teksp').eq(i).addClass('muncul');
                
    //         }, 300 * (i+1));
    //     })
    // };

});


