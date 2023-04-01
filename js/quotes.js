const quotes=[
  {
    quote: "Well-timed silence hath more eloquence than speech.",
    author: "Martin Farquhar Tupper",
  },
  {
    quote: "Far and away the best prize that life offers is the chance to work hard at work worth doing.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Let us make one point, that we meet each other with a smile, when it is difficult to smile. Smile at each other, make time for each other in your family.",
    author: "Mother Teresa",
  },
  {
    quote: "Life isn't long enough for love and art.",
    author: "William Somerset Maugham",
  },
  {
    quote: "Never regret yesterday. Life is in you today, and you make your tomorrow.",
    author: "L. Ron Hubbard",
  },
  {
    quote: "The way to gain a good reputation is to endeavor to be what you desire to appear.",
    author: "Socrates",
  },
  {
    quote: "The body is shaped, disciplined, honored, and in time, trusted.",
    author: "Martha Graham",
  },
  {
    quote: "Have no friends not equal to yourself.",
    author: "Confucius",
  },
  {
    quote: "In order for people to be happy, sometimes they have to take risks. It's true these risks can put them in danger of being hurt.",
    author: "Meg Cabot",
  },
  {
    quote: "He that can have patience can have what he will.",
    author: "Benjamin Franklin",
  },            
           
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote= quotes[Math.floor(Math.random()* quotes.length)];

quote.innerText =todaysQuote.quote;
author.innerText = todaysQuote.author;