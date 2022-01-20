$( document ).ready(function() {
    
    var delay = 5000;
    
    var popup = $('.newsletterpopup');
    var overlay = $('.overlay');

    var cookie = localStorage.getItem('newsletterpopup');

    if(!popup.hasClass('postback')) {
        if(cookie == undefined || cookie == null) {
            
setTimeout(function() {
    overlay.fadeIn("fast", () => {
        popup.fadeIn("fast", () => {});
    });
}, delay)

            

        }
    } else {
        localStorage.setItem("newsletterpopup", (new Date()).getTime());
    }
});