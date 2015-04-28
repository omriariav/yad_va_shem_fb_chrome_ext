  var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-61288714-1']);
_gaq.push(['_trackPageview']);
  function trackButton(e) {
      target_name = e.target.id;
      if (e.target.id == '') {
          target_name = e.target.nodeName;
      }
      _gaq.push(['_trackEvent', target_name, 'clicked']);
  };
  function trackSubmit() {
      _gaq.push(['_trackEvent', 'commentsSubmittedWithEnter', 'commented'])
  }