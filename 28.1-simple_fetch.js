// Instructions
// Lets do an simple ajax call with fetch using this url “https://
// api.jokes.one/jod”.
// Create a button that will fetch the joke of the day. Display
// to the screen the jokes title and the joke itself.

const getJokeOfToday = () => {
    fetch("https://api.jokes.one/jod")
        .then((response) => {
            if (!response.ok) throw new Error(`Status code error: ${response.status}`);
            return response.json();
        })
        .then((data) => {
            // console.log(data.contents);
            const title = document.createElement("h1");
            title.innerText = data.contents.jokes[0].joke.title;
            document.body.appendChild(title);
            const theJoke = document.createElement("p");
            theJoke.innerText = data.contents.jokes[0].joke.text;
            document.body.appendChild(theJoke);
        })
        .catch((err) => {
            console.log('something ..');
            console.log(err);
        });
}

const btn = document.createElement("button");
btn.innerText = "Click me to get a joke";
btn.addEventListener("click", getJokeOfToday);
document.body.appendChild(btn);