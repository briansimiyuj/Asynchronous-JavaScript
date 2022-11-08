const hiphopSongs = async() =>{

    const response = await fetch('hiphop/monaleoo.json') 


    if (response.status !== 200) {
        
        throw new Error('Cannot fetch the data')

    }

    const data = await response.json()

    return data

}


hiphopSongs()

    .then(data => console.log('Resolved:', data))

    .catch(err => console.log('Rejected:', err.message))