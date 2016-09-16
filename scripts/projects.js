var projects = [];

function Project (options) {
  this.projectTitle = options.projectTitle;
  this.projectCategory = options.projectCategory;
  this.publishedOn = options.publishedOn;
  this.projectPreview = options.projectPreview;
  this.projectDescription = options.projectDescription;
  this.projectUrl = options.projectUrl;
};

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.attr('data-category', this.projectCategory);
  $newProject.find('.heading h2').text(this.projectTitle);
  $newProject.find('time').text('Published On: ' + this.publishedOn);
  $newProject.find('.preview .preview-content img').attr('src', this.projectPreview);
  $newProject.find('.preview p').html(this.projectDescription);
  $newProject.find('.preview a').attr('href', this.projectUrl);

  $newProject.removeClass('template');
  return $newProject;
};

ourLocalData.forEach(function(project) {
  projects.push(new Project(project));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
