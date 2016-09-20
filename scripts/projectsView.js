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

articleView.setTeasers = function() {
  $('preview-content *:nth-of-type(n+2)').hide();

  $('#projects').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $('description_body').parent().find('*').slideUp(1000);
    (this).hide();
  });
};

articleView.handleMainNav();
