const sidebarToggle = document.getElementById('toggle-sidebar');
const sidebar = document.getElementById('sidebar');
const rightContent = document.querySelector('.right');
const dashboardTitle = document.getElementById('dashboard-title');
const spanTitles = document.querySelectorAll('.flex-opt span');
const links = document.querySelectorAll('.flex-opt');

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

// Open and close the sidebar when the toggle button is clicked
sidebarToggle.addEventListener('click', toggleSidebar);

// Close sidebar when clicking outside the sidebar or pressing Escape
document.addEventListener('click', closeSidebarOutside);
document.addEventListener('keydown', closeSidebarEscape);

if (window.matchMedia('(min-width: 768px)').matches) {
  if (!sidebar.classList.contains('open')) {
    toggleSidebar();
  }
}

// --- Link Click Behavior ---
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (!sidebar.classList.contains('open')) {
      toggleSidebar();
    }
  });
});
