$('li.list-group-item').each(function() {
  var $pr = $(this);

  $.get(window.location.origin + $pr.find('.list-group-item-name a').first().attr('href'), function (html) {
    var message   = $(html).find('.merge-branch-heading').text()
      , mergeable = message.indexOf("can be") > -1;

    if (!mergeable) {
      $pr.css('backgroundColor', '#fbc0c0');
    }
  });
});
