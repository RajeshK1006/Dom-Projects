const quotes = [
    "The only way to do great work is to love what you do.",
    "The best way to predict the future is to create it.",
    "Your time is limited, don’t waste it living someone else’s life.",
    "Don’t watch the clock; do what it does. Keep going.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Dream big and dare to fail.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Don’t be afraid to give up the good to go for the great.",
    "Success usually comes to those who are too busy to be looking for it.",
    "The way to get started is to quit talking and begin doing."
];

// Array of authors
const authors = [
    "Steve Jobs",
    "Peter Drucker",
    "Steve Jobs",
    "Sam Levenson",
    "Anonymous",
    "Norman Vaughan",
    "Albert Schweitzer",
    "John D. Rockefeller",
    "Henry David Thoreau",
    "Walt Disney"
];
let quoteEl = document.getElementById('qte')
let authEl = document.getElementById("auth")

quoteEl.textContent = "Start generating the Quotes"

function change(){
    val = Math.floor(Math.random() * quotes.length)
    quoteEl.textContent = quotes[val]
    authEl.textContent = "-      "+ JSON.stringify(authors[val])

}