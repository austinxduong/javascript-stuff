        //fetch returns us a 'promise'. 
        // '.then' resolves that 'promise'
        // we turn that into a JSON object
        // '.then' resolves it again, this time outputting the data to the console
fetch('https://api.aakhilv.me/fun/wouldyourather')
    .then((response) => {
        return response.json();
    })
    .then(data => {
        console.log(data.data[0])
        document.getElementById('root').innerHTML=data.data[0];
    })





