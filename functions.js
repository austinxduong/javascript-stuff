const result = document.querySelector('#fetch-quotes')
const fetch_button = document.querySelector('#api-button')

// Event Listeners
fetch_button.addEventListener('click', getRandomQ)


// Functions
function getRandomQ() {
    result.innerText = "Loading..."
    fetch('https://api.aakhilv.me/fun/wyr')
        .then(res => res.json())
        .then(data => {
            console.log(data.json)
            document.querySelector('#fetch-quotes').innerHTML=data
        })
}

// jQuery

$(api-button).click(function(){
    (this).html('<img src="Blocks-1s-200px.gif" />');
    return false });
  