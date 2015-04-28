var YAD_VA_SHEM_SEARCH_URL = "http://db.yadvashem.org/names/nameResults.html?lastNameAdv=(!!!LASTNAME!!!)&lastNameAdvType=THESAURUS&language=en";
var LAST_NAME_REPLACE_STRING = "(!!!LASTNAME!!!)";

function search_by_last_name(last_name_string) {
    var _url = YAD_VA_SHEM_SEARCH_URL.replace(LAST_NAME_REPLACE_STRING, last_name_string);
    chrome.tabs.query({url: _url}, function (tabs) {
        if (tabs.length) {
            chrome.tabs.update(tabs[0].id, {
                url: _url,
                active: true
            });
        } else {
            chrome.tabs.create({url: _url});
        }
    });
}

localStorage.setItem("_turnOnOffExt", "1");

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        var _search_string;
        console.log(request);
        if (request.type == "fb") {
            if (request.fb_data.fb_alt_name != "") {
                _search_string = request.fb_data.fb_alt_name.replace("(","").replace(")","");
                search_by_last_name(_search_string)
            } else {
                _search_string = request.fb_data.fb_pathname;
                $.getJSON("https://graph.facebook.com/" + _search_string, function(json) {
                    search_by_last_name(json.last_name);
                });
            }
        } else if (request.type == "status") {
            var _flag = localStorage.getItem("_turnOnOffExt") || "1";
            sendResponse(_flag)
        }

    });