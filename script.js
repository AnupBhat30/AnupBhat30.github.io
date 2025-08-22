document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillTags = document.querySelectorAll('.skill-tag');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      const category = button.dataset.category;
      skillTags.forEach((tag) => {
        if (category === 'all' || tag.classList.contains(category)) {
          tag.classList.remove('hidden');
        } else {
          tag.classList.add('hidden');
        }
      });
    });
  });

  const projects = document.querySelectorAll('.project');
  projects.forEach((project) => {
    project.addEventListener('click', function () {
      projects.forEach((p) => {
        if (p !== project) {
          p.classList.remove('active');
        }
      });
      this.classList.toggle('active');
    });
  });
});
