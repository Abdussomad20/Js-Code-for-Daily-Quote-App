const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter");
facebookBtn = document.querySelector(".facebook");

// random quote function
function randomQuote() {
quoteBtn.innerText = "Loading Quote...";

    //Fetching random quote from API and parsing it into Js Object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result=>{
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
    }); 
    
}

soundBtn.addEventListener("click", ()=>{
    //Speech Request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance); //speakmethod

});

copyBtn.addEventListener("click", ()=>{
    //Copy the quote to clipboard
    navigator.clipboard.writeText(quoteText.innerText);

});

twitterBtn.addEventListener("click", ()=>{
    //Tweet your quote
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, "_blank");

});

facebookBtn.addEventListener("click", ()=>{
    //Share to facebook
    let fbkpost = `https://web.facebook.com/fbkpost?url=${quoteText.innerText}`
    window.open(fbkpost, "_blank");

});

quoteBtn.addEventListener("click", randomQuote);