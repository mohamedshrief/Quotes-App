var quotes = [
    {
        content : `“Be yourself; everyone else is already taken.”`,
        auther : `― Oscar Wilde`
    },
    {
        content : `“So many books, so little time.”`,
        auther : `― Frank Zappa`
    },
    {
        content : `“A room without books is like a body without a soul.”`,
        auther : `― Marcus Tullius Cicero`
    },
    {
        content : `“You only live once, but if you do it right, once is enough.”`,
        auther : `― Mae West`
    },
    {
        content : `“Be the change that you wish to see in the world.”`,
        auther : `― Mahatma Gandhi`
    },
    {
        content : `“If you tell the truth, you don't have to remember anything.”`,
        auther : `― Mark Twain`
    },
    {
        content : `“Always forgive your enemies; nothing annoys them so much.”`,
        auther : `― Oscar Wilde`
    },
    {
        content : `“Without music, life would be a mistake.”`,
        auther : `― Friedrich Nietzsche`
    }
]


document.getElementById("quotes-generator").onclick = function generate (){
    var randNum = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[randNum].content;
    document.getElementById("auther").innerHTML = quotes[randNum].auther;
} ;



