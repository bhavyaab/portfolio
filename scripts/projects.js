var projects = [];

function Project (options) {
  this.projectTitle = options.projecTitle;
  this.projectCategory = options.projectCategory;
  this.publishedOn = options.publishedOn;
  this.projectPreview = options.projectPreview;
  this.projectUrl = options.projectUrl;
  this.projectDescription = options.projectDescription;
};

Project.prototype.html = function() {
  var $newProject = $('article.template').clone();

  $newProject.find('h2').text(this.projectTitle);
  $newProject.attr('data-category', this.projectCategory);
  $newProject.find('time').text(this.publishedOn);
  $newProject.find('.preview img').attr('src', this.projectPreview);
  $newProject.find('.preview p a').attr('href', this.projectUrl);
  $newProject.find('.preview description_body').text(this.projectDescription);

  $('article').removeClass('template');
  return $newProject;
};
