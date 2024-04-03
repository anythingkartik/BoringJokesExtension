fetch('https://icanhazdadjoke.com/slack')
    .then(data=>data.json())
    .then(jokeData=>{
        const Joketext =jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = Joketext;
    })
    //write a piece of code that change the height of the body dynamically with respect to the joke class from popup.html. the height of the body should be equal to the height of the joke class. 
    const jokeElement = document.getElementById('jokeElement');
    const jokeHeight = jokeElement.clientHeight;
    document.body.style.height = jokeHeight + 'px';