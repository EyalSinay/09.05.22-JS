// Instructions
// Refactor the simple fetch exercise using async await.

async function getJokeOfToday() {
    try {
        const response = await fetch("https://api.jokes.one/jod");
        if (!response.ok) throw new Error(`Status code error: ${response.status}`);
        const data = await response.json();
        const title = document.createElement("h1");
        title.innerText = data.contents.jokes[0].joke.title;
        document.body.appendChild(title);
        const theJoke = document.createElement("p");
        theJoke.innerText = data.contents.jokes[0].joke.text;
        document.body.appendChild(theJoke);
    }
    catch (err) {
        console.log('something ..');
        console.log(err);
    };
}

const btn = document.createElement("button");
btn.innerText = "Click me to get a joke";
btn.addEventListener("click", getJokeOfToday);
document.body.appendChild(btn);

