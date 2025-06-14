const toggleSidebar = document.getElementById('toggle-sidebar');

function openSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');

  const dashboardTitle = document.getElementById('dashboard-title');
  dashboardTitle.classList.toggle('hidden');

  const spanTitleS = document.querySelectorAll('.flex-opt span');
  spanTitleS.forEach((span) => {
    span.classList.toggle('hidden');
  });
}

function hideContent() {
  const right = document.querySelector('.right');
  right.classList.toggle('hidden');
}

toggleSidebar.addEventListener('click', () => {
  openSidebar();
  hideContent();
});
