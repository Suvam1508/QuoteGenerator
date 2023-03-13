let btn = document.querySelector("#new-Quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const Quotes = [
  {
    quote: `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking"`,
    person: `Steve Jobs`,
  },
  {
    quote: `"When you reach the end of your rope, tie a knot in it and hang on."`,
    person: `Franklin D. Roosevelt`,
  },
  {
    quote: `"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
    person: `Mother Teresa`,
  },
  {
    quote: `"If life were predictable it would cease to be life, and be without flavor. "`,
    person: `Eleanor Roosevelt`,
  },
  {
    quote: `"Always remember that you are absolutely unique. Just like everyone else."`,
    person: `Margaret Mead`,
  },
  {
    quote: `"Whoever is happy will make others happy too."`,
    person: `Anne Frank`,
  },
  {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`,
  },
  {
    quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
    person: `James Cameron`,
  },
  {
    quote: `"Life is what happens when you're busy making other plans."`,
    person: `John Lennon`,
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * Quotes.length);

  quote.innerText = Quotes[random].quote;
  person.innerText = Quotes[random].person;
});
