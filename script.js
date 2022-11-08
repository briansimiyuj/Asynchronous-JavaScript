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


hiphopSongs('hiphop/kali.json').then(data =>{

    console.log('Promise resolved:', data)


    return hiphopSongs('hiphop/rubi.json')

}).then(data =>{

    console.log('Promise 1 resolved:', data)


    return hiphopSongs('hiphop/monaleo.json')

}).then(data =>{

    console.log('Promise 2 resolved:', data)

}).catch(err =>{          

    console.log('Promise rejected:', err)

}) 