var projects = [];

function Projects(options) {
  this.projectTitle = options.projecTitle;
  this.projectCategory = options.projectCategory;
  this.publishedOn = options.publishedOn;
  this.projectPreview = options.projectPreview;
  this.projectDescription = options.projectDescription;
};

Project.prototype.html = function() {
  var $newProject = $('article.template').clone();

  $newProject.attr('data-category', this.projectCategory);
};
