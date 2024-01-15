const quotes = [
    {
        quote : "Just Move",
        author : "KSY"
    },
    {
        quote : "No Pain No Gain",
        author: "Kim From YJ"
    },
    {
        quote : "Hello MotherFuxker~",
        author : "Sung From WaterCity"
    },
    {
        quote : "Always chase the Maximum",
        author : "Yeop From Korea"
    },
    {
        quote : "나는 우주의 중심이다.나는 단지 남들보다 빨랐을 뿐",
        author: "박주환"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;