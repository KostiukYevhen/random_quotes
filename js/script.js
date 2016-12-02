let quotes = [
  {
    quote: "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
    author: "Ayn Rand"
  },
  {
    quote: "Oh, Jerry, don't let's ask for the moon. We have the stars.",
    author: "Now, Voyager"
  },
  {
    quote: "I'm living so far beyond my income that we may almost be said to be living apart.",
    author: "e e cummings"
  },
  {
    quote: "Human history becomes more and more a race between education and catastrophe.",
    author: "H. G. Wells"
  },
  {
    quote: "People demand freedom of speech to make up for the freedom of thought which they avoid.",
    author: "Soren Aabye Kierkegaard"
  },
  {
    quote: "There's no place like home.",
    author: "The Wizard of Oz"
  },
  {
    quote: "Be nice to people on your way up because you meet them on your way down.",
    author: "Jimmy Durante"
  },
  {
    quote: "Well, here's another nice mess you've gotten me into!",
    author: "Sons of the Desert"
  },
  {
    quote: "We didn't lose the game; we just ran out of time.",
    author: "Vince Lombardi"
  },
  {
    quote: "May the Force be with you.",
    author: "Star Wars"
  },
  {
    quote: "I have never killed anyone, but I have read some obituary notices with great satisfaction.",
    author: "Clarence Darrow"
  },
  {
    quote: "How wrong it is for a woman to expect the man to build the world she wants, rather than to create it herself.",
    author: "Anais Nin"
  },
  {
    quote: "How wrong it is for a woman to expect the man to build the world she wants, rather than to create it herself.",
    author: "Anais Nin"
  },
  {
    quote: "I shall not waste my days in trying to prolong them.",
    author: "Ian L. Fleming"
  },
  {
    quote: "If you are going through hell, keep going.",
    author: "Sir Winston Churchill"
  },
];
let i = 0, j = 0;
let colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

function nextQuote() {
  $(".quote").animate({ opacity: 0 }, 100, function() {
    $(this).animate({ opacity: 1 }, 1000);
    $(this).html('<i class="fa fa-quote-left" aria-hidden="true"></i><span> ' + quotes[i].quote)
  });
  $(".author").animate({ opacity: 0 }, 100, function() {
    $(this).animate({opacity: 1}, 1000);
    $(this).html('- ' + quotes[i].author);
  });
}

function changeColor() {
  $("body").animate({backgroundColor: colors[j]}, 1000);
  $("blockquote").animate({color: colors[j]}, 1000);
  $(".twit").animate({backgroundColor: colors[j], borderColor: colors[j]}, 1000);
  $(".next").animate({backgroundColor: colors[j], borderColor: colors[j]}, 1000);
}

$(".next").on("click", function() {
  nextQuote();
  changeColor();
  i++;
  if (i >= quotes.length) {
    i = 0;
  };
  j++;
  if(j >= colors.length) {
    j = 0;
  };
});

// $(".twit").attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quotes[i].quote + '" ' + quotes[i].author));

$(".twit").on("click", function () {
  var url = 'http://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + quotes[i].quote + " - " + quotes[i].author;
  window.open(url, 'twitter');
});
