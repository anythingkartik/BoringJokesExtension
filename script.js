fetch('https://icanhazdadjoke.com/slack')
    .then(data=>data.json())
    .then(jokeData=>{
        const Joketext =jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = Joketext;
    })
    
    const jokeElement = document.getElementById('jokeElement');
    const jokeHeight = jokeElement.clientHeight;
    document.body.style.height = jokeHeight + 'px';
