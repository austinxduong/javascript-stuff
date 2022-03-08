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
        document.getElementById('fetchQuotes').innerHTML=data.data[0];
    })





// once App componnent loads, useEffect is triggered
//useEffect takes in 2 arguments; callback function, dependency array

//^^ dependency array = second argument of useEffect hook
// reinvokes