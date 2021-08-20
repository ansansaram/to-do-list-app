const quotes = [
  {
    quote: "Nobody can make you feel inferior without your permission.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "He who has a why to live can bear almost any how.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "Lost time is never found again.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Common sense is genius dressed in its working clothes.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "It is the province of knowledge to speak, and it is the privilege of wisdom to listen.",
    author: "Oliver Wendell Holmes Sr.",
  },
  {
    quote:
      "If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Singleness of purpose is one of the chief essentials for success in life, no matter what may be one’s aim.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "Educating the mind without educating the heart is no education at all.",
    author: "Aristotle",
  },
  {
    quote:
      "When a thing is done, it’s done. Don’t look back. Look forward to your next objective.",
    author: "George C. Marshall",
  },
  {
    quote:
      "In the end, it’s not the years in your life that count. It’s the life in your years.",
    author: "Abraham Lincoln",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
