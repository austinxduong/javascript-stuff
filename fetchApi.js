export async function fetchApi() {
    await fetch('https://api.aakhilv.me/fun/wouldyourather').then(function(response) {
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
}

fetchApi()

