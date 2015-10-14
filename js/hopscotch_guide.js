(function ($) {

  /**
* Hides the otional settings textarea in hopscotch_ui_edit_hopscotch().
*
*/
  Backdrop.behaviors.hopscotchMenuBarLinks = {
  attach: function(context, settings) {

      var checkExist = setInterval(function() { // Make sure Admin Bar is loaded
        if ($('.admin-bar-tour-list').length) {
          $('.admin-bar-tour-list').find('.blank-tour').remove();
          tours = Backdrop.settings.hopscotchContext.tours;
          if (!$.isEmptyObject(tours)) {
            $('.admin-bar-tour-list a:first').addClass('tours-found');
            $.each(tours, function(i) {
              var li = $('<li/>')
              .addClass('tour-item')
              .appendTo($('.admin-bar-tour-list ul.dropdown'));
              var aaa = $('<a/>')
              .addClass('hopscotch-start-link')
              .text(tours[i]['title'])
              .attr("href", "#")
              .attr("id", "hoplink-"+i)
              .appendTo(li);
            });
            clearInterval(checkExist);
          }
        }
      }, 100); // check every 100ms

    }
  };

})(jQuery);
