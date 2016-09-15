var articleView = {};

articleView.handleMainNav = function() {
  $('.main_nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    var grabDataContent = $(this).attr('data-content');
    $('#' + grabDataContent).fadeIn();
    console.log(grabDataContent);
  });
  $('.main_nav .tab:first').click();
};

articleView.handleMainNav();
