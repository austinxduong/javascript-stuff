// Selectors
const result = document.querySelector('#fetch-quotes')
const fetch_button = document.querySelector('#api-button')
const navi = document.querySelector('.ul-nav')
const hamburgerToggle = document.querySelector('.hamburger-button')
const emailButton = document.getElementById('btn')
const changeLanguage = document.getElementById('java_language')

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
// function openMailApp(){
//     window.location.href = 'mailto:austinxduong@gmail.com'
// }

function toogleSelection(id) {
    document.getElementById(id).classList.toggle('collapsed');
}

// function spinner() {
//     document.getElementById("loader_spinner").style.display = "block";
// }
// spinner()

// spinner 0
function spinner0(){
   const spinnerDisplayer0 = document.querySelector('.spinner-displayer-0');
   const btnspinner0 = document.getElementById('btnspinner-0');

   btnspinner0.addEventListener('click', () => {
        spinnerDisplayer0.classList.add('loading');
   })
}
spinner0();


 

//spinner 
// function spinner(){
//     const spinnerDisplayer = document.querySelector('.spinner-displayer-1');
//     const btnspinner = document.getElementById('btnspinner-1');
 
//     btnspinner.addEventListener('click', () => {
//      spinnerDisplayer.classList.add('loading');
//     })
//  }

// spinner();

// spinner2
function spinner2(){
    const spinnerDisplayer2 = document.querySelector('.spinner-displayer-2');
    const btnspinner2 = document.getElementById('btnspinner-2');
 
    btnspinner2.addEventListener('click', () => {
     spinnerDisplayer2.classList.add('loading');
    })
 }

spinner2();

// spinner 3
function spinner3(){
    const spinnerDisplayer3 = document.querySelector('.spinner-displayer-3');
    const btnspinner3 = document.getElementById('btnspinner-3');
 
    btnspinner3.addEventListener('click', () => {
     spinnerDisplayer3.classList.add('loading');
    })
 }

spinner3();

// spinner 4
function spinner4(){
    const spinnerDisplayer4 = document.querySelector('.spinner-displayer-4');
    const btnspinner4 = document.getElementById('btnspinner-4');
 
    btnspinner4.addEventListener('click', () => {
     spinnerDisplayer4.classList.add('loading');
    })
 }

spinner4();

// // spinner 5
function spinner5(){
    const spinnerDisplayer5 = document.querySelector('.spinner-displayer-5');
    const btnspinner5 = document.getElementById('btnspinner-5');
 
    btnspinner5.addEventListener('click', () => {
     spinnerDisplayer5.classList.add('loading');
    })
 }

spinner5();

// // spinner 6
function spinner6(){
    const spinnerDisplayer6 = document.querySelector('.spinner-displayer-6');
    const btnspinner6 = document.getElementById('btnspinner-6');
 
    btnspinner6.addEventListener('click', () => {
     spinnerDisplayer6.classList.add('loading');
    })
 }

spinner6();

language = {};
language.showhide = function(param1) {
    
    if (param1 == 1) {
        document.getElementById('javaScript_language').style.display = "";
        document.getElementById('java_language').style.display = "none";
    } 
    else if (param1 == 2) {
        document.getElementById('javaScript_language').style.display = "none";
        document.getElementById('java_language').style.display = "";
    } 
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




