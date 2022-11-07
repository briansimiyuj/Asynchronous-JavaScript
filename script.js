const hiphopSongs = (resource, callback) =>{

    const request = new XMLHttpRequest()

    request.addEventListener("readystatechange", () =>{
    
        if (request.readyState === 4 && request.status === 200) {

            const data = JSON.parse(request.responseText)
            
            callback(undefined, data)
                                                                                
        }else if (request.readyState === 4) {                        
    
            callback('Could not fetch data', undefined)
    
        }
        
    }) 
    
    request.open("GET",resource)
    
    request.send()

}




// Promise example


const getSong = () =>{

    return new Promise((resolve, reject) =>{

        // fetch something

        // resolve('some song')

        reject('some error')

    })

}



getSong().then(data =>{

    console.log(data)

}).catch(err =>{

    console.log(err)

})