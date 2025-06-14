const sidebarToggle = document.getElementById('toggle-sidebar');
const sidebar = document.getElementById('sidebar');
const rightContent = document.querySelector('.right');
const dashboardTitle = document.getElementById('dashboard-title');
const spanTitles = document.querySelectorAll('.flex-opt span');

function toggleSidebar() {
  sidebar.classList.toggle('open');

  const isNowOpen = sidebar.classList.contains('open');

  dashboardTitle.classList.toggle('hidden', !isNowOpen);

  spanTitles.forEach((span) => {
    span.classList.toggle('hidden', !isNowOpen);
  });

  rightContent.classList.toggle('hidden', isNowOpen);
}

function closeSidebarOutside(event) {
  if (sidebar.classList.contains('open') && !sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
    toggleSidebar();
  }
}

function closeSidebarEscape(event) {
  if (event.key === 'Escape' && sidebar.classList.contains('open')) {
    toggleSidebar();
  }
}

// Open and close the sidebar
sidebarToggle.addEventListener('click', toggleSidebar);

// Close sidebar
document.addEventListener('click', closeSidebarOutside);
document.addEventListener('keydown', closeSidebarEscape);
