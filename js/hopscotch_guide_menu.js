(function ($) {

  /**
* Hides the otional settings textarea in hopscotch_ui_edit_hopscotch().
*
*/
  Backdrop.behaviors.hopscotchFloatMenuLinks = {
attach: function(context, settings) {

      $menu_fade_speed=500; //milliseconds
      
      $block=$(".block-hopscotch-hopscotch-start-link");
      $block_menu=$(".block-hopscotch-hopscotch-start-link .block-content");
      
      $(window).load(function() {
        if ($block.hasClass('guide-button')) {
          $block.addClass('tours-found');
          $(".block-hopscotch-hopscotch-start-link .block-title").hide();
          $block.hover(
          function(){ //mouse over
            $block.removeClass('tours-found');
            $block_menu.fadeIn($menu_fade_speed);
          },
          function(){ //mouse out
            $block_menu.fadeOut($menu_fade_speed);
            $block.addClass('tours-found');
          }
          );
        }
      });
    }
  };

})(jQuery);
