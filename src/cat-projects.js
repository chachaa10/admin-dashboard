const projects = [
  {
    title: 'Why do cats always get their way?',
    description:
      'Cat ipsum dolor sit amet, cats making all the muffins, and hate dog so kitty kitty. Hate dog loved it, hated it, loved it, hated it meow loudly just to annoy owners and that box? i can fit in that box plop down in the middle where everybody walks intently sniff hand. I vomit in the bed in the middle of the night. Ccccaaaaaaattttttsssssss meow meow mama so pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now',
  },
  {
    title: "Because they're so purr-suasive!",
    description:
      'Cat ipsum dolor sit amet, hiding behind the couch until lured out by a feathery toy. I like frogs and 0 gravity at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while 1.5 observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in. Stare at the wall, play with food and get confused by dust love fish pet right here, no not there, here, no fool, right here that other cat smells funny you should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now.',
  },
  {
    title: "What do you call a cat that's been caught stealing?",
    description:
      "Cat ipsum dolor sit amet, sit on human stretch out on bed. Hell is other people meow to be let out. Bird bird bird bird bird bird human why take bird out i could have eaten that carrying out surveillance on the neighbour's dog, yet eats owners hair then claws head please let me outside pouty face yay! wait, it's cold out please let me inside pouty face oh, thank you rub against mommy's leg oh it looks so nice out, please let me outside again the neighbor cat was mean to me please let me back inside but hiiiiiiiiii feed me now. Do doodoo in the litter-box, clickityclack on the piano, be frumpygrumpy tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad for purr when being pet i is playing on your console hooman poop in the plant pot or dream about hunting birds.",
  },
  {
    title: 'A purr-petrator!',
    description:
      "Cat ipsum dolor sit amet, oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap or hide when guests come over cough. Stare at ceiling pee in the shoe but peer out window, chatter at birds, lure them to mouth so chase ball of string my left donut is missing, as is my right for cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog. Murder hooman toes spend six hours per day washing, but still have a crusty butthole. Cats go for world domination mrow so crusty butthole. Ha ha, you're funny i'll kill you last run up and down stairs and dead stare with ears cocked for chew iPad power cord wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again, stare at ceiling light scratch so owner bleeds. Sit by the fire chase mice murf pratt ungow ungow yet crusty butthole.",
  },
  {
    title: 'What do you call a pile of cats?',
    description:
      "Cat ipsum dolor sit amet, refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am yet all of a sudden cat goes crazy sleep on keyboard but if it fits, i sits. Roll over and sun my belly sleep in the bathroom sink instantly break out into full speed gallop across the house for no reason and eat plants, meow, and throw up because i ate plants so shake treat bag, for eat a rug and furry furry hairs everywhere oh no human coming lie on counter don't get off counter hunt anything. Kitty kitty pussy cat doll i show my fluffy belly but it's a trap! if you pet it i will tear up your hand so loved it, hated it, loved it, hated it lie on your belly and purr when you are asleep check cat door for ambush 10 times before coming in or i show my fluffy belly but it's a trap! if you pet it i will tear up your hand. Ignore the human until she needs to get up, then climb on her lap and sprawl give me some of your food give me some of your food give me some of your food meh, i don't want it need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human.",
  },
  {
    title: 'A meow-ntain!',
    description:
      "Cat ipsum dolor sit amet, hey! you there, with the hands mew mew. What the heck just happened, something feels fishy run up and down stairs. Attack like a vicious monster floof tum, tickle bum, jellybean footies curly toes so where is it? i saw that bird i need to bring it home to mommy squirrel! for sleep everywhere, but not in my bed. Cats are a queer kind of folk. Hopped up on catnip. Sleeping in the box chew foot hiding behind the couch until lured out by a feathery toy walk on a keyboard. Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked howl on top of tall thing but swipe at owner's legs the best thing in the universe is a cardboard box, walk on keyboard . I heard this rumor where the humans are our owners, pfft, what do they know?! loves cheeseburgers, bawl under human beds. Play time what a cat-ass-trophy! or the dog smells bad make muffins, yet poop on the floor, break a planter, sprint, eat own hair, vomit hair, hiss, chirp at birds, eat a squirrel, hide from fireworks, lick toe beans, attack christmas tree and wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again kitty power.",
  },
];

for (const { title, description } of projects) {
  const projectCard = document.createElement('article');
  projectCard.classList.add('project-list');
  projectCard.innerHTML = `
  <h4 class="project-title">${title}</h4>
  <p class="project-description">${description}</p>
  <div class="project-buttons">
    <button aria-label="Bookmark">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
      </svg>
    </button>
    <button aria-label="Delete">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
      </svg>
    </button>
    <button aria-label="Share">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12L14,5M16,9.83L18.17,12L16,14.17V12.9H14C11.93,12.9 10.07,13.28 8.34,13.85C9.74,12.46 11.54,11.37 14.28,11L16,10.73V9.83Z" />
      </svg>
    </button>
  </div>
  `;

  const projectCards = document.querySelector('.project-cards');
  projectCards.appendChild(projectCard);
}
