document.body.onload = function() {

    setTimeout(function() {
        var preloader = document.getElementById('p_preloader');
        if( !preloader.classList.contains('done') )
        {
         preloader.classList.add('done');
        }
    }, 2000);

}

