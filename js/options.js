$(document).ready( function() {
    var _flag = localStorage.getItem('_turnOnOffExt') || '1';
    if (_flag == '1') {
        $('#turnOnOffExt').val($(this).is(':checked'));
    }
    else {
        $('#turnOnOffExt').attr('checked', false);
    }
    $('#turnOnOffExt').change(function() {
        if($(this).is(":checked")) {
            localStorage.setItem('_turnOnOffExt','1');
            _gaq.push(['_trackEvent', 'extOn', 'options']);
        }
        else {
            _gaq.push(['_trackEvent', 'extOff', 'options']);
            localStorage.setItem('_turnOnOffExt', '0');
        }
    });
});