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




hiphopSongs("hiphop/kali.json", (err, data) =>{

    console.log(data)

    
    hiphopSongs("hiphop/rubi.json", (err, data) => {

        console.log(data)


        hiphopSongs("hiphop/monaleo.json", (err, data) =>{

            console.log(data)
            
        })

    })
       
})

