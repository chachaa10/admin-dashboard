const trendings = [
  {
    profilePicture: './assets/noodlethecat.jpg',
    username: 'NoodleTheCat',
    bio: 'Purrs, naps, floof.',
  },
  {
    profilePicture: './assets/captain-whiskers.jpg',
    username: 'CaptainWhiskers',
    bio: 'Brave, curious, treats.',
  },
  {
    profilePicture: './assets/grumpy-cat.png',
    username: 'GrumpyCat',
    bio: 'Skeptical, hungry, cute.',
  },
  {
    profilePicture: './assets/zoomiezee.jpg',
    username: 'ZoomieZee',
    bio: 'Fast, playful, energetic.',
  },
];

for (const { profilePicture, username, bio } of trendings) {
  const trendingList = document.createElement('li');
  trendingList.classList.add('trending-list');
  trendingList.innerHTML = `
    <div class="profile-picture">
      <img src="${profilePicture}" alt="${username}">
    </div>
    <div class="trending-info">
      <h4>${username}</h4>
      <p>${bio}</p>
    </div>
  `;

  const trendingCard = document.querySelector('.trending-card');
  trendingCard.appendChild(trendingList);
}
