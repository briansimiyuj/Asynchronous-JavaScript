const request = new XMLHttpRequest()

request.addEventListener("readystatechange", () =>{

    if (request.readyState === 4 && request.status === 200) {
        
        console.log(request, request.responseText)   
                                                                            
    }else if (request.readyState === 4) {                                  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

        console.log('Could not fetch data')

    }
    
}) 

request.open("GET", 'https://jsonplaceholder.typicode.com/todoss')

request.send()

