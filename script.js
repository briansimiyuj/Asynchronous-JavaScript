const hiphopSongs = (resource, callback) =>{

    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest()

        request.addEventListener("readystatechange", () =>{
        
            if (request.readyState === 4 && request.status === 200) {

                const data = JSON.parse(request.responseText)
                
                resolve(data)
                                                                                    
            }else if (request.readyState === 4) {                        
        
                reject('error getting resource')
        
            }
            
        }) 
        
        request.open("GET", resource)
        
        request.send()

        
    })
    
}


hiphopSongs('hiphop/ka.li.json').then(data =>{

    console.log('Promise resolved', data)

}).catch(err =>{

    console.log('Promise rejected', err)

}) 