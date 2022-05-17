// import { fetch }  from 'node-fetch'
//fetch returns us a 'promise'. 
        // '.then' resolves that 'promise'
        // we turn that into a JSON object
        // '.then' resolves it again, this time outputting the data to the console


const fetching = fetch('https://would-you-rather-api--abaanshanid.repl.co/')
    .then((response) => {
        console.log("status code 200!")
        return response.json();
    })
    .then(data => {
        //JSON object name changed. Previously "data", now is omitted from object.
        // update Mon, March 14th 2022
        // bug fix
        console.log(data.json)
        document.getElementById('fetch-quotes').innerHTML=data;
    })

   



    
    






// once App componnent loads, useEffect is triggered
//useEffect takes in 2 arguments; callback function, dependency array

//^^ dependency array = second argument of useEffect hook
// reinvokes