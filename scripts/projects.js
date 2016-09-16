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
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

ourLocalData.forEach(function(project) {
  projects.push(new Project(project));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
