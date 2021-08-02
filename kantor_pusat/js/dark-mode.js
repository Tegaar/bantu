
    /*darkmodeee*/
    if(localStorage.getItem('theme') == 'dark')
    darkModeon(true)
    
    
    const gantiWarna = document.getElementById('ganti-tema');
    gantiWarna.addEventListener("click",checkMode);
    
    function checkMode(){
    console.log("checking...");
    if(gantiWarna.checked){
        console.log('dark on');
        darkModeon();
    }
    else{
        console.log('dark off');
        darkModeoff();
    }
    }
    
    function darkModeon(){
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark')
    }
    function darkModeoff(){
    document.body.classList.remove('dark-mode');
    localStorage.removeItem('theme')
    }