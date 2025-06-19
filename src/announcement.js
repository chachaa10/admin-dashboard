const announcements = [
  {
    title: 'Purr-fectly Important: Site Maintenance!',
    description:
      "Our human helpers are tidying things up! We'll be back to chasing laser pointers (and serving you) soon!",
  },
  {
    title: 'Meow-gical Community Share Day!',
    description:
      "Come share your favorite toys and sunbeam spots with us! It'll be the cat's pajamas!",
  },
  {
    title: 'New Squeaky Toy (Privacy Policy)!',
    description:
      "We've updated our rules for napping and snuggling. Take a peek if you're curious!",
  },
];

for (const { title, description } of announcements) {
  const announcementList = document.createElement('li');
  announcementList.classList.add('announcement-list');
  announcementList.innerHTML = `
    <h4>${title}</h4>
    <p>${description}</p>
  `;

  const announcementCard = document.querySelector('.announcement-card');
  announcementCard.appendChild(announcementList);
}
