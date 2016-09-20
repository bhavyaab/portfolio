Projects.allProjects = [];

Projects.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

projects.loadProjects(function(inputData) {
  inputData.forEach(function(project) {
    Projects.push(new Project(project));
  });
});

Project.fetchAll = function() {
  if (localStorage.projectsContent) {
    projects.loadProjects(JSON.parse(localStorage.projectsContent));
    projectsView.renderIndex();
  } else {
    $.getJSON('../../data/projectsContent.json', function(data) {
      projects.loadProjects(data);
      var projectsData = JSON.stringify(data);
      localStorage.setItem('projectsContent', projectsData);
      projects.loadProjects(JSON.parse(localStorage.projectsContent));
      projectsView.renderIndex();
    });
  }
};
