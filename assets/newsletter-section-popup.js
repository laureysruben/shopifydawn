$( document ).ready(function() {
    
    var delay = 5000;
    
    var popup = $('.newsletterpopup');
    var overlay = $('.overlay');

    var cookie = localStorage.getItem('newsletterpopup');

    if(!popup.hasClass('postback')) {
        if(cookie == undefined || cookie == null) {
            
            overlay.delay(delay).fadeIn("fast", () => {
                popup.fadeIn("fast", () => {});
            });

        }
    } else {
        localStorage.setItem("newsletterpopup", (new Date()).getTime());
    }
});