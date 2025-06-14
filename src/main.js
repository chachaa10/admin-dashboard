const toggleSidebar = document.getElementById('toggle-sidebar');
const sidebar = document.getElementById('sidebar');
const dashboardTitle = document.getElementById('dashboard-title');
const spanTitleS = document.querySelectorAll('.flex-opt span');
const right = document.querySelector('.right');

toggleSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  right.classList.toggle('hidden');
  dashboardTitle.classList.toggle('hidden');

  spanTitleS.forEach((span) => {
    span.classList.toggle('hidden');
  });
});
