var articleView = {};

articleView.handleMainNav = function() {
  $('.main_nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    var view = $(this).attr('data-content');
    $('#' + view).fadeIn();
  });
  $('.main_nav .tab:first').click();
};

articleView.handleMainNav();
