// Selectors
const result = document.querySelector('#fetch-quotes')
const fetch_button = document.querySelector('#api-button')
const navi = document.querySelector('.ul-nav')
const hamburgerToggle = document.querySelector('.hamburger-button')
const emailButton = document.getElementById('btn')

// Event Listeners
emailButton.addEventListener('click', () => {
    openMailApp();
})

hamburgerToggle.addEventListener('click', () => {
    const show = navi.getAttribute('data-visible');
    console.log(show)
    if (show === "false") {
        navi.setAttribute('data-visible', true); 
        hamburgerToggle.setAttribute('aria-expanded', true);
    } else if (show === "true") {
        navi.setAttribute('data-visible', false);
        hamburgerToggle.setAttribute('aria-expanded', false);
    }
})

// fetch_button.addEventListener('click', getRandomQ)


// Functions
function openMailApp(){
    window.location.href = 'mailto:austinxduong@gmail.com'
}

function toogleSelection(id) {
    document.getElementById(id).classList.toggle('collapsed');
}

// function getRandomQ() {
//     result.innerHTML = "<img src='Blocks-0.5s-184px.svg' alt='digital block loader' />"
//     fetch('')
//     .then(res => res.json())
//         .then(data => {
//             console.log(data.json)
//             document.querySelector('#fetch-quotes').innerHTML=data.data;
//         })
// }


// function toggleButton() {
//     const show = navi.getAttribute('data-visible');

//     if (show === "false") {
//         navi.setAttribute('data-visible', true);
//     } else if (visibility === 'true') {
//         navi.setAttribute('data-visible', false)
//     }
// }



// jQuery

