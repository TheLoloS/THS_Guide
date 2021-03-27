// document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });


var cookies = document.cookie;
var checkbox = document.querySelector("input[name=checkbox_anim]");
//check value of checkbox 
if (getCookie("a1") == "true") {
    checkbox.checked = true;
    cookies_anim(getCookie("a1"));
} else {
    checkbox.checked = false;
}
//change cookies on change checkbox btn
checkbox.addEventListener('change', function() {
    if (this.checked) {
        document.cookie = 'a1=true; expires=' + new Date(2147483647 * 1000).toUTCString();
        cookies_anim(getCookie("a1"));
    } else {
        document.cookie = 'a1=false; expires=' + new Date(2147483647 * 1000).toUTCString();
        cookies_anim(getCookie("a1"));
    }
});
//take value of cookies
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);

        }
    }
    return "";
}