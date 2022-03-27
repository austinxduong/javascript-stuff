const result = document.querySelector('#fetch-quotes')
const fetch_button = document.querySelector('#api-button')

// Event Listeners
fetch_button.addEventListener('click', getRandomQ)


// Functions
function getRandomQ() {
    result.innerHTML = "<img src='Blocks-0.6s-78px.gif'/>"
    fetch('https://api.aakhilv.me/fun/wyr')
        .then(res => res.json())
        .then(data => {
            console.log(data.json)
            document.querySelector('#fetch-quotes').innerHTML=data
        })
}

// jQuery

$(api-button).click(function(){
    $('#fetch-quotes').html('');
    $('#loader').show()

});
  