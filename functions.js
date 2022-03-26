const result = document.querySelector('#fetch-quotes')
const fetch_button = document.querySelector('#api-button')

fetch_button.addEventListener('click', getRandomQ)

function getRandomQ() {
    result.innerText = "Loading ..."
    fetch('https://api.aakhilv.me/fun/wyr')
        .then(res => res.json())
        .then(data => {
            console.log(data.json)
            document.querySelector('#fetch-quotes').innerHTML=data
        })
}