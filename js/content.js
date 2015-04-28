var _html = "<span id='yad_va_shem_btn'>&nbsp;&#10017;&nbsp;</span>";

var call_bg_script = function(meta_data) {
    console.log(meta_data);
    chrome.runtime.sendMessage({type:"fb", fb_data: meta_data}, function(response) {
        console.log(response.farewell);
    });
};

$(document).ready( function() {
    chrome.runtime.sendMessage({type:"status"}, function(response) {
        if (response == "1") {
            if ($('#fb-timeline-cover-name').length == 0) {
                return false
            }
            $('#fb-timeline-cover-name').append($(_html));
            $("#yad_va_shem_btn").click( function(e) {
                e.preventDefault()
                if ($('.alternate_name').length != 0) {
                    var _alternate_name = $('.alternate_name')[0].innerText;
                    call_bg_script({
                        "fb_pathname": window.location.pathname,
                        "fb_alt_name": _alternate_name
                    })
                } else {
                    call_bg_script({
                        "fb_pathname": window.location.pathname,
                        "fb_alt_name": ""
                    })
                }
            });
        } else {
            return false;
        }
    });
});